// Import mock api data
import * as API from "@/stories/mock-api.json"
import SectionPostSmall from "@/lib-components/SectionPostSmall"

// Storybook default settings
export default {
    title: "Section / Post Small",
    component: SectionPostSmall,
}

const items = [
    {
        ...API.article,
        image: API.image,
    },
    {
        ...API.article,
        image: API.image,
        to: "/about/foo/bar",
    },
    {
        ...API.article,
        image: API.image,
        to: "/help/foo/bar",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    components: { SectionPostSmall },
    computed: {
        parsedItems() {
            // Restructuring item to support text key
            return this.items
        },
    },
    template: `<section-post-small :items="parsedItems" to="/news/"/>`,
})
