export default {
    /**
     * Take a contentType and figure out what should be the button prompt
     * @param {String, Number} Text/Summary & maximum length needed for the blurb
     * @returns {String} with no HTML tags
     */

    methods: {
        removeHtmlTruncate(str, maxlength) {
            // Remove HTML
            let stripHtml = str.replace(/(<([^>]+)>)/gi, "")
            let removeQuotes = stripHtml.replace(/"/gi, "")

            // Truncate
            let limitCharacter = removeQuotes.substring(0, maxlength)
            let words = limitCharacter.split(" ")

            //return words.slice(0, -1).join(" ")
            return words.slice(0, -1).join(" ") + " ..."
        },
    },
}
