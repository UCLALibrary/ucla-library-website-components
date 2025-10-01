import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import DetailHeader from '../lib-components/DetailHeader.vue'
import DetailMedia from '../lib-components/DetailMedia.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockAssetDetailDataPage } from './mock/Funkhaus/MockAssetDetailDataPage'

// Import styles
import './AssetDetailPage.scss'

export default {
  title: 'Funkhaus / Pages / Asset Detail Page',
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
      CollectionOverview,
      DetailHeader,
      DetailMedia,
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
        mockAssetDetailDataPage.searchForm.dropdownOptions[0]
      )

      const searchValue = ref('')

      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
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
        primaryItems,
        secondaryItems,
        mockAssetDetailDataPage,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        sampleMenuItems,
        sampleSubMenuItems,
      }
    },
    computed: {},
    template: `
       <div class="collections-detail-page">
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

         <div class="search-field-composite-wrapper">
           <SearchFieldComposite
             class='search-bar'
             :initial-value="args.searchInitialValue || searchValue"
             :placeholder="args.searchPlaceholder || mockAssetDetailDataPage.searchForm.placeholder"
             :dropdown-model-value="dropdownValue"
             :dropdown-options="args.searchDropdownOptions || mockAssetDetailDataPage.searchForm.dropdownOptions"
             :dropdown-placeholder="args.searchDropdownPlaceholder"
             :show-divider="args.searchShowDivider !== undefined ? args.searchShowDivider : true"
             @submit="handleSearchSubmit"
             @update:dropdown-model-value="handleDropdownUpdate"
           />
         </div>

        <main class="main-content">
          <DetailHeader
            :total-results="mockAssetDetailDataPage.detailHeader.totalResults"
            :tag="mockAssetDetailDataPage.detailHeader.tag"
            :previous-to="mockAssetDetailDataPage.detailHeader.previousTo"
            :next-to="mockAssetDetailDataPage.detailHeader.nextTo"
            :back-to="mockAssetDetailDataPage.detailHeader.backTo"
            :show-divider="true"
          />

          <h1 class="title">{{ mockAssetDetailDataPage.title }}</h1>

          <DetailMedia
            :manifest-url="mockAssetDetailDataPage.detailMedia.manifestUrl"
            :title="mockAssetDetailDataPage.detailMedia.title"
            :description="mockAssetDetailDataPage.detailMedia.description"
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
  searchShowDivider: true,
}
