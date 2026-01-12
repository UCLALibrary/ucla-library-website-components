import { computed } from 'vue'

// Import components
import FooterMain from '../lib-components/FooterMain.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import GridMetadata from '../lib-components/GridMetadata.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import ExcerptPod from '../lib-components/ExcerptPod.vue'
import NavSearch from '../lib-components/NavSearch.vue'

// Import mock data
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockCollectionsDataPage } from '@/stories/mock/Funkhaus/MockCollectionsDetailPage'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'

// Import styles
import './CollectionsDetailPage.scss'

export default {
  title: 'Funkhaus / Pages / Collections Detail Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A single page layout with header, main content area, and footer. This serves as a template for collections detail pages.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
    searchInitialValue: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    searchDropdownValue: { control: 'text' },
    searchDropdownOptions: { control: 'array' },
    searchDropdownPlaceholder: { control: 'text' },
    searchShowDivider: { control: 'boolean' },
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSmart,
      FooterMain,
      CollectionOverview,
      GridMetadata,
      SectionTeaserCard,
      ButtonMore,
      ExcerptPod,
      NavSearch,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary

      const collectionOverviewProps = mockCollectionsDataPage.collectionOverview
      const gridMetadataItems = mockCollectionsDataPage.gridMetadata.items
      const sectionTeaserCards = mockCollectionsDataPage.sectionTeaserCards
      const buttonMore = mockCollectionsDataPage.buttonMore
      const gridAssets = mockCollectionsDataPage.gridAssets
      const excerptPod = mockCollectionsDataPage.excerptPod

      const splitText = (text, sentenceCount) => {
        if (!text)
          return { truncated: '', remaining: '' }
        const sentenceRegex = /\.\s+(?=[A-Z])/g
        const sentences = text.split(sentenceRegex)
        if (sentences.length <= sentenceCount)
          return { truncated: text, remaining: '' }
        let truncated = sentences.slice(0, sentenceCount).join('. ')
        if (!truncated.endsWith('.'))
          truncated += '.'
        const remaining = ` ${sentences.slice(sentenceCount).join('.')}`
        return { truncated, remaining }
      }

      return {
        args,
        mockGlobalNavSearch,
        collectionOverviewProps,
        gridMetadataItems,
        sectionTeaserCards,
        buttonMore,
        gridAssets,
        excerptPod,
        splitText,
      }
    },
    computed: {
    },
    template: `
       <div class="collections-detail-page">
         <!-- Header -->
        <header-smart/>

          <!-- Collection Overview -->
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

        

          <CollectionOverview v-bind="collectionOverviewProps" />

          <!-- Grid Metadata -->
          <GridMetadata :items="gridMetadataItems">
            <template #after>
              <div class="excerpt-pod-wrapper">
                <!-- Excerpt Pod -->
                <ExcerptPod
                  :title="excerptPod.title"
                  :subtitle="excerptPod.subtitle"
                  :label-open="excerptPod.labelOpen"
                  :label-close="excerptPod.labelClose"
                  :sentence-split-count="excerptPod.sentenceSplitCount"
                >
                  <template #default>
                    <p v-html="splitText(excerptPod.text, excerptPod.sentenceSplitCount).truncated" />
                  </template>
                  <template #content>
                    <p v-html="splitText(excerptPod.text, excerptPod.sentenceSplitCount).remaining" />
                  </template>
                </ExcerptPod>
              </div>
            </template>
          </GridMetadata>
          <!-- Button More -->
          <ButtonMore
            class="button-more"
            :text="buttonMore.text"
            :to="buttonMore.to"
          />
          <section class="section-teaser-card-wrapper">
            <p class="subtitle-grid-assets">
              {{ gridAssets.subtitle }}
            </p>
            <h2 class="title-grid-assets">
              {{ gridAssets.title }}
            </h2>
            <SectionTeaserCard
              :items="sectionTeaserCards.items"
              :section-title="sectionTeaserCards.sectionTitle"
              :grid-layout="true"
            />
          </section>
        </main>
         
         <!-- Footer -->
         <FooterMain />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
  searchInitialValue: '',
  searchPlaceholder: 'Search in...',
  searchDropdownValue: 'All Collections',
  searchDropdownOptions: [
    'All Collections',
    'Books & E-books',
    'Articles & Journals',
    'Databases',
    'Digital Collections',
    'Archives & Special Collections',
  ],
  searchDropdownPlaceholder: 'Select category',
  searchShowDivider: true,
}
