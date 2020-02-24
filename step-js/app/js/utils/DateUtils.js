const DateUtils = {
    getDateAsString: function () {
        const date = new Date();
        return "" + date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    }
};

export default DateUtils;

