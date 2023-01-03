export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        stripMeapFromURI(uri = "") {
            if (uri == null) {
                return uri // don't try string method .replace
            }
            return uri.replace("meap/", "")
        },
    },
}
