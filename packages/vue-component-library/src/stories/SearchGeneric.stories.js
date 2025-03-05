// Import the component and any other dependencies
import SearchGeneric from '@/lib-components/SearchGeneric'

export default {
  title: 'Search / Generic',
  component: SearchGeneric,
}
const items = [
  {
    name: 'Neque porro quisquam',
  },
  {
    name: 'Qui dolorem ipsum quia dolor',
  },
  {
    name: 'Consectetur, adipisci velit.',
  },
  {
    name: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    name: 'Excepteur sint occaecat cupidatat non proident',
  },
  {
    name: 'Vel illum qui dolorem eum fugiat',
  },
  {
    name: 'Quis nostrum exercitationem ullam',
  },
  {
    name: 'Quis autem vel eum iure reprehenderit',
  },
  {
    name: 'Excepteur sint occaecat cupidatat non proident1',
  },
  {
    name: 'Vel illum qui dolorem eum fugiat1',
  },
  {
    name: 'Quis nostrum exercitationem ullam1',
  },
  {
    name: 'Quis autem vel eum iure reprehenderit1',
  },
]

// Define a template for your stories
function Template(args) {
  return {
    components: { SearchGeneric },
    setup() {
      return { args }
    },
    template: '<SearchGeneric v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  filters: [
    {
      label: 'Location',
      esFieldName: 'location',
      inputType: 'radio',
      items,
    },
    {
      label: 'Department',
      esFieldName: 'departments.title.keyword',
      inputType: 'checkbox',
      items,
    },
    {
      label: 'Subject Librarian',
      esFieldName: 'subjectLibrarian.keyword',
      inputType: 'single-checkbox',
    },
  ],
  searchGenericQuery: {
    queryText: '',
    queryFilters: {},
  },
  placeholder: 'FIND ALL THE  LLAMAS THAT TOTALLY RULE'
}
export const RouterQuery = Template.bind({})
RouterQuery.args = {
  filters: [
    {
      label: 'Location',
      esFieldName: 'location',
      inputType: 'radio',
      items,
    },
    {
      label: 'Department',
      esFieldName: 'departments.title.keyword',
      inputType: 'checkbox',
      items,
    },
  ],
  searchGenericQuery: {
    queryText: 'suzy lee',
    queryFilters: {
      'departments.title.keyword': ['Neque porro quisquam'],
    },
  }
}
export const RouterQueryWithSinglCheckBoxSelected = Template.bind({})
RouterQueryWithSinglCheckBoxSelected.args = {
  filters: [
    {
      label: 'Location',
      esFieldName: 'location',
      inputType: 'radio',
      items,
    },
    {
      label: 'Department',
      esFieldName: 'departments.title.keyword',
      inputType: 'checkbox',
      items,
    },
    {
      label: 'Subject Librarian',
      esFieldName: 'subjectLibrarian.keyword',
      inputType: 'single-checkbox',
    },
  ],
  searchGenericQuery: {
    queryText: 'suzy lee',
    queryFilters: {
      'subjectLibrarian.keyword': ['yes'],
      'departments.title.keyword': ['Neque porro quisquam'],
    },
  }
}

export const PastEventsCheckbox = Template.bind({})
PastEventsCheckbox.args = {
  filters: [
    {
      label: 'Department',
      esFieldName: 'departments.title.keyword',
      inputType: 'checkbox',
      items,
    },
    {
      label: 'Past Events',
      esFieldName: 'past',
      inputType: 'single-checkbox',
    },
  ],
  placeholder: 'Search Events & Exhibitions',
  searchType: 'about',
  searchGenericQuery: {
    queryText: '',
    queryFilters: {
      'past': ['yes'],
      'departments.title.keyword': ['Neque porro quisquam'],
    },
  }
}
