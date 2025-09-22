import { computed, ref } from 'vue'

// Import components
import HeaderSticky from '../lib-components/HeaderSticky.vue'
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import SearchFieldComposite from '../lib-components/SearchFieldComposite.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockCollectionsDataPage } from './mock/Funkhaus/MockCollectionsDataPage'

// Import styles
import './CollectionsDetailPage.scss'

export default {
  title: 'Funkhaus / Pages / Collections Detail Page',
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
      HeaderSticky,
      FooterPrimary,
      SearchFieldComposite,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const searchValue = ref('')

      const handleSearchSubmit = (value) => {
        searchValue.value = value
        alert(`Search submitted: "${value}"`)
      }

      return {
        args,
        primaryItems,
        secondaryItems,
        mockCollectionsDataPage,
        searchValue,
        handleSearchSubmit,
      }
    },
    computed: {},
    template: `
       <div class="collections-detail-page">
         <!-- Header -->
         <HeaderSticky
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <main class="main-content">
          <SearchFieldComposite
            class="search-field-composite"
            v-model:initial-value="searchValue"
            placeholder="Search digital collections..."
            :show-divider="true"
            @submit="handleSearchSubmit"
          />

          This is going to be the collections detail page
          <pre>{{ mockCollectionsDataPage }}</pre>
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
