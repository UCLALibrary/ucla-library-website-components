import { computed, ref } from 'vue'

// Import components
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import SmartLink from '../lib-components/SmartLink.vue'

// Import mock data
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'
import { mockProgramLandingPage } from './mock/Funkhaus/MockProgramLandingPage'

// Import styles
import './ProgramLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Page Program Landing',
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
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      SectionTeaserCard,
      NavSearch,
      CollectionOverview,
      ButtonMore,
      SmartLink,
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

      const dropdownValue = ref(
        mockProgramLandingPage.searchForm.dropdownOptions[0]
      )

      const searchValue = ref('')

      const showMoreFeaturedProjects = () => {
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

      return {
        args,
        mockProgramLandingPage,
        mockGlobalNavSearch,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        showMoreFeaturedProjects,
      }
    },
    computed: {
      gridItems() {
        const parsedItems
                    = mockProgramLandingPage?.gridAssets?.items?.map((item) => {
                      return {
                        image: item.image,
                        title: item.title,
                        text: item.description,
                        href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                      }
                    }) || []

        return parsedItems
      },
    },
    template: `
       <div class="program-landing-page">
         <HeaderSmart/>


        <main class="main-content">
          <div class="search-field-composite-wrapper">

            <NavSearch 
                class='search-field-composite'
                :show-divider="true"
                :placeholder="mockGlobalNavSearch.placeholder"
                :dropdown-options="mockGlobalNavSearch.dropdownOptions" 
                :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
                bottom-text=""
                :bottom-link="null"
            />


            <!-- <SearchFieldComposite
          
              :initial-value="args.searchInitialValue || searchValue"
              
              :dropdown-model-value="dropdownValue"
              
              :dropdown-placeholder="args.searchDropdownPlaceholder"
              :show-divider="args.searchShowDivider !== undefined ? args.searchShowDivider : true"
              @submit="handleSearchSubmit"
              @update:dropdown-model-value="handleDropdownUpdate"
            /> -->
          </div>

          <CollectionOverview
            class="collection-overview"
            :title="mockProgramLandingPage.collectionOverview.title"
            :subtitle="mockProgramLandingPage.collectionOverview.subtitle"
            :block-buttons="mockProgramLandingPage.collectionOverview.blockButtons"
            :description="mockProgramLandingPage.collectionOverview.description"
            :image="mockProgramLandingPage.collectionOverview.image"
          />

          <h2 class="title-grid-assets">
            {{ mockProgramLandingPage.gridAssets.title }}
          </h2>
        <SectionTeaserCard
            :items="gridItems" 
            :grid-layout="true"
            class="section-teaser-card"
        />


          <ButtonMore
              class="button-more"
              text="Browse more projects"
              @click="showMoreFeaturedProjects"
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
  searchDropdownValue: 'all-programs',
  searchDropdownOptions: [
    { label: 'All Programs', value: 'all-programs' },
    {
      label: 'Books & E-books',
      value: 'books-e-books',
    },
    {
      label: 'Articles & Journals',
      value: 'articles-journals',
    },
    { label: 'Databases', value: 'databases' },
  ],
  searchDropdownPlaceholder: 'Select category',
  searchShowDivider: true,
}
