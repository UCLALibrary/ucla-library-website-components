import { computed, ref } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import RichText from '../lib-components/RichText.vue'
import DLViewer from '../lib-components/DLViewer.vue'
import PageAnchor from '../lib-components/PageAnchor.vue'
import PanelAnchorNav from '../lib-components/PanelAnchorNav.vue'
import ButtonLink from '../lib-components/ButtonLink.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import { mockPageUsingDigitalCollections } from '@/stories/mock/Funkhaus/MockPageUsingDigitalCollections'

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
      DLViewer,
      PageAnchor,
      PanelAnchorNav,
      ButtonLink,
      DividerGeneral,
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

      const {
        pageTitle,
        introContent,
        sectionTitles,
        sections,
        textIntroduction,
      } = mockPageUsingDigitalCollections

      function toKebab(title) {
        const t = title.replace('&', '').replace(/\s+/g, ' ').trim()
        return t.toLowerCase().replace(/ /g, '-')
      }

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
        introContent,
        sectionTitles,
        sections,
        textIntroduction,
        toKebab,
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
                    <h3 class="title">
                      Topics covered:
                    </h3>
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

          <div class="sections-container">
            <section
                v-for="section in sections"
                :key="toKebab(section.title)"
                :id="toKebab(section.title)"
                class="page-section"
              >
                <DividerGeneral class="section-divider" />
              
                <h2 class="section-title">{{ section.title }}</h2>
                <template v-if="section.dlViewerManifestUrl">
                  <RichText class="section-rich-text" :rich-text-content="section.introRichText" />
                  <div class="dl-viewer-wrapper">
                    <DLViewer :iiif_manifest_url="section.dlViewerManifestUrl" />
                  </div>
                  <RichText class="section-rich-text viewer-caption" :rich-text-content="section.captionRichText" />
                  <RichText class="section-rich-text" :rich-text-content="section.afterRichText" />
                </template>
                <RichText class="section-rich-text" v-else :rich-text-content="section.richText" />
              </section>
          </div>
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
