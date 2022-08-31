export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getParentPageUrl(uri = "") {
            let output = uri.split("/")
            console.log(output)
            if (output.length === 2) {
                return "/"
            } else {
                output.pop()
                return output.join("/")
            }
        },
    },
}
