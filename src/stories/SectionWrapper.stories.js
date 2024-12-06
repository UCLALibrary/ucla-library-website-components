import { computed } from 'vue'

// Import component
import { mock as mockMediaWithText } from './mock/BlockMediaWithText'
import * as API from '@/stories/mock-api.json'
import SectionWrapper from '@/lib-components/SectionWrapper'

import BlockMediaWithText from '@/lib-components/BlockMediaWithText'
import DividerWayFinder from '@/lib-components/DividerWayFinder'
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'
import SectionTeaserList from '@/lib-components/SectionTeaserList.vue'
import SectionStaffArticleList from '@/lib-components/SectionStaffArticleList'
import SmartLink from '@/lib-components/SmartLink.vue'
import TabItem from '@/lib-components/TabItem.vue'
import TabList from '@/lib-components/TabList.vue'

const propsForMediaWithText = {
  sectionHeader: mockMediaWithText.mediaWithText[0].titleLink,
  shortDescription: mockMediaWithText.mediaWithText[0].description,
  buttonText: mockMediaWithText.mediaWithText[0].buttonText,
  buttonUrl: mockMediaWithText.mediaWithText[0].buttonUrl,
  mediaLink: mockMediaWithText.mediaWithText[0].linkToMedia,
  item: mockMediaWithText.mediaWithText[0].coverImage,
  typeMedia: mockMediaWithText.mediaWithText[0].typeMedia,
}

// Storybook default settings
export default {
  title: 'Section Wrapper',
  component: SectionWrapper,
}

export function Default() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
  }
}

// Mocks UCLA Library Home page News section data
const mockDefaultHome = [{
  sectionHandle: 'news',
  title: 'La Bpo',
  text: '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
  to: 'https://www.library.ucla.edu',
  ongoing: false,
  externalResourceUrl: null,
  category: 'Featured, Collections',
  startDate: '2023-02-07T15:54:00-08:00',
  endDate: '2023-02-07T15:54:00-08:00',
  postDate: '2023-02-07T15:54:00-08:00',
}, {
  sectionHandle: 'news',
  title: 'La Bpo',
  text: '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
  to: 'https://www.library.ucla.edu',
  ongoing: false,
  externalResourceUrl: null,
  category: 'Featured, Collections',
  startDate: '2023-02-07T15:54:00-08:00',
  endDate: '2023-02-07T15:54:00-08:00',
  postDate: '2023-02-07T15:54:00-08:00',
}, {
  sectionHandle: 'news',
  title: 'La Bpo',
  text: '<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>',
  to: 'https://www.library.ucla.edu',
  ongoing: false,
  startDate: '2023-02-07T15:54:00-08:00',
  endDate: '2023-02-07T15:54:00-08:00',
  postDate: '2022-06-21T12:39:00-07:00'
}]
export function DefaultHome() {
  return {
    data() {
      return {
        mockDefaultHome
      }
    },
    provide() {
      return {
        theme: computed(() => ''), // default theme
      }
    },
    components: { SectionWrapper, SectionTeaserCard },
    template: `
      <section-wrapper>
        <section-teaser-card :items="mockDefaultHome" />
      </section-wrapper>
  `,
  }
}

