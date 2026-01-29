import { computed } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import BannerFeatured from '../lib-components/BannerFeatured.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import { mockPageAbout } from '@/stories/mock/Funkhaus/MockPageAbout'

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
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      FooterPrimary,
      FooterSock,
      BannerFeatured,
      HeaderSmart,
      NavSearch,
    },
    provide() {
      return {
        theme: computed(() => args.theme || 'dlc'),
      }
    },
    setup() {
      // Set up global store with mock header navigation
      setupGlobalStore()

      const mockGlobalNavSearch = getMockGlobalNavSearch()

      const { missionData, aboutData, questionsData } = mockPageAbout

      return {
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
        <HeaderSmart />

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
}
