import { computed } from 'vue'

import FlexibleMediaGalleryBannerImage from '@/lib-components/Flexible/MediaGallery/BannerImage.vue'

import * as MEDIA from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'MEDIA GALLERY / Banner Image',
  component: FlexibleMediaGalleryBannerImage,
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
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :item="item"
        :n-items="nItems"
        :expanded="expanded"
    />
  `,
  }
}

export function FTVA() {
  return {
    data() {
      return {
        item: MEDIA.ImageFile,
        nItems: 5,
        expanded: false,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
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
    components: { FlexibleMediaGalleryBannerImage },
    template: `
      <flexible-media-gallery-banner-image
        :item="item"
        n-items=5
        :expanded="expanded"
    />
  `,
  }
}

export function ExpandedFTVA() {
  return {
    data() {
      return {
        item: MEDIA.ImageFile,
        expanded: true,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
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
  }
}

export function SingleItem() {
  return {
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
  }
}
