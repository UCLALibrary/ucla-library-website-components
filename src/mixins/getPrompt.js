export default {
    /**
     * Take a contentType and figure out what should be the button prompt
     * @param {String} contentType
     * @returns {String}
     */

    methods: {
        getPrompt(contentType = "") {
            let output = ""

            switch (true) {
                case contentType.includes("article"):
                    output = "Read more"
                    break

                case contentType.includes("project"):
                    output = "View project"
                    break

                case contentType.includes("event"):
                    output = "View event"
                    break
                case contentType.includes("exhibition"):
                    output = "View exhibition"
                    break
                case contentType.includes("collection"):
                    output = "View collection"
                    break
            }

            return output
        },
    },
}
