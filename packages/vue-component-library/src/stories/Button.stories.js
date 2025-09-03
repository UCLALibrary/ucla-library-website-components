import { computed } from "vue"
import Button from "@/lib-components/Button.vue"
import { ButtonColor, ButtonVariant } from "@/types/components/button.types"

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
        color: {
            control: "select",
            options: ["default", "grey"],
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
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        components: { Button },
        template: '<Button v-bind="args" @click="args.click" />',
    }
}

// Default stories
export const Primary = Template.bind({})
Primary.args = {
    text: "Primary Button",
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryOutlined = Template.bind({})
PrimaryOutlined.args = {
    text: "Primary Outlined Button",
    isOutlined: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
    text: "Primary Disabled Button",
    isDisabled: true,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryGray = Template.bind({})
PrimaryGray.args = {
    text: "Primary Grey Button",
    color: ButtonColor.Grey,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryOutlinedGray = Template.bind({})
PrimaryOutlinedGray.args = {
    text: "Primary Outlined Grey Button",
    isOutlined: true,
    color: ButtonColor.Grey,
    onClick: () => {
        alert("Primary Button Clicked!")
    },
}

export const PrimaryLink = Template.bind({})
PrimaryLink.args = {
    text: "External Link Button",
    to: "https://www.google.com",
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: "Secondary Button",
    variant: ButtonVariant.Secondary,
    onClick: () => {
        alert("Secondary Button Clicked!")
    },
}

export const SecondaryOutlined = Template.bind({})
SecondaryOutlined.args = {
    text: "Secondary Outlined Button",
    variant: ButtonVariant.Secondary,
    isOutlined: true,
    onClick: () => {
        alert("Secondary Button Clicked!")
    },
}

export const SecondaryGray = Template.bind({})
SecondaryGray.args = {
    text: "Secondary Grey Button",
    variant: ButtonVariant.Secondary,
    color: ButtonColor.Grey,
    onClick: () => {
        alert("Secondary Button Clicked!")
    },
}

export const SecondaryOutlinedGray = Template.bind({})
SecondaryOutlinedGray.args = {
    text: "Secondary Outlined Grey Button",
    variant: ButtonVariant.Secondary,
    isOutlined: true,
    color: ButtonColor.Grey,
    onClick: () => {
        alert("Secondary Button Clicked!")
    },
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
    text: "Secondary Disabled Button",
    variant: ButtonVariant.Secondary,
    isDisabled: true,
    onClick: () => {
        alert("Secondary Button Clicked!")
    },
}

export const SecondaryLink = Template.bind({})
SecondaryLink.args = {
    text: "External Link Button",
    variant: ButtonVariant.Secondary,
    to: "https://www.google.com",
}
