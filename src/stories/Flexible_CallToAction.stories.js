import FlexibleCallToAction from "@/lib-components/Flexible/CallToAction"

export default {
    title: "FLEXIBLE / Call To Action",
    component: FlexibleCallToAction,
}

const mock = {
    id: "16983",
    typeHandle: "callToAction",
    callToAction: [
        {
            id: "16984",
            titleCta: "Call to action",
            summary: "a call to action",
            icon: "svg-call-to-action-find",
            buttonText: "click me",
            buttonLink: "http://google.com",
            backgroundColor: "false",
        },
    ],
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
