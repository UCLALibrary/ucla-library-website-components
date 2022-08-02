export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getSectionName(uri = "") {
            let output = "default"

            switch (true) {
                case uri.includes("/help/"):
                case uri.includes("/projects/"):
                    output = "help"
                    break

                case uri.includes("/about/"):
                case uri.includes("/impact/"):
                case uri.includes("/applicants/"):
                    output = "about"
                    break

                case uri.includes("/visit/"):
                case uri.includes("/events-exhibits/"):
                case uri.includes("/who-we-are/"):
                    output = "visit"
                    break
            }

            return output
        },
    },
}
