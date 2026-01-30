import { computed } from 'vue'

// Import components
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import BlockButtons from '../lib-components/BlockButtons.vue'
import RichText from '../lib-components/RichText.vue'

// import HeaderCollection from "../lib-components/HeaderCollection.vue"
import NavSearch from '../lib-components/NavSearch.vue'
import SmartLink from '../lib-components/SmartLink.vue'

// Import mock data
import { mockPageMainLanding } from './mock/Funkhaus/MockPageMainLanding'
import { getMockGlobalNavSearch } from './helpers/storyHelpers'
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation } from '@/stories/mock/Funkhaus/MockGlobalComponents'

// Import styles
import './PageMainLanding.scss'

export default {
  title: 'Funkhaus / Pages / Page Main Landing',
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
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      SectionTeaserCard,
      NavSearch,
      ButtonMore,
      SmartLink,
      BlockButtons,
      RichText,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },

    setup() {
      const mockGlobalNavSearch = getMockGlobalNavSearch()

      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary

      const showMoreCollections = () => {
        window.location.href
                    = 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-page-collections-detail--default'
      }

      return {
        args,
        mockPageMainLanding,
        mockGlobalNavSearch,
        showMoreCollections,
      }
    },

    computed: {
      gridItems() {
        const parsedItems
                    = mockPageMainLanding?.featuredCollections?.entries?.map(
                      (entry) => {
                        return {
                          title: entry.title,
                          image: entry.heroImage,
                          text: entry.text,
                          href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-page-collections-detail--default',
                        }
                      }
                    ) || []

        return parsedItems.slice(0, 9)
      },
      headerItems() {
        return {
          subtitle:
                        mockPageMainLanding?.featuredCollections?.subtitle,
          title: mockPageMainLanding?.featuredCollections?.title,
          text: mockPageMainLanding?.featuredCollections?.summary,
          buttons: mockPageMainLanding?.featuredCollections?.buttons,
        }
      },
      bottomLink() {
        return {
          label: mockPageMainLanding.searchForm.text,
          to: mockPageMainLanding.searchForm.link,
        }
      },
    },
    template: `
       <div class="page-main-landing">
         <!-- Global Menu Panel -->

         <!-- Header -->
         <HeaderSmart
           class="header-smart"
         />

       <!-- Main Content Area -->
         <main class="main-content">
            <NavSearch 
                class='search-field-composite'
                :show-divider="true"
                :dropdown-options="mockGlobalNavSearch.dropdownOptions"
                :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
                :placeholder="mockGlobalNavSearch.placeholder"
                :bottom-link="bottomLink"
                bottom-text=""
                :background-image="mockPageMainLanding.searchForm.backgroundImage"

            />

            <section class="header-collection">
              <span class="subtitle" v-html="mockPageMainLanding.featuredCollections.subtitle" />
              <h1 class="title" v-html="mockPageMainLanding.featuredCollections.title" />

              <RichText v-if="mockPageMainLanding.featuredCollections.summary" class="rich-text" :rich-text-content="mockPageMainLanding.featuredCollections.summary" />

              <BlockButtons :buttons="mockPageMainLanding.featuredCollections.buttons" />
            </section>

            <SectionTeaserCard
                :items="gridItems" 
                :grid-layout="true"
                class="section-teaser-card"
            />

            <ButtonMore
                class="button-more"
                @click="showMoreCollections"
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
