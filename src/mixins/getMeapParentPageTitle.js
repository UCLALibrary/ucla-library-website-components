export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getMeapParentPageTitle(uri = "") {
            let output = "Modern Endangered Archives Program"

            switch (true) {
                case uri.includes("/about/news/"):
                    output = "News"
                    break

                case uri.includes("/about/") &&
                    !uri.includes("/news/") &&
                    uri != "/about/":
                    output = "About"
                    break

                case uri.includes("/applicants/resources/"):
                    output = "Resources"
                    break

                case uri.includes("/applicants/"):
                    output = "For Applicants"
                    break

                case uri.includes("/projects/"):
                    output = "Funded Projects"
                    break
            }

            return output
        },
    },
}
