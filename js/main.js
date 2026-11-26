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

var LANGUAGES = ['es', 'en'];
var DEFAULT_LANGUAGE = 'es';
var LANGUAGE_STORAGE_KEY = 'cv-language';

// Returns the language saved from a previous visit, or the default one.
// localStorage can throw (private mode, blocked storage), so it is guarded.
function getSavedLanguage() {
    try {
        var saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (LANGUAGES.indexOf(saved) !== -1) {
            return saved;
        }
    } catch (e) {}
    return DEFAULT_LANGUAGE;
}

function saveLanguage(lng) {
    try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
    } catch (e) {}
}

// Parses a "yyyy-mm" string into { year, month } (month is 1-12).
function parseYearMonth(value) {
    var parts = value.split('-');
    return { year: Number(parts[0]), month: Number(parts[1]) };
}

// Fills every .job-dates element from its data-start / data-end ("yyyy-mm") attributes,
// e.g. "Junio 2022 - Abril 2025 (2 años 11 meses)". A missing data-end means a current job.
// Durations count both the start and end months, so Jan-Aug is 8 months.
function renderJobDates() {
    var monthNames = i18next.t('dates.monthNames', { returnObjects: true });
    var today = new Date();

    $('.job-dates').each(function () {
        var start = parseYearMonth($(this).attr('data-start'));
        var endAttr = $(this).attr('data-end');
        var end = endAttr ? parseYearMonth(endAttr) : { year: today.getFullYear(), month: today.getMonth() + 1 };

        var totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
        var years = Math.floor(totalMonths / 12);
        var months = totalMonths % 12;

        var duration = [];
        if (years > 0) duration.push(i18next.t('dates.year', { count: years }));
        if (months > 0) duration.push(i18next.t('dates.month', { count: months }));

        var startText = monthNames[start.month - 1] + ' ' + start.year;
        var endText = endAttr ? monthNames[end.month - 1] + ' ' + end.year : i18next.t('dates.present');

        $(this).find('.job-dates-text').text(startText + ' - ' + endText + ' (' + duration.join(' ') + ')');
    });
}

// Re-translates every [data-i18n] element and syncs the page with the current language.
function applyLanguage(lng) {
    $('html').attr('lang', lng);
    $('body').localize();
    renderJobDates();

    // Highlight the active toggle button.
    $('.lang-option').each(function () {
        var isActive = $(this).data('lng') === lng;
        $(this).toggleClass('active', isActive).attr('aria-pressed', isActive);
    });
}

// Switches the page language (called by the toggle buttons).
function setLanguage(lng) {
    i18next.changeLanguage(lng, function () {
        saveLanguage(lng);
        applyLanguage(lng);
    });
}

// Runs once the DOM is ready.
$(function () {
    var birthday = new Date(1992, 4, 20);
    var careerStart = new Date(2016, 0, 1);

    $('#cv-birthday').text(formatDate(birthday));
    // Texts with numbers are translated by i18next; the number is passed as {{count}}
    // through data-i18n-options, so i18next picks the singular/plural key.
    $('#cv-age').attr('data-i18n-options', JSON.stringify({ count: yearsSince(birthday) }));
    $('#cv-experience').attr('data-i18n-options', JSON.stringify({ count: yearsSince(careerStart) }));

    // Initialize i18next with the translations defined in js/translations.js.
    i18next.init({
        lng: getSavedLanguage(),
        fallbackLng: DEFAULT_LANGUAGE,  // used when a key is missing in the current language
        resources: translations
    }, function () {
        // Register the jQuery plugin: adds $(selector).localize()
        // useOptionsAttr: read interpolation values from data-i18n-options.
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        applyLanguage(i18next.language);
    });

    // Language toggle buttons.
    $('.lang-option').on('click', function () {
        setLanguage($(this).data('lng'));
    });
});
