import ButtonMore from "@/lib-components/ButtonMore.vue"

export default {
    title: "BUTTON / More",
    component: ButtonMore,
}

// Variations of stories below
export const Default = () => ({
    components: { ButtonMore },
    template: `<button-more/>`,
})

export const WithAlternateText = () => ({
    components: { ButtonMore },
    template: `<button-more text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>`,
})

export const WithLink = () => ({
    components: { ButtonMore },
    template: `<button-more text="See More" to="visit/events-exhibits"/>`,
})
