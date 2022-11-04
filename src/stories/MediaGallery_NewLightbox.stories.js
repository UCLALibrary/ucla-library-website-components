import FlexibleMediaGalleryNewLightbox from "@/lib-components/Flexible/MediaGallery/NewLightbox.vue"

import { Gallery as MEDIA_GALLERY_MOCK } from "@/stories/mock/Media"

// Storybook default settings
export default {
    title: "Media Gallery / New Lightbox",
    component: FlexibleMediaGalleryNewLightbox,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items: MEDIA_GALLERY_MOCK.mediaGallery,
        }
    },
    components: { FlexibleMediaGalleryNewLightbox },
    template: `<flexible-media-gallery-new-lightbox :items="items" />`,
})
