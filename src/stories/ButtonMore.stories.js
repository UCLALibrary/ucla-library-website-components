import ButtonMore from "@/lib-components/ButtonMore"

// Storybook default settings
export default {
    title: "BUTTON / More",
    component: ButtonMore,
    argTypes: {
        text: { type: "string" },
    },
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
