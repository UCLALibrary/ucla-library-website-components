export default {
    /**
     * Takes a String, Removes HTML tags and truncates to a given parameter
     * @param {String, Number} Text/Summary & maximum length needed for the blurb
     * @returns {String} with no HTML tags
     */

    methods: {
        removeHtmlTruncate(str = "", maxlength = "") {
            // Remove HTML
            let stripHtml = str.replace(/(<([^>]+)>)/gi, "")
            let removeQuotes = stripHtml.replace(/"/gi, "")
            console.log("this is maxlength" + maxlength)
            if (str.length < maxlength || maxlength == "") {
                return removeQuotes
            } else {
                // Truncate
                let limitCharacter = removeQuotes.substring(0, maxlength)
                let words = limitCharacter.split(" ")

                return words.slice(0, -1).join(" ") + "..."
            }
        },
    },
}
