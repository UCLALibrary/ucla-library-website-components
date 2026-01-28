import { computed } from 'vue'

// Import components
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import SmartLink from '../lib-components/SmartLink.vue'

// Import mock data
import { mockProgramLandingPage } from './mock/Funkhaus/MockProgramLandingPage'
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'

// Import styles
import './ProgramLandingPage.scss'

export default {
  title: 'Funkhaus / Pages / Page Program Landing',
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
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      SectionTeaserCard,
      NavSearch,
      CollectionOverview,
      ButtonMore,
      SmartLink,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      // Set up global store with mock header navigation
      setupGlobalStore()

      // Nav Search
      const mockGlobalNavSearch = getMockGlobalNavSearch()

      const showMoreFeaturedProjects = () => {
        window.location.href
                    = 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-page-collections-detail--default'
      }

      return {
        args,
        mockProgramLandingPage,
        mockGlobalNavSearch,
        showMoreFeaturedProjects,
      }
    },
    computed: {
      gridItems() {
        const parsedItems
                    = mockProgramLandingPage?.gridAssets?.items?.map((item) => {
                      return {
                        image: item.image,
                        title: item.title,
                        text: item.description,
                        href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-page-collections-detail--default',
                      }
                    }) || []

        return parsedItems
      },
    },
    template: `
       <div class="program-landing-page">
        <HeaderSmart />

        <main class="main-content">
          <div class="search-field-composite-wrapper">
            <NavSearch 
              class='search-field-composite'
              :show-divider="true"
              :dropdown-options="mockGlobalNavSearch.dropdownOptions" 
              :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
              :placeholder="mockGlobalNavSearch.placeholder"
              bottom-text=""
              :bottom-link="null"
            />
          </div>
          
          <CollectionOverview
            class="collection-overview"
            :title="mockProgramLandingPage.collectionOverview.title"
            :subtitle="mockProgramLandingPage.collectionOverview.subtitle"
            :block-buttons="mockProgramLandingPage.collectionOverview.blockButtons"
            :description="mockProgramLandingPage.collectionOverview.description"
            :image="mockProgramLandingPage.collectionOverview.image"
          />

          <h2 class="title-grid-assets">
            {{ mockProgramLandingPage.gridAssets.title }}
          </h2>
          <SectionTeaserCard
              :items="gridItems" 
              :grid-layout="true"
              class="section-teaser-card"
          />
          <ButtonMore
            class="button-more"
            text="Browse more projects"
            @click="showMoreFeaturedProjects"
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
