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
