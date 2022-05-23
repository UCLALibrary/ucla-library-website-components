import DividerGeneral from "../lib-components/DividerGeneral"

export default {
    title: "DIVIDER / General",
    component: DividerGeneral,
}

export const Default = () => ({
    components: { DividerGeneral },
    template: `<divider-general/>`,
})

export const isBold = () => ({
    components: { DividerGeneral },
    template: `<divider-general :is-bold="true"/>`,
})
