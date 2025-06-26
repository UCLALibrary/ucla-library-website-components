import { computed } from 'vue'
import * as FTVAMedia from './mock/FTVAMedia'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import { Gallery as MEDIA_GALLERY_MOCK } from '@/stories/mock/Media'

// import { mockFTVAHomepageCarousel } from '@/stories/mock/FTVAMedia'

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
    creditText: 'Credit text 1'
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
        items: FTVAMedia.Gallery.mediaGallery
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

export function FTVA_InlineCarousel() {
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

function parseFTVACarouselImage(imgObj) {
  return [{
    ...imgObj[0],
    src: imgObj[0]?.url,
    kind: 'image', // This key is expected by the Media component
  }]
}

function parseFTVATypeHandles(str) {
  switch (str) {
    case 'ftvaEvent':
      return 'Event'
    case 'ftvaArticle':
      return 'Article'
    case 'eventSeries':
      return 'Series'
    default:
      return null
  }
}

const parsedMockHomepagCarousel = computed(() => {
  return FTVAMedia.mockFTVAHomepageCarousel.map((rawItem) => {
    return {
      item: parseFTVACarouselImage(rawItem.ftvaImage),
      credit: rawItem.creditText,
      tag: parseFTVATypeHandles(rawItem.typeHandle),
      captionText: rawItem.ftvaHomepageDescription,
      captionTitle: rawItem.ftvaHomepageTitle
      // eventDate
      // eventTime
    }
  })
})

export function FTVA_HomepageCarousel() {
  return {
    data() {
      return {
        items: parsedMockHomepagCarousel
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox, BlockTag },
    template: '<flexible-media-gallery-new-lightbox class="homepage" :items="items" :inline=true><template v-slot="slotProps"><BlockTag :label="items[slotProps.selectionIndex].tag" /> Text Random </template></ flexible-media-gallery-new-lightbox>',
  }
}
