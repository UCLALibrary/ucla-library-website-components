import { computed, ref } from 'vue'

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
import { mockMainLandingPage } from './mock/Funkhaus/MockMainLandingPage'
import { useGlobalStore } from '@/stores/GlobalStore'
import { mockGlobalHeaderNavigation, mockGlobalNavSearch } from '@/stories/mock/Funkhaus/MockGlobalComponents'

// Import styles
import './MainLandingPage.scss'

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
      // Overwrite header data to mimic HeaderSmart DLC story
      const globalStore = useGlobalStore()
      globalStore.header.primary = mockGlobalHeaderNavigation.primary
      globalStore.header.secondary = mockGlobalHeaderNavigation.secondary

      const dropdownValue = ref(
        mockMainLandingPage.searchForm.dropdownOptions[0]
      )
      const searchValue = ref('')

      const showMoreCollections = () => {
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

      return {
        args,
        dropdownValue,
        searchValue,
        mockMainLandingPage,
        mockGlobalNavSearch,
        showMoreCollections,
        handleSearchSubmit,
        handleDropdownUpdate,
      }
    },

    computed: {
      gridItems() {
        const parsedItems
                    = mockMainLandingPage?.featuredCollections?.entries?.map(
                      (entry) => {
                        return {
                          title: entry.title,
                          image: entry.heroImage,
                          text: entry.text,
                          href: 'http://localhost:6006/iframe.html?args=&id=funkhaus-pages-collections-detail-page--default',
                        }
                      }
                    ) || []

        return parsedItems.slice(0, 9)
      },
      headerItems() {
        return {
          subtitle:
                        mockMainLandingPage?.featuredCollections?.subtitle,
          title: mockMainLandingPage?.featuredCollections?.title,
          text: mockMainLandingPage?.featuredCollections?.summary,
          buttons:
                        mockMainLandingPage?.featuredCollections?.buttons,
        }
      },
      bottomLink() {
        return {
          label: mockMainLandingPage.searchForm.text,
          to: mockMainLandingPage.searchForm.link,
        }
      },
    },
    template: `
       <div class="main-landing-page">
         <!-- Global Menu Panel -->

         <!-- Header -->
         <HeaderSmart
           class="header"
         />

       <!-- Main Content Area -->
         <main class="main-content">
            <NavSearch 
                class='search-field-composite'
                :show-divider="true"
                :placeholder="mockGlobalNavSearch.placeholder"
                :dropdown-options="mockGlobalNavSearch.dropdownOptions"
                :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
                :bottom-link="bottomLink"
                bottom-text=""
                :background-image="mockMainLandingPage.searchForm.backgroundImage"

            />

            <section class="header-collection">
              <span class="subtitle" v-html="mockMainLandingPage.featuredCollections.subtitle" />
              <h1 class="title" v-html="mockMainLandingPage.featuredCollections.title" />

              <RichText v-if="mockMainLandingPage.featuredCollections.summary" class="rich-text" :rich-text-content="mockMainLandingPage.featuredCollections.summary" />

              <BlockButtons :buttons="mockMainLandingPage.featuredCollections.buttons" />
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
