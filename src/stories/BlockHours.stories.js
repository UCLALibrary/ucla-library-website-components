import BlockHours from "@/lib-components/BlockHours"

export default {
    title: "BLOCK / Hours",
    component: BlockHours,
}

export const Default = () => ({
    data() {
        return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="4690"/>
    `,
})

export const NoInternalLocations = () => ({
    data() {
        return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="4693"/>
    `,
})

export const MoreInternalLocations = () => ({
    data() {
        return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="2081"/>
    `,
})
