import { computed } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import FlexibleBlocks from '../lib-components/FlexibleBlocks.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import NavSearch from '../lib-components/NavSearch.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import { getMockPageAboutBlocks } from '@/stories/mock/Funkhaus/MockPageAbout'

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
      FlexibleBlocks,
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

      return {
        args,
        mockGlobalNavSearch,
        pageAboutBlocks: getMockPageAboutBlocks(),
      }
    },
    template: `
      <div class="about-page">
        <!-- Header -->
        <HeaderSmart class="header-smart" />

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
          <FlexibleBlocks
            class="page-about-flexible-blocks"
            :blocks="pageAboutBlocks"
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
