import format from "date-fns/format"
export default {
    /**
     * Take two date strings, and return them in human readable date formats for Events
     *
     * @param {String} startDate
     * @param {String} endDate
     * @returns {String}
     */

    methods: {
        formatMonth(startDate = "") {
            return format(new Date(startDate), "MMM")
        },
    },
}
