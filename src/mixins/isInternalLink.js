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
                // // TODO: Add support for non-router links to be local based on domain name
                // // This is disabled for now because it'll need to be customizable for microsites
                // (uri.includes("library.ucla.edu") &&
                //     !uri.includes("mailto:")) ||
                String(uri).indexOf("/") === 0 ||
                !uri.includes(".")
            ) {
                output = true
            }

            return output
        },
    },
}
