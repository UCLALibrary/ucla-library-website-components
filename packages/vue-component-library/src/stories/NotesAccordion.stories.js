import NotesAccordion from "@/lib-components/NotesAccordion.vue"
import { computed } from "vue"

export default {
    title: "Funkhaus / NotesAccordion",
    component: NotesAccordion,
    argTypes: {
        items: {
            control: "object",
            description: "Array of accordion sections",
        },
        labelOpen: { control: "text", description: "Label when open" },
        labelClose: { control: "text", description: "Label when closed" },
    },
}

const Template = (args) => ({
    components: { NotesAccordion },
    provide() {
        return {
            theme: computed(() => "dlc"),
        }
    },
    setup() {
        return { args }
    },
    template: `
    <NotesAccordion
      :items="args.items"
      :labelOpen="args.labelOpen"
      :labelClose="args.labelClose"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
    items: [
        {
            title: "Background",
            text: "IInani oratio numquam ea ius, per nihil mollis percipitur te. Mundi omittam fastidii ius ex. Mel ex everti consequat, sit equidem corrumpit adversarium cu. Sed an facer utroque. Pro dictas praesent delicatissimi in, ceteros nostrum blandit cu nec. Audire iisque id vis, sea cu omnes democritum temporibus.Eu vel dicam soluta, id omnis impetus pro. Error vocibus tacimates vim ut. Est in eirmod oblique.Inani oratio numquam ea ius, per nihil mollis percipitur te. Mundi omittam fastidii ius ex. Mel ex everti consequat, sit equidem corrumpit adversarium cu. Sed an facer utroque. Pro dictas praesent delicatissimi in, ceteros nostrum blandit cu nec. Audire iisque id vis, sea cu omnes democritum temporibus.Eu vel dicam soluta, id omnis impetus pro. Error vocibus tacimates vim ut. Est in eirmod oblique.",
        },
    ],
}

export const MoreSections = Template.bind({})
MoreSections.args = {
    items: [
        {
            title: "Section 1",
            text: "First section content.",
        },
        {
            title: "Section 2",
            text: "Second section content.",
        },
        {
            title: "Section 3",
            text: "Third section content.",
        },
    ],
    labelOpen: "Collapse All",
    labelClose: "Expand All",
}
