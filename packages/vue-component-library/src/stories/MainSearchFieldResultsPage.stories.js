import { computed, ref, watch } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'
import ButtonTag from '../lib-components/ButtonTag.vue'
import DropdownSingleSelectFunkhaus from '../lib-components/DropdownSingleSelectFunkhaus.vue'
import ButtonPageView from '../lib-components/ButtonPageView.vue'
import SearchResultsCount from '../lib-components/SearchResultsCount.vue'
import RefineSearchPanel from '../lib-components/RefineSearchPanel.vue'
import GridAssetPod from '../lib-components/GridAssetPod.vue'
import ResponsiveImage from '../lib-components/ResponsiveImage.vue'
import DefinitionList from '../lib-components/DefinitionList.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import router from '@/router'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockSearchFieldResultsPage } from './mock/Funkhaus/MockSearchFieldResultsPage'
import { mockRefineSearchPanel, mockGridAssetPod } from './mock/Funkhaus/MockRefineSearchPanel'

// Import styles
import './MainSearchFieldResultsPage.scss'
import './GridAssetPod.scss'

export default {
  title: 'Funkhaus / Pages / Main Search Field Results Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for main search field results pages.',
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
      ButtonTag,
      DropdownSingleSelectFunkhaus,
      ButtonPageView,
      SearchResultsCount,
      RefineSearchPanel,
      GridAssetPod,
      ResponsiveImage,
      DefinitionList,
      DividerGeneral,
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

      // Sample breadcrumb data for search filters
      const breadcrumbData = ref([
        { text: 'All Collections', to: '/search?category=all' },
        { text: 'Books & E-books', to: '/search?category=books' },
        { text: 'Fiction', to: '/search?category=books&type=fiction' },
        { text: 'Mystery', to: '/search?category=books&type=fiction&genre=mystery' }
      ])

      const clearAllFilters = () => {
        breadcrumbData.value = []
        // Reset search and filters
        submittedValue.value = ''
        dropdownValue.value = 'All Collections'
        // You could also emit an event or call a parent method to reset the search
        console.log('All filters cleared')
      }

      // Search results data
      const searchResultsCount = ref(1247)
      const searchResultsPrefix = ref('Catalogue')
      const searchResultsLabel = ref('Results')
      const searchResultsAnimate = ref(true)

      // Sort dropdown data
      const sortOptions = ref([
        'Relevance',
        'Date (Newest First)',
        'Date (Oldest First)',
        'Title (A-Z)',
        'Title (Z-A)',
        'Author (A-Z)',
        'Author (Z-A)'
      ])
      const selectedSort = ref('Relevance')

      // Filter dropdown data
      const filterOptions = ref([
        'All Formats',
        'Books',
        'Articles',
        'Videos',
        'Images',
        'Audio',
        'Archives'
      ])

      const selectedFilter = ref('All Formats')

      // Grid layout state tied to route query
      const isGridLayout = ref(false)

      // Watch for view changes in URL and update grid layout
      watch(() => router.currentRoute.value.query.view, (newView) => {
        isGridLayout.value = newView === 'gallery'
        console.log(`Layout changed to: ${isGridLayout.value ? 'grid' : 'list'} view`)
      }, { immediate: true })

      // Refine search panel event handlers
      const handleFilterSelectionChange = (selectedOptions) => {
        console.log('Filter selection changed:', selectedOptions)
        // You can update search results based on selected filters here
      }

      const handleOptionSelected = (filterName, option) => {
        console.log(`Option selected in ${filterName}:`, option)
        // Handle individual option selection
      }

      const handleOptionDeselected = (filterName, option) => {
        console.log(`Option deselected in ${filterName}:`, option)
        // Handle individual option deselection
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
        breadcrumbData,
        clearAllFilters,
        searchResultsCount,
        searchResultsPrefix,
        searchResultsLabel,
        searchResultsAnimate,
        sortOptions,
        selectedSort,
        filterOptions,
        selectedFilter,
        primaryItems,
        secondaryItems,
        mockSearchFieldResultsPage,
        mockRefineSearchPanel,
        mockGridAssetPod,
        isGridLayout,
        handleFilterSelectionChange,
        handleOptionSelected,
        handleOptionDeselected,
        sampleMenuItems,
        sampleSubMenuItems,
      }
    },
    computed: {},
    template: `
       <div class="main-search-field-results-page">
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

         <div class="breadcrumbs-wrapper">
          <div class="breadcrumbs-container">
            <span class="breadcrumbs-label"
              v-if="breadcrumbData.length > 0"
            >
              Your Search
            </span>
            <ButtonTag 
              v-if="breadcrumbData.length > 0"
              :label="breadcrumbData"
              variant="primary"
            />
            <ButtonTag 
              v-if="breadcrumbData.length > 0"
              label="Clear All Filters"
              :is-highlighted="true"
              :on-click="clearAllFilters"
            />
          </div>
         </div>

          <div class="search-results-sort-wrapper">
           <SearchResultsCount
             :count="searchResultsCount"
             :prefix="searchResultsPrefix"
             :label="searchResultsLabel"
             :animate="searchResultsAnimate"
           />
           <div class="sort-container">
             <DropdownSingleSelectFunkhaus
               :options="sortOptions"
               v-model="selectedSort"
             />
             <DropdownSingleSelectFunkhaus
               :options="filterOptions"
               v-model="selectedFilter"
             />
             <ButtonPageView/>
           </div>
          </div>

        <main class="main-content">
          <div class="search-results-layout">
            <aside class="refine-search-sidebar">
              <RefineSearchPanel
                :title="mockRefineSearchPanel.title"
                :filters="mockRefineSearchPanel.filters"
                @selection-change="handleFilterSelectionChange"
                @option-selected="handleOptionSelected"
                @option-deselected="handleOptionDeselected"
              />
            </aside>
            
            <div class="search-results-main">
              <GridAssetPod
                :items="mockGridAssetPod.items"
                :is-grid-layout="isGridLayout"
                :has-transition="true"
              >
                <template #default="{ item }">
                  <SmartLink
                    :to="item.to"
                    role="article"
                    :aria-label="'View ' + item.title"
                    class="dlc block-asset-pod"
                  >
                    <ResponsiveImage
                      :media="item.media"
                      :alt="item.title + ' preview'"
                      class="image"
                    />

                    <div class="meta">
                      <h3 class="title">
                        {{ item.title }}
                      </h3>

                      <DefinitionList
                        v-if="item.metadata && Object.keys(item.metadata).length > 0"
                        :meta-data-object="item.metadata"
                        orientation="horizontal"
                        class="metadata-list"
                      />

                      <p class="date">
                        {{ item.date }}
                      </p>
                    </div>
                  </SmartLink>

                  <DividerGeneral
                    class="divider-general"
                    is-bold
                  />
                </template>
              </GridAssetPod>
            </div>
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
router.push({ path: '/search', query: { view: 'gallery' } })
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
