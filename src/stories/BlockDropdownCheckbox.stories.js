// Storybook default settings
import BlockDropdownCheckbox from "@/lib-components/BlockDropdownCheckbox"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BLOCK / Dropdown Checkbox",
    component: BlockDropdownCheckbox,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return {}
    },
    components: { BlockDropdownCheckbox },
    template: `
        <block-dropdown-checkbox
        />
    `,
})
