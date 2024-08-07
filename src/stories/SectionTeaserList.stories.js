import SectionTeaserList from '@/lib-components/SectionTeaserList'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Teaser / List',
  component: SectionTeaserList,
}

const mock = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },
  {
    image: API.image,
    to: '/visit/foo/baz/',
    category: 'Sagittis',
    title: 'Amet nisl suscipit adipiscing bibendum lectus sed',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.',
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    category: 'Tincidunt',
    title: 'Scelerisque varius morbi enim nunc ornare quam',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.',
  },
  {
    image: API.image,
    to: '/visit/foo/ban/',
    category: 'Gravida',
    title: 'At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Accumsan tortor posuere ac ut consequat semper viverra libero.',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },
]

const mixedOngoingEvents = [
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
  },

  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
    sectionHandle: 'event',
    ongoing: true,
  },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionTeaserList },
    template: `
      <section-teaser-list
        :items="items"

      />
  `,
  }
}

export function Expandable() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionTeaserList },
    template: `
      <section-teaser-list
        :items="items"
      />
  `,
  }
}

export function MixedOngoingEvents() {
  return {
    data() {
      return { items: mixedOngoingEvents }
    },
    components: { SectionTeaserList },
    template: `
      <section-teaser-list
        :items="items"
      />
  `,
  }
}
