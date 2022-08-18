import FlexibleHighlight from "@/lib-components/Flexible/Highlight"
import StoryRouter from "storybook-vue-router"

import { mock } from "./mock/Flexible_Highlight"

export default {
    title: "FLEXIBLE / Highlight",
    component: FlexibleHighlight,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
})
