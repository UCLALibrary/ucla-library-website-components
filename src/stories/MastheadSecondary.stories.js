import { MastheadSecondary } from "../lib-components"
import { SearchHome } from "../lib-components"
import StoryRouter from "storybook-vue-router"
import * as API from "@/stories/mock-api.json"

export default {
    component: MastheadSecondary,
    title: "Masthead / Secondary",
    decorators: [StoryRouter()],
}

// TODO: search-home was originally search-generic, but we haven't added it to this repo yet. I haven't added it here because the slot in MastheadSecondary doesn't even get used, so it never renders, but I think at some point we'll have to change back to search-generic and actually get it to render in the component?

const mock = {
    title: "Find and Reserve a Space",
    summary:
        "<p>Browse on-campus spaces for study, meetings, and group projects.</p>",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { MastheadSecondary, SearchHome },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
        >
            <search-home actionURL="/search" />
        </masthead-secondary>
    `,
})

const mock2 = {
    title: "Find and Reserve a Space",
    summary:
        "<p>Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey.</p> <h3>Learn how to</h3><ul><li>Find the Cafeteria</li><li>Create a Study Group</li><li>Navigate the Libraries</li></ul>",
}

export const LongText = () => ({
    data() {
        return { ...mock2 }
    },
    components: { MastheadSecondary, SearchHome },
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
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
            text="<p>Browse on-campus spaces for study, meetings, and group projects.</p>
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

export const MeapTheme = () => ({
    components: { MastheadSecondary },
    data: () => ({
        heroImage: {
            src: "https://static.library.ucla.edu/craftassetsprod/MEAP/MEAP-images/_2560xAUTO_crop_center-center_none/meap-homepage-header.jpeg",
            sizes: "100vw",
            alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            title: "Lorem ipsum",
            caption: "Lorem ipsum",
            height: 338,
            width: 1440,
        },
        title: "Modern Endangered Archives Program",
        summary:
            "<p>Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about the available grant opportunities.</p>",
    }),
    template: `
        <masthead-secondary
            :title="title"
            :text="summary"
            theme="meap"
            :hero-image="heroImage"
        />
    `,
})
