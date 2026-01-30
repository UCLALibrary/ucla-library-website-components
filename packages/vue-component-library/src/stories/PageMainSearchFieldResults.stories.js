import { computed, ref, watch } from 'vue'

// Import components
import SvgIconFilter from 'ucla-library-design-tokens/assets/svgs/icon-dlc-filter.svg'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import SectionRemoveSearchFilter from '../lib-components/SectionRemoveSearchFilter.vue'
import SearchResultsCount from '../lib-components/SearchResultsCount.vue'
import DropdownSingleSelect from '../lib-components/DropdownSingleSelect.vue'
import ButtonPageView from '../lib-components/ButtonPageView.vue'
import GridAssetPod from '../lib-components/GridAssetPod.vue'
import SectionPagination from '../lib-components/SectionPagination.vue'
import ModalFilter from '../lib-components/ModalFilter.vue'
import BentoBoxResult from '../lib-components/BentoBoxResult.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import DefinitionList from '../lib-components/DefinitionList.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import RefineSearchPanel from '../lib-components/RefineSearchPanel.vue'

// Import composables
import { useElasticSearch } from '../composables/useElasticSearch'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import router from '@/router'
import {
  mockBentoBoxResult,
  mockBreadcrumbData,
  mockFilterOptions,
  mockPagination,
  mockRefineSearchPanel,
  mockSearchFilters,
  mockSortOptions,
} from '@/stories/mock/Funkhaus/MockPageSearchFieldResults'

// Import styles
import './PageMainSearchFieldResults.scss'
import './GridAssetPod.scss'

