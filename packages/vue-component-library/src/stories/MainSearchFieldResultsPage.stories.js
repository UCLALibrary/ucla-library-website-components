import { computed } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterMain from '../lib-components/FooterMain.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockSearchFieldResultsPage } from './mock/Funkhaus/MockSearchFieldResultsPage'

// Import styles
import './MainSearchFieldResultsPage.scss'

export default {
  title: 'Funkhaus / Pages / Main Search Field Results Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for main search field results pages.',
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
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      return {
        args,
        primaryItems,
        secondaryItems,
        mockSearchFieldResultsPage,
      }
    },
    computed: {},
    template: `
       <div class="main-search-field-results-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
            This is going to be the main search field results page
            <pre>{{ mockSearchFieldResultsPage }}</pre>
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
