import BlockCardWithIllustration from "@/lib-components/BlockCardWithIllustration"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BLOCK / Card With Illustration",
    component: BlockCardWithIllustration,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/", component: BlockCardWithIllustration },
                    {
                        path: "/help/foo/bar/",
                        component: BlockCardWithIllustration,
                    },
                    {
                        path: "/visit/foo/bar/",
                        component: BlockCardWithIllustration,
                    },
                ],
            }
        ),
    ],
}

const mock = {
    to: "/help/foo/bar/",
    title: "Quisque Volutpat",
    text: "",
}

const mock2 = {
    to: "/visit/foo/bar/",
    title: "Quisque Volutpat",
    text: "<p>Need help figuring out what topic you want to explore for your project? Having trouble turning a general idea into something more specific? Learn how to develop a research question through synchronous and asynchronous events and resources.</p>",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            :to="to"
            :title="title"
            :text="text"
        />
    `,
})

export const Visit = () => ({
    data() {
        return {
            ...mock2,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-find-space"
            to="/visit/foo/bar"
            title="The Enchantment Under The Sea - Our First Date"
            :text="text"
        />
    `,
})

export const LongTextAbout = () => ({
    data() {
        return {
            ...mock2,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-digitized-resources"
            to="/about/foo/bar"
            title="The Enchantment Under The Sea"
            text="Under the Sea is the newest, fun, unique, exciting, most talked about children's entertainment center. Beautiful floor-to-ceiling murals depict the world under the sea, with pirates, mermaids, and other sea life. As different as all kids are, they all enjoy one thing: FUN, FUN, and tons of FUN!
            "
        />
    `,
})

export const DatabasesVisit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-databases"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const RemoteAccessHelp = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name= "illustration-remote-access"
            to="/help/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const ResearchVisit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-research"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const TeachingAbout = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="/about/foo/bar"
            :title="title"
            :text="text"
            :is-horizontal="false"
        />
    `,
})

export const ExternalLink = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="https://guides.library.illinois.edu/openrefine/joiningprojects"
            :title="title"
            :text="text"
            :is-horizontal="false"
        />
    `,
})

export const HorizontalCardRemoteAccess = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-remote-access"
            to="/about/foo/bar"
            category="Malesuada Vestibulum"
            :title="title"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet."
            :is-horizontal="true"
        />
    `,
})

export const HorizontalCardTeaching = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="/about/foo/bar"
            category="Malesuada"
            title="The Enchantment Under The Sea Dance"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper."
            :is-horizontal="true"
        />
    `,
})

export const HorizontalCardResearch = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-research"
            to="/about/foo/bar"
            category="Malesuada"
            :title="title"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date. It was the night of that terrible thunderstorm, remember George? Your father kissed me for the very first time on that dance floor. It was then I realized I was going to spend the rest of my life with him."
            :is-horizontal="true"
        />
    `,
})

export const HorizontalCardShortDigitizedResources = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCardWithIllustration },
    template: `
        <block-card-with-illustration
            icon-name="illustration-digitized-resources"
            to="/about/foo/bar"
            category="Malesuada"
            :title="title"
            text="<p>Need help figuring out what topic you want to explore for your project?</p>"
            :is-horizontal="true"
        />
    `,
})