export default {
  title: 'Funkhaus / Pages / Page Main Search Field Results',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for collections detail pages.',
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

function Template(args) {
  // Initialize router with query so ButtonPageView can build URLs correctly
  router.push({ query: router.currentRoute.value.query })
  return {
    components: {
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      NavSearch,
      SectionRemoveSearchFilter,
      SearchResultsCount,
      DropdownSingleSelect,
      ButtonPageView,
      GridAssetPod,
      SectionPagination,
      ModalFilter,
      BentoBoxResult,
      SmartLink,
      DefinitionList,
      DividerGeneral,
      SvgIconFilter,
      RefineSearchPanel,
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

      // Initialize Elasticsearch search composable
      // This provides: loading state, error handling, total count, hits array, and performSearch function
      const { loading, error, total, hits, performSearch }
                = useElasticSearch()

      const isGridLayout = ref(false)

      const dropdownSortValue = ref({ sort: 'Relevance' })
      const dropdownFilterValue = ref({ filter: 'All Formats' })
      const currentPage = ref(mockPagination.currentPage)
      const isModalFilterOpen = ref(false)
      const searchQuery = ref('')
      const activeFilters = ref({})
      const refineSearchSelections = ref({})

      watch(
        () => router.currentRoute.value.query.q,
        (newQuery, oldQuery) => {
          const queryText = Array.isArray(newQuery)
            ? newQuery[0] || ''
            : newQuery || ''
          const oldQueryText = Array.isArray(oldQuery)
            ? oldQuery?.[0] || ''
            : oldQuery || ''

          // Reset pagination to page 1 if the query has actually changed
          if (queryText !== oldQueryText)
            currentPage.value = 1

          searchQuery.value = queryText
          executeSearch()
        },
        { immediate: true }
      )

      watch(
        () => router.currentRoute.value.query.view,
        (newView) => {
          isGridLayout.value = newView === 'gallery' // 'gallery' = grid, anything else = list
        },
        { immediate: true }
      )

      // Watch for filter, sort, and page changes
      // When any of these change, re-execute the search
      watch(
        () => [
          dropdownFilterValue.value.filter,
          dropdownSortValue.value.sort,
          currentPage.value,
        ],
        () => {
          executeSearch()
        },
        { deep: true }
      )

      /**
       * Safely extract values from nested objects or arrays
       *
       * Tries multiple field paths and returns the first value found.
       * Handles dot notation (e.g., "metadata.title") and arrays (returns first element).
       *
       * @param obj - The object to search in
       * @param paths - One or more field paths to try (e.g., 'title', 'titles', 'metadata.title')
       * @returns The found value, or null if not found
       */
      function extractValue(obj, ...paths) {
        for (const path of paths) {
          if (!path)
            continue

          // Handle dot notation paths (e.g., "metadata.title")
          const keys = path.split('.')
          let value = obj

          // Navigate through nested object properties
          for (const key of keys) {
            if (value == null)
              break
            value = value[key]
          }

          // If we found a value, return it (handle arrays by taking first element)
          if (value != null) {
            if (Array.isArray(value) && value.length > 0) {
              return typeof value[0] === 'string'
                ? value[0]
                : value[0]
            }

            return value
          }
        }
        return null
      }

      /**
       * Transform Elasticsearch hits to GridAssetPod format
       *
       * Maps Elasticsearch result documents to the format expected by GridAssetPod component.
       * Extracts title, date, URL, description, resourceType, collections, and locations
       * from various possible field names in the Elasticsearch _source.
       */
      const gridAssetPodItems = computed(() => {
        if (!hits.value || hits.value.length === 0)
          return []

        // Transform each Elasticsearch hit to GridAssetPod item format
        return hits.value.map((hit, index) => {
          const source = hit._source || {} // Elasticsearch stores document data in _source

          // Try multiple possible URL fields (Elasticsearch documents vary)
          const urlValue = extractValue(
            source,
            'url',
            'uri',
            'link',
            'permalink',
            'slug',
            'id',
            'ark', // UCLA uses ARK (Archival Resource Key) identifiers
            'metadata.url',
            'dc.identifier'
          )

          let itemUrl = '/'
          if (urlValue) {
            if (
              typeof urlValue === 'string'
                            && (urlValue.startsWith('http')
                                || urlValue.startsWith('/'))
            ) {
              itemUrl = urlValue
            }
            else if (
              source.url
                            && typeof source.url === 'string'
            ) {
              itemUrl = source.url
            }
            else if (source.ark) {
              // Use ARK to build URL if available
              itemUrl
                                = source.url
                                || `https://digital.library.ucla.edu/catalog/${source.ark}`
            }
            else if (source.slug) {
              itemUrl = `/${source.slug}`
            }
            else if (source.id) {
              itemUrl = `/item/${source.id}`
            }
            else {
              itemUrl = `/${String(urlValue)}`
            }
          }
          else if (source.url && typeof source.url === 'string') {
            itemUrl = source.url
          }
          else if (source.ark) {
            itemUrl
                            = source.url
                            || `https://digital.library.ucla.edu/catalog/${source.ark}`
          }
          else if (source.slug) {
            itemUrl = `/${source.slug}`
          }
          else if (source.id) {
            itemUrl = `/item/${source.id}`
          }

          // Try multiple date fields and normalize format
          const dateValue = extractValue(
            source,
            'date',
            'created',
            'publicationDate',
            'year',
            'createdDate',
            'publishedDate',
            'dc.date',
            'dc_date',
            'metadata.date',
            'dateCreated',
            'datePublished'
          )

          // Normalize date to string format
          let displayDate = ''
          if (dateValue) {
            if (typeof dateValue === 'string')
              displayDate = dateValue
            else if (typeof dateValue === 'number')
              displayDate = String(dateValue)
            else if (dateValue instanceof Date)
              displayDate = dateValue.toISOString().split('T')[0]
            // Format as YYYY-MM-DD
            else displayDate = String(dateValue)
          }

          // UCLA Elasticsearch uses plural arrays like "titles" instead of singular "title"
          // Try many possible field names and nested paths
          let title = extractValue(
            source,
            'titles', // Plural array - extractValue handles arrays
            'title',
            'name',
            'headline',
            'displayTitle',
            'titleText',
            'label',
            'dcTitle',
            'dc_title',
            'metadata.title',
            'metadata.name',
            'dc.title',
            'dc.title.0',
            'title.keyword',
            'name.keyword'
          )

          // Handle arrays: if we got the whole array, take first element
          if (Array.isArray(title) && title.length > 0)
            title = title[0]

          // Fallback: check source.titles directly if extractValue didn't find it
          if (
            !title
                        && source.titles
                        && Array.isArray(source.titles)
                        && source.titles.length > 0
          )
            title = source.titles[0]

          title = title || 'Untitled' // Default fallback

          // Similar to titles, descriptions may be plural arrays
          let descriptionValue = extractValue(
            source,
            'descriptions', // Plural array
            'description',
            'summary',
            'abstract',
            'dcDescription',
            'dc_description',
            'dc.description',
            'metadata.description',
            'content',
            'text'
          )

          // Handle arrays: take first element if array
          if (
            Array.isArray(descriptionValue)
                        && descriptionValue.length > 0
          )
            descriptionValue = descriptionValue[0]

          // Fallback: check source.descriptions directly
          if (
            !descriptionValue
                        && source.descriptions
                        && Array.isArray(source.descriptions)
                        && source.descriptions.length > 0
          )
            descriptionValue = source.descriptions[0]

          descriptionValue = descriptionValue || ''

          const resourceTypeValue
                        = extractValue(
                          source,
                          'resourceType',
                          'type',
                          'format',
                          'dcType',
                          'dc_type',
                          'dc.type',
                          'itemType',
                          'contentType',
                          'mediaType'
                        ) || ''

          // Collections can be: array of strings, array of objects, single string, or single object
          let collections = []
          const collectionValue = extractValue(
            source,
            'collection',
            'collections',
            'collectionName',
            'dc.relation',
            'metadata.collection'
          )
          if (collectionValue) {
            if (Array.isArray(collectionValue)) {
              // Map array items to strings (handle objects by extracting name/title/label)
              collections = collectionValue.map(c =>
                typeof c === 'string'
                  ? c
                  : c.name || c.title || c.label || String(c)
              )
            }
            else if (typeof collectionValue === 'string') {
              collections = [collectionValue]
            }
            else if (typeof collectionValue === 'object') {
              collections = [
                collectionValue.name
                                    || collectionValue.title
                                    || collectionValue.label
                                    || '',
              ]
            }
          }

          // Same pattern as collections
          let locations = []
          const locationValue = extractValue(
            source,
            'locations',
            'location',
            'place',
            'dc.coverage',
            'metadata.location'
          )
          if (locationValue) {
            if (Array.isArray(locationValue)) {
              locations = locationValue.map(l =>
                typeof l === 'string'
                  ? l
                  : l.name || l.title || l.label || String(l)
              )
            }
            else if (typeof locationValue === 'string') {
              locations = [locationValue]
            }
            else if (typeof locationValue === 'object') {
              locations = [
                locationValue.name
                                    || locationValue.title
                                    || locationValue.label
                                    || '',
              ]
            }
          }

          // This object is passed to DefinitionList component for display
          const metadata = {
            description: descriptionValue,
            date: displayDate,
            resourceType: resourceTypeValue,
            collection: collections,
            locations,
          }

          return {
            to: itemUrl,
            title,
            date: displayDate,
            metadata,
          }
        })
      })

      /**
       * Computed property for search results count display
       *
       * Uses total from Elasticsearch if available, otherwise falls back to hits length.
       * Returns object with count, prefix, label, and animate flag for SearchResultsCount component.
       */
      const searchResultsCount = computed(() => {
        // Prioritize total from Elasticsearch, but use hits length if total is 0 but we have hits
        let actualCount = 0
        if (total.value > 0)
          actualCount = total.value // Use Elasticsearch total count
        else if (hits.value && hits.value.length > 0)
          actualCount = hits.value.length // Fallback to current page count

        return {
          count: actualCount,
          prefix: 'Found',
          label: 'Results',
          animate: true, // Enable count animation
        }
      })

      /**
       * Computed property for pagination
       *
       * IMPORTANT LIMIT: Elasticsearch has a hard limit: from + size <= 10000
       * This means you cannot paginate beyond result 10,000.
       * With pageSize = 10, maximum page = (10000 - 10) / 10 + 1 = 1000
       *
       * The pagination component will show up to 1000 pages maximum,
       * even if there are more results available.
       */
      const pagination = computed(() => {
        const pageSize = 6
        const actualTotal = total.value || 0
        const maxPages = 1000 // Elasticsearch pagination limit
        const calculatedPages = Math.ceil(actualTotal / pageSize)
        const totalPages = Math.min(calculatedPages, maxPages) // Cap at 1000 pages
        return {
          totalPages,
          currentPage: Math.min(currentPage.value, totalPages), // Don't allow currentPage beyond totalPages
        }
      })

      /**
       * Execute search with current parameters
       *
       * Builds filters from dropdown selections, merges with active filters,
       * gets sort value, and calls performSearch with all parameters.
       */
      function executeSearch() {
        // Build filters object from dropdownFilterValue
        const filters = {}
        const filterValue
                    = dropdownFilterValue.value?.filter
                    || dropdownFilterValue.value
        if (
          filterValue
                    && filterValue !== 'All Formats'
                    && filterValue !== ''
        ) {
          // Map filter option to Elasticsearch field name
          // This is a simplified mapping - adjust based on actual Elasticsearch schema
          filters.resourceType = [filterValue.toLowerCase()]
        }

        // Merge with activeFilters from SectionRemoveSearchFilter component
        Object.assign(filters, activeFilters.value)

        // Get sort value from dropdown object
        const sortValue
                    = dropdownSortValue.value?.sort
                    || dropdownSortValue.value
                    || 'Relevance'

        const pageSize = 10

        // Call Elasticsearch search with all parameters
        performSearch({
          queryText: searchQuery.value,
          filters,
          page: currentPage.value,
          pageSize,
          sort: sortValue,
        })
      }

      /**
       * Handle page change from pagination component
       */
      const handlePageChange = (page) => {
        currentPage.value = page
      }

      /**
       * Handle selection changes from RefineSearchPanel
       */
      const handleRefineSearchSelectionChange = (selections) => {
        refineSearchSelections.value = selections
        // Merge refine search selections into activeFilters
        // This will trigger the watcher and re-execute search
        Object.assign(activeFilters.value, selections)
      }

      // Execute initial search when component mounts
      executeSearch()

      return {
        args,
        isGridLayout,
        dropdownSortValue,
        dropdownFilterValue,
        currentPage,
        isModalFilterOpen,
        loading,
        error,
        mockGlobalNavSearch,
        mockBreadcrumbData,
        searchResultsCount,
        mockSearchResults: searchResultsCount,
        mockSortOptions,
        mockFilterOptions,
        mockPagination: pagination,
        mockRefineSearchPanel,
        mockBentoBoxResult,
        gridAssetPodItems,
        mockSearchFilters,
        handlePageChange,
        handleRefineSearchSelectionChange,
      }
    },
    template: `
       <div class="page-main-search-field-results">
         <!-- Header -->
        <header-smart/>

         <!-- Nav Search -->
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
          
           <!-- Breadcrumbs / Filters -->
           <div class="breadcrumbs-wrapper">
             <SectionRemoveSearchFilter :filters="mockSearchFilters" />
           </div>

          <DividerGeneral
            class="divider-general"
            is-bold
            is-tertiary
          />

           <!-- Search Results Controls - Desktop -->
           <div class="search-results-sort-wrapper show-desktop">
             <div class="count-filter-wrapper">
               <SearchResultsCount
                 :count="searchResultsCount?.count || 0"
                 :prefix="searchResultsCount?.prefix || 'Found'"
                 :label="searchResultsCount?.label || 'Results'"
                 :animate="searchResultsCount?.animate || false"
                 class="search-results-count"
               />
               <button
                 type="button"
                 class="button-filter-modal"
                 aria-label="Open filter modal"
                 @click="isModalFilterOpen = true"
               >
                 <SvgIconFilter class="icon-filter" />
                 <span>Refine Search</span>
               </button>
             </div>
             <div class="sort-container">
               <DropdownSingleSelect
                 v-model:selectedFilters="dropdownSortValue"
                 :label="'Sort by'"
                 :options="mockSortOptions.map(option => ({ label: option, value: option }))"
                 :field-name="'sort'"
                 :show-view-all="true"
                 :is-search="false"
               />
               <DropdownSingleSelect
                 v-model:selectedFilters="dropdownFilterValue"
                 :label="'Filter'"
                 :options="mockFilterOptions.map(option => ({ label: option, value: option }))"
                 :field-name="'filter'"
                 :show-view-all="true"
                 :is-search="false"
               />
               <ButtonPageView />
             </div>
           </div>

           <!-- Search Results Controls - Mobile -->
           <div class="search-results-sort-wrapper show-mobile">
             <div class="count-view-wrapper">
               <SearchResultsCount
                 :count="searchResultsCount.count"
                 :prefix="searchResultsCount.prefix"
                 :label="searchResultsCount.label"
                 :animate="searchResultsCount.animate"
               />
               <button
                 type="button"
                 class="button-filter-modal"
                 aria-label="Open filter modal"
                 @click="isModalFilterOpen = true"
               >
                 <SvgIconFilter class="icon-filter" />
                 <span>Refine Search</span>
               </button>
              <ButtonPageView />
             </div>
             <div class="sort-container">
               <DropdownSingleSelect
                 v-model:selectedFilters="dropdownSortValue"
                 :label="'Sort by'"
                 :options="mockSortOptions.map(option => ({ label: option, value: option }))"
                 :field-name="'sort'"
                 :show-view-all="true"
                 :is-search="false"
               />
               <DropdownSingleSelect
                 v-model:selectedFilters="dropdownFilterValue"
                 :label="'Filter'"
                 :options="mockFilterOptions.map(option => ({ label: option, value: option }))"
                 :field-name="'filter'"
                 :show-view-all="true"
                 :is-search="false"
               />
             </div>
           </div>

           <!-- Layout -->
           <div class="search-results-layout">
             <aside class="refine-search-placeholder">
               <RefineSearchPanel
                 :title="mockRefineSearchPanel.title"
                 :filters="mockRefineSearchPanel.filters"
                 @selection-change="handleRefineSearchSelectionChange"
               />
             </aside>

             <div class="search-results-main">
               <!-- Top Pagination -->
               <SectionPagination
                 :pages="mockPagination.totalPages"
                 :initial-current-page="currentPage"
                 :fixed-page-width-mode="true"
                 :fixed-page-width-num="7"
                 @change-page="handlePageChange"
                 class="search-results-pagination"
               />

               <!-- Grid Asset Pod -->
               <div v-if="gridAssetPodItems.length === 0" class="no-results-message">
                 <p>No search results</p>
               </div>
               <GridAssetPod
                 v-else
                 :items="gridAssetPodItems"
                 :is-grid-layout="isGridLayout"
                 :has-transition="true"
                 class="grid-asset-pod"
               >
                 <template #default="{ item }">
                   <SmartLink
                     :to="item.to"
                     role="article"
                     :aria-label="'View ' + item.title"
                     class="dlc block-asset-pod"
                   >
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
                 :pages="mockPagination.totalPages"
                 :initial-current-page="currentPage"
                 :fixed-page-width-mode="true"
                 :fixed-page-width-num="7"
                 @change-page="handlePageChange"
                 class="search-results-pagination bottom-pagination"
               />
             </div>
           </div>

           <!-- Bento Box Results -->
           <div class="bento-box-results-section">
             <BentoBoxResult
               :title="mockBentoBoxResult.title"
               :items="mockBentoBoxResult.items"
             />
           </div>

           <!-- Modal Filter -->
           <ModalFilter
             :is-open="isModalFilterOpen"
             :items="mockRefineSearchPanel.modalFilterItems"
             @close="isModalFilterOpen = false"
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
