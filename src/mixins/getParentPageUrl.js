export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * If output = ["", "page"] then the parent page is the homepage
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getParentPageUrl(uri = "") {
            let output = uri.split("/")
            if (output.length === 2) {
                return "/"
            } else {
                output.pop()
                return output.join("/")
            }
        },
    },
}
