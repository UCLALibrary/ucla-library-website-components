import { computed, onBeforeUnmount, onMounted } from 'vue'
import CardMeta from '@/lib-components/CardMeta'
import ButtonDropdown from '@/lib-components/ButtonDropdown.vue'
import RichText from '@/lib-components/RichText.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import { normalizeStoryTheme, STORY_THEME_OPTIONS } from './helpers/themeControls'

function normalizeDateControlValue(value) {
  if (typeof value === 'number') {
    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? '' : date.toISOString()
  }
  return value || ''
}

// Storybook default settings
export default {
  title: 'Card Meta',
  component: CardMeta,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
    to: { control: 'text' },
    category: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    startDate: { control: 'date' },
    endDate: { control: 'date' },
    ongoing: { control: 'boolean' },
    bylineOne: { control: 'text' },
    bylineTwo: { control: 'text' },
    locations: { control: 'object' },
    alternativeFullName: { control: 'text' },
    language: { control: 'text' },
    sectionHandle: { control: 'text' },
  },
}

const mockDefault = {
  to: '/visit/foo/bar/',
  category: 'Ullamco',
  title: 'Seven seas of the ancient world',
  alternativeFullName: '陳餘敏卿纪念基金',
  language: 'zh',
  startDate: '2022-03-31T07:00:00+00:00',
  endDate: '2021-11-26T11:00:00-08:00',
  text: '<p>In Greek literature (which is where the phrase entered Western literature), the Seven Seas were the <strong>Aegean</strong>, <em>Adriatic</em>, Mediterranean, Black, Red, and Caspian seas, with the Persian Gulf. <a href="https://www.scotchandscones.com/shortbread-history/">Test Link.</a></p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
  locations: [
    { title: 'Powellarium', to: '/location/bar' },
    { title: 'Research Library (Charles E. Young)', to: '/location/baz' },
  ],
  sectionHandle: 'event',
  bylineOne: 'Byline 1',
  bylineTwo: 'Byline 2'
}

function BaseTemplate(args) {
  return {
    setup() {
      return { args, normalizeDateControlValue }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
          :to="args.to"
          :category="args.category"
          :title="args.title"
          :start-date="normalizeDateControlValue(args.startDate)"
          :end-date="normalizeDateControlValue(args.endDate)"
          :text="args.text"
          :ongoing="args.ongoing"
          :bylineOne="args.bylineOne"
          :bylineTwo="args.bylineTwo"
          :locations="args.locations"
          :alternativeFullName="args.alternativeFullName"
          :language="args.language"
          :section-handle="args.sectionHandle"
      />
  `,
  }
}

// Variations of stories below
export const Default = BaseTemplate.bind({})
Default.args = {
  ...mockDefault,
  theme: 'default',
  ongoing: false,
}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const Ongoing = BaseTemplate.bind({})
Ongoing.args = {
  ...Default.args,
  ongoing: true,
}


// FTVA STORIES

const FtvaWithBlockTagsAndIntroTemplate = (args) => {
  void args
  return {
    data() {
      return {
        event: {
          title: 'Step Up (2006)',
          introduction: '<p><em>UCLA Film &amp; Television Archive</em> and the <strong>Hammer Museum</strong> are proud to introduce <em>Graeme Ferguson</em></p><p>Ferguson who not only is the inventor of the IMAX format but also made a name for himself as a young cinematographer. He was known for working in the cinéma vérité style when he was asked to direct a documentary about the Arctic and Antarctic for the Expo 67 world’s fair in Montreal. He traveled for a year filming the movie, which included footage of Inuit life and the aurora borealis. </p>',
          tagLabels: [
            { title: 'Guest speaker' }, { title: '35mm' }
          ],
          guestSpeaker: '<p><a href=\"https://en.wikipedia.org/wiki/Graeme_Ferguson_(filmmaker)\">Graeme Ferguson</a> Ivan <em>Graeme Ferguson</em> CM (October 7, 1929 – May 8, 2021) was a Canadian filmmaker and inventor who co-invented the IMAX film format.</p>',
        },
        series: {
          title: 'The Step Up Movie Series'
        }
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="series.title"
        :title="event.title"
        :guestSpeaker="event.guestSpeaker"
        :tagLabels="event.tagLabels"
        :introduction="event.introduction"
      />
  `,
  }
}

export const FtvaWithBlockTagsAndIntro = FtvaWithBlockTagsAndIntroTemplate.bind({})
FtvaWithBlockTagsAndIntro.args = {}


const FtvaOnlyCategoryAndTitleTemplate = (args) => {
  return {
    setup() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    components: { CardMeta },
    template: `
      <card-meta
        :category="args.category"
        :title="args.title"
      />
  `,
  }
}

export const FtvaOnlyCategoryAndTitle = FtvaOnlyCategoryAndTitleTemplate.bind({})
FtvaOnlyCategoryAndTitle.args = {
  theme: 'ftva',
  category: 'The Step Up Movie Series',
  title: 'Step Up 2 - The Streets (2008)',
}

// used on FTVA Event Series Page
export const FTVAOngoing = BaseTemplate.bind({})
FTVAOngoing.args = {
  ...Default.args,
  theme: 'ftva',
  ongoing: true,
}


const mockFTVAArticleData = {
  title: 'TEST - Tom Reed’s “For Members Only”: Black Perspectives on Local L.A. TV',
  articleCategories: [
    {
      title: 'Featured'
    },
    {
      title: 'Announcement'
    }
  ],
  postDate: '2024-07-02T05:08:00-07:00',
  contributors: [
    {
      byline: 'Written by',
      contributor: 'Axa Liaux (external contributor)'
    }
  ],
  sectionHandle: 'ftvaArticle'
}

const parsedArticleCategories = mockFTVAArticleData.articleCategories.map(category => category.title).join(', ')

// data for share button in slot
const mockSocialList = {
  buttonTitle: 'Share',
  hasIcon: true,
  dropdownList: [
    {
      dropdownItemTitle: 'Copy Link',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-link',
    },
    {
      dropdownItemTitle: 'Email',
      dropdownItemUrl: '',
      iconName: 'svg-icon-ftva-social-email',
    },
    {
      dropdownItemTitle: 'Facebook',
      dropdownItemUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
      iconName: 'svg-icon-ftva-social-facebook',
    },
    {
      dropdownItemTitle: 'X',
      dropdownItemUrl: 'https://twitter.com/share?url=',
      iconName: 'svg-icon-ftva-social-x',
    },
  ],
}

const FTVAArticleDetailWShareButtonTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ...mockFTVAArticleData,
        parsedArticleCategories,
        mockSocialList
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    // The ShareButton needs globalstore logic, so its included in this story
    setup() {
      onMounted(() => {
        const globalStore = useGlobalStore()

        const updateWinWidth = () => {
          globalStore.winWidth = window.innerWidth
        }

        updateWinWidth()

        window.addEventListener('resize', updateWinWidth)

        onBeforeUnmount(() => {
          window.removeEventListener('resize', updateWinWidth)
        })
      })
    },
    components: { CardMeta, ButtonDropdown },
    template: `
      <card-meta
          :category="parsedArticleCategories"
          :title="title"
          :bylineOne="contributors[0].contributor"
          :dateCreated="postDate"
          sectionHandle="ftvaArticle"
      >
      <template v-slot:sharebutton><ButtonDropdown button-title="Share" has-icon=true :dropdown-list="mockSocialList.dropdownList" /></template>
      </card-meta>
  `,
  }
}

