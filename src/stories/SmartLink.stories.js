import SmartLink from "@/lib-components/SmartLink.vue"

// Storybook default settings
export default {
    title: "GLOBAL / Smart Link",
    component: SmartLink,
}

const Template = (args, { argTypes }) => ({
    components: { SmartLink },
    props: Object.keys(argTypes),
    template: `<smart-link v-bind="$props">Link goes here</smart-link>`,
})

// Variations of stories below
export const Default = Template.bind({})
Default.args = {
    to: "/",
}

export const ExternalLink = () => ({
    components: { SmartLink },
    template: `
    <smart-link
      to="http://www.ucla.edu"
      linkTarget="_blank"
    >
      This will render as a external link
    </smart-link>
  `,
})
