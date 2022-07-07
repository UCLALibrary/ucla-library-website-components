// Import mock api data
import * as API from "@/stories/mock-api.json"
import NavSecondary from "@/lib-components/NavSecondary"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "NAV / Secondary",
    component: NavSecondary,
    decorators: [StoryRouter()],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items: [...API.links, { ...API.links[0] }],
        }
    },
    components: { NavSecondary },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
    },
    template: `<nav-secondary :items="parsedItems"/>`,
})
