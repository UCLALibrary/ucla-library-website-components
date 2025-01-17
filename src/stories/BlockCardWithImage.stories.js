import { computed } from 'vue'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Card With Image',
  component: BlockCardWithImage,
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
  bylineOne: null,
  bylineTwo: null,
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
      :date-created="dateCreated"
      :byline-one="bylineOne"
      :byline-two="bylineTwo"
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

export const FTVAItems = Template.bind({})
FTVAItems.args = {
  title: 'FTVA CardWithImage Step Up 3D',
  category: null,
  theme: 'ftva',
  to: '/some/url/here/',
  alternativeFullName: null,
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: null,
  text: '',
  imageAspectRatio: 60,
  sectionHandle: '',
  locations: [],
  cardIsLink: true
}

export const FTVAItemsNoImage = Template.bind({})
FTVAItemsNoImage.args = {
  image: null,
  title: 'FTVA CardWithImage with NO image Step Up 3D (2010) Sequel to Step Up 2: The Streets and the third installment in the Step Up film series',
  category: null,
  theme: 'ftva',
  to: '/some/url/here/',
  alternativeFullName: null,
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: null,
  text: '',
  imageAspectRatio: 60,
  sectionHandle: '',
  locations: [],
  cardIsLink: true
}

export const FTVAItemsPostedDate = Template.bind({})
FTVAItemsPostedDate.args = {
  image: null,
  title: 'Black Perspectives on Local L.A. TV',
  category: null,
  theme: 'ftva',
  to: '/some/url/here/',
  alternativeFullName: null,
  startDate: null,
  endDate: null,
  text: '',
  imageAspectRatio: 60,
  sectionHandle: '',
  locations: [],
  cardIsLink: true,
  dateCreated: '2022-01-31T07:00:00+00:00',
}

const mockCustomTitleAndDesription = {
  title: "Preserving “In Transit: The Chinese in California”",
  startDate: "2024-05-07T13:00:00-07:00",
  ftvaHomepageDescription: "<p>In the summer of 2023, I had the chance to select and restore a student film as part of the UCLA Student Film Initiative Internship: The Present Preserving the Past.</p>",
  uri: "blog/preserving-in-transit-the-chinese-in-california",
  ftvaImage: [
    {
      id: "3619987",
      src: "https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/In_Transit_blog2.jpeg",
      height: 1813,
      width: 2560,
      srcset: "https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 2560w",
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    }
  ]
}

// export function FtvaCustomTitleAndDesription() {
//   return {
//     data() {
//       return {
//         ...mockCustomTitleAndDesription,
//       }
//     },
//     provide() {
//       return {
//         theme: computed(() => 'ftva'),
//       }
//     },
//     components: { CardMeta, RichText },
//     template: `
//       <block-card-with-image
//         image: API.image,
//         to: '/visit/foo/bar/',
//         title: 'Seven seas of the ancient world',
//         startDate: '2022-03-31T07:00:00+00:00',
//         >
//         <card-meta>
//           <template v-slot:title>
//             <RichText  v-html="ftvaFeaturedArticles[0].title" />
//           </template>

//           <template v-slot:description>
//             <RichText v-html="ftvaFeaturedArticles[0].ftvaHomepageDescription" />
//           </template>
//         </card-meta>
//       </block-card-with-image>
//     `,
//   }
// }

function TemplateFTVACustomTitleDescription(args) {
  return {
    data() {
      return {
        ...mockCustomTitleAndDesription,
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
      :start-date="startDate"
      :image-aspect-ratio="imageAspectRatio"
      >
      <template #title>
        <RichText v-html="title" />
      </template>

      <template #description>
        <RichText v-html="ftvaHomepageDescription" />
      </template>
    </block-card-with-image>
`,
  }
}

export const Default2= TemplateFTVACustomTitleDescription.bind({})
