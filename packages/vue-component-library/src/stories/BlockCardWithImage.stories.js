import { computed } from 'vue'
import IconFTVAVideo from 'ucla-library-design-tokens/assets/svgs/icon-ftva-video.svg'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'
import RichText from '@/lib-components/RichText.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'
import BlockTag from '@/lib-components/BlockTag.vue'

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
        :color="color"
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

// FTVA Custom Title And Description
const mockCustomTitleAndDesription = {
  category: 'Interview, People',
  title: '<h3>Preserving <em>In <strong>Transit</strong>:</em> The Chinese in California</h3>',
  postDate: '2024-05-07T13:00:00-07:00',
  ftvaHomepageDescription: '<p>Three alumni student films, made in the <strong>1970s-1980s</strong>, were preserved over a 10-week period by current MLIS student interns, all under the supervision of UCLA Film & Television Archive staff.</p>',
  uri: 'blog/preserving-in-transit-the-chinese-in-california',
  image: API.image,
}

function TemplateFTVACustomTitleAndDescription(args) {
  return {
    data() {
      return {
        ...mockCustomTitleAndDesription,
        ...args,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage, RichText, SmartLink },
    template: `
      <block-card-with-image
        class="block-highlight"
        :image="image"
        :category="category"
        :dateCreated="postDate"
        :image-aspect-ratio="imageAspectRatio"
        :card-is-link="true"
        >
        // To be able to view the link here in storybook we are using v-html & smart-link
        // See note below for how to use this on the page
        <template #customTitle>
          <smart-link :to="uri">
            <rich-text class="custom-title" v-html="title" />
          </smart-link>
        </template>

        // To be able to view this here in storybook we are using v-html
        // See note below for how to use this on the page
        <template #customDescription>
          <rich-text v-html="ftvaHomepageDescription" />
        </template>

      </block-card-with-image>
    `,
  }
}
        // ON THE PAGE USE IT THIS WAY

        // <template #customTitle>
        //   <NuxtLink :to="article.to" class="custom-title">
        //     <RichText :rich-text-content="article.title" />
        //   </NuxtLink>

        // <template #customDescription>
        //   <RichText class="custom-description" :rich-text-content="page.hearstDescription" />
        // </template>

export const FTVACustomTitleAndDescription = TemplateFTVACustomTitleAndDescription.bind({})

// FTVA Custom Description Only Internal Link
function TemplateFTVACustomDescriptionOnlyInternalLink(args) {
  return {
    data() {
      return {
        ...mockCustomTitleAndDesription,
        ...args,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage, RichText, SmartLink },
    template: `

      <block-card-with-image
        class="block-highlight"
        style="cursor: pointer"
        :image="image"
        :image-aspect-ratio="imageAspectRatio"
        :card-is-link="true"
        :to="uri"
        >

        <template #customDescription>
          <RichText class="custom-description" v-html="ftvaHomepageDescription" />
        </template>
      </block-card-with-image>
    `,
  }
}
        // ON THE PAGE USE IT THIS WAY

        // <template #customDescription>
        //   <RichText class="custom-description" v-html="ftvaHomepageDescription" />
        // </template>

        // // DON't do this:
        // <smart-link :to="uri">
        // <template #customDescription>
        //   <rich-text v-html="ftvaHomepageDescription" />
        // </template>

export const FTVACustomDescriptionOnlyInternalLink = TemplateFTVACustomDescriptionOnlyInternalLink.bind({})

// FTVA Custom Description Only External Link
function TemplateFTVACustomDescriptionOnlyExternalLink(args) {
  return {
    data() {
      return {
        ...mockCustomTitleAndDesription,
        ...args,
        uri: "https://newsreels.net/",
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage, RichText, SmartLink },
    template: `

      <block-card-with-image
        class="block-highlight"
        style="cursor: pointer"
        :image="image"
        :image-aspect-ratio="imageAspectRatio"
        :card-is-link="true"
        :to="uri"
        >

        <template #customDescription>
          <RichText :rich-text-content="ftvaHomepageDescription" />
        </template>
      </block-card-with-image>
    `,
  }
}

export const FTVACustomDescriptionOnlyExternalLink = TemplateFTVACustomDescriptionOnlyExternalLink.bind({})

// FTVA Article Blog Listing
const mockArticles = [
  {
    ftvaAlternativeTitle: '<h3><em>Preserving In Transit:</em> The Chinese in California</h3>',
    articleCategories: [
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    postDate: '2024-05-07T13:00:00-07:00',
    ftvaHomepageDescription: '<p>Three alumnis student films, made in the <strong>1970s-1980s</strong>, were preserved over a 10-week period by current MLIS student interns, all under the supervision of UCLA Film &amp; Television Archive staff.</p>',
    uri: 'blog/preserving-in-transit-the-chinese-in-california',
    image: API.image,
    ftvaImage: [
      {
        id: '3619987',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/In_Transit_blog2.jpeg',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/In_Transit_blog2.jpeg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    ftvaAlternativeTitle: '<h3>From McKinley to LBJ: Presidents in the Hearst Newsreels</h3>',
    articleCategories: [
      {
        title: 'Newsreels'
      },
      {
        title: 'Presidents'
      }
    ],
    postDate: '2024-02-19T16:00:00-08:00',
    ftvaHomepageDescription: '<p>Curated by UCLA Film &amp; Television Archive Senior Newsreel Preservationist Jeffrey Bickel, the newsreels presented here cover the period from 1897 to 1967.</p>',
    uri: 'blog/from-mckinley-to-lbj-presidents-in-the-hearst-newsreels',
    image: API.image,
    ftvaImage: [
      {
        id: '3619990',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/WilsonTaft-crop.png',
        height: 1792,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/WilsonTaft-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/WilsonTaft-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/WilsonTaft-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/WilsonTaft-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/WilsonTaft-crop.png 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  },
  {
    ftvaAlternativeTitle: '<h3>The Effervescent Artist, Educator and Activist Betty Chen</h3>',
    articleCategories: [
      {
        title: 'Educators'
      },
      {
        title: 'Artists'
      }
    ],
    postDate: '2023-08-24T12:00:00-07:00',
    ftvaHomepageDescription: '<p><strong>In the spring of 2022</strong>, UCLA-trained filmmaker Betty Yao-Jung Chen (November 5, 1943 throughApril 26, 2022) died in Florida. The news was confirmed by her niece and nephew.</p>',
    uri: 'blog/the-effervescent-artist-educator-and-activist-betty-chen',
    image: API.image,
    ftvaImage: [
      {
        id: '3620037',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/BettyChen-blog1.png',
        height: 1813,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/BettyChen-blog1.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/BettyChen-blog1.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/BettyChen-blog1.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/BettyChen-blog1.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/BettyChen-blog1.png 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ]
  }
]

function TemplateFTVAArticleBlogListing(args) {
  return {
    data() {
      return {
        mockArticles,
        ...args,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionWrapper, BlockCardWithImage, RichText, SmartLink },
    template: `

    <section-wrapper
      section-title="Featured Blogs"
      theme="paleblue"
    >
      <block-card-with-image
        class="block-highlight"
        style="
          background-color:white;
        "
        :image="mockArticles[0].ftvaImage[0]"
        :image-aspect-ratio="imageAspectRatio"
        category="Interview, People"
        :dateCreated="mockArticles[0].postDate"
        >
        <template #customTitle>
          <smart-link :to="mockArticles[0].uri" class="custom-title">
            <RichText :rich-text-content="mockArticles[0].ftvaAlternativeTitle" />
          </smart-link>
        </template>

        <template #customDescription>
          <RichText :rich-text-content="mockArticles[0].ftvaHomepageDescription" />
        </template>
      </block-card-with-image>

      <div
          class="block-card-half"
          style="
            display: flex;
            flex-direction: row;
            gap: 28px;
            margin-top: 40px;
          "
      >
          <block-card-with-image
            class="block-highlight"
            style="background-color:white; flex:1;"
            :image="mockArticles[1].ftvaImage[0]"
            :image-aspect-ratio="imageAspectRatio"
            category="Interview, People"
            :dateCreated="mockArticles[1].postDate"
            >
            <template #customTitle>
              <smart-link :to="mockArticles[1].uri" class="custom-title">
                <RichText :rich-text-content="mockArticles[1].ftvaAlternativeTitle" />
              </smart-link>
            </template>

            <template #customDescription>
              <RichText :rich-text-content="mockArticles[1].ftvaHomepageDescription" />
            </template>
          </block-card-with-image>

          <block-card-with-image
            class="block-highlight"
            style="background-color:white;  flex:1;"
            :image="mockArticles[2].ftvaImage[0]"
            :image-aspect-ratio="imageAspectRatio"
            category="Interview, People"
            :dateCreated="mockArticles[2].postDate"
            >
            <template #customTitle>
              <smart-link :to="mockArticles[2].uri" class="custom-title">
                <RichText :rich-text-content="mockArticles[2].ftvaAlternativeTitle" />
              </smart-link>
            </template>

            <template #customDescription>
              <RichText :rich-text-content="mockArticles[2].ftvaHomepageDescription" />
            </template>
          </block-card-with-image>
      </div>
    </section-wrapper>
    `,
  }
}

export const FTVAArticleBlogListing = TemplateFTVAArticleBlogListing.bind({})

const mockMoreCollectionItem = {
  title: 'Test Collection Item: \'Event Audio Recordings\' item w/ Video',
  image: API.image,
  videoEmbed: '<figure><iframe style="width:500px;height:281px;" src="//www.youtube.com/embed/C5osK7kvRGk" frameborder="0"></iframe></figure>',
  slug: 'test-collection-item-for-archive-events-audio-recordings-2-2-2-2',
  sectionHandle: 'ftvaItemInCollection'
}
function TemplateFTVAMoreCollectionItems(args) {
  return {
    data() {
      return {
        ...mockMoreCollectionItem,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage, BlockTag, IconFTVAVideo },
    template: `
    <component is="style" type="text/css">
    .white-icon > path {
      fill: white;
    }
    </component>
    <block-card-with-image
        :image="image"
        :to="to"
        :title="title"
    >
      <template #toptext>
        <block-tag><IconFTVAVideo class="white-icon" /></block-tag>
      </template>
    </block-card-with-image>
`,
  }
}
export const FTVAMoreCollectionItems = TemplateFTVAMoreCollectionItems.bind({})

export const HorizontalScrollStyle = Template.bind({})
HorizontalScrollStyle.args = {
  color: 'horizontalScroll',
  theme: 'ftva',
}

export const BlueBackgroundStyle = Template.bind({})
BlueBackgroundStyle.args = {
  color: 'blueBackground',
  theme: 'ftva',
}

export const WhiteBackgroundStyle = Template.bind({})
WhiteBackgroundStyle.args = {
  color: 'whiteBackground',
  theme: 'ftva',
}

export function NoBackgroundStyle() {
  return {
    data() {
      return {
        ...mock,
        color: 'noBackground',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage },
    template: `
      <component is="style" type="text/css">
    .white-icon > path {
      fill: white;
    }
      .colored-background {
        background-color: #e7edf2;
        padding: 20px;
        height: 100%;
        width: 100vw;
      }
    </component>
    <div class="colored-background">
    <block-card-with-image
        :image="image"
        :to="to"
        :title="title"
        :text="text"
        :image-aspect-ratio="imageAspectRatio"
        :color="color"
    />
      </div>
    `,
  }
}

export function FTVACustomDateTimeSlot() {
  return {
    data() {
      return {
        ...mockMoreCollectionItem,
        customDateTime: 'c. 1942'
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockCardWithImage },
    template: `
    <block-card-with-image
        :image="image"
        :to="to"
        :title="title"
    >
      <template #customDateTime>
        {{ customDateTime }}
      </template>
    </block-card-with-image>
`,
  }
}
