import HeaderMainFunkhaus from '@/lib-components/HeaderMainFunkhaus.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import { provide, computed, ref } from 'vue'

// Storybook default settings
export default {
  title: 'Funkhaus / Header Main Funkhaus',
  component: HeaderMainFunkhaus,
}

// Variations of stories below
export function Default() {
  provide(() => {
    return {
      theme: computed(() => 'dlc'),
    }
  })
  
  return {
    components: { HeaderMainFunkhaus, SmartLink },
    setup() {
      const menuOpened = ref(false)
      
      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }

      const menuItems = [
        {
          label: 'Using digital collections content',
          to: '/digital-collections',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Give us feedback',
          to: '/feedback',
        }
      ]
      
      return {
        menuOpened,
        toggleMenu,
        menuItems
      }
    },
    template: `
      <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
        :menu-items="menuItems"
      />
    `,
  }
}
export function WithDefaultSlotFIlled() {
  provide(() => {
    return {
      theme: computed(() => 'dlc'),
    }
  })
  
  return {
    components: { HeaderMainFunkhaus, SmartLink },
    setup() {
      const menuOpened = ref(false)
      
      const toggleMenu = () => {
        menuOpened.value = !menuOpened.value
      }
      
      const secondaryItems = [
        {
          label: 'Locations & Hours',
          to: '/locations',
        },
        {
          label: 'Ask a Librarian',
          to: '/my-account',
        },
        {
          label: 'Support Us',
          to: '/support-us',
        }
      ]

      const menuItems = [
        {
          label: 'Using digital collections content',
          to: '/digital-collections',
        },
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Give us feedback',
          to: '/feedback',
        }
      ]

      return {
        menuOpened,
        toggleMenu,
        secondaryItems,
        menuItems
      }
    },
    template: `
      <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
        :show-secondary="true"
        :secondary-items="secondaryItems"
        :menu-items="menuItems"
      />
    `,
  }
}
