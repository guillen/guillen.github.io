window.datesObject = {
    birthday: moment([1992, 4, 20]),

    startWork: moment([2016, 7, 15]),

    diffBetween2dates: function (d1, d2, format) {
        return d2.diff(d1, format);
    },

    getExperienceDays: function () {
        var today = moment();
        return this.diffBetween2dates(this.startWork, today, 'years');
    },

    getAge: function () {
        var today = moment();
        return this.diffBetween2dates(this.birthday, today, 'years');
    },
};
