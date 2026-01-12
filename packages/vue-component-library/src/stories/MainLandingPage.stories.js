import { computed, ref } from 'vue'

// Import components
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import FooterMain from '../lib-components/FooterMain.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'

// import HeaderCollection from "../lib-components/HeaderCollection.vue"
import NavSearch from '../lib-components/NavSearch.vue'
import SmartLink from '../lib-components/SmartLink.vue'

// Import mock data
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
      HeaderSmart,
      FooterMain,
      SectionTeaserCard,
      // HeaderCollection,
      NavSearch,
      ButtonMore,
      SmartLink,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },

    setup() {
      const dropdownValue = ref(
        mockDigitalCollections.searchForm.dropdownOptions[0]
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
        mockDigitalCollections,
        showMoreCollections,
        handleSearchSubmit,
        handleDropdownUpdate,
      }
    },

    computed: {
      gridItems() {
        const parsedItems
                    = mockDigitalCollections?.featuredCollections?.entries?.map(
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
                        mockDigitalCollections?.featuredCollections?.subtitle,
          title: mockDigitalCollections?.featuredCollections?.title,
          text: mockDigitalCollections?.featuredCollections?.summary,
          buttons:
                        mockDigitalCollections?.featuredCollections?.buttons,
        }
      },
      bottomLink() {
        return {
          label: mockDigitalCollections.searchForm.text,
          to: mockDigitalCollections.searchForm.link,
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
                :placeholder="mockDigitalCollections.searchForm.placeholder"
                :dropdown-options="mockDigitalCollections.searchForm.dropdownOptions"
                :dropdown-default-value="mockDigitalCollections.searchForm.dropdownDefaultValue"
                :bottom-link="bottomLink"
                bottom-text=""
                :background-image="mockDigitalCollections.searchForm.backgroundImage"

            />

            

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
