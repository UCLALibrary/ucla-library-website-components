import FlexibleCtaBlock2Up from "@/lib-components/Flexible/CtaBlock2Up.vue"
import StoryRouter from "storybook-vue-router"

import { mock } from "./mock/Flexible_CallToAction2Up"

export default {
    title: "FLEXIBLE / Call To Action 2 Up",
    component: FlexibleCtaBlock2Up,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    components: { FlexibleCtaBlock2Up },
    template: `
        <flexible-cta-block-2-up
            :block="block"
        />
    `,
})
