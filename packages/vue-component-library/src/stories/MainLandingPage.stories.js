import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import GridCollections from '../lib-components/GridCollections.vue'
import ButtonShow from '../lib-components/ButtonShow.vue'
import HeaderCollection from '../lib-components/HeaderCollection.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'

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
      SearchFieldComposite,
      ButtonShow,
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
        primaryItems,
        secondaryItems,
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
            <SearchFieldComposite
                class="search-field-composite"
                v-model:initial-value="searchValue"
                v-model:dropdown-model-value="dropdownValue"

                :placeholder="mockDigitalCollections.searchForm.placeholder"
                :dropdown-options="mockDigitalCollections.searchForm.dropdownOptions"
                :background-image="mockDigitalCollections.searchForm.backgroundImage"
                :background-text="mockDigitalCollections.searchForm.backgroundText"
                @submit="handleSearchSubmit"
                @update:dropdown-model-value="handleDropdownUpdate"
            />


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
