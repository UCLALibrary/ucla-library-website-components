// Import mock api data
import * as API from "@/stories/mock-api.json"
import FlexibleMediaGalleryThumbnailCard from "@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue"

// Storybook default settings
export default {
    title: "Media Gallery / Thumbnail Card",
    component: FlexibleMediaGalleryThumbnailCard,
}

const mock = {
    image: API.image,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { FlexibleMediaGalleryThumbnailCard },
    template: `
      <flexible-media-gallery-thumbnail-card
        style="max-width: 400px"
        :image="image"
        :caption-title="image.title"
        :caption-text="image.alt"
      />
  `,
})
