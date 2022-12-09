// Storybook default settings
import SingleCheckbox from "@/lib-components/SingleCheckbox"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SEARCH / SingleCheckbox",
    component: SingleCheckbox,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return {}
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox
        />
    `,
})
