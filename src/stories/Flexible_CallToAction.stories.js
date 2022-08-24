import FlexibleCallToAction from "@/lib-components/Flexible/CallToAction"

import { mock } from "./mock/Flexible_CallToAction"

export default {
    title: "FLEXIBLE / Call To Action",
    component: FlexibleCallToAction,
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    components: { FlexibleCallToAction },
    template: `
        <flexible-call-to-action
            :block="block"
        />
    `,
})
