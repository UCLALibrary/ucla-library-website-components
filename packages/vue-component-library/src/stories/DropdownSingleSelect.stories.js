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

const DefaultTemplate = (args) => {
  void args
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

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const DLCThemeTemplate = (args) => {
  void args
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: '' },
        options: OptionsDefault,
        label: 'Filter',
        fieldName: 'esFieldName',
        isSearch: false
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
      <div>
      <h1>Default</h1>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
          :is-search='isSearch'
        />
      </div>
    `,
  }
}

export const DLCTheme = DLCThemeTemplate.bind({})
DLCTheme.args = {}


const DLCThemeSearchTemplate = (args) => {
  void args
  return {
    components: { DropdownSingleSelect },
    data() {
      return {
        selectedFilters: { esFieldName: '' },
        options: OptionsDefault,
        label: 'Filter',
        fieldName: 'esFieldName',
        isSearch: true
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
      <div>
      <h1>Search</h1>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='label'
          :options='options'
          :field-name='fieldName'
          :show-view-all='true'
          :is-search='isSearch'
        />
      </div>
    `,
  }
}

export const DLCThemeSearch = DLCThemeSearchTemplate.bind({})
DLCThemeSearch.args = {}


// MOCK DATA FILTER
const FilterOptionsDefault = [
  { label: 'Current Events', value: 'current-events' },
  { label: 'Politics', value: 'politics' },
  { label: 'Economy', value: 'economy' },
  { label: 'Social Impact', value: 'social-impact' },
]

const FTVAFilterByTopicTemplate = (args) => {
  void args
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

export const FTVAFilterByTopic = FTVAFilterByTopicTemplate.bind({})
FTVAFilterByTopic.args = {}


const FTVAFilterByTopicIntialSelectionTemplate = (args) => {
  void args
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

export const FTVAFilterByTopicIntialSelection = FTVAFilterByTopicIntialSelectionTemplate.bind({})
FTVAFilterByTopicIntialSelection.args = {}


// MOCK DATA SORT
const FilterOptionsSort = [
  { label: 'Date (oldest)', value: 'asc' },
  { label: 'Date (newest)', value: 'desc' },
]

const FTVASortByTemplate = (args) => {
  void args
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

export const FTVASortBy = FTVASortByTemplate.bind({})
FTVASortBy.args = {}

