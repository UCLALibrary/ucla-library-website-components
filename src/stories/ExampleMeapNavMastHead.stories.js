import Vue  from "vue-demi"
import Vuex from "vuex"
import { ExampleMeapNavMastHead } from "../lib-components"
import StoryRouter from "storybook-vue-router"

Vue.use(Vuex)

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

export default {
    component: ExampleMeapNavMastHead,
    title: "Global / Sample Nav Masthead",
    decorators: [StoryRouter()],
}

// TODO: search-home was originally search-generic, but we haven't added it to this repo yet. I haven't added it here because the slot in MastheadSecondary doesn't even get used, so it never renders, but I think at some point we'll have to change back to search-generic and actually get it to render in the component?
export const Default = () => ({
    store: new Vuex.Store({
        state: {
            header: {
                primary: mockMicrosite.primary,
                secondary: mockMicrosite.secondary,
            },
            winWidth: 1200,
        },
    }),
    data() {
        return {
            ...mockMicrosite,
        }
    },
    components: { ExampleMeapNavMastHead },
    template: `
        <ExampleMeapNavMastHead />
    `,
})
