// Import mock api data
import * as API from "@/stories/mock-api.json"
import NavSecondary from "@/lib-components/NavSecondary"


// Storybook default settings
export default {
    title: "NAV / Secondary",
    component: NavSecondary,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items: [
                {
                    id: "843",
                    name: "Locations & Hours",
                    to: "/locations",
                    classes: "",
                },
                {
                    id: "844",
                    name: "Ask a Librarian",
                    to: "https://external.url/research-teaching-support/research-help",
                    classes: null,
                },
                {
                    id: "25315",
                    name: "Support Us",
                    to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
                    classes: "support-link",
                    target: "0",
                },
                {
                    id: "845",
                    name: "My Account",
                    to: "https://search.library.ucla.edu/discovery/login?vid=01UCS_LAL:UCLA",
                    classes: "account-button",
                    target: "1",
                },
            ],
        }
    },
    components: { NavSecondary },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `<nav-secondary :items="parsedItems"/>`,
})

export const Microsite = () => ({
    data() {
        return {
            items: [
                {
                    id: "25328",
                    name: "Get Help With",
                    to: "http://dev-uclalib-craft.nitro/services-and-resources",
                    classes: "",
                    target: "",
                },
                {
                    id: "25329",
                    name: "Visit",
                    to: "http://dev-uclalib-craft.nitro/locations-and-hours",
                    classes: "",
                    target: "",
                },
                {
                    id: "25352",
                    name: "About",
                    to: "http://dev-uclalib-craft.nitro/about-the-ucla-libraries",
                    classes: "",
                    target: "",
                },
                {
                    id: "25353",
                    name: "Support Us",
                    to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
                    classes: "support-link",
                    target: "1",
                },
            ],
        }
    },
    components: { NavSecondary },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `<nav-secondary :items="parsedItems" isMicrosite="true" />`,
})