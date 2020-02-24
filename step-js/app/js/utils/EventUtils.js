const EventUtils = {
    isNotEnter: function (event) {
        return event.key !== "Enter";
    },

    isEnter: function (event) {
        return event.key === "Enter";
    },

};

export default EventUtils;


