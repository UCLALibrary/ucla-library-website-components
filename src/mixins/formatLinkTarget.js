import isInternalLink from "@/mixins/isInternalLink"

const NEW_TAB = ["1", "_blank", "blank"]
const UNSPECIFIED = ["", null]

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
                NEW_TAB.includes(string) ||
                (UNSPECIFIED.includes(string) && !this.isInternalLink(url))
            ) {
                output = "_blank"
            } else {
                output = ""
            }

            return output
        },
    },
}
