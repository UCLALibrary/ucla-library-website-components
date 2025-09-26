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

// Default story - closed panel
export function Default() {
  return {
    components: { GlobalMenuPanel },
    data() {
      return {
        isOpened: false,
        menuItems: sampleMenuItems,
        subMenuItems: sampleSubMenuItems,
      }
    },
    template: `
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="(index) => console.log('Item opened:', index)"
        />
    `,
  }
}

// Opened panel story
export function Opened() {
  return {
    components: { GlobalMenuPanel },
    data() {
      return {
        isOpened: true,
        menuItems: sampleMenuItems,
        subMenuItems: sampleSubMenuItems,
      }
    },
    template: `
      <div style="height: 400px; position: relative; background: #f5f5f5; padding: 20px;">
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="(index) => console.log('Item opened:', index)"
        />
      </div>
    `,
  }
}

// With minimal menu items
export function Minimal() {
  return {
    components: { GlobalMenuPanel },
    data() {
      return {
        isOpened: true,
        menuItems: [
          {
            label: 'Home',
            to: '/',
          },
        ],
        subMenuItems: [
          {
            label: 'Support Us',
            to: '/support',
            classes: '',
          },
        ],
      }
    },
    template: `
      <div style="height: 300px; position: relative; background: #f5f5f5; padding: 20px;">
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="(index) => console.log('Item opened:', index)"
        />
      </div>
    `,
  }
}

// With many menu items
export function ManyItems() {
  return {
    components: { GlobalMenuPanel },
    data() {
      return {
        isOpened: true,
        menuItems: [
          { label: 'Visit', to: '/visit' },
          { label: 'About', to: '/about' },
          { label: 'Help', to: '/help' },
          { label: 'Research', to: '/research' },
          { label: 'Collections', to: '/collections' },
        ],
        subMenuItems: [
          { label: 'Get Help With', to: '/help', classes: '' },
          { label: 'Visit', to: '/visit', classes: '' },
          { label: 'About', to: '/about', classes: '' },
          { label: 'Research Services', to: '/research', classes: '' },
          { label: 'Digital Collections', to: '/collections', classes: '' },
          { label: 'Support Us', to: '/support', classes: '' },
        ],
      }
    },
    template: `
      <div style="height: 500px; position: relative; background: #f5f5f5; padding: 20px;">
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="(index) => console.log('Item opened:', index)"
        />
      </div>
    `,
  }
}

// Interactive story with controls
export function Interactive() {
  return {
    components: { GlobalMenuPanel },
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
    },
    template: `
      <div style="height: 500px; position: relative; background: #f5f5f5; padding: 20px;">
        <button 
          @click="togglePanel" 
          style="margin-bottom: 20px; padding: 10px 20px; background: #0073e6; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          {{ isOpened ? 'Close' : 'Open' }} Panel
        </button>
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="handleItemOpenedColor"
        />
      </div>
    `,
  }
}

// Template for controls
function Template(args, { argTypes }) {
  return {
    components: { GlobalMenuPanel },
    props: Object.keys(argTypes),
    template: `
      
        <global-menu-panel 
          :is-opened="isOpened"
          :menu-items="menuItems"
          :sub-menu-items="subMenuItems"
          @item-opened-color="(index) => console.log('Item opened:', index)"
        />
    `,
  }
}

export const WithControls = Template.bind({})
WithControls.args = {
  isOpened: true,
  menuItems: sampleMenuItems,
  subMenuItems: sampleSubMenuItems,
}
