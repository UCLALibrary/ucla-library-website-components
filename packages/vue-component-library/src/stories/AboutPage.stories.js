import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockAboutPage } from './mock/Funkhaus/MockAboutPage'

// Import styles
import './AboutPage.scss'

export default {
  title: 'Funkhaus / Pages / About Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for about pages.',
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
      
      return {
        menuOpened,
        toggleMenu,
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        args,
        primaryItems,
        secondaryItems,
        mockAboutPage,
      }
    },
    computed: {},
    template: `
       <div class="about-page">
         <!-- Header -->
         <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
      >
        <template #header-links>
          <SmartLink to="/digital-collections" class="header-link">
            Using digital collections content
          </SmartLink>
          <SmartLink to="/about" class="header-link">
            About
          </SmartLink>
          <SmartLink to="/feedback" class="header-link">
            Give us feedback
          </SmartLink>
        </template>
        <template #default>

          <SearchFieldComposite
            :initial-value="args.searchInitialValue"
            :placeholder="args.searchPlaceholder"
            :dropdown-model-value="dropdownValue"
            :dropdown-options="args.searchDropdownOptions"
            :dropdown-placeholder="args.searchDropdownPlaceholder"
            :show-divider="args.searchShowDivider"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />

      </template>
      </HeaderMainFunkhaus>
      
      

        <main class="main-content">
            
            
            <div class="content-section">
              This is going to be the about page
              <pre>{{ mockAboutPage }}</pre>
            </div>
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
