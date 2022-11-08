// Import mock api data
import FlexibleMediaGalleryBannerImage from "@/lib-components/Flexible/MediaGallery/BannerImage.vue"

import * as MEDIA from "@/stories/mock/Media"

// Storybook default settings
export default {
    title: "MEDIA GALLERY / Banner Image",
    component: FlexibleMediaGalleryBannerImage,
}

export const Default = () => ({
    data() {
        return {
            item: MEDIA.ImageFile,
            nItems: 5,
            expanded: false,
        }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :item="item"
        :n-items="nItems"
        :expanded="expanded"
    />
  `,
})

export const Expanded = () => ({
    data() {
        return {
            item: MEDIA.ImageFile,
            expanded: true,
        }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :item="item"
        n-items=5
        :expanded="expanded"
    />
  `,
})

export const SingleItem = () => ({
    data() {
        return { item: MEDIA.ImageFile }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :item="item"
        n-items=1
        expanded=false
    />
  `,
})
