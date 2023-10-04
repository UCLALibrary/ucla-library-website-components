import SingleCheckbox from "@/lib-components/SingleCheckbox"

export default {
    title: "SEARCH / SingleCheckbox",
    component: SingleCheckbox,
}

export const Default = () => ({
    data() {
        return {}
    },
    components: { SingleCheckbox },
    template: `
        <single-checkbox />
    `,
})
