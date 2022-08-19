import FlexibleMediaWithText from "@/lib-components/Flexible/MediaWithText"
import StoryRouter from "storybook-vue-router"

import { mock, mockSingle } from "./mock/Flexible_MediaWithText"

export default {
    title: "FLEXIBLE / Media With Text",
    component: FlexibleMediaWithText,
    decorators: [StoryRouter()],
}

const Template = (args, { argTypes }) => ({
    components: { FlexibleMediaWithText },
    props: Object.keys(argTypes),
    template: `<flexible-media-with-text v-bind="$props"/>`,
})

export const Default = () => ({
    data() {
        return { block: mock }
    },
    components: { FlexibleMediaWithText },
    template: `
        <flexible-media-with-text
            :block="block"

        />
    `,
})

export const Single = () => ({
    data() {
        return { block: mockSingle }
    },
    components: { FlexibleMediaWithText },
    template: `
        <flexible-media-with-text
            :block="block"

        />
    `,
})

export const WithControls = Template.bind({})
WithControls.args = {
    block: mock,
}
