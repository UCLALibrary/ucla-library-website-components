import NotesAccordion from '@/lib-components/NotesAccordion.vue'

export default {
  title: 'Funkhaus / NotesAccordion',
  component: NotesAccordion,
  argTypes: {
    title: { control: 'text', description: 'Accordion title (HTML allowed)' },
    text: { control: 'text', description: 'Accordion content (HTML allowed)' },
    labelOpen: { control: 'text', description: 'Label when open' },
    labelClose: { control: 'text', description: 'Label when closed' },
  },
  args: {
    title: 'Accordion Title',
    text: 'This is the <b>accordion</b> content. You can use <i>HTML</i> here.',
    labelOpen: 'Show Less',
    labelClose: 'Show More',
  },
}

const Template = (args, { updateArgs }) => ({
  components: { NotesAccordion },
  setup() {
    return { args }
  },
  template: `
    <NotesAccordion
      :title="args.title"
      :text="args.text"
      :labelOpen="args.labelOpen"
      :labelClose="args.labelClose"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  text: 'This is the <b>accordion</b> content. You can use <i>HTML</i> here.',
} 

export const MoreText = Template.bind({})
MoreText.args = {
  labelOpen: 'Show Less',
  labelClose: 'Show More',
  text: 'IInani oratio numquam ea ius, per nihil mollis percipitur te. Mundi omittam fastidii ius ex. Mel ex everti consequat, sit equidem corrumpit adversarium cu. Sed an facer utroque. Pro dictas praesent delicatissimi in, ceteros nostrum blandit cu nec. Audire iisque id vis, sea cu omnes democritum temporibus.Eu vel dicam soluta, id omnis impetus pro. Error vocibus tacimates vim ut. Est in eirmod oblique.Inani oratio numquam ea ius, per nihil mollis percipitur te. Mundi omittam fastidii ius ex. Mel ex everti consequat, sit equidem corrumpit adversarium cu. Sed an facer utroque. Pro dictas praesent delicatissimi in, ceteros nostrum blandit cu nec. Audire iisque id vis, sea cu omnes democritum temporibus.Eu vel dicam soluta, id omnis impetus pro. Error vocibus tacimates vim ut. Est in eirmod <b>oblique</b>.',
} 