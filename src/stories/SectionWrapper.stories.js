import { computed } from 'vue'

// Import component
import { mock as mockMediaWithText } from './mock/BlockMediaWithText'
import * as API from '@/stories/mock-api.json'
import SectionWrapper from '@/lib-components/SectionWrapper'

import BlockMediaWithText from '@/lib-components/BlockMediaWithText'
import DividerWayFinder from '@/lib-components/DividerWayFinder'
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'
import SectionTeaserList from '@/lib-components/SectionTeaserList.vue'
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
