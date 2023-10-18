// Storybook default settings
import { useGlobalStore } from "@/stores/GlobalStore"
import HeaderSmart from "@/lib-components/HeaderSmart"



export default {
    title: "GLOBAL / Header Smart",
    component: HeaderSmart,
}

const mock = {
    secondary: [
        {
            id: "843",
            name: "Locations & Hours",
            to: "/locations",
            classes: "",
            target: "",
        },
        {
            id: "844",
            name: "Ask a Librarian",
            to: "/research-teaching-support/research-help",
            classes: null,
            target: "",
        },
        {
            id: "845",
            name: "My Account",
            to: "https://catalog.library.ucla.edu/vwebv/login;jsessionid=9D14C6523970C30728D965F6BD6B914D",
            classes: null,
            target: "1",
        },
    ],
    primary: [
        {
            id: "835",
            name: "Get help with...",
            to: null,
            classes: "",
            target: "",
            children: [
                {
                    id: "833",
                    name: "Borrowing Books and Equipment",
                    to: "/help/services-resources/borrowing-books-and-equipment",
                    classes: "",
                    target: "",
                },
                {
                    id: "840",
                    name: "All Services & Resources",
                    to: "/help/services-resources",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "834",
            name: "Visit",
            to: "/events-exhibits",
            classes: null,
            target: "",
            children: [
                {
                    id: "841",
                    name: "Locations & Hours",
                    to: "/visit/locations",
                    classes: "",
                    target: "",
                },
                {
                    id: "837",
                    name: "Events & Exhibitions",
                    to: "/visit/events-exhibits",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "836",
            name: "About",
            to: null,
            classes: null,
            target: "",
            children: [
                {
                    id: "842",
                    name: "Library News",
                    to: "/about/news",
                    classes: "",
                    target: "",
                },
                {
                    id: "838",
                    name: "Staff Directory",
                    to: "/about/staff",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "839",
            name: "Support us",
            to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
            classes: null,
            target: "1",
            children: [],
        },
    ],
}

const mockMicrosite = {
    secondary: [
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
    ],
    primary: [
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
    ],
}

// Variations of stories below
export const Default = () => ({
    created() {
        const globalStore = useGlobalStore()
        globalStore.header.primary = mock.primary
        globalStore.header.secondary = mock.secondary
        globalStore.winWidth = 824
    },

    components: { HeaderSmart },


    template: `<header-smart />`,
})

// Variations of stories below
export const DefaultMicrosite = () => ({
    created() {
        const globalStore = useGlobalStore()
        globalStore.header.primary = mockMicrosite.primary
        globalStore.header.secondary = mockMicrosite.secondary
        globalStore.winWidth = 824
    },

    components: { HeaderSmart },


    template: `<header-smart title="Modern Endangered Archives Program"/>`,
})

export const DesktopWindowWidth = () => ({
    created() {
        const globalStore = useGlobalStore()
        globalStore.header.primary = mock.primary
        globalStore.header.secondary = mock.secondary
        globalStore.winWidth = 1200
    },
    components: { HeaderSmart },


    template: `<header-smart />`,
})

export const DesktopWindowWidthMicrosite = () => ({
    created() {
        const globalStore = useGlobalStore()
        globalStore.header.primary = mockMicrosite.primary
        globalStore.header.secondary = mockMicrosite.secondary
        globalStore.winWidth = 1200
    },

    components: { HeaderSmart },


    template: `<header-smart 
            title="Modern Endangered Archives Program" />`,
})