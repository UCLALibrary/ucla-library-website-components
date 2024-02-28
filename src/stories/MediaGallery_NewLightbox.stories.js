import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'

import { Gallery as MEDIA_GALLERY_MOCK } from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'Media Gallery / New Lightbox',
  component: FlexibleMediaGalleryNewLightbox,
}

export function Default() {
  return {
    data() {
      return {
        items: MEDIA_GALLERY_MOCK.mediaGallery,
      }
    },
    components: { FlexibleMediaGalleryNewLightbox },
    template: '<flexible-media-gallery-new-lightbox :items="items" />',
  }
}

export function SingleItem() {
  return {
    data() {
      return {
        items: [MEDIA_GALLERY_MOCK.mediaGallery[2]],
      }
    },
    components: { FlexibleMediaGalleryNewLightbox },
    template: '<flexible-media-gallery-new-lightbox :items="items" />',
  }
}
