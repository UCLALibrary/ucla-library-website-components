import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'
import GridBentoPod from '../lib-components/GridBentoPod.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import * as API from './mock-api.json'
import { bentoBoxResultsData } from './mock/BentoBoxResultsPageMockData.js'

// Import styles
import './BentoBoxResultsPage.scss'

export default {
  title: 'Funkhaus / Pages / Bento Box Results Page',
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
    searchInitialValue: { control: 'text' },
    searchPlaceholder: { control: 'text' },
    searchDropdownValue: { control: 'text' },
    searchDropdownOptions: { control: 'array' },
    searchDropdownPlaceholder: { control: 'text' },
    searchShowDivider: { control: 'boolean' },
  },
}

// Template function for the bento box results page
function Template(args) {
  return {
    components: {
      HeaderMainFunkhaus,
      FooterMain,
      SearchFieldComposite,
      SmartLink,
      GlobalMenuPanel,
      GridBentoPod,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const menuOpened = ref(false)
      const dropdownValue = ref(args.searchDropdownValue)
      const submittedValue = ref('')

      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }

      const handleSearchSubmit = (value) => {
        submittedValue.value = value
        // Search submitted
      }

      const handleDropdownUpdate = (value) => {
        dropdownValue.value = value
        // Dropdown updated
      }

      // Sample menu items data
      const sampleMenuItems = [
        {
          label: 'Using digital collections content',
          to: '/digital-collections',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Give us feedback',
          to: '/feedback',
        },
      ]

      const sampleSubMenuItems = [
        {
          label: 'Locations & Hours',
          to: '/help',
          classes: '',
        },
        {
          label: 'Ask a Librarian',
          to: '/visit',
          classes: '',
        },
        {
          label: 'Support Us',
          to: '/support',
          classes: '',
        },
      ]

      const sampleSecondaryItems = [
        {
          label: 'Locations & Hours',
          to: '/locations',
        },
        {
          label: 'Ask a Librarian',
          to: '/my-account',
        },
        {
          label: 'Support Us',
          to: '/support-us',
        },
      ]

      return {
        menuOpened,
        toggleMenu,
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        args,
        sampleMenuItems,
        sampleSubMenuItems,
        sampleSecondaryItems,
        bentoBoxResultsData,
      }
    },
    template: `
      <div class="bento-box-results-page">
        <!-- Global Menu Panel -->
        <GlobalMenuPanel
          :menu-items="sampleMenuItems"
          :sub-menu-items="sampleSubMenuItems"
          :is-opened="menuOpened"
          class="global-menu-panel"
        />
        <!-- Header -->
        <HeaderMainFunkhaus
          :menu-opened="menuOpened"
          @toggle-menu="toggleMenu"
          class="header"
          :class="menuOpened ? 'menu-opened' : ''"
          :show-secondary="true"
          :secondary-items="sampleSecondaryItems"
          :menu-items="sampleMenuItems"
        />

        <div class="search-field-composite-wrapper">
          <SearchFieldComposite
            class='search-bar'
            :initial-value="args.searchInitialValue"
            :placeholder="args.searchPlaceholder"
            :dropdown-model-value="dropdownValue"
            :dropdown-options="args.searchDropdownOptions"
            :dropdown-placeholder="args.searchDropdownPlaceholder"
            :show-divider="true"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />
        </div>

        <main class="main-content">
          <!-- Bento Box Results -->
          <GridBentoPod :items="bentoBoxResultsData" />
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
  searchShowDivider: false,
}
