import { computed, ref } from 'vue'
import BaseDropdownSingleSelect from '@/lib-components/BaseDropdownSingleSelect.vue'

/**
 * This component is used in filter UIs to display a single-select dropdown for filtering content on the page. It supports binding a selected value via v-model, and emits an event when the selected option changes. This component is responsive and can integrate with a MobileDrawer implementation for mobile use.
 *
 * Props:
 *
 * 1.
 */

export default {
  title: 'Base Dropdown Single Select',
  component: BaseDropdownSingleSelect,
}

// MOCK DATA
const singleFilterGroup = [
  {
    name: 'Topic',
    searchField: 'topic',
    options: ['Current Events', 'Politics', 'Economy', 'Social Impact'],
  },
]

const mockSelectedFilter = ref({ topic: '' })

export function Default() {
  return {
    components: { BaseDropdownSingleSelect },
    data() {
      return {
        selectedFilter: mockSelectedFilter,
        filterGroups: singleFilterGroup,
      }
    },
    template: `
      <div style="width:400px">
        <BaseDropdownSingleSelect
          v-model:selectedFilters="selectedFilter"
          :filterGroups="filterGroups"
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
        selectedFilter: mockSelectedFilter,
        filterGroups: singleFilterGroup,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div style="width:400px">
        <BaseDropdownSingleSelect
          v-model:selectedFilters="selectedFilter"
          :filterGroups="filterGroups"
        />
      </div>
    `,
  }
}
