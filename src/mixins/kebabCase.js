export default {
    /**
     * Mainly used to convert SectionTitles to kebab case to make them anchor tags
     *
     * @param {String} string A string (Services & Resources)
     * @returns {String} The string as kebab case (services-resources)
     */

    methods: {
        kebabCase(string) {
            let stringWithNoSpecialChars = string
                .replace("&", "")
                .replace(/\s+/g, " ")
                .trim()
            return stringWithNoSpecialChars.toLowerCase().replace(/ /g, "-")
        },
    },
}
