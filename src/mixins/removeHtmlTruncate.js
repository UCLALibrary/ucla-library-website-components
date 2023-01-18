import _truncate from "lodash/truncate"
import _unescape from "lodash/unescape"

export default {
    /**
     * Takes a String, Removes HTML tags and truncates to a given parameter
     * @param {String, Number} Text/Summary & maximum length needed for the blurb
     * @returns {String} with no HTML tags
     */

    methods: {
        removeHtmlTruncate(str = "", maxlength = Infinity) {
            if (str == "") {
                return str
            }
            // Remove HTML
            let stripHtml = _unescape(
                str.replace(/(<([^>]+)>)/gi, "").replace(/"/gi, "")
            )

            return _truncate(stripHtml, {
                length: maxlength,
                omission: "…",
                separator: /\s/,
            })
        },
    },
}
