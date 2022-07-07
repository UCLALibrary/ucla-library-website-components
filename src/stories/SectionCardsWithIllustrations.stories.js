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
        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-find-space",
        to: "/visit/foo/baz/",
        title: "Ultrices Enim",
        text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-digitized-resources",
        to: "/about/foo/fred/",
        title: "Egestas et Augue",
        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-databases",
        to: "/about/foo/thud/",
        title: "Proin Sodales",
        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
        isHorizontal: false,
    },
    {
        iconName: "illustration-remote-access",
        to: "/visit/foo/qux/",
        title: "Taciti sociosqu",
        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
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
            title="Get Help with"
            text="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            to="/help/foo/bar"
            :isHorizontal="false"
        />
    `,
})

const itemsHorizontal = [
    {
        iconName: "illustration-book-binding",
        category: "Malvina",
        to: "/help/foo/bar/",
        title: "Lacus Luctus",
        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
        isHorizontal: true,
    },
    {
        iconName: "illustration-find-space",
        category: "Malvina",
        to: "/visit/foo/baz/",
        title: "Ultrices Enim",
        text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
        isHorizontal: true,
    },
    {
        iconName: "illustration-digitized-resources",
        category: "Malvina",
        to: "/about/foo/fred/",
        title: "Egestas et Augue",
        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
        isHorizontal: true,
    },
    {
        iconName: "illustration-databases",
        category: "Malvina",
        to: "/about/foo/thud/",
        title: "Proin Sodales",
        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
        isHorizontal: true,
    },
    {
        iconName: "illustration-remote-access",
        category: "Malvina",
        to: "/visit/foo/qux/",
        title: "Taciti sociosqu",
        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
        isHorizontal: true,
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
            title="Get Help with"
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
            title="Get Help with"
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
            title="Get Help with"
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
