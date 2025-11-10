import { computed } from 'vue'
import GlobalMenuPanel from '@/lib-components/GlobalMenuPanel.vue'

/**
 * A global menu panel component that displays main menu items, sub-menu items, and includes an account button.
 * Features a 3D molecule graphic that changes color based on interaction.
 */
export default {
  title: 'Funkhaus / Global Menu Panel',
  component: GlobalMenuPanel,
  argTypes: {
    isOpened: { control: 'boolean' },
    menuItems: { control: 'array' },
    subMenuItems: { control: 'array' },
  },
}

// Sample menu items data
const sampleMenuItems = [
  {
    label: 'Using Digital Collections Content',
    to: '/using-digital-collections-content',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Give Us Feedback',
    to: '/give-us-feedback',
  },
]

const sampleSubMenuItems = [
  {
    label: 'Locations & Hours',
    to: '/help',
    classes: '',
  },
  {
    label: 'Ask a Librarian',
    to: '/visit',
    classes: '',
  },
  {
    label: 'Support Us',
    to: '/support',
    classes: '',
  },
]

// Default story - interactive panel
export function Default() {
  return {
    components: { GlobalMenuPanel },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        isOpened: false,
        menuItems: sampleMenuItems,
        subMenuItems: sampleSubMenuItems,
      }
    },
    methods: {
      togglePanel() {
        this.isOpened = !this.isOpened
      },
      handleItemOpenedColor(index) {
        console.log('Item opened color changed:', index)
      },
      handleClose() {
        this.isOpened = false
        console.log('Panel closed')
      },
    },
    template: `
        <button 
          @click="togglePanel" 
          style="margin-bottom: 20px; padding: 10px 20px; background: #0073e6; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          {{ isOpened ? 'Close' : 'Open' }} Panel - Reduce the screensize to test the panel.
        </button>
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="handleItemOpenedColor"
          @close="handleClose"
        />
    `,
  }
}
