import StoryRouter from "storybook-vue-router"

import FlexibleBlocks from "@/lib-components/FlexibleBlocks"
import SectionWrapper from "@/lib-components/SectionWrapper"
import DividerGeneral from "@/lib-components/DividerGeneral"

import { mock as mockCardWithImage } from "@/stories/mock/Flexible_CardWithImage.js"
import { mock as mockHighlight } from "@/stories/mock/Flexible_Highlight.js"
import { mock as mockMediaGallery } from "@/stories/mock/Flexible_MediaGallery.js"
import { mockSingle as mockMediaWithText } from "@/stories/mock/Flexible_MediaWithText.js"
import { mock as mockRichText } from "@/stories/mock/Flexible_RichText.js"
import { mockTwoCards as mockSimpleCards } from "@/stories/mock/Flexible_SimpleCards.js"

export default {
    title: "Flexible Blocks",
    component: FlexibleBlocks,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return {
            blocks: [mockSimpleCards, mockMediaGallery, mockMediaWithText],
        }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
})

export const GrayBackgrounds = () => ({
    data() {
        return {
            blocks: [
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleCardWithImage</h4>",
                },
                mockCardWithImage,
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleHighlight</h4>",
                },
                mockHighlight,
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleMediaGallery</h4>",
                },
                mockMediaGallery,
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleMediaWithText</h4>",
                },
                mockMediaWithText,
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleRichText</h4>",
                },
                {
                    typeHandle: "rich-text",
                    richText: "<h4>FlexibleRichText</h4>",
                },
                mockRichText,
                mockRichText,
            ],
        }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
})

export const DividerBetweenWhiteBlocks = () => ({
    data() {
        return {
            blocks: [mockMediaWithText, mockSimpleCards],
        }
    },
    components: { FlexibleBlocks, SectionWrapper, DividerGeneral },
    template: `
        <flexible-blocks
            :blocks="blocks"
        />
    `,
})
