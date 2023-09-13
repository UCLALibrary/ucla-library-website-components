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
                summary:
                    "Pine needles. It’s not because the gangly-limbed tree is particularly beautiful. The pine doesn’t have a magnolia’s flowers or an oak’s shade. And it has nothing to do with the endangered red-cockaded woodpecker that calls the tree home. The longleaf pine’s most obvious attribute is its strong, straight timber — perfect for utility poles. Known for their superior softness, cozy ambiance and immaculate needles, East Coast Pine Needles live up to their reputation of excellence. They range in size from 3 to 5 inches and are a deep forest green color. The long, thin needles vary slightly from variety to variety, depending on the region in which they grow. Pine needles have a strong pine scent, and a biting resinous flavor.  They are leaves. They do the same job that broad leaves do—capture sunlight, “inhale” carbon dioxide, and “exhale” oxygen—providing the tree with food and air for us to breath.",
            },
        }
    },
    components: { FlexibleMediaGallery },
    template: `<flexible-media-gallery :block="block"/>`,
})
