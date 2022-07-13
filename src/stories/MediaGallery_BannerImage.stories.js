// Import mock api data
import * as API from "~/stories/mock-api.json"
import FlexibleMediaGalleryBannerImage from "@/lib-components/Flexible/MediaGallery/BannerImage.vue"

// Storybook default settings
export default {
    title: "MEDIA GALLERY / Banner Image",
    component: FlexibleMediaGalleryBannerImage,
}

const mock = {
    image: API.image,
}

export const Default = () => ({
    data() {
        return {
            ...mock,
            expanded: false,
        }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :image="image"
        n-items=5
        :expanded=false
    />
  `,
})

export const Expanded = () => ({
    data() {
        return {
            ...mock,
            expanded: true,
        }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :image="image"
        n-items=5
        :expanded="expanded"
    />
  `,
})

export const SingleItem = () => ({
    data() {
        return { ...mock }
    },
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :image="image"
        n-items=1
        expanded=false
    />
  `,
})
