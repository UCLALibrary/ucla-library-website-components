import { computed } from "vue"
import Button from "@/lib-components/Button.vue"

// Storybook default settings
export default {
    title: "Funkhaus / Button",
    component: Button,
    argTypes: {
        text: { control: "text" },
        to: { control: "text" },
        variant: {
            control: "select",
            options: ["primary", "secondary"],
        },
        type: {
            control: "select",
            options: ["button", "submit", "reset"],
        },
        isDisabled: { control: "boolean" },
        isOutlined: { control: "boolean" },
        linkTarget: { control: "text" },
        isDownload: { control: "boolean" },
        click: { action: "clicked" },
    },
    decorators: [
        () => ({
            template: "<story />",
        }),
    ],
}

function Template(args) {
    return {
        setup() {
            return { args }
        },
        components: { Button },
        template: '<Button v-bind="args" @click="args.click" />',
    }
}

// Default stories
export const Primary = Template.bind({})
Primary.args = {
    text: "Primary Button",
    variant: "primary",
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryOutlined = Template.bind({})
PrimaryOutlined.args = {
    text: "Primary Outlined Button",
    variant: "primary",
    isOutlined: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
    text: "Primary Disabled Button",
    variant: "primary",
    isDisabled: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryGray = Template.bind({})
PrimaryGray.args = {
    text: "Primary Gray Button",
    variant: "primary",
    isGrey: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryOutlinedGray = Template.bind({})
PrimaryOutlinedGray.args = {
    text: "Primary Outlined Gray Button",
    variant: "primary",
    isOutlined: true,
    isGrey: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryLink = Template.bind({})
PrimaryLink.args = {
    text: "External Link Button",
    variant: "primary",
    to: "https://www.google.com",
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: "Secondary Button",
    variant: "secondary",
    onClick: () => {
        alert("Secondray Button Clicked!")
    },
}

export const SecondaryOutlined = Template.bind({})
SecondaryOutlined.args = {
    text: "Secondary Outlined Button",
    variant: "secondary",
    isOutlined: true,
    onClick: () => {
        alert("Secondray Button Clicked!")
    },
}

export const SecondaryGray = Template.bind({})
SecondaryGray.args = {
    text: "Secondary Gray Button",
    variant: "secondary",
    isGrey: true,
    onClick: () => {
        alert("Secondray Button Clicked!")
    },
}

export const SecondaryOutlinedGray = Template.bind({})
SecondaryOutlinedGray.args = {
    text: "Secondary Outlined Gray Button",
    variant: "secondary",
    isOutlined: true,
    isGrey: true,
    onClick: () => {
        alert("Secondray Button Clicked!")
    },
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
    text: "Secondary Disabled Button",
    variant: "secondary",
    isDisabled: true,
    onClick: () => {
        alert("Secondray Button Clicked!")
    },
}

export const SecondaryLink = Template.bind({})
SecondaryLink.args = {
    text: "External Link Button",
    variant: "secondary",
    to: "https://www.google.com",
}
