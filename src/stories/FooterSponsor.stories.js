import FooterSponsor from "@/lib-components/FooterSponsor"

// Storybook default settings
export default {
    title: "FOOTER / Sponsor",
    component: FooterSponsor,
}

// Variations of stories below
export const Default = () => ({
    components: { FooterSponsor },
    template: `<footer-sponsor />`,
})
