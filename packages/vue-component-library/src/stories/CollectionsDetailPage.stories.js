import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import GridAssets from '../lib-components/GridAssets.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockCollectionsDataPage } from './mock/Funkhaus/MockCollectionsDataPage'

// Import styles
import './CollectionsDetailPage.scss'

export default {
  title: 'Funkhaus / Pages / Collections Detail Page',
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
      FooterMain,
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
      const searchValue = ref('')
      const dropdownValue = ref(
        mockCollectionsDataPage.searchForm.dropdownOptions[0]
      )

      const showMoreFeaturedCollections = () => {
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
        mockCollectionsDataPage,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        showMoreFeaturedCollections,
      }
    },
    computed: {
      gridItems() {
        const parsedItems
                    = mockCollectionsDataPage?.gridAssets?.items?.map((item) => {
                      return {
                        ...item,
                        href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                      }
                    }) || []

        return parsedItems
      },
    },
    template: `
       <div class="collections-detail-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
          <SearchFieldComposite
             class="search-field-composite"
            v-model:initial-value="searchValue"
            :placeholder="mockCollectionsDataPage.searchForm.placeholder"
            :dropdown-options="mockCollectionsDataPage.searchForm.dropdownOptions"
            :show-divider="true"
            v-model:dropdown-model-value="dropdownValue"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />
          <CollectionOverview
            :title="mockCollectionsDataPage.collectionOverview.title"
            :subtitle="mockCollectionsDataPage.collectionOverview.subtitle"
            :items-count="mockCollectionsDataPage.collectionOverview.itemsCount"
            :block-buttons="mockCollectionsDataPage.collectionOverview.blockButtons"
            :description="mockCollectionsDataPage.collectionOverview.description"
            :image="mockCollectionsDataPage.collectionOverview.image"
          />

          


          <ButtonMore
              class="button-more"
              text="Browse Items From Collection"
              @click="showMoreFeaturedCollections"
          />

          <span class="subtitle-grid-assets">
            {{ mockCollectionsDataPage.gridAssets.subtitle }}
          </span>
          <h2 class="title-grid-assets">
            {{ mockCollectionsDataPage.gridAssets.title }}
          </h2>
          <GridAssets :items="gridItems" class="grid-assets" />
          
          
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
}
