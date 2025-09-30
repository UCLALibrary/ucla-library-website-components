import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import GridCollections from '../lib-components/GridCollections.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import HeaderCollection from '../lib-components/HeaderCollection.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockDigitalCollections } from './mock/Funkhaus/MockMainLandingPage'

// Import styles
import './MainLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Main Landing Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A complete landing page layout with header, main content area, and footer. This serves as a template for main landing pages with a grid-based content layout.',
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
      GridCollections,
      HeaderCollection,
      SearchFieldComposite,
      ButtonMore,
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
      const dropdownValue = ref(
        mockDigitalCollections.searchForm.dropdownOptions[0]
      )
      const searchValue = ref('')

      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }

      const showMoreCollections = () => {
        window.location.href
                    = 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default'
      }
      const handleSearchSubmit = (value) => {
        searchValue.value = value
        alert(
                    `Search submitted: "${value}" \nwith dropdown: "${dropdownValue.value}"`
        )
      }
      const handleDropdownUpdate = (value) => {
        dropdownValue.value = value
      }

      // Sample menu items data
      const sampleMenuItems = [
        {
          label: 'Using Digital Collections Content',
          to: '/using-digital-collections-content',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Give Us Feedback',
          to: '/give-us-feedback',
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
        searchValue,
        primaryItems,
        secondaryItems,
        mockDigitalCollections,
        showMoreCollections,
        handleSearchSubmit,
        handleDropdownUpdate,
        sampleMenuItems,
        sampleSubMenuItems,
      }
    },

    computed: {
      gridItems() {
        const parsedItems
                    = mockDigitalCollections?.featuredCollections?.entries?.map(
                      (entry) => {
                        return {
                          ...entry,
                          image: entry.heroImage,
                          description: entry.text,
                          href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                        }
                      }
                    ) || []

        return parsedItems.slice(0, 9)
      },
      headerItems() {
        return {
          subtitle:
                        mockDigitalCollections?.featuredCollections?.subtitle,
          title: mockDigitalCollections?.featuredCollections?.title,
          text: mockDigitalCollections?.featuredCollections?.summary,
          buttons:
                        mockDigitalCollections?.featuredCollections?.buttons,
        }
      },
    },
    template: `
       <div class="main-landing-page">
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
         >
           <template #default>
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
         </HeaderMainFunkhaus>

           <SearchFieldComposite
             class='search-bar'
             :initial-value="args.searchInitialValue || searchValue"
             :placeholder="args.searchPlaceholder || mockDigitalCollections.searchForm.placeholder"
             :dropdown-model-value="dropdownValue"
             :dropdown-options="args.searchDropdownOptions || mockDigitalCollections.searchForm.dropdownOptions"
             :dropdown-placeholder="args.searchDropdownPlaceholder"
             :show-divider="args.searchShowDivider"
             :background-image="mockDigitalCollections.searchForm.backgroundImage"
             :background-text="mockDigitalCollections.searchForm.backgroundText"
             @submit="handleSearchSubmit"
             @update:dropdown-model-value="handleDropdownUpdate"
           />

         <!-- Main Content Area -->
         <main class="main-content">
            <HeaderCollection 
                :subtitle="headerItems.subtitle"
                :title="headerItems.title"
                :text="headerItems.text"
                :buttons="headerItems.buttons"
            />
            <GridCollections :items="gridItems" class="grid-collections" />
            <ButtonMore
                class="button-more"
                @click="showMoreCollections"
            />
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
