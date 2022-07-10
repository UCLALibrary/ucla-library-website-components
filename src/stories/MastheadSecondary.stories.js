import { MastheadSecondary } from "../lib-components"
import { SearchHome } from "../lib-components"
import StoryRouter from "storybook-vue-router"

export default {
    component: MastheadSecondary,
    title: "Masthead / Secondary",
    decorators: [StoryRouter()],
}

// TODO: search-home was originally search-generic, but we haven't added it to this repo yet. I haven't added it here because the slot in MastheadSecondary doesn't even get used, so it never renders, but I think at some point we'll have to change back to search-generic and actually get it to render in the component?
export const Default = () => ({
    components: { MastheadSecondary, SearchHome },
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
        >
            <search-home actionURL="/search" />
        </masthead-secondary>
    `,
})

// TODO: see TODO for Default story
export const LongText = () => ({
    components: { MastheadSecondary, SearchHome },
    template: `
        <masthead-secondary
            title="Research"
            text="Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey."
        >
            <search-home actionURL="/search" />
        </masthead-secondary
    `,
})
export const NoSearch = () => ({
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects.
        "/>
    `,
})
export const NoMolecule = () => ({
    components: { MastheadSecondary },
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
            :has-molecules="false"
        />
    `,
})
