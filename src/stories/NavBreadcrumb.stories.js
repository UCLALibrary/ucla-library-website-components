import NavBreadcrumb from "@/lib-components/NavBreadcrumb"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
    component: NavBreadcrumb,
    decorators: [StoryRouter()],
}

const mock = {
    title: "jane-doe",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { NavBreadcrumb },
    template: `<nav-breadcrumb :title="title"/>`,
})
