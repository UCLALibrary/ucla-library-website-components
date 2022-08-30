import isInternalLink from "@/mixins/isInternalLink"

export default {
    /**
     * Mainly used to convert the Craft CMS "newWindow: 1" field to a "_blank" string
     *
     * @param {String} string A string that is used for the a href attribute
     * @returns {String} Either empty string or a "_blank"
     */

    mixins: [isInternalLink],
    methods: {
        formatLinkTarget(string = "", url = "") {
            let output = ""

            if (
                string == "_blank" ||
                string == "1" ||
                (string == null && !this.isInternalLink(url)) ||
                (string == "" && !this.isInternalLink(url))
            ) {
                output = "_blank"
            } else {
                output = ""
            }

            return output
        },
    },
}
