import { computed } from 'vue'
import DropdownSingleSelect from '@/lib-components/DropdownSingleSelect.vue'

/**
 * This component is used in filter UIs to display a single-select dropdown for filtering content on the page.
 * It supports binding a selected value via v-model, and emits an event when the selected option changes.
 * This component is responsive and can integrate with a MobileDrawer implementation for mobile use.
 *
 * Props:
 *
 * 1. options: Array of Strings
 * - These are options to filter the content by
 * 2. modelValue: String
 * - for v-model binding
 * 3. label: String
 * - The heading of the Dropdown ie: Filter by topic or Sort by
 * 4. disabled: Boolean
 * - disables the Dropdown
 */

export default {
  title: 'Dropdown Single Select',
  component: DropdownSingleSelect,
}

// MOCK DATA DEFAULT
const OptionsDefault = [
  { label: 'Smokey the Bear', value: 'fire-prevention' },
  { label: 'Woodsey the Owl', value: 'pollution' },
  { label: 'Lester the Lightbulb', value: 'energy-saving' },
]

export function Default() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selected: '',
        options: OptionsDefault,
        label: 'Filter',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <DropdownSingleSelect
          v-model="selected"
          :label="label"
          :options="options"
        />
      </div>
    `,
  }
}

// MOCK DATA FILTER
const FilterOptionsDefault = [
  { label: 'Current Events', value: 'current-events' },
  { label: 'Politics', value: 'politics' },
  { label: 'Economy', value: 'economy' },
  { label: 'Social Impact', value: 'social-impact' },
]

export function FTVAFilterByTopic() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selected: '',
        options: FilterOptionsDefault,
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
        <DropdownSingleSelect
          v-model="selected"
          :label="label"
          :options="options"
        />
      </div>
    `,
  }
}

// MOCK DATA SORT
const FilterOptionsSort = [
  { label: 'Date (oldest)', value: 'oldest-date' },
  { label: 'Date (newest)', value: 'newest-date' },
]

export function FTVASortBy() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selected: '',
        options: FilterOptionsSort,
        label: 'Sort by',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <DropdownSingleSelect
          v-model="selected"
          :label="label"
          :options="options"
        />
      </div>
    `,
  }
}
