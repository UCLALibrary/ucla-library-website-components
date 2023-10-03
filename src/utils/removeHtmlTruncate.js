import _truncate from "lodash/truncate"
import _unescape from "lodash/unescape"

/**
 * Takes a String, Removes HTML tags and truncates to a given parameter
 * @param {String, Number} Text/Summary & maximum length needed for the blurb
 * @returns {String} with no HTML tags
 */

function removeHtmlTruncate(str = "", maxlength = Infinity) {
    if (str == null) {
        return str // don't try string method .replace
    }
    // Remove HTML
    const stripHtml = _unescape(
        str.replace(/(<([^>]+)>)/gi, "").replace(/"/gi, "")
    )

    return _truncate(stripHtml, {
        length: maxlength,
        omission: "…",
        separator: /\s/,
    })
}

export default removeHtmlTruncate
