import ButtonLink from "@/lib-components/ButtonLink"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BUTTON / Link",
    component: ButtonLink,
    argTypes: {
        label: { type: "string" },
        iconName: {
            type: "select",
            options: [
                "icon-arrow-right",
                "icon-download",
                "icon-external-link",
            ],
        },
        isSecondary: { type: "boolean" },
    },
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/", component: ButtonLink },
                    { path: "/help/more", component: ButtonLink },
                ],
            }
        ),
    ],
}

const Template = (args, { argTypes }) => ({
    components: { ButtonLink },
    props: Object.keys(argTypes),
    template: '<button-link v-bind="$props" />',
})

export const WithControls = Template.bind({})
WithControls.args = {
    label: "Ibus orci Luctus",
    isSecondary: false,
}

// Variations of stories below
export const Default = () => ({
    components: { ButtonLink },
    template: `<button-link label="Egest perl Conub" to="/help/more" />`,
})

export const SecondaryInternal = () => ({
    components: { ButtonLink },
    template: `<button-link label="Etiam et Ultrices" :isSecondary="true" to='/help/more' />`,
})

export const SecondaryLibraryInternal = () => ({
    components: { ButtonLink },
    template: `<button-link label="Etiam et Ultrices" :isSecondary="true" to='https://calendar.library.ucla.edu/' />`,
})

export const SecondaryExternal = () => ({
    components: { ButtonLink },
    template: `<button-link label="Etiam et Ultrices" :isSecondary="true" to='https://www.google.com/' />`,
})

export const LongLabel = () => ({
    components: { ButtonLink },
    template: `<button-link label="Proin sodales dolor sit amet." iconName="svg-arrow-right" to='/help/more'/>`,
})

export const HasGlyph = () => ({
    components: { ButtonLink },
    template: `<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-arrow-right" to='/help/more'/>`,
})

export const HasExternalGlyph = () => ({
    components: { ButtonLink },
    template: `<button-link label="Aug id Dignissim" :isSecondary="true" iconName="svg-arrow-diagonal" to='www.google.com'/>`,
})

export const HasNoGlyph = () => ({
    components: { ButtonLink },
    template: `<button-link label="Aug id Dignissim" :isSecondary="true" icon-name="none" to='www.google.com'/>`,
})
