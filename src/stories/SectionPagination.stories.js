import SectionPagination from "@/lib-components/SectionPagination"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Pagination",
    component: SectionPagination,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    components: { SectionPagination },
    template: `<section-pagination previousTo="/page/1" nextTo="/page/3" />`,
})

export const FirstPage = () => ({
    components: { SectionPagination },
    template: `<section-pagination nextTo="/page/1" />`,
})

export const LastPage = () => ({
    components: { SectionPagination },
    template: `<section-pagination previousTo="/page/10" />`,
})