export function NoMeta() {
  return {
    data() {
      return {
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper>
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
`,
  }
}

export function GrayTheme() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText },
    template: `
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary" theme="gray">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
  `,
  }
}

export function Nested() {
  return {
    components: { SectionWrapper },
    template: `
    <section-wrapper sectionTitle="level 2 (auto)">
        <section-wrapper sectionTitle="level 3 (auto)">
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)">
            <section-wrapper sectionTitle="level 4 (auto)" />
        </section-wrapper>
        <section-wrapper sectionTitle="level 3 (auto)" />
        <section-wrapper level=6 sectionTitle="level 6 (via prop)">
            <section-wrapper sectionTitle="level 7 (auto)" />
        </section-wrapper>
    </section-wrapper>
  `,
  }
}

export function Divider() {
  return {
    data() {
      return {
        sectionTitle: 'Section Title',
        sectionSummary:
                '<p><strong>Section Summary with Rich Text</strong> Lorem ipsum dolor <a href="https://fonts.google.com/featured" target="_blank" rel="noreferrer noopener">reprehenderit in voluptate.</a> <em>Ut enim ad minim veniam.</em> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>',
        propsForMediaWithText,
      }
    },
    components: { SectionWrapper, BlockMediaWithText, DividerWayFinder },
    template: `
    <div>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    <section-wrapper theme="divider">
        <divider-way-finder color="help" />
    </section-wrapper>
    <section-wrapper :sectionTitle="sectionTitle" :sectionSummary="sectionSummary">
      <block-media-with-text v-bind="propsForMediaWithText" />
    </section-wrapper>
    </div>
  `,
  }
}
const mockFtva = [
  {
    id: '2847944',
    to: 'events/la-région-centrale-03-08-24',
    title: 'TEST - La Région Centrale Screening',
    startDate: '2027-03-31T07:00:00+00:00',
    endDate: null,
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
    image: null
  },
  {
    id: '3145784',
    to: 'events/step-up-2-07-07-25',
    title: 'TEST - Step Up 2: The Streets (2008)',
    startDate: '2026-03-31T07:00:00+00:00',
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

export function FtvaUpcomingEvents() {
  return {
    data() {
      return {
        parsedFtvaEventSeries: mockFtva
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, SectionTeaserCard },
    template: `
      <SectionWrapper
        section-title="Upcoming events in this series"
        theme="paleblue"
      >
        <SectionTeaserCard

          :items="parsedFtvaEventSeries"
        />
      </SectionWrapper>
  `,
  }
}

const mockFtvaSeries = [
  {
    to: 'series/todd-solondz-series',
    title: 'TEST - Todd Solondz Series',
    startDate: '2025-11-06T08:00:00+00:00',
    endDate: '2025-12-13T08:00:00+00:00',
    ongoing: true,
    sectionHandle: 'ftvaEventSeries',
    image:
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
      },
  },
  {
    to: 'series/step-up-series',
    title: 'TEST Series: The Step Up Movie Series',
    startDate: '2025-11-07T08:00:00+00:00',
    endDate: '2025-12-20T08:00:00+00:00',
    ongoing: false,
    sectionHandle: 'ftvaEventSeries',
    image:
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
        ],
      },
  },
  {
    to: 'series/series-with-3-upcoming-events',
    title: 'Series with 3 upcoming events',
    startDate: '2026-01-01T08:00:00+00:00',
    endDate: '2026-03-31T07:00:00+00:00',
    ongoing: false,
    image: null,
    sectionHandle: 'ftvaEventSeries'
  },
]

export function FtvaSeries3Cards() {
  return {
    data() {
      return {
        parsedFtvaEventSeries: mockFtvaSeries
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, SectionTeaserCard, SmartLink },
    template: `
      <SectionWrapper
        section-title="Explore Other Series"
        theme="white"
      >
        <template v-slot:top-right>
          <smart-link
            to="/somelink"
          >
            View All Series <span style="font-size:1.5em;"> &#8250;</span>
          </smart-link>

        </template>
        <SectionTeaserCard

          :items="parsedFtvaEventSeries"
        />
      </SectionWrapper>
  `,
  }
}

export function FtvaSeries2Cards() {
  return {
    data() {
      return {
        parsedFtvaEventSeries: mockFtvaSeries.slice(1)
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, SectionTeaserCard, SmartLink },
    template: `
      <SectionWrapper
        section-title="Explore Other Series"
        theme="white"
      >
        <template v-slot:top-right>
          <smart-link
            to="/somelink"
          >
            View All Series <span style="font-size:1.5em;"> &#8250;</span>
          </smart-link>

        </template>
        <SectionTeaserCard

          :items="parsedFtvaEventSeries"
        />
      </SectionWrapper>
  `,
  }
}

const mockUpcomingEvents = [
  {
    sectionHandle: 'ftvaEvent',
    to: 'events/la-région-centrale-03-08-24',
    title: 'TEST - La Région Centrale Screening',
    startDateWithTime: '2027-03-09T03:30:00+00:00',
    startDate: '2027-03-08',
    startTime: 'PST19:30:00',
    image: API.image,
    tagLabels: [
      {
        title: 'Guest speaker'
      },
      {
        title: '1.37 Dye Transfer Print'
      }
    ]
  },
  {
    sectionHandle: 'ftvaEvent',
    to: 'events/test-corpus-callosum-04-08-27',
    title: 'TEST - Corpus Callosum',
    startDateWithTime: '2027-04-09T02:30:00+00:00',
    startDate: '2027-04-08',
    startTime: 'PDT19:30:00',
    image: API.image,
    tagLabels: [
      {
        title: '35mm'
      }
    ]
  },
  {
    to: 'events/wavelength-08-22-24',
    sectionHandle: 'ftvaEvent',
    title: 'TEST - Wavelength',
    startDateWithTime: '2027-09-18T02:30:00+00:00',
    startDate: '2027-09-17',
    startTime: 'PDT19:30:00',
    image: API.image,
    tagLabels: []
  }
]

const mockPastEvents = [
  {
    sectionHandle: 'ftvaEvent',
    to: 'events/past-event-michael-snow-death-12-10-23',
    title: 'TEST - Past Event Michael Snow',
    startDateWithTime: '2023-12-10T02:00',
    startDate: '2023-12-10',
    startTime: 'PST12:00:00',
    image: API.image,
    tagLabels: [
      {
        title: '70mm'
      }
    ]
  },
  {
    sectionHandle: 'ftvaEvent',
    to: 'events/covid-vaccinations-10-12-21',
    title: 'Covid Vaccination Conies',
    startDateWithTime: '2021-10-12T07:30',
    startDate: '2021-10-12',
    startTime: 'PST07:30:00',
    image: API.image,
    tagLabels: [
      {
        title: 'Immunization'
      }
    ]
  },
]

export function FtvaTabListSectionTeaserListPastUpcoming() {
  return {
    data() {
      return {
        mockUpcomingEvents,
        mockPastEvents
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, TabItem, TabList, SectionTeaserList },
    template: `
      <SectionWrapper theme="paleblue">
        <TabList alignment="left">
          <TabItem
            title="Upcoming Events"
            class="tab-content"
          >
            <template v-if="mockUpcomingEvents && mockUpcomingEvents.length > 0">
              <!-- :n-shown="10"  this prop does not do anything if theme is ftva-->
              <SectionTeaserList
                :items="mockUpcomingEvents"
                component-name="BlockCardThreeColumn"
                :n-shown="10"
                class="tabbed-event-list"
              />
            </template>
            <template v-else>
              <p class="empty-tab">
                There are no upcoming events in this series.
              </p>
            </template>
          </TabItem>

          <TabItem
            title="Past Events"
            class="tab-content"
          >
            <template v-if="mockPastEvents && mockPastEvents.length > 0">
              <SectionTeaserList
                :items="mockPastEvents"
                component-name="BlockCardThreeColumn"
                n-shown="10"
                class="tabbed-event-list"
              />
            </template>
            <template v-else>
              <p class="empty-tab">
                There are no past events in this series.
              </p>
            </template>
          </TabItem>
        </TabList>
      </SectionWrapper>
  `,
  }
}

const mockSeries = [
  {
    id: '3455795',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Triathlon Movies',
    to: 'triathlon-movies',
    description: '<p>A <strong>triathlon</strong> is an endurance multisport race consisting of swimming, cycling, and running over various distances.<sup></sup></p>',
    image: {
      id: '3461183',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/tri_2024-11-26-230531_mgnw.jpg',
      height: 1440,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/tri_2024-11-26-230531_mgnw.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/tri_2024-11-26-230531_mgnw.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/tri_2024-11-26-230531_mgnw.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/tri_2024-11-26-230531_mgnw.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/tri_2024-11-26-230531_mgnw.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-11-22T00:00:00',
    endDate: '2024-11-22T00:00:00',
    ongoing: false
  },
  {
    id: '3454778',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Holiday Kittens',
    to: 'holiday-kittens',
    description: null,
    image: {
      id: '3454782',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg',
      height: 1707,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kittyforchristmasfeatured-1_2024-11-22-020416_isxa.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-11-19T00:00:00',
    endDate: '2024-11-21T00:00:00',
    ongoing: false
  },
  {
    id: '3440739',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Holiday Series on ONE DAY',
    to: 'holiday-series-on-one-day',
    description: '<p>Fun, non-religious Christmas movies</p>',
    image: {
      id: '3440862',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/netflix-holiday.jpg',
      height: 1440,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/netflix-holiday.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/netflix-holiday.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/netflix-holiday.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/netflix-holiday.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/netflix-holiday.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-12-23T00:00:00',
    endDate: '2024-12-23T00:00:00',
    ongoing: false
  },
  {
    id: '3370267',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Gymnastic Movie Series',
    to: 'gymnastic-movie-series',
    description: '<p>Gymnastics Movies for Kids That Inspire Athletic Dreams</p>',
    image: {
      id: '3385832',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/paris-olympics-42-gty-gmh-240730_1722364842455_hpMain_2024-10-22-191218_vple.avif',
      height: null,
      width: null,
      srcset: '',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-04-07T00:00:00',
    endDate: null,
    ongoing: true
  },
  {
    id: '3260303',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'A Film Series for You: Celebrating Giant Robot‚Äôs 30th Anniversary',
    to: 'a-film-series-for-you-celebrating-giant-robot-äôs-30th-anniversary',
    description: 'This deep into the post-print era it may be hard for some to understand how something as ephemeral as a magazine could change the world. That may be especially true when the magazine hasn‚Äôt been in print for over a decade. But from its first issue as a Xeroxed zine in 1994 to its final run as a full-page glossy in 2011, Giant Robot did just that. Founded by UCLA alumni Eric Nakamura, Giant Robot began, simply enough, as a vehicle for Nakamura and co-editor Martin Wong to write about the stuff they liked ‚Äî whether other people liked it or not. Its first three issues featured articles on sumo wrestling, underground filmmaker Jon Moritsugu, Hello Kitty, Hong Kong movie soundtracks, Pizzicato Five and the delights of Southern California‚Äôs Cambodian-run donut shops. Mixed in with the reviews and profiles were personal essays about being Asian American in a wider culture that didn‚Äôt know or care about any of those things. Steeped in Nakamura‚Äôs DIY, punk rock ethic, Giant Robot quickly attracted a like-minded readership. Its eclectic focus on alternative Asian and Asian American culture was so fresh and so unique that many of the artists, filmmakers, musicians and writers that it profiled, such as Daniel Wu and Ayako Fujitani, asked to become contributors themselves. Maggie Cheung, Jenny Shimizu, Jet Li and Margaret Cho graced its cover as well as work by visual artists such as Yoshitomo Nara and Takashi Murakami. Before its run was over, what Giant Robot thought was cool when no else did ‚Äî ramen, Jackie Chan, Japanese candy ‚Äî was suddenly everywhere. The magazine‚Äôs work and spirit lives on at the Giant Robot retail store on Sawtelle Blvd. in Los Angeles and the GR2 art gallery across the street. The Archive is thrilled to celebrate Giant Robot‚Äôs history and legacy with this special film series co-curated with Eric Nakamura.',
    image: {
      id: '3260302',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Tekkon_Kinkreet_crop.jpeg',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Tekkon_Kinkreet_crop.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Tekkon_Kinkreet_crop.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Tekkon_Kinkreet_crop.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Tekkon_Kinkreet_crop.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Tekkon_Kinkreet_crop.jpeg 2560w',
      alt: 'An animated scene of a boy sitting on an electrical pole and overlooking a city.',
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-11-01T19:30:00',
    endDate: '2024-11-22T00:00:00',
    ongoing: false
  },
  {
    id: '3260307',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Border Wars',
    to: 'border-wars',
    description: null,
    image: {
      id: '3461200',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/border-hh_2024-11-26-230828_lxem.webp',
      height: 1587,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/border-hh_2024-11-26-230828_lxem.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/border-hh_2024-11-26-230828_lxem.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/border-hh_2024-11-26-230828_lxem.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/border-hh_2024-11-26-230828_lxem.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/border-hh_2024-11-26-230828_lxem.webp 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-10-26T19:30:00',
    endDate: '2024-10-26T19:30:00',
    ongoing: false
  },
  {
    id: '3260314',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Silent Movie Day',
    to: 'silent-movie-day',
    description: null,
    image: {
      id: '3461192',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/blacknumbers2_2024-11-26-230718_assa.jpg',
      height: 1438,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/blacknumbers2_2024-11-26-230718_assa.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/blacknumbers2_2024-11-26-230718_assa.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/blacknumbers2_2024-11-26-230718_assa.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/blacknumbers2_2024-11-26-230718_assa.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/blacknumbers2_2024-11-26-230718_assa.jpg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-10-06T19:00:00',
    endDate: '2024-10-06T19:00:00',
    ongoing: false
  },
  {
    id: '3260317',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'Summer Sci-Fi',
    to: 'summer-sci-fi',
    description: 'In advance of its major fall series, Science Fiction Against the Margins, presented as part of the Getty‚Äôs region-wide initiative, PST ART: Art &amp; Science Collide, the Archive is pleased to whet your appetite with a selection of independent films that have helped to push the science fiction genre into new frontiers. While these films represent a wide range of visual styles and thematic concerns, from cult classics to recent masterpieces, they are connected in a shared ethos that low budgets aren‚Äôt anathema to expansive visions.',
    image: {
      id: '3260316',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/Animalia-crop.png',
      height: 1920,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/Animalia-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/Animalia-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/Animalia-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/Animalia-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/Animalia-crop.png 2560w',
      alt: 'A person looking up at dark, cloud-filled sky.',
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-08-03T19:30:00',
    endDate: '2024-08-18T19:00:00',
    ongoing: false
  },
  {
    id: '3197319',
    typeHandle: 'eventSeries',
    sectionHandle: 'ftvaEventSeries',
    title: 'TEST - X-Ray Vision - Series with one old and 2 new events',
    to: 'series-with-one-old-and-2-new-events',
    description: null,
    image: {
      id: '3461136',
      src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/xray-1_2024-11-26-225648_wmke.jpeg',
      height: 3840,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/xray-1_2024-11-26-225648_wmke.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/xray-1_2024-11-26-225648_wmke.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/xray-1_2024-11-26-225648_wmke.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/xray-1_2024-11-26-225648_wmke.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/xray-1_2024-11-26-225648_wmke.jpeg 2560w',
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    },
    startDate: '2024-08-08T00:00:00',
    endDate: null,
    ongoing: true
  }
]

export function FtvaSeriesListing() {
  return {
    data() {
      return {
        mockSeries
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, SectionStaffArticleList, TabItem, TabList },
    template: `
      <SectionWrapper
        section-title="Screening Series"
        section-summary="Discover the magic of our Upcoming Series, where we curate an immersive experience that transcends time and genre. From classic masterpieces to cutting-edge contemporary works, our series showcase the diverse voices and visions that have shaped the evolution of visual storytelling."
        theme="paleblue"
      >

        <TabList alignment="center">
          <TabItem
            title="Past Series"
            class="tab-content"
          >
            <template v-if="mockSeries.length > 0">
              <SectionStaffArticleList
                :items="mockSeries"
              />
            </template>
          </TabItem>

          <TabItem
            title="Current and Upcoming Series"
            class="tab-content"
          >
            <template v-if="mockSeries.length > 0">
              <SectionStaffArticleList
                :items="mockSeries"
              />
            </template>
          </TabItem>
        </TabList>
      </SectionWrapper>
  `,
  }
}
