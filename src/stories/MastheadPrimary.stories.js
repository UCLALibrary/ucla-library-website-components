import MastheadPrimary from "@/lib-components/MastheadPrimary"

// Storybook default settings
export default {
    title: "MASTHEAD / Primary",
    component: MastheadPrimary,
}
const mock = {
    linkItems: [
        {
            text: "Course Reserves",
            url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
            target: "_blank",
        },
        {
            text: "UCLA Research Guides",
            url: "https://guides.library.ucla.edu/",
            target: "",
        },
        {
            text: "Databases A-Z",
            url: "https://guides.library.ucla.edu/az.php",
            target: "_blank",
        },
    ],
    advancedSearchLink: {
        text: "Advanced Search",
        url: "https://www.library.ucla.edu/search",
        target: "_blank",
    },
}
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `<masthead-primary :link-items="linkItems" :advanced-search-link="advancedSearchLink"/>`,
    components: { MastheadPrimary },
})
