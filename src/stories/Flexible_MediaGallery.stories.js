import FlexibleMediaGallery from "@/lib-components/Flexible/MediaGallery"

import * as API from "./mock/Media"

export default {
    title: "FLEXIBLE / Media Gallery",
    component: FlexibleMediaGallery,
}

export const Default = () => ({
    data() {
        return { block: API.Gallery }
    },
    components: { FlexibleMediaGallery },
    template: `<flexible-media-gallery :block="block"/>`,
})

export const WithHalfWidth = () => ({
    data() {
        return {
            block: {
                ...API.Gallery,
                isHalfWidth: "true",
                title: "Title",
                summary: "Pine needles. It’s not because the gangly-limbed tree is particularly beautiful. The pine doesn’t have a magnolia’s flowers or an oak’s shade. And it has nothing to do with the endangered red-cockaded woodpecker that calls the tree home. The longleaf pine’s most obvious attribute is its strong, straight timber — perfect for utility poles.",
            },
        }
    },
    components: { FlexibleMediaGallery },
    template: `<flexible-media-gallery :block="block"/>`,
})
