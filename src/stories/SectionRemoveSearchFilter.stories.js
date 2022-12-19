import SectionRemoveSearchFilter from "@/lib-components/SectionRemoveSearchFilter"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SEARCH / Section Remove Search Filter",
    component: SectionRemoveSearchFilter,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/visit/foo/bar/",
                        component: SectionRemoveSearchFilter,
                    },
                    {
                        path: "/about/foo/bar/",
                        component: SectionRemoveSearchFilter,
                    },
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
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mock"
        />
    `,
})
export const WithMoreFilters = () => ({
    data() {
        return { mockBigger }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mockBigger"
        />
    `,
})
