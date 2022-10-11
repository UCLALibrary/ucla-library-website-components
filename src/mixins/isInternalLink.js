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
                String(uri).indexOf("/") === 0 ||
                (!uri.includes(".") && uri.length !== 0)
            ) {
                output = true
            }

            return output
        },
    },
}
