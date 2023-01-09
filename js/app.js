$(document).ready(function () {
    function main(ageSelector, birthdaySelector, experieceSelector) {
        var age = datesObject.getAge();
        var experienceDays = datesObject.getExperienceDays();
    
        $(ageSelector).text(age);
        $(birthdaySelector).text(datesObject.birthday.format("YYYY-MM-DD"));
        $(experieceSelector).text(experienceDays);
    }

    main('#cv-age', '#cv-birthday', '#experience-days');
});
