import { computed, ref } from 'vue'

// Import components
import FooterMain from '../lib-components/FooterMain.vue'
// import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
// import SmartLink from '../lib-components/SmartLink.vue'
// import BannerFeatured from '../lib-components/BannerFeatured.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import { useGlobalStore } from '@/stores/GlobalStore'
// import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
// import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import * as API from './mock-api.json'

// Import styles
import './AboutPage.scss'

export default {
  title: 'Funkhaus / Pages / About Page',
  component: {},
  parameters: { 
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for about pages.',
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
      // BannerFeatured,
      HeaderSmart,
    },
    provide() {
      return {
        // Mirror HeaderSmart DLC story: force dlc theme
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      const dropdownValue = ref(args.searchDropdownValue)
      const submittedValue = ref('')

      const handleSearchSubmit = (value) => {
        submittedValue.value = value
        // Search submitted
      }

      const handleDropdownUpdate = (value) => {
        dropdownValue.value = value
        // Dropdown updated
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
      // Mock data for banner featured sections
      const missionData = {
        image: API.image,
        title: 'Our Mission',
        description:
                    'The UCLA Digital Library Program works collaboratively within the UCLA Library, across campus, and with a broad range of partners to preserve and provide enhanced access to local and global cultural heritage materials in support of the University\'s teaching, learning, research and service mission. UCLA Digital Library Collections follow ethical and inclusive approaches to descriptive practices as outlined in Toward Ethical and Inclusive Descriptive Practices in UCLA Library Special Collections.',
        alignRight: true,
      }

      const aboutData = {
        image: API.image,
        title: 'About UCLA Library',
        description:
                    'The UCLA Library system is among the top academic research libraries in the United States, with a collection of more than 12 million volumes and 100,000 serials. The library system consists of 12 libraries and 11 other units, serving more than 50,000 students and faculty. With an annual budget of more than $50 million, the UCLA Library is one of the largest academic research libraries in the world and serves as a depository library for federal and state government documents.',
        alignRight: false,
      }

      const questionsData = {
        image: API.image,
        title: 'Have Other Questions?',
        description:
                    'We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.',
        secondaryButtons: [
          {
            label: 'UCLA Library Locations',
            to: '/visit/locations/',
          },
          {
            label: 'Contact Us',
            to: '/contact/',
          },
        ],
        alignRight: true,
      }

      return {
        // dropdownValue,
        // submittedValue,
        // handleSearchSubmit,
        // handleDropdownUpdate,
        // args,
        // missionData,
        // aboutData,
        // questionsData,
      }
    },
    template: `
      <div class="about-page">
        <!-- Header -->
        <header-smart/>
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
  searchShowDivider: false,
}
