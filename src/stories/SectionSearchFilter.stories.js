import SectionSearchFilter from "@/lib-components/SectionSearchFilter"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SECTION / Search Filter",
    component: SectionSearchFilter,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/visit/foo/bar/", component: SectionSearchFilter },
                    { path: "/about/foo/bar/", component: SectionSearchFilter },
                ],
            }
        ),
    ],
}

const mock = [
    {
        title: "Amenities",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Snkrs",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Panda",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Chicago",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Brazil 1x7 Germany",
        filterType: "location || departments || subjects ||categories",
    },
]

const mockBigger = [
    {
        title: "Amenities",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Snkrs",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Panda",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Chicago",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Brazil 1x7 Germany",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Jurassic Park",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "UCLA",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Garfield",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Scooby doo",
        filterType: "location || departments || subjects ||categories",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { mock }
    },
    components: { SectionSearchFilter },
    template: `
        <section-search-filter
            :filters="mock"
        />
    `,
})
export const WithMoreFilters = () => ({
    data() {
        return { mockBigger }
    },
    components: { SectionSearchFilter },
    template: `
        <section-search-filter
            :filters="mockBigger"
        />
    `,
})
