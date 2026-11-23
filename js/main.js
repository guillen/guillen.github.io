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

// Runs once the DOM is ready.
$(function () {
    var birthday = new Date(1992, 4, 20);
    var careerStart = new Date(2016, 0, 1);

    $('#cv-birthday').text(formatDate(birthday));
    $('#cv-age').text(yearsSince(birthday) + ' años');
    $('#cv-experience').text(yearsSince(careerStart));
});
