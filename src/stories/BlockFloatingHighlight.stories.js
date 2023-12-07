import BlockFloatingHighlight from '@/lib-components/BlockFloatingHighlight'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Floating Highlight',
  component: BlockFloatingHighlight
}

const mock = {
  image: API.image,
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  startDate: '2021-03-31T07:00:00+00:00',
  endDate: '2021-11-26T11:00:00-08:00',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the Aegean, Adriatic, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf</p>',
  imageAspectRatio: 60,
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
}

function Template(args) {
  return {
    data() {
      return {
        ...mock,
        ...args,
      }
    },
    components: { BlockFloatingHighlight },
    template: `
    <block-floating-highlight
      :image="image"
      :to="to"
      :category="category"
      :title="title"
      :start-date="startDate"
      :end-date="endDate"
      :text="text"
      :image-aspect-ratio="imageAspectRatio"
      :locations="locations"
      :alternativeFullName="alternativeFullName"
      :language="language"
      :section-handle="sectionHandle"
    />
`,
  }
}

export const Default = Template.bind({})

export const About = Template.bind({})
About.args = {
  image: null,
  to: '/about/foo/bar/',
}

export const ShortTitle = Template.bind({})
ShortTitle.args = {
  title: 'Seven Seas'
}

export const LongTitleNoDate = Template.bind({})
LongTitleNoDate.args = {
  title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  startDate: '',
  endDate: '',
}

export const LongTitleNoDateNoEyebrow = Template.bind({})
LongTitleNoDateNoEyebrow.args = {
  title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  startDate: '',
  endDate: '',
  category: '',
}
