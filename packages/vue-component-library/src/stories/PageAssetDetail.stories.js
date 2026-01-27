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

// Import mock data
import DLViewer from '../lib-components/DLViewer.vue'
import { mockAssetDetailDataPage } from '@/stories/mock/Funkhaus/MockAssetDetailDataPage'
import { getMockGlobalNavSearch, setupGlobalStore } from './helpers/storyHelpers'

// Import styles
import './PageAssetDetail.scss'

export default {
  title: 'Funkhaus / Pages / Page Asset Detail',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A single page layout with header, main content area, and footer. This serves as a template for asset detail pages.',
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

      const mockGlobalNavSearch = getMockGlobalNavSearch()
      const gridMetadataItems = mockAssetDetailDataPage?.gridMetadata?.items || []

      return {
        args,
        mockGlobalNavSearch,
        mockAssetDetailDataPage,
        gridMetadataItems,
      }
    },
    template: `
       <div class="asset-detail-page">
         <!-- Header -->
        <HeaderSmart />

        <!-- Search -->
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

        <DetailHeader
          :current-index="1"
          :total-results="mockAssetDetailDataPage.detailHeader.totalResults"
          :tag="mockAssetDetailDataPage.detailHeader.tag"
          :previous-to="mockAssetDetailDataPage.detailHeader.previousTo"
          :next-to="mockAssetDetailDataPage.detailHeader.nextTo"
          :back-to="mockAssetDetailDataPage.detailHeader.backTo"
          class="detail-header"
        />
        <DividerGeneral class="divider" is-tertiary />

        <main class="main-content">
          <h1 class="page-title">{{ mockAssetDetailDataPage.title }}</h1>
          <DLViewer
            :iiif_manifest_url="mockAssetDetailDataPage.detailMedia.manifestUrl"
            :title="mockAssetDetailDataPage.detailMedia.title"
            :description="mockAssetDetailDataPage.detailMedia.description"
            class="detail-media"
          />
        
          <!-- Grid Metadata -->
          <GridMetadata :items="gridMetadataItems" />
          <ButtonLink
            v-if="mockAssetDetailDataPage.detailHeader.backTo"
            :to="mockAssetDetailDataPage.detailHeader.backTo"
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
}
