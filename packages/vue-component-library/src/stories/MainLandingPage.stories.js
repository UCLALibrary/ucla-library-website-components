import { computed } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import GridCollections from '../lib-components/GridCollections.vue'
import ButtonShow from '../lib-components/ButtonShow.vue'
import HeaderCollection from '../lib-components/HeaderCollection.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockDigitalCollections } from './mock/Funkhaus/MockMainLandingPage'

// Import styles
import './MainLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Main Landing Page',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A complete landing page layout with header, main content area, and footer. This serves as a template for main landing pages with a grid-based content layout.',
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
      FooterPrimary,
      GridCollections,
      HeaderCollection,
      ButtonShow,
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
        mockDigitalCollections,
      }
    },
    methods: {
      showMoreCollections() {
        window.location.href
                    = 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default'
      },
    },
    computed: {
      gridItems() {
        const parsedItems
                    = mockDigitalCollections?.featuredCollections?.entries?.map(
                      (entry) => {
                        return {
                          ...entry,
                          image: entry.heroImage,
                          description: entry.text,
                          href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                        }
                      }
                    ) || []

        return parsedItems.slice(0, 9)
      },
      headerItems() {
        return {
          subtitle:
                        mockDigitalCollections?.featuredCollections?.subtitle,
          title: mockDigitalCollections?.featuredCollections?.title,
          text: mockDigitalCollections?.featuredCollections?.summary,
          buttons:
                        mockDigitalCollections?.featuredCollections?.buttons,
        }
      },
    },
    template: `
       <div class="main-landing-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />


         <!-- Main Content Area -->
         <main class="main-content">
            <HeaderCollection 
                :subtitle="headerItems.subtitle"
                :title="headerItems.title"
                :text="headerItems.text"
                :buttons="headerItems.buttons"
            />
            
            <GridCollections :items="gridItems" class="grid-collections" />
            <ButtonShow
                class="button-show"
                @click="showMoreCollections"
            />
         </main>
         
         <!-- Footer -->
         <FooterPrimary />
       </div>
     `,
  }
}

// Default story
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
}
