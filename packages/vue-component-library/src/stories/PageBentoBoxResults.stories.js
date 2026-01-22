import { computed } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import GridAssetPod from '../lib-components/GridAssetPod.vue'
import BentoPod from '../lib-components/BentoPod.vue'
import BentoFilterMenu from '../lib-components/BentoFilterMenu.vue'

// Import mock data
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'
import { mockBentoBoxResultsPage } from '@/stories/mock/Funkhaus/MockBentoBoxResultsPage'

// Import styles
import './PageBentoBoxResults.scss'
import './GridAssetPod.scss'

export default {
  title: 'Funkhaus / Pages / Page Bento Box Results',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A single page layout with header, main content area, and footer. This serves as a template for bento box results pages.',
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

// Template function for the bento box results page
function Template(args) {
  return {
    components: {
      FooterPrimary,
      FooterSock,
      HeaderSmart,
      NavSearch,
      GridAssetPod,
      BentoPod,
      BentoFilterMenu,
    },
    provide() {
      return {
        // Mirror HeaderSmart DLC story: force dlc theme
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary

      // Bento filter menu items
      const bentoFilterItems = [
        { label: 'Everything', to: '/search' },
        { label: 'Images', to: '/search?type=images' },
        { label: 'Videos', to: '/search?type=videos' },
        { label: 'Manuscripts', to: '/search?type=manuscripts' },
        { label: 'Books', to: '/search?type=books' },
        { label: 'Audio', to: '/search?type=audio' },
        { label: '3D Art', to: '/search?type=3d-art' },
      ]

      return {
        args,
        mockGlobalNavSearch,
        mockBentoBoxResultsPage,
        bentoFilterItems,
      }
    },
    template: `
      <div class="bento-box-results-page">
        <!-- Header -->
        <header-smart class='header'/>

        <!-- Bento Filter Menu -->
        <BentoFilterMenu class="bento-filter-menu" :items="bentoFilterItems" />

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
          <!-- Grid Asset Pod with Two Column Layout for Bento Pod -->
          <GridAssetPod 
            class="grid-asset-pod"
            :items="mockBentoBoxResultsPage.bentoPodItems" 
            layout="two-column"
          >
            <template #default="{ item }">
              <BentoPod
                :key="item.id"
                :title="item.title"
                :description="item.description"
                :items="item.items"
                class="bento-pod"
              />
            </template>
          </GridAssetPod>
        </main>
        <!-- Footer -->
        <FooterPrimary class='footer' />
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
