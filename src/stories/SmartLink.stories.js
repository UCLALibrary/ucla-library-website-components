import SmartLink from "@/lib-components/SmartLink"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "GLOBAL / Smart Link",
    component: SmartLink,
    decorators: [StoryRouter()],
}

// Variations of stories below
export const Default = () => ({
    components: { SmartLink },
    template: `
    <smart-link
      to="/"
    >
      This will render as a vue-router link
    </smart-link>
  `,
})

export const ExternalLink = () => ({
    components: { SmartLink },
    template: `
    <smart-link
      to="http://www.ucla.edu"
      target="_blank"
    >
      This will render as a external link
    </smart-link>
  `,
})
