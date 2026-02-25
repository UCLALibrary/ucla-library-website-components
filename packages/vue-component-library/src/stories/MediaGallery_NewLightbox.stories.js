import { computed } from 'vue'
import format from 'date-fns/format'
import * as FTVAMedia from './mock/FTVAMedia'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import { Gallery as MEDIA_GALLERY_MOCK } from '@/stories/mock/Media'
import formatEventDates from '@/utils/formatEventDates'
import formatSeriesDates from '@/utils/formatEventSeriesDates'

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

Default.parameters = {
  chromatic: { disableSnapshot: false },
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

export function FTVA_Default() {
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

// Helper functions to parse data for FTVA Homepage Carousel
function parseFTVACarouselImage(imgObj) {
  return [{
    ...imgObj[0],
    src: imgObj[0]?.url,
    kind: 'image', // This key is expected by the Media component
  }]
}

function parseFTVATypeHandles(str) {
  // Add extra typehandles as needed
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

function formatEventTime(date) {
  const formattedTime = format(new Date(date), 'h:mm aaa')
  return formattedTime.toUpperCase()
}

function parseDatesAndTimes(typeHandle, startDate, endDate, startDateWithTime, ongoing) {
  if (ongoing)
    return 'Ongoing'
  if (typeHandle === 'ftvaEvent')
    return `${formatEventDates(startDateWithTime, startDateWithTime, 'longWithYear')} - ${formatEventTime(startDateWithTime)}`
  if (typeHandle === 'eventSeries')
    return formatSeriesDates(startDate, endDate, 'longWithYear')

  return null
}

const parsedMockHomepagCarousel = computed(() => {
  return FTVAMedia.mockFTVAHomepageCarousel.map((rawItem) => {
    return {
      item: parseFTVACarouselImage(rawItem.ftvaImage),
      credit: rawItem.creditText,
      tag: parseFTVATypeHandles(rawItem.typeHandle),
      captionText: rawItem.ftvaHomepageDescription,
      captionTitle: rawItem.ftvaHomepageTitle,
      itemDate: parseDatesAndTimes(rawItem.typeHandle, rawItem.startDate, rawItem.endDate, rawItem.startDateWithTime, rawItem.ongoing)
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
    template: '<flexible-media-gallery-new-lightbox class="homepage" :items="items" :inline=true><template v-slot="slotProps"><BlockTag :label="items[slotProps.selectionIndex].tag" /> {{items[slotProps.selectionIndex].itemDate}} </template></ flexible-media-gallery-new-lightbox>',
  }
}

const parsedMockHomepagCarouselURL = computed(() => {
  return FTVAMedia.mockFTVAHomepageCarousel.map((rawItem) => {
    return {
      item: parseFTVACarouselImage(rawItem.ftvaImage),
      credit: rawItem.creditText,
      tag: parseFTVATypeHandles(rawItem.typeHandle),
      captionText: rawItem.ftvaHomepageDescription,
      captionTitle: rawItem.ftvaHomepageTitle,
      itemDate: parseDatesAndTimes(rawItem.typeHandle, rawItem.startDate, rawItem.endDate, rawItem.startDateWithTime, rawItem.ongoing),
      linkUrl: 'google.com',
    }
  })
})

export function FTVA_HomepageCarouselURL() {
  return {
    data() {
      return {
        items: parsedMockHomepagCarouselURL
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox, BlockTag },
    template: '<flexible-media-gallery-new-lightbox class="homepage" :items="items" :inline=true><template v-slot="slotProps"><BlockTag :label="items[slotProps.selectionIndex].tag" /> {{items[slotProps.selectionIndex].itemDate}} </template></ flexible-media-gallery-new-lightbox>',
  }
}

export function FTVA_HomepageCarousel_ScrollTest() {
  return {
    data() {
      return {
        items: parsedMockHomepagCarousel,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { FlexibleMediaGalleryNewLightbox, BlockTag },
    template: `
      <div>
        <div
          style="
            height:10vh;
            background: #132941;
            background: hotpink;
            padding:20px;
            color: white;
            font-size:24px
          "
        >
          <strong>Example Navbar area to demonstrate scrolling
        </div>

        <flexible-media-gallery-new-lightbox class="homepage" :items="items" :inline=true>
          <template v-slot="slotProps">
            <BlockTag :label="items[slotProps.selectionIndex].tag" />
            {{ items[slotProps.selectionIndex].itemDate }}
          </template>
        </flexible-media-gallery-new-lightbox>

        <div
          style="
            height:120vh;
            background:#e7edf2;
            background: #FFE3E8;
            padding:20px;
            color: #132941;
            font-size: 36px;
          "
        >
          <h2
            style="
            font-family: var(--font-primary);
            font-weight: 400;
            "
          >
            Example Body
          </h2>
          <p>Example text area to demonstrate scrolling</p>
        </div>
      </div>
    `,
  }
}
