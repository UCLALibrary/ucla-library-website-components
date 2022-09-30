import NavBreadcrumb from "@/lib-components/NavBreadcrumb"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
    component: NavBreadcrumb,
    decorators: [StoryRouter()],
}

// Variations of stories below
export const Default = () => ({
    components: { NavBreadcrumb },
    template: `<nav-breadcrumb title="jane-doe" to="/about/news" parent-title="parent"/>`,
})
