import FlexiblePullQuote from "@/lib-components/Flexible/PullQuote"

export default {
    title: "FLEXIBLE / Pull Quote",
    component: FlexiblePullQuote,
}

const mock = {
    pullQuote: [
        {
            text: "Vestibulum ac nunc blandit elit hendrerit venenatis hendrerit eget dolor. Curabitur a purus vel felis vulputate pretium. Duis ligula quam, faucibus nec gravida eget, vehicula eget mauris. Sed consequat pulvinar nisi, in suscipit est pretium",
            attribution: "Duis Blandit",
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexiblePullQuote },
    template: `
        <flexible-pull-quote
            :block="block"
        />
    `,
})

const mockNoAttribution = {
    pullQuote: [
        {
            text: "Vestibulum ac nunc blandit elit hendrerit venenatis hendrerit eget dolor. Curabitur a purus vel felis vulputate pretium. Duis ligula quam, faucibus nec gravida eget, vehicula eget mauris. Sed consequat pulvinar nisi, in suscipit est pretium",
        },
    ],
}

export const NoAttribution = () => ({
    data() {
        return {
            block: mockNoAttribution,
        }
    },
    components: { FlexiblePullQuote },
    template: `
    <flexible-pull-quote
        :block="block"
    />
        `,
})
