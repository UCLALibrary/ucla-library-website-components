import BentoPod from '@/lib-components/BentoPod.vue';

export default {
  title: 'Funkhaus / BentoPod',
  component: BentoPod,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonLink: { control: 'text' },
    labelOpen: { control: 'text' },
    labelClose: { control: 'text' },
    items: { control: 'object' },
  },
};

const Template = (args) => ({
  components: { BentoPod },
  setup() {
    return { args };
  },
  template: '<BentoPod v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Bento Pod Title',
  description: 'This is a description for the Bento Pod.',
  buttonLabel: 'Go to Link',
  buttonLink: '/somewhere',
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  items: [
    { title: 'Item 1', type: 'Type A', date: '2025-07-08', program: 'Program X' },
    { title: 'Item 2', type: 'Type B', date: '2025-07-09', program: 'Program Y' },
    { title: 'Item 3', type: 'Type C', date: '2025-07-10', program: 'Program Z' },
    { title: 'Item 4', type: 'Type D', date: '2025-07-11', program: 'Program W' },
    { title: 'Item 5', type: 'Type E', date: '2025-07-12', program: 'Program V' },
  ],
};

export const LessThanThreeItems = Template.bind({});
LessThanThreeItems.args = {
  ...Default.args,
  items: [
    { title: 'Item 1', type: 'Type A', date: '2025-07-08', program: 'Program X' },
    { title: 'Item 2', type: 'Type B', date: '2025-07-09', program: 'Program Y' },
  ],
};

export const ExactlyThreeItems = Template.bind({});
ExactlyThreeItems.args = {
  ...Default.args,
  items: [
    { title: 'Item 1', type: 'Type A', date: '2025-07-08', program: 'Program X' },
    { title: 'Item 2', type: 'Type B', date: '2025-07-09', program: 'Program Y' },
    { title: 'Item 3', type: 'Type C', date: '2025-07-10', program: 'Program Z' },
  ],
};

export const NoItems = Template.bind({});
NoItems.args = {
  ...Default.args,
  items: [],
};

export const CustomLabels = Template.bind({});
CustomLabels.args = {
  ...Default.args,
  labelOpen: 'Collapse',
  labelClose: 'Expand',
};

export const RealContent = Template.bind({});
RealContent.args = {
  title: 'UCLA Library Special Collections',
  description: 'Explore a curated selection of rare books, manuscripts, photographs, and archives from the UCLA Library. These resources are available for research, teaching, and learning.',
  buttonLabel: 'Browse All Collections',
  buttonLink: '/collections',
  labelOpen: 'Show Fewer Items',
  labelClose: 'Show More Items',
  items: [
    {
      title: 'Los Angeles Times Photographic Archive',
      type: 'Photographs',
      date: 'January 01, 2039',
      program: 'News & Media',
    },
    {
      title: 'Charles E. Young Research Library',
      type: 'Library',
      date: 'February 15, 2039',
      program: 'Research',
    },
    {
      title: 'Oral History Collection',
      type: 'Audio',
      date: 'March 10, 2039',
      program: 'History',
    },
    {
      title: 'Medieval Manuscripts',
      type: 'Manuscripts',
      date: 'April 22, 2039',
      program: 'Rare Books',
    },
    {
      title: 'LGBTQIA+ Activism Papers',
      type: 'Archives',
      date: 'May 30, 2039',
      program: 'Social Movements',
    },
    {
      title: 'Japanese American Incarceration Materials',
      type: 'Documents',
      date: 'June 18, 2039',
      program: 'History',
    },
  ],
};
