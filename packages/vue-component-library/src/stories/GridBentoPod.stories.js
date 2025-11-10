import { computed } from 'vue'
import GridBentoPod from '@/lib-components/GridBentoPod.vue'

export default {
  title: 'Funkhaus / GridBentoPod',
  component: GridBentoPod,
  argTypes: {
    items: { control: 'object' },
  },
}

function Template(args) {
  return {
    components: { GridBentoPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: '<GridBentoPod v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: '1',
      title: 'Featured Collections',
      description: 'Explore our most significant and frequently accessed collections',
      items: [
        {
          title: 'Los Angeles Times Photographic Archive',
          to: '/collections/lat-photos',
          meta: {
            type: 'Photographs',
            date: 'January 15, 2024',
            program: 'News & Media',
          },
        },
        {
          title: 'Charles E. Young Research Library Papers',
          to: '/collections/young-library',
          meta: {
            type: 'Archives',
            date: 'February 20, 2024',
            program: 'Research',
          },
        },
        {
          title: 'Oral History Collection',
          to: '/collections/oral-history',
          meta: {
            type: 'Audio',
            date: 'March 10, 2024',
            program: 'History',
          },
        },
        {
          title: 'Medieval Manuscripts',
          to: '/collections/medieval',
          meta: {
            type: 'Manuscripts',
            date: 'April 5, 2024',
            program: 'Rare Books',
          },
        },
        {
          title: 'LGBTQIA+ Activism Papers',
          to: '/collections/lgbtq-activism',
          meta: {
            type: 'Archives',
            date: 'May 18, 2024',
            program: 'Social Movements',
          },
        },
        {
          title: 'Japanese American Incarceration Materials',
          to: '/collections/japanese-american',
          meta: {
            type: 'Documents',
            date: 'June 2, 2024',
            program: 'History',
          },
        },
        {
          title: 'UCLA Yearbooks Collection',
          to: '/collections/yearbooks',
          meta: {
            type: 'Publications',
            date: 'July 12, 2024',
            program: 'University Archives',
          },
        },
        {
          title: 'Westwood Village Historical Records',
          to: '/collections/westwood',
          meta: {
            type: 'Documents',
            date: 'August 8, 2024',
            program: 'Local History',
          },
        },
      ],
    },
    {
      id: '2',
      title: 'Digital Archives',
      description: 'Digitized materials and born-digital collections available online',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        }
      ],
    },
    {
      id: '3',
      title: 'Research Resources',
      description: 'Essential tools and databases for academic research',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        }
      ],
    },
    {
      id: '4',
      title: 'Research Resources',
      description: 'Essential tools and databases for academic research',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        }
      ],
    },
    {
      id: '5',
      title: 'Digital Archives',
      description: 'Digitized materials and born-digital collections available online',
      items: [
        {
          title: 'California Digital Newspaper Collection',
          to: '/digital/newspapers',
          meta: {
            type: 'Newspapers',
            date: 'September 1, 2024',
            program: 'Digital Collections',
          },
        },
        {
          title: 'UCLA Film & Television Archive',
          to: '/digital/film-tv',
          meta: {
            type: 'Moving Images',
            date: 'September 15, 2024',
            program: 'Media Archives',
          },
        },
        {
          title: 'Ethnomusicology Archive Recordings',
          to: '/digital/ethnomusicology',
          meta: {
            type: 'Audio',
            date: 'October 3, 2024',
            program: 'Music',
          },
        },
        {
          title: 'Map Collections',
          to: '/digital/maps',
          meta: {
            type: 'Maps',
            date: 'October 20, 2024',
            program: 'Geography',
          },
        },
        {
          title: 'Historical Photographs',
          to: '/digital/photographs',
          meta: {
            type: 'Photographs',
            date: 'November 5, 2024',
            program: 'Visual Resources',
          },
        },
        {
          title: 'Rare Book Digital Library',
          to: '/digital/rare-books',
          meta: {
            type: 'Books',
            date: 'November 18, 2024',
            program: 'Special Collections',
          },
        },
      ],
    },
  ],
}
