// Import the component and any other dependencies
import SearchGenericFilters from '@/lib-components/SearchGenericFilters'

export default {
  title: 'Search / Generic / Filters',
  component: SearchGenericFilters,
}

// Define a template for your stories
const Template = (args) => ({
  components: { SearchGenericFilters },
  setup() {
    return { args }
  },
  template: `<SearchGenericFilters v-bind="args" />`,
})

export const Default = Template.bind({});
Default.args = {
  filters: [
    { inputType: 'radio', label: 'Filter 1', esFieldName: 'filter1', items: [{ name: 'Option 1' }, { name: 'Option 2' }] },
    { inputType: 'checkbox', label: 'Filter 2', esFieldName: 'filter2', items: [{ name: 'Check 1' }, { name: 'Check 2' }] },
  ],
  queryFilters: {
    'filter1': 'Option 1',
    'filter2': ['Check 1', 'Check 2'],
  }
}

export const WithSingleCheckbox = Template.bind({});
WithSingleCheckbox.args = {
  filters: [
    { inputType: 'radio', label: 'Filter 1', esFieldName: 'filter1', items: [{ name: 'Option 1' }, { name: 'Option 2' }] },
    { inputType: 'checkbox', label: 'Filter 2', esFieldName: 'filter2', items: [{ name: 'Check 1' }, { name: 'Check 2' }] },
    { inputType: 'single-checkbox', label: 'Filter 3', esFieldName: 'filter3'},
  ],
  queryFilters: {
    'filter1': 'Option 1',
    'filter2': ['Check 1', 'Check 2'],
    'filter3': true
  }
}

export const NoSelection = Template.bind({});
NoSelection.args = {
  filters: [
    { inputType: 'radio', label: 'Filter 1', esFieldName: 'filter1', items: [{ name: 'Option 1' }, { name: 'Option 2' }] },
    { inputType: 'checkbox', label: 'Filter 2', esFieldName: 'filter2', items: [{ name: 'Check 1' }, { name: 'Check 2' }] },
    { inputType: 'single-checkbox', label: 'Filter 3', esFieldName: 'filter3' },
  ],
  queryFilters: {
  }
}

export const OneFilter = Template.bind({});
OneFilter.args = {
  filters: [
    { inputType: 'checkbox', label: 'Filter 2', esFieldName: 'filter2', items: [{ name: 'Check 1' }, { name: 'Check 2' }] },
  ],
  queryFilters: {
    'filter2': ['Check 1', 'Check 2'],
  }
}