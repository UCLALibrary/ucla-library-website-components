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

const mockFocalPoint = {
    id: "43141",
    captionTitle: "Ramakatane archive 15",
    captionText:
        "Man standing with foot on stool wearing a panama hat and sandals with coat in hand, photographed in Mr. M.T. Ramakatane's City Centre Studio",
    sortOrder: 5,
    image: {
        id: "42883",
        src: "https://static.library.ucla.edu/craftassetsprod/images/_fullscreen/Ramakatane-archive-15.jpeg",
        height: 2547,
        width: 2560,
        srcset: "https://static.library.ucla.edu/craftassetsprod/images/_375xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 375w, https://static.library.ucla.edu/craftassetsprod/images/_960xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 960w, https://static.library.ucla.edu/craftassetsprod/images/_1280xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 1280w, https://static.library.ucla.edu/craftassetsprod/images/_1920xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 1920w, https://static.library.ucla.edu/craftassetsprod/images/_2560xAUTO_crop_center-center_none/Ramakatane-archive-15.jpeg 2560w",
        alt: "Ramakatane archive 15",
        focalPoint: [0.5599, 0.3008],
        altText: "Ramakatane archive 15",
    },
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

export const FocalPoint = () => ({
    data() {
        return { ...mockFocalPoint }
    },
    components: { FlexibleMediaGalleryThumbnailCard },
    template: `
    <flexible-media-gallery-thumbnail-card
      style="max-width: 400px"
      :image="image"
      :caption-title="captionTitle"
      :caption-text="captionText"
    />
`,
})
