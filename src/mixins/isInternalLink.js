export default {
    /**
     * Take a URI and determine if it is an internal link
     * @param {String} uri
     * @returns {Boolean}
     */

    methods: {
        isInternalLink(uri = "") {
            let output = false

            if (
                uri == null ||
                (uri.includes("library.ucla.edu") &&
                    !uri.includes("mailto:")) ||
                String(uri).indexOf("/") === 0 ||
                !uri.includes(".")
            ) {
                output = true
            }

            return output
        },
    },
}
