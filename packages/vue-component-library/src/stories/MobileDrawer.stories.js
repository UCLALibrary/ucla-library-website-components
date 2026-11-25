import { computed } from 'vue'
import MobileDrawer from '@/lib-components/MobileDrawer.vue'
import { userEvent, within } from '@storybook/testing-library'

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

export function Default() {
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

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button', { name: 'BUTTON', exact: true })

  // Verify initial collapsed state
  if (button.getAttribute('aria-expanded') !== 'false')
    throw new Error('Expected drawer to be collapsed initially')

  // Open the drawer
  await userEvent.click(button)

  if (button.getAttribute('aria-expanded') !== 'true')
    throw new Error('Expected drawer to be expanded after clicking')

  // Close the drawer
  await userEvent.click(button)

  if (button.getAttribute('aria-expanded') !== 'false')
    throw new Error('Expected drawer to be collapsed after clicking again')
}

export function FTVA() {
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

FTVA.play = Default.play
