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
      
      return {
        menuOpened,
        toggleMenu
      }
    },
    template: `
      <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
      >
        <template #default>
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
      
      return {
        menuOpened,
        toggleMenu
      }
    },
    template: `
      <HeaderMainFunkhaus 
        :menu-opened="menuOpened"
        @toggle-menu="toggleMenu"
        :class="menuOpened ? 'menu-opened' : ''"
      >
        <template #default>
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
        <template #searchBar>
          <div>This is a search bar</div>
        </template>
      </HeaderMainFunkhaus>
    `,
  }
}
