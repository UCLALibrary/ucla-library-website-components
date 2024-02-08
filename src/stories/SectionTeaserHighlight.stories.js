// Import component
import SectionTeaserHighlight from '@/lib-components/SectionTeaserHighlight'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Teaser / Highlight',
  component: SectionTeaserHighlight,
}

const mock = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'Ultricies leo integer malesuada nunc vel risus commodo viverra.',
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    category: 'Aliquam Varius',
    title: 'Pretium magna eget dignissim placerat arcu velit et metus',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'workshopOrEventSeries',
    locations: [
      { title: 'Powellarium', to: '/location/bar' },
      {
        title: 'Research Library (Charles E. Young)',
        to: '/location/baz',
      },
    ],
    text: 'Pellentesque molestie, est ut vestibulum convallis, velit ante auctor mauris, sed mattis dolor ante ac purus. Nullam egestas neque sed ullamcorper suscipit.',
  },
  {
    image: API.image,
    to: '/visit/foo/bar/',
    category: 'Sagittis',
    title: 'Auctor Ligula',
    startDate: '2021-01-03T08:00:00+00:00',
    endDate: '2021-02-08T07:10:00+00:00',
    sectionHandle: 'event',
    locations: [
      { title: 'Online', to: '/location/bar' },
      {
        title: 'Research Library (Charles E. Young)',
        to: '/location/baz',
      },
    ],
    text: 'Proin sit amet leo eros. Pellentesque luctus tortor eu aliquet tristique. Proin fringilla enim eget sagittis mattis. Praesent faucibus libero ipsum.',
  },
  {
    image: API.image,
    to: '/visit/foo/buzz/',
    category: 'Tristique',
    title: 'Amet nisl suscipit adipiscing bibendum lectus sed',
    startDate: '2021-09-03T08:00:00+00:00',
    endDate: '2021-10-08T07:10:00+00:00',
    sectionHandle: 'event',
    text: 'A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.',
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
    components: { SectionTeaserHighlight },
    template: `
      <section-teaser-highlight
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
    components: { SectionTeaserHighlight },
    template: `
      <section-teaser-highlight
        :items="items"
      />
  `,
  }
}
