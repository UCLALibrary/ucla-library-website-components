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
 * 2. fieldName: String
 * - for search for sort field name for a Search API
 * 3. label: String
 * - The heading of the Dropdown ie: Filter by topic or Sort by
 * 4. disabled: Boolean
 * - disables the Dropdown
 */

// There are no particular styles for default.
// Right now they are the same as the FTVA styles.
// They can be changed in the future
export default {
  title: 'Dropdown Single Select',
  component: DropdownSingleSelect,
}
 
// MOCK DATA DEFAULT
const OptionsDefault = [
  { label: 'Fire Prevention', value: 'fire-prevention' },
  { label: 'Pollution', value: 'pollution' },
  { label: 'Energy Saving', value: 'energy-saving' },
]

export function Default() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: '' },
        options: OptionsDefault,
        label: 'Filter',
        fieldName: 'esFieldName',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
        />
      </div>
    `,
  }
}

export function DLCTheme() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: '' },
        options: OptionsDefault,
        label: 'Filter',
        fieldName: 'esFieldName',
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
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
        selectedFilters: { esFieldName: '' },
        options: FilterOptionsDefault,
        label: 'Filter by topic',
        fieldName: 'esFieldName',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
        />
      </div>
    `,
  }
}

export function FTVAFilterByTopicIntialSelection() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: 'politics' },
        options: FilterOptionsDefault,
        label: 'Filter by topic',
        fieldName: 'esFieldName',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
        />
      </div>
    `,
  }
}

// MOCK DATA SORT
const FilterOptionsSort = [
  { label: 'Date (oldest)', value: 'asc' },
  { label: 'Date (newest)', value: 'desc' },
]

export function FTVASortBy() {
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: 'asc' },
        options: FilterOptionsSort,
        label: 'Sort by',
        fieldName: 'esFieldName',
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
        />
      </div>
    `,
  }
}
