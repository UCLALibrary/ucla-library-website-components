import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockCollectionsBrowsePage } from './mock/Funkhaus/MockCollectionsBrowsePage'

// Import styles
import './CollectionBrowsePage.scss'

export default {
  title: 'Funkhaus / Pages / Collection Browse Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for collection browse pages.',
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
      HeaderMainFunkhaus,
      FooterMain,
      SearchFieldComposite,
      SmartLink,
      GlobalMenuPanel,
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

      return {
        args,
        menuOpened,
        toggleMenu,
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        primaryItems,
        secondaryItems,
        mockCollectionsBrowsePage,
        sampleMenuItems,
        sampleSubMenuItems,
      }
    },
    computed: {},
    template: `
       <div class="collection-browse-page">
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
           :menu-items="sampleMenuItems"
         />



        <main class="main-content">
            <div class="search-field-composite-wrapper">
              <SearchFieldComposite
                class='search-bar'
                :initial-value="args.searchInitialValue"
                :placeholder="args.searchPlaceholder"
                :dropdown-model-value="dropdownValue"
                :dropdown-options="args.searchDropdownOptions"
                :dropdown-placeholder="args.searchDropdownPlaceholder"
                :show-divider="args.searchShowDivider"
                @submit="handleSearchSubmit"
                @update:dropdown-model-value="handleDropdownUpdate"
              />
            </div>

            This is going to be the collection browse page
            <pre>{{ mockCollectionsBrowsePage }}</pre>
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
