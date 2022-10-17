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
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock0" event-id="9383207"
        />
    `,
})

export const DefaultType2 = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock1" event-id="9383207"
        />
    `,
})

export const CLICCInstructionalUseForm = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock2" event-id="9383207"
        />
    `,
})

export const TestFormTerryAllen = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock3" event-id="9383207"
        />
    `,
})

export const TestFormFTVA = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock4" event-id="9383207"
        />
    `,
})

export const TextBallot = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock5" event-id="9383207"
        />
    `,
})

export const UCLALibraryEventRegistration = () => ({
    data() {
        return { BlockFormData }
    },
    components: { BlockForm },
    template: `
        <block-form
            :blockFormData="BlockFormData.mock6" event-id="9383207"
        />
    `,
})
