export default {
    /**
     * Take a URI and figure out what "section" of the site it is pointing too
     * @param {String} uri
     * @returns {String}
     */

    methods: {
        getParentPageTitle(uri = "") {
            let output = "Modern Endangered Archives Program"

            switch (true) {
                case uri.includes("/about/") &&
                    uri.includes("/news/") &&
                    uri.includes("meap"):
                    output = "News"
                    break

                case uri.includes("/about/") &&
                    !uri.includes("/news/") &&
                    uri.includes("meap"):
                    output = "About"
                    break

                case uri.includes("/about/") && uri.includes("/news/"):
                    output = "Library News"
                    break

                case uri.includes("/about/") && uri.includes("/staff/"):
                    output = "Staff Directory"
                    break

                case uri.includes("/locations/"):
                    output = "Locations"
                    break
                case uri.includes("/events-exhibits/"):
                    output = "Events & Exhibits"
                    break

                case uri.includes("/help/"):
                case uri.includes("/services-resources"):
                    output = "Services & Resources"
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
