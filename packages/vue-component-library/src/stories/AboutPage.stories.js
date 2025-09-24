import { computed, ref } from 'vue'

// Import components
import HeaderMainFunkhaus from '../lib-components/HeaderMainFunkhaus.vue'
import FooterMain from '../lib-components/FooterMain.vue'

// Import mock data
import { primaryItems, secondaryItems } from './mock/Funkhaus/MockGlobal'
import { mockAboutPage } from './mock/Funkhaus/MockAboutPage'

// Import styles
import './AboutPage.scss'

export default {
  title: 'Funkhaus / Pages / About Page',
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
      HeaderMainFunkhaus,
      FooterMain,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      const menuOpened = ref(false)
      
      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }
      
      return {
        menuOpened,
        toggleMenu,
        args,
        primaryItems,
        secondaryItems,
        mockAboutPage,
      }
    },
    computed: {},
    template: `
       <div class="about-page">
         <!-- Header -->
         <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
      >
        <template #header-links>
          <SmartLink to="/digital-collections" class="header-link">
            Using digital collections content
          </SmartLink>
          <SmartLink to="/about" class="header-link">
            About
          </SmartLink>
          <SmartLink to="/feedback" class="header-link">
            Give us feedback
          </SmartLink>
        </template>
      </HeaderMainFunkhaus>

        <main class="main-content">
            This is going to be the about page
            <pre>{{ mockAboutPage }}</pre>
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
