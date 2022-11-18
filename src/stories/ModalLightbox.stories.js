import ModalLightbox from "@/lib-components/ModalLightbox"
// import MediaSlideshow from "@/lib-components/Media/Slideshow.vue"

import { Gallery as MEDIA_GALLERY_MOCK } from "@/stories/mock/Media"

// Storybook default settings
export default {
    title: "Modal Lightbox",
    component: ModalLightbox,
}

export const Default = () => ({
    data() {
        return {
            slotStyles: {
                background: "white",
            },
        }
    },
    components: { ModalLightbox },
    template: `<modal-lightbox><div :style="slotStyles" /></modal-lightbox>`,
})
