// Import mock api data
import MediaGalleryBanner from '@/lib-components/Media/GalleryBanner.vue'

import * as MEDIA from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'MEDIA / Gallery Banner',
  component: MediaGalleryBanner,
}

export function Default() {
  return {
    data() {
      return {
        item: MEDIA.ImageFile,
        nItems: 5,
        expanded: false,
      }
    },
    components: { MediaGalleryBanner },
    template: `
      <MediaGalleryBanner
        :item="item"
        :n-items="nItems"
        :expanded="expanded"
    />
  `,
  }
}

export function Expanded() {
  return {
    data() {
      return {
        item: MEDIA.ImageFile,
        expanded: true,
      }
    },
    components: { MediaGalleryBanner },
    template: `
      <MediaGalleryBanner
        :item="item"
        n-items=5
        :expanded="expanded"
    />
  `,
  }
}

export function SingleItem() {
  return {
    data() {
      return { item: MEDIA.ImageFile }
    },
    components: { MediaGalleryBanner },
    template: `
      <MediaGalleryBanner
        :item="item"
        n-items=1
        expanded=false
    />
  `,
  }
}
