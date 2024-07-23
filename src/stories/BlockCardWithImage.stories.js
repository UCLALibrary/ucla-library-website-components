import { computed } from 'vue'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Card With Image',
  component: BlockCardWithImage
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

function Template(args) {
  return {
    data() {
      return {
        ...mock,
        ...args,
      }
    },
    provide() {
      return {
        theme: computed(() => args.theme ? args.theme : ''),
      }
    },
    components: { BlockCardWithImage },
    template: `
    <block-card-with-image
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

export const ShortTitle = Template.bind({})
ShortTitle.args = {
  title: 'Seven Seas'
}

export const LongTitle = Template.bind({})
LongTitle.args = {
  title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
}

export const TallImage = Template.bind({})
TallImage.args = {
  title: 'Test Other Image Sizes',
  image: { ...API.image, src: 'https://via.placeholder.com/1080x1920', height: 1920, width: 1920, },
  imageAspectRatio: 150
}

export const FTVAEventDetailPage = Template.bind({})
FTVAEventDetailPage.args = {
  title: 'FTVA CardWithImage using their styles',
  category: '',
  theme: 'ftva',
  to: '/some/url/here/',
  alternativeFullName: '',
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: '',
  text: '3 episodes',
  imageAspectRatio: 60,
  sectionHandle: '',
  locations: [],
  cardIsLink: true
}
