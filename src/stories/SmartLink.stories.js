import SmartLink from "@/lib-components/SmartLink.vue"

// Storybook default settings
export default {
    title: "GLOBAL / Smart Link",
    component: SmartLink,
    tags: ["autodocs"],
}

const Template = (args) => ({
    components: { SmartLink },
    setup() {
        return { args }
    },
    template: `<smart-link v-bind="args">Link goes here</smart-link>`,
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
