// Import mock api data
import * as API from "@/stories/mock-api.json"
import HeaderMainResponsive from "@/lib-components/HeaderMainResponsive"


// Storybook default settings
export default {
    title: "GLOBAL / Header Main Responsive",
    component: { HeaderMainResponsive },

}

const primaryItems = [
    { ...API.primaryNavlinks[0] },
    {
        ...API.primaryNavlinks[0],
        name: "Visit",
        url: "/visit/",
    },
    {
        ...API.primaryNavlinks[0],
        name: "About",
        url: "/about/",
    },
    { ...API.primaryNavlinks[3] },
]

const secondaryItems = [
    ...API.links,
    {
        ...API.links[0],
    },
]

const micrositePrimaryItems = [
    {
        id: "25356",
        name: "Who We Are",
        to: null,
        classes: "",
        target: "",
        children: [
            {
                id: "29029",
                name: "About the Program",
                to: "/about",
                classes: "",
                target: "",
            },
            {
                id: "29030",
                name: "Available Funding",
                to: "/available-funding",
                classes: null,
                target: "",
            },
            {
                id: "29031",
                name: "Takedown Notice",
                to: "/take-down-notice",
                classes: null,
                target: "",
            },
            {
                id: "29032",
                name: "Ethical/Collections Statement",
                to: null,
                classes: null,
                target: "",
            },
            {
                id: "29033",
                name: "News",
                to: "/about/news",
                classes: null,
                target: "",
            },
            {
                id: "29034",
                name: "Contact Us",
                to: "/",
                classes: null,
                target: "",
            },
        ],
    },
    {
        id: "25360",
        name: "For Applicants",
        to: null,
        classes: null,
        target: "",
        children: [
            {
                id: "29035",
                name: "How to Apply",
                to: "/applicants/how-to-apply",
                classes: null,
                target: "",
            },
            {
                id: "29036",
                name: "Applicant Resources",
                to: "/applicants/applicants-resources",
                classes: null,
                target: "",
            },
            {
                id: "29037",
                name: "Grantee Resources",
                to: "/applicants/grantee-resources",
                classes: null,
                target: "",
            },
            {
                id: "29038",
                name: "All Resources",
                to: "/applicants/resources",
                classes: null,
                target: "",
            },
        ],
    },
    {
        id: "25359",
        name: "Funded Projects",
        to: null,
        classes: "",
        target: "",
        children: [
            {
                id: "29460",
                name: "All Projects",
                to: "/projects",
                classes: "",
                target: "",
            },
        ],
    },
    {
        id: "25363",
        name: "Browse Collections",
        to: "https://digital.library.ucla.edu/catalog/ark:/21198/z13b7wpn",
        classes: "",
        target: "1",
        children: [],
    },
]

const secondaryMicroSiteItems = [
    {
        id: "25328",
        name: "Get Help With",
        to: "https://www.library.ucla.edu/use",
        classes: "",
        target: "1",
    },
    {
        id: "25329",
        name: "Visit",
        to: "https://www.library.ucla.edu/locations",
        classes: "",
        target: "1",
    },
    {
        id: "25352",
        name: "About",
        to: "https://www.library.ucla.edu/about-ucla-library",
        classes: "",
        target: "1",
    },
    {
        id: "25353",
        name: "Support Us",
        to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
        classes: "support-link",
        target: "1",
    },
]

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    computed: {
        parsedSecondaryItems() {
            // Restructuring item to support text key
            return this.secondaryItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    components: { HeaderMainResponsive },
    template: `<header-main-responsive :primary-nav="primaryItems"
        :secondary-nav="parsedSecondaryItems"
        current-path="/about/foo/bar"
     />`,
})

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            primaryItems,
            secondaryItems,
        }
    },
    components: { HeaderMainResponsive },
    computed: {
        parsedSecondaryItems() {
            // Restructuring item to support text key
            return this.secondaryItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `
        <header-main-responsive :primary-nav="primaryItems"
        :secondary-nav="parsedSecondaryItems"
        current-path="/about/foo/bar"
    />
    `,
})

// Variations of stories below
export const Microsite = () => ({
    data() {
        return {
            micrositePrimaryItems,
            secondaryMicroSiteItems,
        }
    },
    components: { HeaderMainResponsive },
    computed: {
        parsedSecondaryItems() {
            // Restructuring item to support text key
            return this.secondaryMicroSiteItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `
        <header-main-responsive :primary-nav="micrositePrimaryItems"
        :secondary-nav="parsedSecondaryItems"
        current-path="/about/foo/bar"
        title="Modern Endangered Archives Program"
        acronym="MEAP"
    />
    `,
})

export const WithControls = Template.bind({
    components: { HeaderMainResponsive },
})
WithControls.args = {
    primaryItems,
    secondaryItems,
}