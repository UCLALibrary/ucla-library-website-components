import { computed, ref } from 'vue'

// Import components
import FooterMain from '../lib-components/FooterMain.vue'
// import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
// import GridMetadata from '../lib-components/GridMetadata.vue'
// import ButtonMore from '../lib-components/ButtonMore.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
// import SmartLink from '../lib-components/SmartLink.vue'
// import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
// import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockCollectionsDataPage } from './mock/Funkhaus/MockCollectionsDetailPage.json'
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
      FooterMain,
      // SearchFieldComposite,
      CollectionOverview,
      // GridMetadata,
      // ButtonMore,
      // SectionTeaserCard,
      // SmartLink,
      // GlobalMenuPanel,
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
        mockCollectionsDataPage,
        searchValue,
        dropdownValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        showMoreFeaturedCollections,
        sampleMenuItems,
        sampleSubMenuItems,
        dlcEdgeCasesWithDate: [
          {
            id: 'dlc-1',
            to: '/collections/digital-archives',
            title: 'Digital Archives Collection',
            text: 'Explore our extensive collection of digitized materials including manuscripts, photographs, and historical documents spanning over 200 years of UCLA history.',
            image: API.image,
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
          {
            id: 'dlc-2',
            to: '/collections/special-collections',
            title: 'Special Collections & Rare Books',
            text: 'Discover rare books, manuscripts, and unique materials that form the cornerstone of our research collections. These items provide invaluable insights into various academic disciplines.',
            image: {
              id: '3156835',
              src: 'https://static.library.ucla.edu/craftassetstest/images/_fullscreen/TomReed_MalcolmX.webp',
              height: 1813,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/TomReed_MalcolmX.webp 2560w',
              alt: 'Tom Reed hosting an episode exploring the teachings of Malcolm X',
              focalPoint: [0.5, 0.5],
            },
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
          {
            id: 'dlc-3',
            to: '/collections/ethnographic-materials',
            title: 'Ethnographic Materials & Cultural Artifacts',
            text: 'A comprehensive collection of ethnographic materials including audio recordings, photographs, and cultural artifacts from communities around the world. These materials support interdisciplinary research in anthropology, ethnomusicology, and cultural studies.',
            image: {
              id: '3280534',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/kpil7j-21cut1large.webp',
              height: 1664,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/kpil7j-21cut1large.webp 2560w',
              alt: 'many hot air balloons in the air',
              focalPoint: [0.5, 0.5],
            },
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
          {
            id: 'dlc-4',
            to: '/collections/art-architecture',
            title: 'Art & Architecture Collections',
            text: 'Extensive visual resources including architectural drawings, art slides, and digital images supporting research in art history, architecture, and visual culture studies.',
            image: {
              id: '3701680',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/PXL_20240323_163248504.jpg',
              height: 1920,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/PXL_20240323_163248504.jpg 2560w',
              alt: 'Image alt text here',
              focalPoint: [0.5, 0.5],
            },
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
          {
            id: 'dlc-5',
            to: '/collections/geographic-information',
            title: 'Geographic Information Systems & Maps',
            text: 'Comprehensive collection of maps, atlases, and geospatial data supporting research in geography, urban planning, environmental studies, and related fields.',
            image: API.image,
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
          {
            id: 'dlc-6',
            to: '/collections/audio-visual',
            title: 'Audio-Visual Materials & Media Archives',
            text: 'Extensive collection of audio recordings, video materials, and digital media including oral histories, documentaries, and multimedia resources for research and instruction.',
            image: {
              id: '3151261',
              src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png',
              height: 1920,
              width: 2560,
              srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w',
              alt: 'A woman writing on a window.',
              focalPoint: [0.5, 0.5],
            },
            sectionHandle: 'collection',
            customDateTime: 'November 1, 1963',
          },
        ],
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
