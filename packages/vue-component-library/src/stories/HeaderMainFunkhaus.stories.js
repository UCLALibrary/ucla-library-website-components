import { computed, provide, ref } from 'vue'
import HeaderMainFunkhaus from '@/lib-components/HeaderMainFunkhaus.vue'
import SmartLink from '@/lib-components/SmartLink.vue'

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
