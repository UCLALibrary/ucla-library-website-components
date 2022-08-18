import BlockMediaWithText from "@/lib-components/BlockMediaWithText"

import { mock } from "./mock/BlockMediaWithText"

export default {
    title: "BLOCK / Media with Text",
    component: BlockMediaWithText,
}

export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :media-link="mediaWithText[0].linkToMedia"
            :is-video="false"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})

export const NoMediaLink = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})

export const IsVideo = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="true"
            :is-audio="false"
            :image="mediaWithText[0].coverImage[0]"
            type-media="video"
        />
    `,
})

export const IsAudio = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="true"
            :image="mediaWithText[0].coverImage[0]"
            type-media="audio"
        />
    `,
})

export const NoImage = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :is-video="false"
            :is-audio="false"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})
