import { computed } from "vue"
import ButtonLinkRefactored from "@/lib-components/ButtonLinkRefactored"
import {
    ButtonLinkIcons,
    ButtonLinkVariants,
} from "@/types/components/buttonLink.types"

// Storybook default settings
export default {
    title: "Funkhaus / Button Link Refactored",
    component: ButtonLinkRefactored,
}

export function WithControls() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Ibus orci Luctus no template",
                    iconName: ButtonLinkIcons.ARROW_RIGHT,
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function WithControlsIconClose() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Ibus orci Luctus",
                    iconName: ButtonLinkIcons.CLOSE,
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

// Variations of stories below
export function Default() {
    return {
        components: { ButtonLinkRefactored },
        template:
            '<button-link-refactored label="Egest perl Conub" to="/help/more" />',
    }
}

export function SecondaryInternal() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Etiam et Ultrices",
                    variant: ButtonLinkVariants.SECONDARY,
                    to: "/help/more",
                },
            }
        },
        template: '<button-link-refactored v-bind="props"   />',
    }
}

export function SecondaryLibraryInternal() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Etiam et Ultrices",
                    variant: ButtonLinkVariants.SECONDARY,

                    to: "https://calendar.library.ucla.edu/",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function SecondaryExternal() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Etiam et Ultrices",
                    variant: ButtonLinkVariants.SECONDARY,
                    to: "https://www.google.com/",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function LongLabel() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Proin sodales dolor sit amet.",
                    iconName: ButtonLinkIcons.ARROW_RIGHT,
                    to: "/help/more",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function HasGlyph() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Aug id Dignissim",
                    variant: ButtonLinkVariants.SECONDARY,
                    iconName: ButtonLinkIcons.DOWNLOAD,
                    to: "/help/more",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function HasExternalGlyph() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Aug id Dignissim",
                    variant: ButtonLinkVariants.SECONDARY,
                    iconName: ButtonLinkIcons.EXTERNAL_LINK,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function HasNoGlyph() {
    return {
        components: { ButtonLinkRefactored },
        data() {
            return {
                props: {
                    label: "Aug id Dignissim",
                    variant: ButtonLinkVariants.SECONDARY,
                    iconName: ButtonLinkIcons.NONE,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function FTVA() {
    return {
        components: { ButtonLinkRefactored },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        data() {
            return {
                props: {
                    label: "FTVA Primary",
                    iconName: ButtonLinkIcons.NONE,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function FTVAWithGlyph() {
    return {
        components: { ButtonLinkRefactored },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        data() {
            return {
                props: {
                    label: "FTVA Primary",
                    iconName: ButtonLinkIcons.EXTERNAL_LINK,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function FTVASecondary() {
    return {
        components: { ButtonLinkRefactored },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        data() {
            return {
                props: {
                    label: "FTVA Secondary",
                    variant: ButtonLinkVariants.SECONDARY,
                    iconName: ButtonLinkIcons.NONE,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function FTVASecondaryWithGlyph() {
    return {
        components: { ButtonLinkRefactored },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        data() {
            return {
                props: {
                    label: "FTVA Secondary",
                    variant: ButtonLinkVariants.SECONDARY,
                    iconName: ButtonLinkIcons.EXTERNAL_LINK,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}

export function FTVATertiary() {
    return {
        components: { ButtonLinkRefactored },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        data() {
            return {
                props: {
                    label: "FTVA Tertiary",
                    variant: ButtonLinkVariants.TERTIARY,
                    iconName: ButtonLinkIcons.NONE,
                    to: "www.google.com",
                },
            }
        },
        template: '<button-link-refactored v-bind="props" />',
    }
}
