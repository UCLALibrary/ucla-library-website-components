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
      description: 'An array of section titles to create anchor links for',
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
  template: '<page-anchor v-bind="$props" />',
});

export const Basic = Template.bind({});
Basic.args = {
  sectionTitles: ['Section 1', 'Section 2', 'Section 3'],
};

export const extra = Template.bind({});
Basic.args = {
  sectionTitles: ['Section 1', 'Section 2', 'Section 3', 'Section 3'],
};
