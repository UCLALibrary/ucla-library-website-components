import BlockSimpleCard from "@/lib-components/BlockSimpleCard"

export default {
    title: "BLOCK / Simple Card",
    component: BlockSimpleCard,
}

const mockExternal = {
    title: "Types of Sinkholes",
    summary:
        "It is a frightening thought to imagine the ground below your feet or house suddenly collapsing and forming a big hole in the ground. Sinkholes rarely happen, but when they strike, tragedy can occur. Sinkholes happen when the ground below the land surface cannot support the land surface. They happen for many reasons; read on to educate yourself about sinkholes.",
    externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
}

const mockInternal = {
    id: "13785",
    contentLink: [
        {
            slug: "sink-hole",
            title: "Sink Hole",
            summary:
                "<p>Man-made sinkholes are the result of a variety of practices, from drilling to mining to changes in water diversion systems to broken pipes.</p>",
        },
    ],
}

const mockInternalGuide = {
    id: "13899",
    contentLink: [
        {
            slug: "road-work",
            title: "Road Work Guide",
            summary:
                "It is a frightening thought to imagine the ground below your feet or house suddenly collapsing and forming a big hole in the ground.",
            researchGuideUrl: "http://libguides.library.ucla.edu",
        },
    ],
}

// Variations of stories below
// ExternalLink
export const Default = () => ({
    data() {
        return { ...mockExternal }
    },
    components: { BlockSimpleCard },
    template: `
        <block-simple-card
            :title="title"
            :text="summary"
            :to="externalLink"
        />
    `,
})

export const InternalLink = () => ({
    data() {
        return { ...mockInternal }
    },
    components: { BlockSimpleCard },
    template: `
        <block-simple-card
            :title="contentLink[0].title"
            :text="contentLink[0].summary"
            :to="contentLink[0].slug"
        />
    `,
})

export const InternalLinkGuide = () => ({
    data() {
        return { ...mockInternalGuide }
    },
    components: { BlockSimpleCard },
    template: `
        <block-simple-card
            :title="contentLink[0].title"
            :text="contentLink[0].summary"
            :to="contentLink[0].researchGuideUrl"
        />
    `,
})

export const LongText = () => ({
    data() {
        return { card: {
            to: "sink-hole",
            title: "Sink Hole",
            text:
                "Adipisicing do enim voluptate amet nisi eiusmod ex aliqua exercitation nulla sint magna proident proident. Exercitation in et enim est esse consectetur ex dolore labore ut laborum non minim ea. In ad excepteur cillum commodo veniam dolore labore cupidatat. Ea fugiat occaecat et fugiat consectetur do consectetur anim cillum. Ex nulla est ex cillum esse. Aliquip deserunt consequat pariatur sunt labore occaecat. Excepteur nostrud ex ex anim ut irure tempor eu quis id cupidatat consectetur. Mollit adipisicing cupidatat occaecat labore cupidatat culpa sit pariatur. Anim reprehenderit dolore est aliqua id pariatur quis exercitation incididunt do magna. Reprehenderit irure duis aliqua ullamco sint incididunt commodo exercitation reprehenderit. Non esse quis consectetur eiusmod. Labore dolore ex commodo culpa incididunt ipsum nulla elit tempor in officia eiusmod. Velit incididunt Lorem eiusmod eu anim dolore voluptate elit nisi aliquip est elit qui occaecat. Consequat cillum consectetur pariatur magna incididunt tempor eu do commodo laboris proident id dolor. Pariatur sint incididunt Lorem anim est nostrud qui excepteur eu fugiat exercitation exercitation. Lorem laboris reprehenderit ipsum aliquip ullamco sunt aute culpa occaecat in aliquip incididunt consequat nostrud.",
        } }
    },
    components: { BlockSimpleCard },
    template: `<block-simple-card v-bind="card" style="max-width: 300px;"/>`,
})
