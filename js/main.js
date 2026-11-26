// Returns the number of full years elapsed since the given date.
function yearsSince(date) {
    var today = new Date();
    var years = today.getFullYear() - date.getFullYear();
    var anniversaryPassed = today.getMonth() > date.getMonth() ||
        (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());
    if (!anniversaryPassed) {
        years--;
    }
    return years;
}

// Formats a date as dd/mm/yyyy.
function formatDate(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + date.getFullYear();
}

// Switches the page language and re-translates every [data-i18n] element.
// Usage (e.g. from the browser console for now): setLanguage('en')
function setLanguage(lng) {
    i18next.changeLanguage(lng, function () {
        $('html').attr('lang', lng);
        $('body').localize();
    });
}

// Runs once the DOM is ready.
$(function () {
    // Initialize i18next with the translations defined in js/translations.js.
    i18next.init({
        lng: 'es',            // default language
        fallbackLng: 'es',    // used when a key is missing in the current language
        resources: translations
    }, function () {
        // Register the jQuery plugin: adds $(selector).localize()
        jqueryI18next.init(i18next, $);
        $('body').localize();
    });

    var birthday = new Date(1992, 4, 20);
    var careerStart = new Date(2016, 0, 1);

    $('#cv-birthday').text(formatDate(birthday));
    $('#cv-age').text(yearsSince(birthday) + ' años');
    $('#cv-experience').text(yearsSince(careerStart));
});
