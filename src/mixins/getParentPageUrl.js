export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * If output = ["", "page"] then the parent page is the homepage
     * If output = ["", "page", ""] then pop the last empty string off
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getParentPageUrl(uri = "") {
            let output = uri.split("/")
            if (output[output.length - 1] === "") {
                output.pop()
                if (output.length === 2) {
                    return "/"
                } else {
                    output.pop()
                    return output.join("/")
                }
            } else {
                if (output.length === 2) {
                    return "/"
                } else {
                    output.pop()
                    return output.join("/")
                }
            }
        },
    },
}
