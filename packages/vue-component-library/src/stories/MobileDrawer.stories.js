import { computed } from 'vue'
import MobileDrawer from '@/lib-components/MobileDrawer.vue'

/**
 * A component to wrap dropdown fields in a drawer that can be toggled open and closed on mobile with a button.
 *
 * The componenet has 2 slots:
 * - dropdownItems: The items to be displayed in the drawer
 * - buttonLabel: The label for the button that toggles the drawer open and closed, icons can also be included here
 */
export default {
  title: 'Global / Mobile Drawer',
  component: MobileDrawer,
}

const DefaultTemplate = (args) => {
  return {
    components: { MobileDrawer },
    template: `<mobile-drawer>
    <template v-slot:buttonLabel>BUTTON</template>
    <template v-slot:dropdownItems>
        <div class="dropdown-modal-item">
            <span>some item</span>
        </div>
        <div class="dropdown-modal-item">
            <span>some item 2</span>
        </div>
    </template>
    </mobile-drawer>`,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVATemplate = (args) => {
  return {
    components: { MobileDrawer },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `<mobile-drawer>
    <template v-slot:buttonLabel>BUTTON</template>
    <template v-slot:dropdownItems>
        <div class="dropdown-modal-item">
            <span>some item</span>
        </div>
        <div class="dropdown-modal-item">
            <span>some item 2</span>
        </div>
    </template>
    </mobile-drawer>`,
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {}
