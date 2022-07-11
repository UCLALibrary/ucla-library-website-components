import SiteBrandBar from "@/lib-components/SiteBrandBar"

export default {
    title: "GLOBAL / Site Brand Bar",
    component: SiteBrandBar,
}

export const Default = () => ({
    // The first story should be called Default
    template: `<site-brand-bar/>`,
    components: { SiteBrandBar },
})
