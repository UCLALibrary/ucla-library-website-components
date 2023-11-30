import CardMeta from '@/lib-components/CardMeta'

// Storybook default settings
export default {
  title: 'Card Meta',
  component: CardMeta
}

const mock = {
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: '2021-11-26T11:00:00-08:00',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>',
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mock }
    },
    components: { CardMeta },
    template: `
      <card-meta
          :to="to"
          :category="category"
          :title="title"
          :start-date="startDate"
          :end-date="endDate"
          :text="text"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}

export function Ongoing() {
  return {
    data() {
      return { ...mock }
    },
    components: { CardMeta },
    template: `
      <card-meta
          :to="to"
          :category="category"
          :title="title"
          :ongoing=true
          :text="text"
          :locations="locations"
          :alternativeFullName="alternativeFullName"
          :language="language"
          :section-handle="sectionHandle"
      />
  `,
  }
}
