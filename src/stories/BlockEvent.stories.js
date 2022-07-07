// Storybook default settings
import BlockEvent from "@/lib-components/BlockEvent"
import StoryRouter from "storybook-vue-router"

// Import mock api data
import * as API from "@/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Event",
    component: BlockEvent,
    decorators: [StoryRouter()],
}

export const ShortText = () => ({
    data() {
        return {
            item: { ...API.bricks[0] },
        }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            :to="item.to"
        />
    `,
})

export const LongText = () => ({
    data() {
        return {
            item: { ...API.bricks[1] },
        }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            :to="item.to"
        />
    `,
})

export const Visit = () => ({
    data() {
        return {
            item: { ...API.bricks[1] },
        }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/visit/foo/bar/"
        />
    `,
})

export const About = () => ({
    data() {
        return {
            item: { ...API.bricks[1] },
        }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/about/foo/bar/"
        />
    `,
})

export const Help = () => ({
    data() {
        return {
            item: { ...API.bricks[1] },
        }
    },
    components: { BlockEvent },
    template: `
        <block-event
            :category="item.category"
            :title="item.title"
            :prompt="item.prompt"
            :dates="item.dates"
            to="/help/foo/bar/"
        />
    `,
})
