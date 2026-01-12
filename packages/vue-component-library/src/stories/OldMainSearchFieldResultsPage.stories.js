import { computed, ref, watch } from 'vue'

// Import components
import FooterMain from '../lib-components/FooterMain.vue'

// import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
// import SmartLink from '../lib-components/SmartLink.vue'
// import ButtonTag from '../lib-components/ButtonTag.vue'
// import DropdownSingleSelectFunkhaus from '../lib-components/DropdownSingleSelectFunkhaus.vue'
import ButtonPageView from '../lib-components/ButtonPageView.vue'
import SearchResultsCount from '../lib-components/SearchResultsCount.vue'

// import RefineSearchPanel from "../lib-components/RefineSearchPanel.vue"
import GridAssetPod from '../lib-components/GridAssetPod.vue'
import SectionPagination from '../lib-components/SectionPagination.vue'
import ResponsiveImage from '../lib-components/ResponsiveImage.vue'
import DefinitionList from '../lib-components/DefinitionList.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import ModalFilter from '../lib-components/ModalFilter.vue'
import BentoBoxResult from '../lib-components/BentoBoxResult.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import {
  mockBentoBoxResult,
  mockBreadcrumbData,
  mockFilterOptions,
  mockGridAssetPodItems,
  mockMenuItems,
  mockPagination,
  mockRefineSearchPanel,
  mockSearchFieldResultsPage,
  mockSearchResults,
  mockSortOptions,
  mockSubMenuItems,
} from './mock/Funkhaus/MockSearchFieldResultsPage'
import router from '@/router'

// Import styles
import './MainSearchFieldResultsPage.scss'
import './GridAssetPod.scss'

