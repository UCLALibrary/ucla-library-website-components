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
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockAssetDetailDataPage } from '@/stories/mock/Funkhaus/MockAssetDetailDataPage'

import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'

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
      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary

      const gridMetadataItems = mockAssetDetailDataPage?.gridMetadata?.items || []

      return {
        args,
        mockGlobalNavSearch,
        mockAssetDetailDataPage,
        gridMetadataItems,

      }
    },
    computed: {
    },
    template: `
       <div class="asset-detail-page">
         <!-- Header -->
        <header-smart/>

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
            :manifest-url="mockAssetDetailDataPage.detailMedia.manifestUrl"
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
  searchInitialValue: '',
  searchPlaceholder: 'Search in...',
  searchDropdownValue: 'all-programs',
  searchDropdownOptions: [
    { label: 'All Programs', value: 'all-programs' },
    {
      label: 'Books & E-books',
      value: 'books-e-books',
    },
    {
      label: 'Articles & Journals',
      value: 'articles-journals',
    },
    { label: 'Databases', value: 'databases' },
  ],
  searchDropdownPlaceholder: 'Select category',
  searchShowDivider: true,
}
