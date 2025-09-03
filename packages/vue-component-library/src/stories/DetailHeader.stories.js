import DetailHeader from '@/lib-components/DetailHeader'

/**
 * A component to display navigation controls for detail pages with previous/next links,
 * results count, tag information, and optional back button.
 *
 * Props:
 * - <b>totalResults</b>: A number representing the total number of results (defaults to 0)
 * - <b>tag</b>: An object containing tag information with name and value (label and to)
 * - <b>previousTo</b>: A string representing the URL for the previous item
 * - <b>nextTo</b>: A string representing the URL for the next item
 * - <b>backTo</b>: A string representing the URL to go back to search results
 */
export default {
  title: 'Funkhaus / DetailHeader',
  component: DetailHeader,
  argTypes: {
    totalResults: {
      control: 'number',
      description: 'Total number of results to display',
    },
    tag: {
      control: 'object',
      description: 'Tag object with name and value (label and to)',
    },
    previousTo: {
      control: 'text',
      description: 'URL for previous item navigation',
    },
    nextTo: {
      control: 'text',
      description: 'URL for next item navigation',
    },
    backTo: {
      control: 'text',
      description: 'URL to go back to search results',
    },
  },
  decorators: [
    () => ({
      template: '<story />',
    }),
  ],
}

function Template(args) {
  return {
    setup() {
      return { args }
    },
    components: { DetailHeader },
    template: '<DetailHeader v-bind="args" />',
  }
}

// Default stories
export const Default = Template.bind({})
Default.args = {
  totalResults: 42,
  tag: {
    name: 'Collection',
    value: {
      label: 'Los Angeles Times Photographic Collection',
      to: '/collections/latimes-photographic',
    },
  },
  previousTo: '/collections/latimes-photographic/previous-item',
  nextTo: '/collections/latimes-photographic/next-item',
  backTo: '/search?collection=latimes-photographic',
}

export const WithResultsOnly = Template.bind({})
WithResultsOnly.args = {
  totalResults: 15,
  tag: {
    name: '',
    value: {
      label: '',
      to: '',
    },
  },
}

export const SingleResult = Template.bind({})
SingleResult.args = {
  totalResults: 1,
  tag: {
    name: '',
    value: {
      label: '',
      to: '',
    },
  },
}

export const BigResultNumber = Template.bind({})
BigResultNumber.args = {
  totalResults: 1234567,
  tag: {
    name: 'Subject',
    value: {
      label: 'History of Art',
      to: '/subjects/history-of-art',
    },
  },
}

export const WithNavigationOnly = Template.bind({})
WithNavigationOnly.args = {
  totalResults: 0,
  tag: {
    name: '',
    value: {
      label: '',
      to: '',
    },
  },
  previousTo: '/articles/previous-article',
  nextTo: '/articles/next-article',
}

export const WithTagOnly = Template.bind({})
WithTagOnly.args = {
  totalResults: 0,
  tag: {
    name: 'Subject',
    value: {
      label: 'Computer Science',
      to: '/subjects/computer-science',
    },
  },
}

export const WithBackButtonOnly = Template.bind({})
WithBackButtonOnly.args = {
  totalResults: 0,
  tag: {
    name: '',
    value: {
      label: '',
      to: '',
    },
  },
  backTo: '/search?q=research+papers',
}

export const PreviousOnly = Template.bind({})
PreviousOnly.args = {
  totalResults: 8,
  tag: {
    name: 'Author',
    value: {
      label: 'Jane Smith',
      to: '/authors/jane-smith',
    },
  },
  previousTo: '/authors/jane-smith/previous-work',
}

export const NextOnly = Template.bind({})
NextOnly.args = {
  totalResults: 12,
  tag: {
    name: 'Location',
    value: {
      label: 'Powell Library',
      to: '/locations/powell-library',
    },
  },
  nextTo: '/locations/powell-library/next-item',
}

export const FullNavigation = Template.bind({})
FullNavigation.args = {
  totalResults: 156,
  tag: {
    name: 'Collection',
    value: {
      label: 'Rare Books',
      to: '/collections/rare-books',
    },
  },
  previousTo: '/collections/rare-books/previous-item',
  nextTo: '/collections/rare-books/next-item',
  backTo: '/search?collection=rare-books',
}

export const EmptyState = Template.bind({})
EmptyState.args = {
  totalResults: 0,
  tag: {
    name: '',
    value: {
      label: '',
      to: '',
    },
  },
}
