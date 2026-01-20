import { computed, ref, watch } from 'vue'

// Import components
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
import ResponsiveImage from '../lib-components/ResponsiveImage.vue'
import DefinitionList from '../lib-components/DefinitionList.vue'
import DividerGeneral from '../lib-components/DividerGeneral.vue'
import SvgIconFilter from 'ucla-library-design-tokens/assets/svgs/icon-dlc-filter.svg'

// Import mock data
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'
import router from '@/router'
import {
  mockBentoBoxResult,
  mockBreadcrumbData,
  mockFilterOptions,
  mockGridAssetPodItems,
  mockPagination,
  mockRefineSearchPanel,
  mockSearchFilters,
  mockSearchResults,
  mockSortOptions,
} from '@/stories/mock/Funkhaus/MockSearchFieldResultsPage'

// Import styles
import './MainSearchFieldResultsPage.scss'
import './GridAssetPod.scss'

export default {
  title: 'Funkhaus / Pages / Page Main Search Field Results',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A single page layout with header, main content area, and footer. This serves as a template for collections detail pages.',
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

// Template function for the main landing page
function Template(args) {
  // Initialize router with a path so ButtonPageView can build URLs correctly
  router.push({ path: '/search', query: router.currentRoute.value.query })
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
      ResponsiveImage,
      DefinitionList,
      DividerGeneral,
      SvgIconFilter,
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

      const isGridLayout = ref(false)

      const dropdownSortValue = ref('Relevance')
      const dropdownFilterValue = ref('All Formats')
      const currentPage = ref(mockPagination.currentPage)
      const isModalFilterOpen = ref(false)

      watch(
        () => router.currentRoute.value.query.view,
        (newView) => {
          isGridLayout.value = newView === 'gallery'
        },
        { immediate: true }
      )

      const handlePageChange = (page) => {
        currentPage.value = page
      }

      return {
        args,
        isGridLayout,
        dropdownSortValue,
        dropdownFilterValue,
        currentPage,
        isModalFilterOpen,
        mockGlobalNavSearch,
        mockBreadcrumbData,
        mockSearchResults,
        mockSortOptions,
        mockFilterOptions,
        mockPagination,
        mockRefineSearchPanel,
        mockBentoBoxResult,
        mockGridAssetPodItems,
        mockSearchFilters,
        handlePageChange,
      }
    },
    computed: {
    },
    template: `
       <div class="main-search-field-results-page">
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
             <SearchResultsCount
               :count="mockSearchResults.count"
               :prefix="mockSearchResults.prefix"
               :label="mockSearchResults.label"
               :animate="mockSearchResults.animate"
             />
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
                 :count="mockSearchResults.count"
                 :prefix="mockSearchResults.prefix"
                 :label="mockSearchResults.label"
                 :animate="mockSearchResults.animate"
               />
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
               <button
                 type="button"
                 class="button-filter-modal"
                 aria-label="Open filter modal"
                 @click="isModalFilterOpen = true"
               >
                 <SvgIconFilter class="icon-filter" />
                 <span>Refine Search</span>
               </button>
             </aside>

             <div class="search-results-main">
               <!-- Top Pagination -->
               <SectionPagination
                 :pages="mockPagination.totalPages"
                 :initial-current-page="currentPage"
                 :fixed-page-width-mode="true"
                 :fixed-page-width-num="8"
                 @change-page="handlePageChange"
                 class="search-results-pagination"
               />

               <!-- Grid Asset Pod -->
               <GridAssetPod
                 :items="mockGridAssetPodItems"
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

               <!-- Bottom Pagination -->
               <SectionPagination
                 :pages="mockPagination.totalPages"
                 :initial-current-page="currentPage"
                 :fixed-page-width-mode="true"
                 :fixed-page-width-num="8"
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
  searchInitialValue: '',
  searchPlaceholder: 'Search in...',
}
