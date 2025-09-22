import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import GridAssets from '../lib-components/GridAssets.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockProgramLandingPage } from './mock/Funkhaus/MockProgramLandingPage'

// Import styles
import './ProgramLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Program Landing Page',
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

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSticky,
      FooterPrimary,
      SearchFieldComposite,
      CollectionOverview,
      GridAssets,
      ButtonMore,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
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
        primaryItems,
        secondaryItems,
        mockProgramLandingPage,
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
                        ...item,
                        href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                      }
                    }) || []

        return parsedItems
      },
    },
    template: `
       <div class="program-landing-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
          <SearchFieldComposite
            class="search-field-composite"
            v-model:initial-value="searchValue"
            :placeholder="mockProgramLandingPage.searchForm.placeholder"
            :dropdown-options="mockProgramLandingPage.searchForm.dropdownOptions"
            :show-divider="true"
            v-model:dropdown-model-value="dropdownValue"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />
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
          <GridAssets :items="gridItems" class="grid-assets" />
          <ButtonMore
              class="button-more"
              text="Browse more projects"
              @click="showMoreFeaturedProjects"
          />
        
        </main>
         
         <!-- Footer -->
         <FooterPrimary />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
}
