import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import DetailHeader from '../lib-components/DetailHeader.vue'
import DetailMedia from '../lib-components/DetailMedia.vue'

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
      DetailHeader,
      DetailMedia,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const dropdownValue = ref(
        mockAssetDetailDataPage.searchForm.dropdownOptions[0]
      )

      const searchValue = ref('')

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
        mockAssetDetailDataPage,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
      }
    },
    computed: {},
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
            :placeholder="mockAssetDetailDataPage.searchForm.placeholder"
            :dropdown-options="mockAssetDetailDataPage.searchForm.dropdownOptions"
            :show-divider="true"
            v-model:dropdown-model-value="dropdownValue"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />

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
}
