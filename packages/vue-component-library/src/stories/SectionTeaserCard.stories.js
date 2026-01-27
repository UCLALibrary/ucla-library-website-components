import { computed } from 'vue'

// Import component
import { parsedFTVABlogSeries } from './mock/FTVAMedia'
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'
import ScrollWrapper from '@/lib-components/ScrollWrapper'

// Import mock api data
import * as API from '@/stories/mock-api.json'

/**
 * A wrapper component for `BlockCardWithImage`.
 *
 * Props:
 * - items: (array of objects)
 * - sectionTitle (string)
 * - gridLayout: (boolean)
 *  - true (default)
 *  - false (Adds 'nowrap' to flexed parent container, and cards scroll horizontally)
 */

// Storybook default settings
export default {
  title: 'SECTION / Teaser / Card',
  component: SectionTeaserCard,
}

const mockDefault = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Feugiat',
    title: 'Vel Quam Elementum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'workshopOrEventSeries',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/baz/',
    category: 'Tincidunt',
    title: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    title: 'Adipiscing Tristique',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/ban/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/barf/',
    category: 'Curabitur ',
    title: 'Vel Quam Elementum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/bad/',
    category: 'Sagittis',
    title: 'Aenean Lectus Elit',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: null,
    to: '/visit/foo/bag/',
    category: 'Tortor',
    title: 'Vivamus Consectetuer Risus et Tortor',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/bam/',
    category: 'Maecenas',
    sectionHandle: 'event',
    title: 'Proin ut Ligula vel Nunc Egestas Porttitor',
    text: 'Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.',
    isOnline: false,
  },
]

