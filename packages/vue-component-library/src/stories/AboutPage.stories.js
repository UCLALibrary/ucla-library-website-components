import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'
import SmartLink from '../lib-components/SmartLink.vue'
import BannerFeatured from '../lib-components/BannerFeatured.vue'
import GlobalMenuPanel from '../lib-components/GlobalMenuPanel.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockAboutPage } from './mock/Funkhaus/MockAboutPage'
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
      HeaderMainFunkhaus,
      FooterMain,
      SearchFieldComposite,
      SmartLink,
      BannerFeatured,
      GlobalMenuPanel,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const menuOpened = ref(false)
      const dropdownValue = ref(args.searchDropdownValue)
      const submittedValue = ref('')

      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }

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
          label: 'Using Digital Collections Content',
          to: '/using-digital-collections-content',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Give Us Feedback',
          to: '/give-us-feedback',
        },
      ]

      const sampleSubMenuItems = [
        {
          label: 'Locations & Hours',
          to: '/help',
          classes: '',
        },
        {
          label: 'Ask a Librarian',
          to: '/visit',
          classes: '',
        },
        {
          label: 'Support Us',
          to: '/support',
          classes: '',
        },
      ]
      // Mock data for banner featured sections
      const missionData = {
        image: API.image,
        title: 'Our Mission',
        description: 'The UCLA Digital Library Program works collaboratively within the UCLA Library, across campus, and with a broad range of partners to preserve and provide enhanced access to local and global cultural heritage materials in support of the University\'s teaching, learning, research and service mission. UCLA Digital Library Collections follow ethical and inclusive approaches to descriptive practices as outlined in Toward Ethical and Inclusive Descriptive Practices in UCLA Library Special Collections.',
        alignRight: true,
      }

      const aboutData = {
        image: API.image,
        title: 'About UCLA Library',
        description: 'The UCLA Library system is among the top academic research libraries in the United States, with a collection of more than 12 million volumes and 100,000 serials. The library system consists of 12 libraries and 11 other units, serving more than 50,000 students and faculty. With an annual budget of more than $50 million, the UCLA Library is one of the largest academic research libraries in the world and serves as a depository library for federal and state government documents.',
        alignRight: false,
      }

      const questionsData = {
        image: API.image,
        title: 'Have Other Questions?',
        description: 'We\'re here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.',
        secondaryButtons: [
          {
            label: 'UCLA Library Locations',
            to: '/visit/locations/'
          },
          {
            label: 'Contact Us',
            to: '/contact/'
          }
        ],
        alignRight: true,
      }

      return {
        menuOpened,
        toggleMenu,
        dropdownValue,
        submittedValue,
        handleSearchSubmit,
        handleDropdownUpdate,
        args,
        sampleMenuItems,
        sampleSubMenuItems,
        secondaryItems,
        mockAboutPage,
        missionData,
        aboutData,
        questionsData,
      }
    },
    template: `
      <div class="about-page">
        <!-- Global Menu Panel -->
        <GlobalMenuPanel
          :menu-items="sampleMenuItems"
          :sub-menu-items="sampleSubMenuItems"
          :is-opened="menuOpened"
          class="global-menu-panel"
        />
        <!-- Header -->
        <HeaderMainFunkhaus
          :menu-opened="menuOpened"
          @toggle-menu="toggleMenu"
          class="header"
          :class="menuOpened ? 'menu-opened' : ''"
        >
          <template #default>
            <SmartLink to="/digital-collections" class="header-link">
              Using digital collections content
            </SmartLink>
            <SmartLink to="/about" class="header-link">
              About
            </SmartLink>
            <SmartLink to="/feedback" class="header-link">
              Give us feedback
            </SmartLink>
          </template>
        </HeaderMainFunkhaus>

        <div class="search-field-composite-wrapper">
          <SearchFieldComposite
            class='search-bar'
            :initial-value="args.searchInitialValue"
            :placeholder="args.searchPlaceholder"
            :dropdown-model-value="dropdownValue"
            :dropdown-options="args.searchDropdownOptions"
            :dropdown-placeholder="args.searchDropdownPlaceholder"
            :show-divider="args.searchShowDivider"
            @submit="handleSearchSubmit"
            @update:dropdown-model-value="handleDropdownUpdate"
          />
        </div>

        <main class="main-content">
          <!-- Our Mission Section -->
          <BannerFeatured
            class="mission-section"
            :media="missionData.image"
            :title="missionData.title"
            :description="missionData.description"
            :align-right="missionData.alignRight"
          />

          <!-- About UCLA Library Section -->
          <BannerFeatured
            class="about-section"
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
