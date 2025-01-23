import { computed } from 'vue'
import BlockCardWithImage from '@/lib-components/BlockCardWithImage'
import RichText from '@/lib-components/RichText.vue'
import SectionWrapper from '@/lib-components/SectionWrapper.vue'

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
  image: { ...API.image, src: 'https://placehold.co/1080x1920', height: 1920, width: 1920, },
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
  image: API.image,
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
  category: 'Interview, People',
  title: '<h3>Preserving <em>In <strong>Transit</strong>:</em> The Chinese in California</h3>',
  postDate: '2024-05-07T13:00:00-07:00',
  ftvaHomepageDescription: '<p>Three alumni student films, made in the <strong>1970s-1980s</strong>, were preserved over a 10-week period by current MLIS student interns, all under the supervision of UCLA Film & Television Archive staff.</p>',
  uri: 'blog/preserving-in-transit-the-chinese-in-california',
  image: API.image,
}

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
    components: { BlockCardWithImage, RichText },
    template: `
      <block-card-with-image
        :image="image"
        :to="uri"
        :category="category"
        :dateCreated="postDate"
        :image-aspect-ratio="imageAspectRatio"
        >

        <template v-slot:title>
          <rich-text v-html="title" />
        </template>

        <template v-slot:description>
          <rich-text v-html="ftvaHomepageDescription" />
        </template>
      </block-card-with-image>
    `,
  }
}

export const FTVACustomTitleDescription = TemplateFTVACustomTitleDescription.bind({})

const mockArticles = [
  {
    title: '<h3><em>Preserving In Transit:</em> The Chinese in California<h3>',
    articleCategories: [
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    postDate: '2024-02-19T16:00:00-08:00',
    ftvaHomepageDescription: '<p>Three alumni student films, made in the 1970s-1980s, were preserved over a 10-week period by current MLIS student interns, all under the supervision of UCLA Film &amp; Television Archive staff.</p>',
    uri: 'blog/preserving-in-transit-the-chinese-in-california',
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
    ],
  },
  {
    title: '<h3><em>From McKinley to LBJ:</em> Presidents in the Hearst Newsreels<h3>',
    articleCategories: [
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    postDate: '2024-02-19T16:00:00-08:00',
    ftvaHomepageDescription: '<p>Curated by UCLA Film &amp; Television Archive Senior Newsreel Preservationist Jeffrey Bickel, the newsreels presented here cover the period from 1897 to 1967.</p>',
    uri: 'blog/from-mckinley-to-lbj-presidents-in-the-hearst-newsreels',
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
    title: '<h3>The “Effervescent” Artist, Educator and Activist Betty Chen</h3>',
    articleCategories: [
      {
        title: 'Interview'
      },
      {
        title: 'People'
      }
    ],
    postDate: '2023-08-24T12:00:00-07:00',
    ftvaHomepageDescription: '<p><span>In the spring of 2022, UCLA-trained filmmaker Betty Yao-Jung Chen (</span><span>November 5, 1943–April 26, 2022) died in Florida. The news was confirmed by her niece and nephew, who had reached out to me in 2021 after reading an article I had written about their aunt for </span><a href=\'https://online.ucpress.edu/fq/issue/73/3\' target=\'_blank\' rel=\'noreferrer noopener\'><em>Film Quarterly</em> March 2020 dossier</a><span>, <em>Asian American Film at Fifty.</em></span></p>',
    uri: 'blog/the-effervescent-artist-educator-and-activist-betty-chen',
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
    components: { SectionWrapper, BlockCardWithImage, RichText },
    template: `

    <section-wrapper
      section-title="Featured Blogs"
      theme="paleblue"
    >
      <block-card-with-image
        :image="mockArticles[0].ftvaImage[0]"
        :to="mockArticles[0].uri"
        category="Interview, People"
        :dateCreated="mockArticles[0].postDate"
        >

        <template v-slot:title>
          <rich-text v-html="mockArticles[0].title" />
        </template>

        <template v-slot:description>
          <rich-text v-html="mockArticles[0].ftvaHomepageDescription" />
        </template>
      </block-card-with-image>

      <div
          class="block-card-half"
          style="
            display: flex;
            flex-direction: row;
            gap: var(--space-xl);
            margin-top: 40px;
          "
      >
          <block-card-with-image
            :image="mockArticles[1].ftvaImage[0]"
            :to="mockArticles[1].uri"
            category="Interview, People"
            :dateCreated="mockArticles[1].postDate"
            >

            <template v-slot:title>
              <rich-text v-html="mockArticles[1].title" />
            </template>

            <template v-slot:description>
              <rich-text v-html="mockArticles[1].ftvaHomepageDescription" />
            </template>
          </block-card-with-image>

          <block-card-with-image
            :image="mockArticles[2].ftvaImage[0]"
            :to="mockArticles[2].uri"
            category="Interview, People"
            :dateCreated="mockArticles[2].postDate"
            >

            <template v-slot:title>
              <rich-text v-html="mockArticles[2].title" />
            </template>

            <template v-slot:description>
              <rich-text v-html="mockArticles[2].ftvaHomepageDescription" />
            </template>
          </block-card-with-image>
      </div>
      <section-wrapper>

      </section-wrapper>
    </section-wrapper>
    `,
  }
}

export const FTVAArticleBlogListing = TemplateFTVAArticleBlogListing.bind({})
