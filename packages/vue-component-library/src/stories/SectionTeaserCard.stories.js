import { computed } from 'vue'

// Import component
import { parsedFTVABlogSeries } from './mock/FTVAMedia'
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'

// Import mock api data
import * as API from '@/stories/mock-api.json'

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
    startDate: '2027-03-31T07:00:10+05:00',
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
    startDate: '2028-07-31T07:00:03+00:02',
    sectionHandle: 'ftvaEvent',
    image: null
  },
  {
    id: '3145784',
    to: 'events/step-up-2-07-07-25',
    title: 'TEST - Step Up 2: The Streets (2008)',
    startDate: '2026-10-31T07:00:00+00:00',
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
  }
]
const parsedFTVACollectionItems = mockCollectionItems.map((item) => {
  return {
    ...item,
    to: item.slug, // might be item.uri in actual data
    image: item.ftvaImage[0]
  }
})
export function FTVAMoreCollectionItems() {
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
      />
  `,
  }
}
