export default {
    /**
     * Take a URI and determine if it is an internal link
     * @param {String} uri
     * @returns {Boolean}
     */

    methods: {
        isInternalLink(uri = "") {
            let output = false

            switch (true) {
                case uri.includes("library.ucla.edu") &&
                    !uri.includes("mailto:"):
                case String(uri).indexOf("/") === 0:
                    output = true
                    break
            }

            return output
        },
    },
}
