import Vue from "vue"

Vue.filter('truncateText', function (text, maxLength) {
    if (text?.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    } else {
        return text;
    }
});