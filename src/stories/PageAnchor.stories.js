import PageAnchor from "../lib-components/PageAnchor.vue"

export default {
  title: 'PageAnchor',
  component: PageAnchor,
  argTypes: {
    sectionTitles: {
      control: {
        type: 'array',
        separator: ', ',
      },
      description: 'A sticky list/menu on the right side of the page. It displays section-titles from the current page that create anchor links to those section-titles. It also always has a Back to Top link as the final element.',
      table: {
        type: {
          summary: 'Array<string>',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageAnchor },
  template: '<page-anchor v-bind="$props" color="help" />',
});

export const Default = Template.bind({});
Default.args = {
  sectionTitles: ['Using the Library', 'Services & Resources', 'Events & Exhibitions', 'About', 'News'],
};
