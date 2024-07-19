import { computed } from 'vue'

// Import component
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Teaser / Card',
  component: SectionTeaserCard,
}

const mock = [
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
    image: API.image,
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

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
  }
}

export function FTVAWithSectionTitle() {
  return {
    data() {
      return { items: mock }
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
