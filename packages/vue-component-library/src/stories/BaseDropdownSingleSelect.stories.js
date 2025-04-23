import { computed } from 'vue'
import BaseDropdownSingleSelect from '@/lib-components/BaseDropdownSingleSelect.vue'

/**
 * This component is used in filter UIs to display a single-select dropdown for filtering content on the page.
 * It supports binding a selected value via v-model, and emits an event when the selected option changes.
 * This component is responsive and can integrate with a MobileDrawer implementation for mobile use.
 */

export default {
  title: 'Base Dropdown Single Select',
  component: BaseDropdownSingleSelect,
}

// MOCK DATA
const singleOptions = [
  { label: 'Current Events', value: 'current-events' },
  { label: 'Politics', value: 'politics' },
  { label: 'Economy', value: 'economy' },
  { label: 'Social Impact', value: 'social-impact' },
]

export function Default() {
  return {
    components: { BaseDropdownSingleSelect },
    data() {
      return {
        selected: '', // ⬅️ Starts with nothing selected
        options: singleOptions,
        label: 'Filter by topic',
      }
    },
    template: `
      <div>
        <BaseDropdownSingleSelect
          v-model="selected"
          :label="label"
          :options="options"
        />
      </div>
    `,
  }
}

export function FTVA() {
  return {
    components: { BaseDropdownSingleSelect },
    data() {
      return {
        selected: '',
        options: singleOptions,
        label: 'Filter by topic',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <BaseDropdownSingleSelect
          v-model="selected"
          :label="label"
          :options="options"
        />
      </div>
    `,
  }
}
