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
