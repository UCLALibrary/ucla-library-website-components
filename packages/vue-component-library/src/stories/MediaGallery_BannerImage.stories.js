import { computed } from 'vue'

import * as FTVAMedia from './mock/FTVAMedia'
import FlexibleMediaGalleryBannerImage from '@/lib-components/Flexible/MediaGallery/BannerImage.vue'
import * as MEDIA from '@/stories/mock/Media'

// Storybook default settings
export default {
  title: 'MEDIA GALLERY / Banner Image',
  component: FlexibleMediaGalleryBannerImage,
}

const DefaultTemplate = (args) => {
  void args
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

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVATemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: FTVAMedia.ImageFile,
        nItems: 4,
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

export const FTVA = FTVATemplate.bind({})
FTVA.args = {}


const ExpandedTemplate = (args) => {
  void args
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

export const Expanded = ExpandedTemplate.bind({})
Expanded.args = {}


const ExpandedFTVATemplate = (args) => {
  void args
  return {
    data() {
      return {
        item: FTVAMedia.ImageFile,
        nItems: 4,
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
        :n-items="nItems"
        :expanded="expanded"
    />
  `,
  }
}

export const ExpandedFTVA = ExpandedFTVATemplate.bind({})
ExpandedFTVA.args = {}


const SingleItemTemplate = (args) => {
  void args
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

export const SingleItem = SingleItemTemplate.bind({})
SingleItem.args = {}

