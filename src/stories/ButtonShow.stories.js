import ButtonShow from "@/lib-components/ButtonShow"

export default {
    title: "BUTTON / Show",
    component: ButtonShow,
}

// Variations of stories below
export const Default = () => ({
    components: { ButtonShow },
    template: `<button-show/>`,
})