export default {
  title: 'Funkhaus / Pages / Old Main Search Field Results Page',
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
      FooterMain,
      // SearchFieldComposite,
      // SmartLink,
      // GlobalMenuPanel,
      // ButtonTag,
      // DropdownSingleSelectFunkhaus,
      ButtonPageView,
      SearchResultsCount,
      // RefineSearchPanel,
      GridAssetPod,
      SectionPagination,
      ResponsiveImage,
      DefinitionList,
      DividerGeneral,
      ModalFilter,
      BentoBoxResult,
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
      const isModalFilterOpened = ref(false)

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
      const breadcrumbData = ref([...mockBreadcrumbData])

      const clearAllFilters = () => {
        breadcrumbData.value = []
        // Reset search and filters
        submittedValue.value = ''
        dropdownValue.value = 'All Collections'
        // You could also emit an event or call a parent method to reset the search
        console.log('All filters cleared')
      }

      // Search results data
      const searchResultsCount = ref(mockSearchResults.count)
      const searchResultsPrefix = ref(mockSearchResults.prefix)
      const searchResultsLabel = ref(mockSearchResults.label)
      const searchResultsAnimate = ref(mockSearchResults.animate)

      // Sort dropdown data
      const sortOptions = ref([...mockSortOptions])
      const selectedSort = ref('Relevance')

      // Filter dropdown data
      const filterOptions = ref([...mockFilterOptions])
      const selectedFilter = ref('All Formats')

      // Grid layout state tied to route query
      const isGridLayout = ref(false)

      // Watch for view changes in URL and update grid layout
      watch(
        () => router.currentRoute.value.query.view,
        (newView) => {
          isGridLayout.value = newView === 'gallery'
          console.log(
                        `Layout changed to: ${
                            isGridLayout.value ? 'grid' : 'list'
                        } view`
          )
        },
        { immediate: true }
      )

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

      // Generate items for GridAssetPod
      const gridAssetPodItems = mockGridAssetPodItems

      // Pagination data
      const totalPages = ref(mockPagination.totalPages)
      const currentPage = ref(mockPagination.currentPage)

      // Callback function to generate pagination links
      const generatePaginationLink = (pageNumber, queryParams) => {
        const params = new URLSearchParams(queryParams)
        params.set('page', pageNumber.toString())
        return `/search?${params.toString()}`
      }

      // Handle page change
      const handlePageChange = (pageNumber) => {
        currentPage.value = pageNumber
        console.log(`Page changed to: ${pageNumber}`)
        // You can add logic here to fetch new data for the page
      }
      const handleModalFilterClose = () => {
        isModalFilterOpened.value = false
      }

      // Sample menu items data
      const sampleMenuItems = mockMenuItems
      const sampleSubMenuItems = mockSubMenuItems

      const handleSeeAll = (filterName) => {
        console.log(`See all clicked for ${filterName}`)
        console.log(
          'mockRefineSearchPanel',
          mockRefineSearchPanel.modalFilterItems
        )
        isModalFilterOpened.value = true
      }

      return {
        args,
        dropdownValue,
        // submittedValue,
        // handleSearchSubmit,
        // handleDropdownUpdate,
        breadcrumbData,
        // clearAllFilters,
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
        mockBentoBoxResult,
        gridAssetPodItems,
        isGridLayout,
        handleFilterSelectionChange,
        handleOptionSelected,
        handleOptionDeselected,
        sampleMenuItems,
        sampleSubMenuItems,
        totalPages,
        currentPage,
        generatePaginationLink,
        handlePageChange,
        isModalFilterOpened,
        handleSeeAll,
        handleModalFilterClose,
      }
    },
    computed: {},
    template: `
      <div class="main-search-field-results-page">

        <!-- Main Content -->
        <main class="main-content">
          <!-- Search Field Section -->
          <div class="search-field-composite-wrapper">
            <SearchFieldComposite
              class="search-bar"
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

          <!-- Breadcrumbs Section -->
          <div class="breadcrumbs-wrapper">
            <div class="breadcrumbs-container">
              <span 
                v-if="breadcrumbData.length > 0"
                class="breadcrumbs-label"
              >
                Your Search
              </span>
              // <ButtonTag 
              //   v-if="breadcrumbData.length > 0"
              //   :label="breadcrumbData"
              //   variant="primary"
              // />
              // <ButtonTag 
              //   v-if="breadcrumbData.length > 0"
              //   label="Clear All Filters"
              //   :is-highlighted="true"
              //   :on-click="clearAllFilters"
              // />
            </div>
            <DividerGeneral
              class="divider-general"
              :is-tertiary="true"
            />
          </div>

          <!-- Search Results Controls - Desktop -->
          <div class="search-results-sort-wrapper show-desktop">
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
              <ButtonPageView />
            </div>
          </div>

          <!-- Search Results Controls - Mobile -->
          <div class="search-results-sort-wrapper show-mobile">
            <div class="count-view-wrapper">
              <SearchResultsCount
                :count="searchResultsCount"
                :prefix="searchResultsPrefix"
                :label="searchResultsLabel"
                :animate="searchResultsAnimate"
              />
              <ButtonPageView />
            </div>

            <div class="sort-container">
              <div class="sort-options-wrapper">
                <DropdownSingleSelectFunkhaus
                  :options="sortOptions"
                  v-model="selectedSort"
                />
                <DropdownSingleSelectFunkhaus
                  :options="filterOptions"
                  v-model="selectedFilter"
                />
              </div>
              <RefineSearchPanel
                :opened="false"
                :limit-options="true"
                class="refine-search-panel"
                :title="mockRefineSearchPanel.title"
                :filters="mockRefineSearchPanel.filters"
                @selection-change="handleFilterSelectionChange"
                @option-selected="handleOptionSelected"
                @option-deselected="handleOptionDeselected"
                @see-all="handleSeeAll"
              />
            </div>
          </div>

          <!-- Search Results Layout -->
          <div class="search-results-layout">
            <!-- Refine Search Sidebar - Desktop -->
            <aside class="refine-search-sidebar show-desktop">
              <RefineSearchPanel
                :limit-options="true"
                :title="mockRefineSearchPanel.title"
                :filters="mockRefineSearchPanel.filters"
                @selection-change="handleFilterSelectionChange"
                @option-selected="handleOptionSelected"
                @option-deselected="handleOptionDeselected"
                @see-all="handleSeeAll"
              />
            </aside>
            
            <!-- Search Results Main Content -->
            <div class="search-results-main">
              <!-- Top Pagination -->
              <SectionPagination
                :pages="totalPages"
                :initial-current-page="5"
                :generate-link-callback="generatePaginationLink"
                :fixed-page-width-mode="true"
                :fixed-page-width-num="8"
                @change-page="handlePageChange"
                class="search-results-pagination"
              />

              <!-- Grid Asset Pod -->
              <GridAssetPod
                :items="gridAssetPodItems"
                :is-grid-layout="isGridLayout"
                :has-transition="true"
                class="grid-asset-pod"
              >
                <template #default="{ item }">
                  <SmartLink
                    :to="item.to"
                    role="article"
                    :aria-label="\`View \${item.title}\`"
                    class="dlc block-asset-pod"
                  >
                    <ResponsiveImage
                      :media="item.media"
                      :alt="\`\${item.title} preview\`"
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

              <!-- Bottom Pagination -->
              <SectionPagination
                :pages="totalPages"
                :initial-current-page="5"
                :generate-link-callback="generatePaginationLink"
                :fixed-page-width-mode="true"
                :fixed-page-width-num="8"
                @change-page="handlePageChange"
                class="search-results-pagination bottom-pagination"
              />
            </div>
          </div>

          </main>
          <!-- Bento Box Results Section -->
          <div class="bento-box-results-section">
            <BentoBoxResult
              :title="mockBentoBoxResult.title"
              :items="mockBentoBoxResult.items"
            />
          </div>

        <!-- Modal Filter -->
        <ModalFilter
          :is-open="isModalFilterOpened"
          :items="mockRefineSearchPanel.modalFilterItems"
          @close="handleModalFilterClose"
        />
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
