import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import GridAssets from '../lib-components/GridAssets.vue'
import GridMetadata from '../lib-components/GridMetadata.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockCollectionsDataPage } from './mock/Funkhaus/MockCollectionsDetailPage'
import { useGlobalStore } from '@/stores/GlobalStore'

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
      GridAssets,
      GridMetadata,
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
      const searchValue = ref('')
      const dropdownValue = ref(
        mockCollectionsDataPage.searchForm.dropdownOptions[0]
      )

      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }

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

      // Sample menu items data
      const sampleMenuItems = [
        {
          id: '843',
          name: 'Using digital collections content',
          to: '/digital-collections',
          classes: '',
          target: '',
        },
        {
          id: '844',
          name: 'About',
          to: '/about',
          classes: '',
          target: '',
        },
        {
          id: '845',
          name: 'Give us feedback',
          to: '/feedback',
          classes: '',
          target: '',
        },
      ]

      const sampleSubMenuItems = [
        {
          id: '846',
          name: 'Locations & Hours',
          to: '/locations',
          classes: '',
          target: '',
        },
        {
          id: '847',
          name: 'Ask a Librarian',
          to: '/research-teaching-support/research-help',
          classes: '',
          target: '',
        },
        {
          id: '848',
          name: 'Support Us',
          to: 'https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463',
          classes: '',
          target: '1',
        },
        {
          id: '849',
          name: 'My Account',
          to: 'https://catalog.library.ucla.edu/vwebv/login',
          classes: '',
          target: '1',
        },
      ]

      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = sampleMenuItems
      globalStore.header.secondary = sampleSubMenuItems

      return {
        args,
        menuOpened,
        toggleMenu,
        primaryItems,
        secondaryItems,
        mockCollectionsDataPage,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        showMoreFeaturedCollections,
        sampleMenuItems,
        sampleSubMenuItems,
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
      gridMetadataItems() {
        return mockCollectionsDataPage?.gridMetadata?.items || []
      },
    },
    template: `
       <div class="collections-detail-page">
         <!-- Header -->
        <header-smart/>



        <main class="main-content">
          <CollectionOverview
            :title="mockCollectionsDataPage.collectionOverview.title"
            :subtitle="mockCollectionsDataPage.collectionOverview.subtitle"
            :items-count="mockCollectionsDataPage.collectionOverview.itemsCount"
            :block-buttons="mockCollectionsDataPage.collectionOverview.blockButtons"
            :description="mockCollectionsDataPage.collectionOverview.description"
            :image="mockCollectionsDataPage.collectionOverview.image"
            class="collection-overview"
          />

          <GridMetadata :items="gridMetadataItems" class="grid-metadata" />

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
