import SearchHome from '@/lib-components/SearchHome'

export default {
  title: 'Search / Search Home',
  component: SearchHome,
}

function Template(args) {
  return {
    components: { SearchHome },
    setup() {
      return { args }
    },
    template: '<search-home v-bind=args />',
  }
}

export const Default = Template.bind({})

Default.args = {
  linkItems: [
    {
      text: 'Course Reserves',
      url: 'https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do',
      target: '_blank',
    },
    {
      text: 'UCLA Research Guides',
      url: 'https://guides.library.ucla.edu/',
      target: '',
    },
    {
      text: 'Databases A-Z',
      url: 'https://guides.library.ucla.edu/az.php',
      target: '_blank',
    },
  ],
  advancedSearchLink: {
    text: 'Advanced Search',
    url: 'https://www.library.ucla.edu/search',
    target: '_blank',
  },
}
