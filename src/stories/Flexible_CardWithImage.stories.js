import FlexibleCardWithImage from "@/lib-components/Flexible/CardWithImage.vue"
import StoryRouter from "storybook-vue-router"

import { mock } from "./mock/Flexible_CardWithImage.js"

export default {
    title: "FLEXIBLE / Card With Image",
    component: FlexibleCardWithImage,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
})
