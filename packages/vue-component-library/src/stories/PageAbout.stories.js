import { computed, ref } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'

// import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
// import SmartLink from '../lib-components/SmartLink.vue'
import BannerFeatured from '../lib-components/BannerFeatured.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import * as API from './mock-api.json'
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'

// import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
// import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data

// Import styles
import './PageAbout.scss'

export default {
  title: 'Funkhaus / Pages / Page About',
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
      FooterPrimary,
      FooterSock,
      // SearchFieldComposite,
      // SmartLink,
      BannerFeatured,
      HeaderSmart,
      NavSearch,
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

      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary
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
            label: 'Click Here for UCLA Library Locations',
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
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        args,
        mockGlobalNavSearch,
        missionData,
        aboutData,
        questionsData,
      }
    },
    template: `
      <div class="about-page">
        <!-- Header -->
        <header-smart/>

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
         

          <!-- Our Mission Section -->
          <BannerFeatured
            class="mission-section color-help"
            :media="missionData.image"
            :title="missionData.title"
            :description="missionData.description"
            :align-right="missionData.alignRight"
          />

          <!-- About UCLA Library Section -->
          <BannerFeatured
            class="about-section color-visit"
            :media="aboutData.image"
            :title="aboutData.title"
            :description="aboutData.description"
            :align-right="aboutData.alignRight"
          />

          <!-- Have Other Questions Section -->
          <BannerFeatured
            class="questions-section"
            :media="questionsData.image"
            :title="questionsData.title"
            :description="questionsData.description"
            :secondary-buttons="questionsData.secondaryButtons"
            :align-right="questionsData.alignRight"
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
