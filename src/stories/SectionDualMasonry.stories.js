// Import mock api data
import SectionDualMasonry from "@/lib-components/SectionDualMasonry"
import * as API from "@/stories/mock-api.json"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Dual Masonry",
    component: SectionDualMasonry,
    decorators: [StoryRouter()],
}

const items = API.bricks

export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    components: { SectionDualMasonry },
    template: `
        <section-dual-masonry
            :items="items"
            to="/visit/foo"
        />
    `,
})
