import { computed, onBeforeUnmount, onMounted } from 'vue'
import CardMeta from '@/lib-components/CardMeta'
import ButtonDropdown from '@/lib-components/ButtonDropdown.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { useGlobalStore } from '@/stores/GlobalStore'

// Storybook default settings
export default {
  title: 'Card Meta',
  component: CardMeta
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

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mockDefault }
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
          :bylineOne="bylineOne"
          :bylineTwo="bylineTwo"
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
      return { ...mockDefault }
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

// FTVA STORIES

export function FtvaWithBlockTagsAndIntro() {
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

export function FtvaOnlyCategoryAndTitle() {
  return {
    data() {
      return {
        event: {
          title: 'Step Up 2 - The Streets (2008)',
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
      />
  `,
  }
}
// used on FTVA Event Series Page
export function FTVAOngoing() {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
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
          :language="language"
      />
  `,
  }
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

export function FTVAArticleDetailWShareButton() {
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

export function FtvaLinkedCategoryAndTitle() {
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
