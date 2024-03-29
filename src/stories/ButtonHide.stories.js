import ButtonHide from "@/lib-components/ButtonHide.vue"

export default {
    title: "BUTTON / Hide",
    component: ButtonHide,
}

// Variations of stories below
export const Default = () => ({
    components: { ButtonHide },
    template: `<button-hide/>`,
})