export const FTVAArticleDetailWShareButton = FTVAArticleDetailWShareButtonTemplate.bind({})
FTVAArticleDetailWShareButton.args = {}


const FtvaLinkedCategoryAndTitleTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ftvaEventSeries: {
          title: 'Step Up 2 - The Streets (2008)',
          to: '/series/step-up-series'
        }
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta, SmartLink },
    template: `
      <card-meta
        :title="ftvaEventSeries.title"
      >
        <template v-slot:linkedcategoryslot>
          <smart-link
            :to="ftvaEventSeries.to"
          >
            {{ ftvaEventSeries.title }}
          </smart-link>
        </template>
      </card-meta>
  `,
  }
}

export const FtvaLinkedCategoryAndTitle = FtvaLinkedCategoryAndTitleTemplate.bind({})
FtvaLinkedCategoryAndTitle.args = {}


const FtvaCustomTitleAndDesriptionTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ftvaFeaturedArticles: [
          {
            title: 'Preserving <em>In Transit</em>: <a href=#>The Chinese</a> in California',
            to: '/article/preserving-in-transit-the-chinese-in-california',
            ftvaHomepageDescription: '<strong>In the summer</strong> of 2023, <a href=#>I had the chance</a> to select and restore a student film as part of the UCLA Student Film Initiative Internship: The Present Preserving the Past.',
            articleCategories: 'People, Places',
            postDate: '2024-10-09T09:00:00-07:00'
          }
        ]
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta, RichText, SmartLink },
    template: `
      <card-meta
       :category= "ftvaFeaturedArticles[0].articleCategories"
       :dateCreated="ftvaFeaturedArticles[0].postDate"
      >
        <template #customTitle>
         <smart-link :to="ftvaFeaturedArticles[0].to" class="custom-title">
            <rich-text
              :rich-text-content="ftvaFeaturedArticles[0].title" />
          </smart-link>
        </template>

        <template #customDescription>
          <rich-text
          :rich-text-content="ftvaFeaturedArticles[0].ftvaHomepageDescription" />
        </template>
      </card-meta>
    `,
  }
}

export const FtvaCustomTitleAndDesription = FtvaCustomTitleAndDesriptionTemplate.bind({})
FtvaCustomTitleAndDesription.args = {}


const FtvaH1TitleTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ftvaFeaturedArticles: [
          {
            articleCategories: 'category',
            postDate: '2024-10-09T09:00:00-07:00'
          }
        ]
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta, RichText, SmartLink },
    template: `
      <card-meta
       :category= "ftvaFeaturedArticles[0].articleCategories"
       :dateCreated="ftvaFeaturedArticles[0].postDate"
      >
        <template #anyTitle>
          <h1>Preserving <em>In Transit</em>: <a href=#>The Chinese</a> in California</h1>
        </template>
      </card-meta>
    `,
  }
}

export const FtvaH1Title = FtvaH1TitleTemplate.bind({})
FtvaH1Title.args = {}


const FtvaCustomDateTimeSlotTemplate = (args) => {
  void args
  return {
    data() {
      return {
        ftvaFeaturedArticles: [
          {
            articleCategories: 'category',
            postDate: 'c. 1942',
            title: 'Card Meta Title'
          }
        ]
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { CardMeta, RichText, SmartLink },
    template: `
      <card-meta
       :category= "ftvaFeaturedArticles[0].articleCategories"
       :title="ftvaFeaturedArticles[0].title"
      >
        <template #customDateTime>
          {{ ftvaFeaturedArticles[0].postDate }}
        </template>
      </card-meta>
    `,
  }
}

export const FtvaCustomDateTimeSlot = FtvaCustomDateTimeSlotTemplate.bind({})
FtvaCustomDateTimeSlot.args = {}

