import { computed } from 'vue'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
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

// FTVA style data mock for carousel
// as it comes from craft CMS
const mockFTVAGalleryRawData = [
  {
    image: [MEDIA_GALLERY_MOCK.mediaGallery[0].item],
    creditText: 'Credit text'
  },
  {
    image: [MEDIA_GALLERY_MOCK.mediaGallery[1].item],
    creditText: 'Credit text 2'
  }
]

// FTVA implementation of this component requires a different data structure than the default,
// parent page should implement a computed function like this to transform the data
const mockFTVAGalleryComputedData = computed(() => {
  // map image to item, map creditText to credit
  return mockFTVAGalleryRawData.map((rawItem) => {
    return {
      item: rawItem.image[0],
      credit: rawItem.creditText,
      captionText: 'Caption text', // TODO get homepage carousel data sample to make more accurate
      captionTitle: 'Caption title' // TODO get homepage carousel data sample to make more accurate
    }
  })
})

export function FTVA_DefaultLightbox() {
  return {
    data() {
      return {
        items: mockFTVAGalleryComputedData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox },
    template: '<flexible-media-gallery-new-lightbox :items="items"/>',
  }
}

export function FTVA_EventDetailCarousel() {
  return {
    data() {
      return {
        items: mockFTVAGalleryComputedData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox },
    template: '<flexible-media-gallery-new-lightbox :items="items" :inline=true />',
  }
}

// TODO finish example showing homepage implementation with slots
// mockdata for blocktags in parent
const mockTags = ['tag1', 'tag2', 'tag3']
// TODO: for part 2 of carousel homepage styling
export function FTVA_Homepage() {
  return {
    setup() {
      return {
        mockTags
      }
    },
    data() {
      return {
        items: mockFTVAGalleryComputedData
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox, BlockTag },
    template: '<flexible-media-gallery-new-lightbox class="homepage" :items="items" :inline=true><template v-slot="slotProps"><BlockTag :label="mockTags[slotProps.selectionIndex]" /></template></ flexible-media-gallery-new-lightbox>',
  }
}
