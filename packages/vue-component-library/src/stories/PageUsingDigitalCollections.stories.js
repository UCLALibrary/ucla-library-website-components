import { computed, ref } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import RichText from '../lib-components/RichText.vue'
import PageAnchor from '../lib-components/PageAnchor.vue'
import PanelAnchorNav from '../lib-components/PanelAnchorNav.vue'
import ButtonLink from '../lib-components/ButtonLink.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import FlexibleBlocks from '../lib-components/FlexibleBlocks.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import {
  groupedSections,
  mockPageUsingDigitalCollections,
  mockPageUsingDigitalCollectionsIIIFGuide,
  mockPageUsingDigitalCollectionsIIIFGuideModified,
} from '@/stories/mock/Funkhaus/MockPageUsingDigitalCollections'

// Import styles
import './PageUsingDigitalCollections.scss'

export default {
  title: 'Funkhaus / Pages / Page Using Digital Collections',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'Using Digital Collections Content page: intro (title + rich text), two-column layout with main content (rich text) and sidebar "Topics covered" (PageAnchor, DLC theme), plus PanelAnchorNav modal opened on click.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
    contentBlocks: {
      control: false,
      description: 'Override blocks (used by IIIFGuideFullContent story)',
    },
  },
}

function Template(args) {
  return {
    components: {
      FooterPrimary,
      FooterSock,
      HeaderSmart,
      NavSearch,
      RichText,
      PageAnchor,
      PanelAnchorNav,
      ButtonLink,
      DividerGeneral,
      FlexibleBlocks,
    },
    provide() {
      return {
        theme: computed(() => args.theme || 'dlc'),
      }
    },
    setup() {
      setupGlobalStore()

      const mockGlobalNavSearch = getMockGlobalNavSearch()
      const isPanelOpened = ref(false)

      const mock = args.contentBlocks
        ? {
            ...mockPageUsingDigitalCollections,
            contentBlocks: args.contentBlocks,
          }
        : mockPageUsingDigitalCollections

      const { pageTitle, contentBlocks, textIntroduction } = mock

      const sections = groupedSections(contentBlocks)
      const sectionTitles = sections.map(s => s.title).filter(Boolean)

      const handleOpenPanel = () => {
        isPanelOpened.value = true
      }
      const handleClosePanel = () => {
        isPanelOpened.value = false
      }

      return {
        args,
        mockGlobalNavSearch,
        pageTitle,
        contentBlocks,
        sectionTitles,
        textIntroduction,
        isPanelOpened,
        handleOpenPanel,
        handleClosePanel,
      }
    },
    template: `
      <div class="using-digital-collections-page" id="top">
        <HeaderSmart class="header-smart" />

        <div class="search-field-composite-wrapper">
          <NavSearch
            :show-divider="true"
            :dropdown-options="mockGlobalNavSearch.dropdownOptions"
            :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
            :placeholder="mockGlobalNavSearch.placeholder"
            bottom-text=""
            :bottom-link="null"
          />
        </div>

        <main class="main-content">
          <!-- Intro: title -->
          <h1 class="page-title">{{ pageTitle }}</h1>


          <!-- Two columns: main content (intro + sections) and sidebar (Topics covered) -->
          <div class="two-column">
            <div class="content-column">
              <RichText :rich-text-content="textIntroduction" class="intro-rich-text" />
            </div>
            <div class="sidebar-column">
              <PageAnchor
                :section-titles="sectionTitles"
                color="default"
                :has-back-to-top="true"
              >
                <template #header>
                  <div class="title-container">
                    <span class="title">
                      Topics covered:
                    </span>
                    <DividerGeneral class="divider" />
                  </div>
                </template>
                <template #link="{ title, href }">
                  <ButtonLink
                    :label="title"
                    :to="href"
                    :is-secondary="true"
                  />
                </template>
                <template #back-to-top>
                  <ButtonLink
                    label="Back to Top"
                    to="#"
                    :is-secondary="true"
                  />
                </template>
              </PageAnchor>
            </div>
          </div>
          <FlexibleBlocks :blocks="contentBlocks" />
        </main>

        <!-- Modal: PanelAnchorNav (same anchors, opens on click) -->
        <PanelAnchorNav
          :section-titles="sectionTitles"
          :has-back-to-top="true"
          :is-opened="isPanelOpened"
          :show-open-icon-always="false"
          @open-panel="handleOpenPanel"
          @close-panel="handleClosePanel"
        />

        <FooterPrimary />
        <FooterSock />
      </div>
    `,
  }
}

export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
}


export const IIIFGuideFullContent = Template.bind({})
IIIFGuideFullContent.args = {
  theme: 'dlc',
  contentBlocks: [
  mockPageUsingDigitalCollectionsIIIFGuide.contentBlocks[7],
  mockPageUsingDigitalCollectionsIIIFGuide.contentBlocks[10],
]
}
IIIFGuideFullContent.parameters = {
  docs: {
    description: {
      story: 'Full IIIF guide content with figures, images, and detailed rich text across all sections.',
    },
  },
}
IIIFGuideFullContent.parameters = {
  chromatic: { disableSnapshot: false },
}

export const IIIFGuideFullContentModified = Template.bind({})
IIIFGuideFullContentModified.args = {
  theme: 'dlc',
  contentBlocks:
        mockPageUsingDigitalCollectionsIIIFGuideModified.contentBlocks,
}
IIIFGuideFullContentModified.parameters = {
  docs: {
    description: {
      story: 'Same layout and data as IIIF guide full content at first; uses `mockPageUsingDigitalCollectionsIIIFGuideModified` so you can customize mock data independently.',
    },
  },
}
