import SiteBrandBar from "@/lib-components/SiteBrandBar"

export default {
    title: "GLOBAL / Site Brand Bar",
    component: SiteBrandBar,
}

export const Default = () => ({
    template: `<site-brand-bar/>`,
    components: { SiteBrandBar },
})
