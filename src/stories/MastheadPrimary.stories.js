import MastheadPrimary from "@/lib-components/MastheadPrimary"

// Storybook default settings
export default {
    title: "MASTHEAD / Primary",
    component: MastheadPrimary,
}
export const Default = () => ({
    template: `<masthead-primary/>`,
    components: { MastheadPrimary },
})
