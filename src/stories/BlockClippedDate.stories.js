import { computed } from 'vue'

import BlockClippedDate from '@/lib-components/BlockClippedDate'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Clipped Date',
  component: BlockClippedDate
}

const mock = {
  image: API.image,
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: '2021-11-26T11:00:00-08:00',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>',
  imageAspectRatio: 60,
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
}

const ongoing = {
  image: API.image,
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>',
  imageAspectRatio: 60,
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
}

const mockFtva = {
  to: "series/todd-solondz-series",
  title: "TEST - Todd Solondz Series",
  startDate: "2025-11-06T08:00:00+00:00",
  endDate: "2025-12-13T08:00:00+00:00",
  ongoing: false,
  image: API.image,
}
  // {
  //   uri: "series/series-with-3-upcoming-events",
  //   title: "Series with 3 upcoming events",
  //   startDate: "2026-01-01T08:00:00+00:00",
  //   endDate: "2026-03-31T07:00:00+00:00",
  //   ongoing: false,
  //   ftvaImage: []
  // }
// }

export function Default() {
  return {
    data() {
      return { ...mock }
    },
    components: { BlockClippedDate },
    template: `
      <block-clipped-date
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}

export function OngoingEvent() {
  return {
    data() {
      return { ...ongoing }
    },
    components: { BlockClippedDate },
    template: `
      <block-clipped-date
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :ongoing=true
          :text="text"
          :image-aspect-ratio="60"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}

export function FtvaThreeColumn() {
  return {
    data() {
      return { ...mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockClippedDate },
    template: `
      <block-clipped-date
          :image="image"
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :image-aspect-ratio="60"
      />
  `,
  }
}
