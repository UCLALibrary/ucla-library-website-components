// Storybook default settings
import SectionCardsWithIllustrations from "@/lib-components/SectionCardsWithIllustrations"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SECTION / Cards With Illustrations",
    component: SectionCardsWithIllustrations,
    decorators: [StoryRouter()],
}

const itemsVertical = [
    {
        iconName: "illustration-book-binding",
        to: "/help/foo/bar/",
        title: "Lacus Luctus",
        text: "There are lots of things to climb on and huge space to run around. There's a large sitting area for us to bring our snacks/lunch or for me to read a book while they play well, at least for a few minutes until they come up and want to interact with me again. :) The place has been very clean every time we've been there.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-find-space",
        to: "/visit/foo/baz/",
        title: "Ultrices Enim",
        text: "Under the Sea is the newest, fun, unique, exciting, most talked about children's entertainment center. Beautiful floor-to-ceiling murals depict the world under the sea, with pirates, mermaids, and other sea life. As different as all kids are, they all enjoy one thing: fun,fun, and tons of fun!",
        isHorizontal: false,
    },
    {
        iconName: "illustration-digitized-resources",
        to: "/about/foo/fred/",
        title: "Egestas et Augue Justo eu Magna Luctus",
        text: "Unleash your child's imagination in a world Under the Sea. Through play, children develop the self esteem, coordination, and social skills necessary to grow. Children will bounce in the Moon Bouncer, go down the Turbo Slide, crawl through the climbing structure, or climb up to the top of a sea castle.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-databases",
        to: "/about/foo/thud/",
        title: "Proin Sodales",
        text: "Under the Sea is the newest, fun, unique, exciting, most talked about children's entertainment center. Beautiful floor-to-ceiling murals depict the world under the sea, with pirates, mermaids, and other sea life. As different as all kids are, they all enjoy one thing: fun, fun and tons of fun!",
        isHorizontal: false,
    },
    {
        iconName: "illustration-remote-access",
        to: "/visit/foo/qux/",
        title: "Taciti sociosqu",
        text: "Our Live Characters Make each event an unforgettable celebration. Each performance is unique, and includes music, games, magic, and interaction with the guests.",
        isHorizontal: false,
    },
]

export const Default = () => ({
    data() {
        return {
            itemsVertical,
        }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsVertical"
            sectionTitle="Get Help With"
            sectionSummary="Our facility is equipped to accommodate children of various ages. For the younger ones, we offer a soft Baby Corner, a toddler swing, a slide, a carousel, and other educational play equipment."
            to="/help/foo/bar"
            :isHorizontal="false"
            button-text="See More"
        />
    `,
})

const itemsHorizontal = [
    {
        iconName: "illustration-book-binding",
        category: "Malvina",
        to: "/help/foo/bar/",
        title: "Lacus Luctus",
        text: "There are lots of things to climb on and huge space to run around. There's a large sitting area for us to bring our snacks/lunch or for me to read a book while they play well, at least for a few minutes until they come up and want to interact with me again. :) The place has been very clean every time we've been there.",
    },
    {
        iconName: "illustration-find-space",
        category: "Malvina",
        to: "/visit/foo/baz/",
        title: "Ultrices Enim",
        text: "There are lots of things to climb on and huge space to run around. There's a large sitting area for us to bring our snacks/lunch or for me to read a book while they play well, at least for a few minutes until they come up and want to interact with me again. :) The place has been very clean every time we've been there.",
    },
    {
        iconName: "illustration-digitized-resources",
        category: "Malvina",
        to: "/about/foo/fred/",
        title: "Egestas et Augue",
        text: "Under the Sea is the newest, fun, unique, exciting, most talked about children's entertainment center. Beautiful floor-to-ceiling murals depict the world under the sea, with pirates, mermaids, and other sea life. As different as all kids are, they all enjoy one thing: fun, fun and tons of fun!",
    },
    {
        iconName: "illustration-databases",
        category: "Malvina",
        to: "/about/foo/thud/",
        title: "Proin Sodales",
        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
    },
    {
        iconName: "illustration-remote-access",
        category: "Malvina",
        to: "/visit/foo/qux/",
        title: "Taciti sociosqu",
        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
    },
]

export const NoText = () => ({
    data() {
        return {
            itemsVertical,
        }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsVertical"
            title="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
})

export const OneCard = () => ({
    data() {
        return {
            itemsVertical,
        }
    },
    components: { SectionCardsWithIllustrations },
    computed: {
        parsedItems() {
            return [{ ...this.itemsVertical[0] }]
        },
    },
    template: `
        <section-cards-with-illustrations
            :items="parsedItems"
            sectionTitle="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
})

export const TwoCards = () => ({
    data() {
        return {
            itemsVertical,
        }
    },
    components: { SectionCardsWithIllustrations },
    computed: {
        parsedItems() {
            return [{ ...this.itemsVertical[0] }, { ...this.itemsVertical[1] }]
        },
    },
    template: `
        <section-cards-with-illustrations
            :items="parsedItems"
            sectionTitle="Get Help With"
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
})

export const Horizontal = () => ({
    data() {
        return {
            itemsHorizontal,
        }
    },
    components: { SectionCardsWithIllustrations },
    template: `
        <section-cards-with-illustrations
            :items="itemsHorizontal"
            :isHorizontal="true"
        />
    `,
})
