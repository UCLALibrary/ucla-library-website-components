import FlexibleMediaGallery from "@/lib-components/Flexible/MediaGallery"

import { mock } from "./mock/Flexible_MediaGallery"

export default {
    title: "FLEXIBLE / Media Gallery",
    component: FlexibleMediaGallery,
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    components: { FlexibleMediaGallery },
    template: `<flexible-media-gallery :block="block"/>`,
})
