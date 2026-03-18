import { computed } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import DetailHeader from '../lib-components/DetailHeader.vue'
import GridMetadata from '../lib-components/GridMetadata.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import ButtonLink from '../lib-components/ButtonLink.vue'
import DLViewer from '../lib-components/DLViewer.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import { mockPageAssetDetailDataVariants } from '@/stories/mock/Funkhaus/MockPageAssetDetailData'

// Import styles
import './PageAssetDetail.scss'

export default {
  title: 'Funkhaus / Pages / Page Asset Detail',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for asset detail pages.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'songsGirlhood', 'castaicBridge', 'variant3'],
      description: 'Asset detail page variant',
    },
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      DetailHeader,
      GridMetadata,
      NavSearch,
      DLViewer,
      DividerGeneral,
      ButtonLink,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      // Set up global store with mock header navigation
      setupGlobalStore()

      // Use args from Storybook closure
      const variant = args?.variant || 'default'
      const mockData = mockPageAssetDetailDataVariants[variant]

      // Nav Search
      const mockGlobalNavSearch = getMockGlobalNavSearch()
      // Detail Header
      const detailHeader = mockData?.detailHeader || {}
      // Detail Media
      const detailMedia = mockData?.detailMedia || {}
      // Grid Metadata
      const gridMetadataItems = mockData?.gridMetadata?.items || []

      return {
        args,
        mockGlobalNavSearch,
        gridMetadataItems,
        detailHeader,
        detailMedia,
      }
    },
    template: `
       <div class="page-asset-detail">
         <!-- Header -->
        <HeaderSmart class="header-smart" />

        <!-- Nav Search -->
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

        <!-- Detail Header -->
        <DetailHeader
          :current-index="1"
          :total-results="detailHeader.totalResults"
          :tag="detailHeader.tag"
          :previous-to="detailHeader.previousTo"
          :next-to="detailHeader.nextTo"
          :back-to="detailHeader.backTo"
          class="detail-header"
        />
        <DividerGeneral class="divider" is-tertiary />

        <main class="main-content">
          <!-- Detail Media -->
          <h1 class="page-title">{{ detailMedia.title }}</h1>
          <DLViewer
            :iiif_manifest_url="detailMedia.manifestUrl"
            :title="detailMedia.title"
            :description="detailMedia.description"
            class="detail-media"
          />
        
          <!-- Grid Metadata -->
          <GridMetadata :items="gridMetadataItems" />
          <ButtonLink
            v-if="detailHeader.backTo"
            :to="detailHeader.backTo"
            class="back-button"
            label="Back to Search Results"
          />
        </main>
         
         <!-- Footer -->
         <FooterPrimary />
         <!-- Footer Sock -->
         <FooterSock />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
  variant: 'default',
}

// Songs, girlhood in Russia Part 2 (scraped)
export const SongsGirlhood = Template.bind({})
SongsGirlhood.args = {
  theme: 'dlc',
  variant: 'songsGirlhood',
}

// Main Highway Bridge at Castaic Junction (Saint Francis Dam) - scraped
export const CastaicBridge = Template.bind({})
CastaicBridge.args = {
  theme: 'dlc',
  variant: 'castaicBridge',
}

// Placeholder variant 3
export const Variant3 = Template.bind({})
Variant3.args = {
  theme: 'dlc',
  variant: 'variant3',
}
