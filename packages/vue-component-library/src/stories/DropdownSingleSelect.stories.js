import { computed } from 'vue'
import DropdownSingleSelect from '@/lib-components/DropdownSingleSelect.vue'
import { normalizeStoryTheme, STORY_THEME_OPTIONS } from './helpers/themeControls'

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
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
    options: { control: 'object' },
    label: { control: 'text' },
    fieldName: { control: 'text' },
    selectedValue: { control: 'text' },
    showViewAll: { control: 'boolean' },
    isSearch: { control: 'boolean' },
  },
}

// MOCK DATA DEFAULT
const OptionsDefault = [
  { label: 'Fire Prevention', value: 'fire-prevention' },
  { label: 'Pollution', value: 'pollution' },
  { label: 'Energy Saving', value: 'energy-saving' },
]

function Template(args) {
  return {
    components: { DropdownSingleSelect },
    setup() {
      return {
        args,
        selectedFilters: { [args.fieldName]: args.selectedValue || '' },
      }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    template: `
      <div>
        <span>Selected dropdown value display:{{selectedFilters}}</span>
        <br><br>
        <DropdownSingleSelect
          v-model:selectedFilters='selectedFilters'
          :label='args.label'
          :options='args.options'
          :field-name='args.fieldName'
          :show-view-all='args.showViewAll'
          :is-search='args.isSearch'
        />
      </div>
    `,
  }
}

export const Default = Template.bind({})
Default.args = {
  theme: 'ftva',
  options: OptionsDefault,
  label: 'Filter',
  fieldName: 'esFieldName',
  selectedValue: '',
  showViewAll: true,
  isSearch: false,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const DLCTheme = Template.bind({})
DLCTheme.args = {
  ...Default.args,
  theme: 'dlc',
}

export const DLCThemeSearch = Template.bind({})
DLCThemeSearch.args = {
  ...DLCTheme.args,
  isSearch: true,
}


// MOCK DATA FILTER
const FilterOptionsDefault = [
  { label: 'Current Events', value: 'current-events' },
  { label: 'Politics', value: 'politics' },
  { label: 'Economy', value: 'economy' },
  { label: 'Social Impact', value: 'social-impact' },
]

export const FTVAFilterByTopic = Template.bind({})
FTVAFilterByTopic.args = {
  ...Default.args,
  theme: 'ftva',
  options: FilterOptionsDefault,
  label: 'Filter by topic',
}


export const FTVAFilterByTopicIntialSelection = Template.bind({})
FTVAFilterByTopicIntialSelection.args = {
  ...FTVAFilterByTopic.args,
  selectedValue: 'politics',
}


// MOCK DATA SORT
const FilterOptionsSort = [
  { label: 'Date (oldest)', value: 'asc' },
  { label: 'Date (newest)', value: 'desc' },
]

export const FTVASortBy = Template.bind({})
FTVASortBy.args = {
  ...Default.args,
  theme: 'ftva',
  options: FilterOptionsSort,
  label: 'Sort by',
  selectedValue: 'asc',
  showViewAll: false,
}

