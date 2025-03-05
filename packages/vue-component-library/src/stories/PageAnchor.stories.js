import { computed } from 'vue'

// A sticky list/menu on the right side of the page. It displays section-titles from the current page that create anchor links to those section-titles. It also always has a Back to Top link as the final element.
import PageAnchor from '../lib-components/PageAnchor.vue'

export default {
  title: 'PageAnchor',
  component: PageAnchor,
  argTypes: {
    sectionTitles: {
      control: {
        type: 'array',
        separator: ', ',
      },
      description:
                'h2 section-titles create page anchor links to respective sections',
      table: {
        type: {
          summary: 'Array<string>',
        },
      },
    },
    color: {
      control: {
        type: 'string',
      },
    },
  },
}

function Template(args) {
  return {
    components: { PageAnchor },
    setup() {
      return { args }
    },
    template: '<page-anchor v-bind="args" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  sectionTitles: [
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'About',
    'News',
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'Contact a Subject Specialist',
    'News',
    'Featured Collection Items',
    'Related News',
    'More About Anything',
  ],
  color: 'default',
}

export const Visit = Template.bind({})
Visit.args = {
  sectionTitles: [
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'About',
    'News',
  ],
  color: 'visit',
}

export const Help = Template.bind({})
Help.args = {
  sectionTitles: [
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'About',
    'News',
  ],
  color: 'help',
}

export const About = Template.bind({})
About.args = {
  sectionTitles: [
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'About',
    'News',
    'Using the Library',
    'Services & Resources',
    'Events & Exhibitions',
    'Contact a Subject Specialist',
    'News',
    'Featured Collection Items',
    'Related News',
    'More About Anything',
  ],
  color: 'about',
}

function Theme(args) {
  return {
    components: { PageAnchor },
    setup() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    template: '<page-anchor v-bind="args" />',
  }
}

export const FTVATheme = Theme.bind({})
FTVATheme.args = {
  sectionTitles: [
    'The story',
    'Endeavors of the initiaive',
    'Filmmakers & filmography',
    'Watch online',
    'Exhibitions & symposia',
    'Touring films',
    'Research at UCLA',
    'Acknowledgements',
    'Additional materials',
  ],
  color: 'default',
}
