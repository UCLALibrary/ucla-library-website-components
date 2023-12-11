import MediaLightbox from '@/lib-components/Media/Lightbox.vue'

import { Gallery as MEDIA_GALLERY_MOCK } from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'Media / Lightbox',
  component: MediaLightbox,
}

export function Default() {
  return {
    data() {
      return {
        items: MEDIA_GALLERY_MOCK.mediaGallery,
      }
    },
    components: { MediaLightbox },
    template: '<MediaLightbox :items="items" />',
  }
}

export function SingleItem() {
  return {
    data() {
      return {
        items: [MEDIA_GALLERY_MOCK.mediaGallery[2]],
      }
    },
    components: { MediaLightbox },
    template: '<flexible-media-gallery-lightbox :items="items" />',
  }
}
