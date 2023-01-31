export default {
    /**
     * Take a text and strip out what "test-craft.library.ucla.edu or craft.library.ucla.edu or stage-craft.library.ucla.edu" from redactor text
     * @param {String} text
     * @returns {String}
     */

    methods: {
        stripCraftURLFromText(text = "") {
            if (text == null) {
                return text // don't try string method .replace
            }
            if (text.indexOf("https://test-craft.library.ucla.edu") !== -1)
                return text.replaceAll(
                    "https://test-craft.library.ucla.edu",
                    ""
                )
            else if (
                text.indexOf("https://stage-craft.library.ucla.edu") !== -1
            )
                return text.replaceAll(
                    "https://stage-craft.library.ucla.edu",
                    ""
                )
            else return text.replaceAll("https://craft.library.ucla.edu", "")
        },
    },
}