const mockFtva = [
  {
    id: '2847944',
    to: 'events/la-région-centrale-03-08-24',
    title: 'TEST - La Région Centrale Screening',
    startDate: '2027-03-31T07:00:00+00:00',
    endDate: null,
    sectionHandle: 'ftvaEvent',
    image: {
      id: '3131261',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
      alt: 'A woman writing on a window.',
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: '3145808',
    to: 'events/step-up-3-07-19-25',
    title: 'TEST - Step Up 3D (2010) Sequel to 2008\'s Step Up 2: The Streets and the third installment in the Step Up film series',
    startDate: '2028-03-31T07:00:00+00:00',
    sectionHandle: 'ftvaEvent',
    image: null
  },
  {
    id: '3145784',
    to: 'events/step-up-2-07-07-25',
    title: 'TEST - Step Up 2: The Streets (2008)',
    startDate: '2026-03-31T07:00:00+00:00',
    sectionHandle: 'ftvaEvent',
    image: {
      id: '3157357',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/step2.jpg',
      height: 1705,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/step2.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/step2.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/step2.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/step2.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/step2.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
]

const mockFtvaSeries = [
  {
    uri: 'series/todd-solondz-series',
    title: 'TEST - Todd Solondz Series',
    startDate: '2025-11-06T08:00:00+00:00',
    endDate: '2025-12-13T08:00:00+00:00',
    ongoing: true,
    sectionHandle: 'ftvaEventSeries',
    ftvaImage: [
      {
        id: '3157237',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Todd-Solondz_2024-07-04-073854_jbqd.jpg',
        height: 1734,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    uri: 'series/step-up-series',
    title: 'TEST Series: The Step Up Movie Series',
    startDate: '2025-11-07T08:00:00+00:00',
    endDate: '2025-12-20T08:00:00+00:00',
    ongoing: false,
    sectionHandle: 'ftvaEventSeries',
    ftvaImage: [
      {
        id: '3203293',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/step-up-7_2024-08-29-024747_kgpd.jpg',
        height: 1438,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/step-up-7_2024-08-29-024747_kgpd.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/step-up-7_2024-08-29-024747_kgpd.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/step-up-7_2024-08-29-024747_kgpd.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/step-up-7_2024-08-29-024747_kgpd.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/step-up-7_2024-08-29-024747_kgpd.jpg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    uri: 'series/series-with-3-upcoming-events',
    title: 'Series with 3 upcoming events',
    startDate: '2025-11-07T08:00:00+00:00',
    endDate: '2025-12-20T08:00:00+00:00',
    sectionHandle: 'ftvaEventSeries',
    ongoing: false,
    ftvaImage: []
  }
]
// Sample data from Craft CMS for FTVA Event Series uses:
// 'uri' instead of 'to',
// 'ftvaImage' ARRAY instead of 'image' OBJECT,
// these fields will need to be parsed to match the component props if final data is structured this way
const parsedFTVAEventSeries = mockFtvaSeries.map((item) => {
  return {
    to: item.uri,
    title: item.title,
    startDate: item.startDate ? item.startDate : null,
    endDate: item.endDate ? item.endDate : null,
    ongoing: item.ongoing,
    sectionHandle: item.sectionHandle,
    image: item.ftvaImage[0],
  }
})

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
  }
}
// DLC Theme Egde Cases With Date
const mockDLCEdgeCasesWithDate = [
  {
    id: 'dlc-1',
    to: '/collections/digital-archives',
    title: 'Digital Archives Collection',
    text: 'Explore our extensive collection of digitized materials including manuscripts, photographs, and historical documents spanning over 200 years of UCLA history.',
    image: API.image,
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  },
  {
    id: 'dlc-2',
    to: '/collections/special-collections',
    title: 'Special Collections & Rare Books',
    text: 'Discover rare books, manuscripts, and unique materials that form the cornerstone of our research collections. These items provide invaluable insights into various academic disciplines.',
    image: {
      id: '3156835',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
      height: 1813,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
      alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  },
  {
    id: 'dlc-3',
    to: '/collections/ethnographic-materials',
    title: 'Ethnographic Materials & Cultural Artifacts',
    text: 'A comprehensive collection of ethnographic materials including audio recordings, photographs, and cultural artifacts from communities around the world. These materials support interdisciplinary research in anthropology, ethnomusicology, and cultural studies.',
    image: {
      id: '3280534',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
      height: 1664,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
      alt: 'many hot air balloons in the air',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  },
  {
    id: 'dlc-4',
    to: '/collections/art-architecture',
    title: 'Art & Architecture Collections',
    text: 'Extensive visual resources including architectural drawings, art slides, and digital images supporting research in art history, architecture, and visual culture studies.',
    image: {
      id: '3701680',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
      alt: 'Image alt text here',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  },
  {
    id: 'dlc-5',
    to: '/collections/geographic-information',
    title: 'Geographic Information Systems & Maps',
    text: 'Comprehensive collection of maps, atlases, and geospatial data supporting research in geography, urban planning, environmental studies, and related fields.',
    image: API.image,
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  },
  {
    id: 'dlc-6',
    to: '/collections/audio-visual',
    title: 'Audio-Visual Materials & Media Archives',
    text: 'Extensive collection of audio recordings, video materials, and digital media including oral histories, documentaries, and multimedia resources for research and instruction.',
    image: {
      id: '3151261',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
      alt: 'A woman writing on a window.',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection',
    customDateTime: 'November 1, 1963'
  }
]

// DLC Theme Edge Cases Story
const mockDLCEdgeCases = [
  {
    id: 'dlc-1',
    to: '/collections/digital-archives',
    title: 'Digital Archives Collection',
    text: 'Explore our extensive collection of digitized materials including manuscripts, photographs, and historical documents spanning over 200 years of UCLA history.',
    image: API.image,
    sectionHandle: 'collection'
  },
  {
    id: 'dlc-2',
    to: '/collections/special-collections',
    title: 'Special Collections & Rare Books',
    text: 'Discover rare books, manuscripts, and unique materials that form the cornerstone of our research collections. These items provide invaluable insights into various academic disciplines.',
    image: {
      id: '3156835',
      src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
      height: 1813,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
      alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection'
  },
  {
    id: 'dlc-3',
    to: '/collections/ethnographic-materials',
    title: 'Ethnographic Materials & Cultural Artifacts',
    text: 'A comprehensive collection of ethnographic materials including audio recordings, photographs, and cultural artifacts from communities around the world. These materials support interdisciplinary research in anthropology, ethnomusicology, and cultural studies.',
    image: {
      id: '3280534',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
      height: 1664,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
      alt: 'many hot air balloons in the air',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection'
  },
  {
    id: 'dlc-4',
    to: '/collections/art-architecture',
    title: 'Art & Architecture Collections',
    text: 'Extensive visual resources including architectural drawings, art slides, and digital images supporting research in art history, architecture, and visual culture studies.',
    image: {
      id: '3701680',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
      alt: 'Image alt text here',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection'
  },
  {
    id: 'dlc-5',
    to: '/collections/geographic-information',
    title: 'Geographic Information Systems & Maps',
    text: 'Comprehensive collection of maps, atlases, and geospatial data supporting research in geography, urban planning, environmental studies, and related fields.',
    image: API.image,
    sectionHandle: 'collection'
  },
  {
    id: 'dlc-6',
    to: '/collections/audio-visual',
    title: 'Audio-Visual Materials & Media Archives',
    text: 'Extensive collection of audio recordings, video materials, and digital media including oral histories, documentaries, and multimedia resources for research and instruction.',
    image: {
      id: '3151261',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
      alt: 'A woman writing on a window.',
      focalPoint: [0.5, 0.5]
    },
    sectionHandle: 'collection'
  }
]

export function DLCEdgeCases() {
  return {
    data() {
      return { items: mockDLCEdgeCases }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        section-title="DLC Collections - Edge Cases"
        :grid-layout="true"
      />
  `,
  }
}

export function DLCEdgeCasesWithDate() {
  return {
    data() {
      return { items: mockDLCEdgeCasesWithDate }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        section-title="DLC Collections - Edge Cases with Date"
        :grid-layout="true"
      />
  `,
  }
}

export function FTVAEventDetail() {
  return {
    data() {
      return { items: mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        section-title="section title here"
        :grid-layout="false"
      />
  `,
  }
}

export function FTVAEventSeries() {
  return {
    data() {
      return { items: parsedFTVAEventSeries }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        :grid-layout="false"
      />
  `,
  }
}

export function FTVABlogSeries() {
  return {
    data() {
      return { items: parsedFTVABlogSeries }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        :grid-layout="false"
      />
  `,
  }
}

const mockCollectionItems = [
  {
    title: 'Test Collection Item: \'Event Audio Recordings\' item w/ Video',
    slug: 'test-collection-item-for-archive-events-audio-recordings-2-2-2-2',
    ftvaImage: [
      {
        id: '3156835',
        src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
        alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    videoEmbed: null,
    sectionHandle: 'ftvaItemInCollection'
  },
  {
    title: 'Test Collection Item 4: Another \'Event Audio Recordings\' item w/ Video',
    slug: 'test-collection-item-for-archive-events-audio-recordings-2-2-2',
    ftvaImage: [
      {
        id: '3280534',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
        height: 1664,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
        alt: 'many hot air balloons in the air',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    videoEmbed: '<figure><iframe style="width:500px;height:281px;" src="//www.youtube.com/embed/C5osK7kvRGk" frameborder="0"></iframe></figure>',
    sectionHandle: 'ftvaItemInCollection'
  },
  {
    title: 'Test Collection Item 2: \'Event Audio Recordings\' item w/ Image, No video',
    slug: 'test-collection-item-for-archive-events-audio-recordings-2-2',
    ftvaImage: [
      {
        id: '3701680',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
        height: 1920,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
        alt: 'Image alt text here',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    videoEmbed: null,
    sectionHandle: 'ftvaItemInCollection'
  },
  {
    title: 'Test Collection Item: \'Event Audio Recordings\' item w/ Video',
    slug: 'test-collection-item-for-archive-events-audio-recordings-2-2-2-2',
    ftvaImage: [
      {
        id: '3156835',
        src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
        alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    videoEmbed: null,
    sectionHandle: 'ftvaItemInCollection'
  },
]

const parsedFTVACollectionItems = mockCollectionItems.map((item) => {
  return {
    ...item,
    to: item.slug, // might be item.uri in actual data
    image: item.ftvaImage[0]
  }
})

export function FTVACollectionItems() {
  return {
    data() {
      return { items: parsedFTVACollectionItems }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        :grid-layout="false"
      />
  `,
  }
}

export function FTVAHorizontalScrollCardWithImage() {
  return {
    data() {
      return { items: parsedFTVACollectionItems }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard, ScrollWrapper },
    template: `
    <scroll-wrapper>
      <section-teaser-card
        :items="items"
      />
    </scroll-wrapper>
  `,
  }
}

const mockCollectionListings = [
  {
    title: 'Latin American Institute',
    uri: 'test-collection-item-for-archive-events-audio-recordings-2-2-2-2',
    text: 'A complex history of representations related to Indigenous peoples within the commercial mainstream media spanning from the 1800s till now.',
    ftvaCollectionType: [
      'motionPicture',
      'television',
      'watchAndListenOnline'
    ],
    ftvaImage: [
      {
        id: '3156835',
        src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
        alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    title: 'Native American, American, Indian and First Nations Film and Television',
    uri: 'test-collection-item-for-archive-events-audio-recordings-2-2-2',
    text: 'A complex history of representations related to Indigenous peoples within the commercial mainstream media spanning from the 1800s till now.',
    ftvaCollectionType: [
      'motionPicture',
      'television',
    ],
    ftvaImage: [
      {
        id: '3280534',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
        height: 1664,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
        alt: 'many hot air balloons in the air',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    title: 'Robert Abel & Associates',
    uri: 'test-collection-item-for-archive-events-audio-recordings-2-2',
    text: 'During their most prolific period, RA&A’s unique design aesthetic and innovative Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ftvaCollectionType: [
      'motionPicture',
      'watchAndListenOnline'
    ],
    ftvaImage: [
      {
        id: '3701680',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
        height: 1920,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
        alt: 'Image alt text here',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
  },
  {
    title: 'Test Collection Listing Item 4 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    uri: 'test-collection-item-for-archive-events-audio-recordings-2-2-2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ftvaCollectionType: [
      'motionPicture',
      'watchAndListenOnline',
    ],
    ftvaImage: [
      {
        id: '3280534',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Todd-Solondz_2024-07-04-073854_jbqd.jpg',
        height: 1664,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Todd-Solondz_2024-07-04-073854_jbqd.jpg 2560w',
        alt: 'Todd Solondz',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    title: 'Test Collection Listing Item 5 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    uri: 'test-collection-item-for-archive-events-audio-recordings-2-2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ftvaCollectionType: [
      'television'
    ],
    ftvaImage: [
      {
        id: '3701680',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
        height: 1920,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
        alt: 'A woman writing on a window.',
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
  },
]

const parsedFTVACollectionListings = mockCollectionListings.map((item) => {
  return {
    ...item,
    to: item.uri,
    image: item.ftvaImage[0]
  }
})

export function FTVACollectionListings() {
  return {
    data() {
      return { items: parsedFTVACollectionListings }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <component is="style" type="text/css">
        .ftva.block-highlight.is-vertical.card,
        .ftva.block-highlight.is-vertical.card .media {
          border-radius: 0;
        }

        .ftva.block-highlight.is-vertical.card:hover {
          box-shadow: none;
        }

        @media(min-width: 991px){
          .ftva.block-highlight.is-vertical.card {
            height: 550px;
          }
        }
      </component>
      <section-teaser-card
        :items="items"
      />
  `,
  }
}

const parsedFTVACollectionListingsCustomDate = mockCollectionListings.map((item) => {
  return {
    title: item.title,
    to: item.uri,
    image: item.ftvaImage[0],
    customDateTime: 'c. 1942' // random number?
  }
})

export function FTVACollectionListingsCustomDate() {
  return {
    data() {
      return { items: parsedFTVACollectionListingsCustomDate }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
  }
}
