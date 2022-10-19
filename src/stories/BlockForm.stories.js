// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockForm from "@/lib-components/BlockForm"
import StoryRouter from "storybook-vue-router"
import BlockFormData from "@/stories/mock/BlockFormData.json"

// Storybook default settings
export default {
    title: "BLOCK / Form",
    component: BlockForm,
    decorators: [StoryRouter()],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock0,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const DefaultType2 = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock1,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const CLICCInstructionalUseForm = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock2,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const TestFormTerryAllen = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock3,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const TestFormFTVA = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock4,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const TextBallot = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock5,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})

export const UCLALibraryEventRegistration = () => ({
    data() {
        return { BlockFormData }
    },
    provide: {
        // explicitly provide a computed property
        eventId: "9383207",
        blockFormData: BlockFormData.mock6,
    },
    components: { BlockForm },
    template: `
        <block-form />
    `,
})
