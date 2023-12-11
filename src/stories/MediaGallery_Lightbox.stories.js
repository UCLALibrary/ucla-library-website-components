import FlexibleMediaGalleryLightbox from '@/lib-components/Flexible/MediaGallery/Lightbox.vue'

import { Gallery as MEDIA_GALLERY_MOCK } from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'Media Gallery / Lightbox',
  component: FlexibleMediaGalleryLightbox,
}

export function Default() {
  return {
    data() {
      return {
        items: MEDIA_GALLERY_MOCK.mediaGallery,
      }
    },
    components: { FlexibleMediaGalleryLightbox },
    template: '<flexible-media-gallery-lightbox :items="items" />',
  }
}

export function SingleItem() {
  return {
    data() {
      return {
        items: [MEDIA_GALLERY_MOCK.mediaGallery[2]],
      }
    },
    components: { FlexibleMediaGalleryLightbox },
    template: '<flexible-media-gallery-lightbox :items="items" />',
  }
}
