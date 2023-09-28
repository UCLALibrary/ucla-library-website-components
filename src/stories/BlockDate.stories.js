import BlockDate from "@/lib-components/BlockDate"

// Storybook default settings
export default {
    title: "BLOCK / Date",
    components: BlockDate,
}

export const Default = () => ({
    components: { BlockDate },
    template: `<block-date date="10" day="Digniss" />`,
})

export const BigDate = () => ({
    components: { BlockDate },
    template: `<block-date date="30" day="Sodales" />`,
})

export const LongDayName = () => ({
    components: { BlockDate },
    template: `<block-date date="30" day="Suspendise" />`,
})
