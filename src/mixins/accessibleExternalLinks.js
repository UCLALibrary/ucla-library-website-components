export default {
    /**
     * This is for accessiblity for screen readers
     * for the External Links in Rich Text
     * The method takes a URI and determine if it is an internal link by finding the target _blank
     * It returns the span tag after the link text, inside the <a> tag
     * ie: <a target="_blank">Blah Blah Text<span class="visually-hidden">(opens in a new tab)</span></a>
     * @param {String} text
     * @returns {String} text with span tag
     * '<a target="_blank">Afternoon delight.<span class="visually-hidden">(opens in a new tab)</span> </a>'
     */

    methods: {
        accessibleExternalLinks(text = "") {
            if (text == null) {
                return text // don't try string method .replace
            }

            let regex =
                /<a\s+(?:[^>]*?\s+)?target=(["_blank'])(.*?)\1*>(.*?)<\/a>/g

            return text.replace(regex, function (match) {
                let xmatch = match.replace("</a>", "")
                return (
                    xmatch +
                    '<span class="visually-hidden">(opens in a new tab)</span></a>'
                )
            })
        },
    },
}
