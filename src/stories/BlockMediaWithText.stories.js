import BlockMediaWithText from "@/lib-components/BlockMediaWithText"

import { mock } from "./mock/BlockMediaWithText"
import * as MEDIA from "./mock/Media"

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
            :item="mediaWithText[0].coverImage"
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
            :item="mediaWithText[0].coverImage"
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})

export const Video = () => ({
    data() {
        return {
            ...mock,
            item: MEDIA.VideoFile,
            coverImage: MEDIA.VideoFileCoverImage,
        }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="item"
            :coverImage="coverImage"
            type-media="video"
        />
    `,
})

export const Audio = () => ({
    data() {
        return {
            ...mock,
            item: MEDIA.AudioFile,
            coverImage: MEDIA.AudioFileCoverImage,
        }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :item="item"
            :coverImage="coverImage"
            type-media="audio"
        />
    `,
})

export const Embed = () => ({
    data() {
        return {
            ...mock,
            embedCode: MEDIA.AudioEmbed,
            coverImage: MEDIA.AudioEmbedCoverImage,
        }
    },
    components: { BlockMediaWithText },
    template: `
        <block-media-with-text
            :section-header="mediaWithText[0].titleLink"
            :short-description="mediaWithText[0].description"
            :button-text="mediaWithText[0].buttonText"
            :button-url="mediaWithText[0].buttonUrl"
            :embedCode="embedCode"
            :coverImage="coverImage"
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
            :type-media="mediaWithText[0].typeMedia"
        />
    `,
})