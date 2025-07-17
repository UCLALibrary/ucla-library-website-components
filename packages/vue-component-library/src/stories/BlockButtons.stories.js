import BlockButtons from "@/lib-components/BlockButtons"
import {
    BlockButtonDirection,
    BlockButtonsAlign,
} from "@/types/components/blockButtons.types"

// Storybook default settings
export default {
    title: "Funkhaus / BlockButtons",
    component: BlockButtons,
}

// Variations of stories below
export function Default() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}

export function AlignCenter() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                    align: BlockButtonsAlign.Center,
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}

export function AlignRight() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                    align: BlockButtonsAlign.Right,
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}

export function DirectionHorizontal() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                    direction: BlockButtonDirection.Horizontal,
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}

export function DirectionHorizontalAlignCenter() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                    align: BlockButtonsAlign.Center,
                    direction: BlockButtonDirection.Horizontal,
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}

export function DirectionHorizontalAlignRight() {
    return {
        components: { BlockButtons },
        data() {
            return {
                props: {
                    buttons: [
                        {
                            label: "Click Here for UCLA Library Locations",
                            to: "https://google.com",
                        },
                        { label: "Contact Us", to: "https://google.com" },
                    ],
                    align: BlockButtonsAlign.Right,
                    direction: BlockButtonDirection.Horizontal,
                },
            }
        },
        template: '<block-buttons  v-bind="props" />',
    }
}
