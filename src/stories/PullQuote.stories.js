import PullQuote from "../lib-components/PullQuote"

export default {
    title: "Pull Quote",
    component: PullQuote,
}

const mock = {
    text: "Vestibulum ac nunc blandit elit hendrerit venenatis hendrerit eget dolor. Curabitur a purus vel felis vulputate pretium. Duis ligula quam, faucibus nec gravida eget, vehicula eget mauris. Sed consequat pulvinar nisi, in suscipit est pretium",
    attribution: "Duis Blandit",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
            :attribution="attribution"
        />
    `,
})

const mockNoAttribution = {
    text: "Duis ligula quam, faucibus nec gravida eget, vehicula eget mauris. Sed consequat pulvinar nisi, in suscipit.",
}

export const NoAttribution = () => ({
    data() {
        return {
            ...mockNoAttribution,
        }
    },
    components: { PullQuote },
    template: `
        <pull-quote
            :text="text"
        />
    `,
})
