import { computed } from "vue"
import ButtonTag from "@/lib-components/ButtonTag"
import {
    ButtonTagIcons,
    ButtonTagVariants,
} from "@/types/components/buttonTag.types"

/**
 * A component to display a non-interactive tag with a label and an optional icon. <br>
 * <sub>(For an interactive tag that can be clicked to remove it from a list, try BlockRemoveSearchFilter). </sub>
 *
 * Props:
 * - <b>label</b>: A string representing the text to display in the tag
 * - <b>iconName</b>: An optional icon to display in the tag, imported from `@/types/components/buttonTag.types`
 * <sub>Valid names: `ButtonTagIcons.SvgIconGuest`, `ButtonTagIcons.SvgIconFilm`, `ButtonTagIcons.SvgIconTV`, `ButtonTagIcons.SvgIconFilmreel`, `ButtonTagIcons.SvgIconDigital`, `ButtonTagIcons.SvgIconOnline`, `ButtonTagIcons.SvgIconFamilyFriendly`</sub>
 * - <b>variant</b>: The visual style of the tag, imported from `@/types/components/buttonTag.types`
 * <sub>Valid variants: `ButtonTagVariants.Primary`, `ButtonTagVariants.Secondary`</sub>
 *
 */

export default {
    title: "Funkhaus / Tag",
    component: ButtonTag,
}

export function Default() {
    return {
        data() {
            return {
                props: {
                    label: "default label",
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultHighlighted() {
    return {
        data() {
            return {
                props: {
                    label: "highlighted label",
                    isHighlighted: true,
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultWithTwoLabels() {
    return {
        data() {
            return {
                props: {
                    label: ["Genre", "Black and White Photographs"],
                    iconName: ButtonTagIcons.SvgIconFilmreel,
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultWithMultipleLabels() {
    return {
        data() {
            return {
                props: {
                    label: [
                        "Genre",
                        "Black and White Photographs",
                        "Another Label",
                        "And Another",
                    ],
                    iconName: ButtonTagIcons.SvgIconFilmreel,
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultWithMultipleBreadcrumbs() {
    return {
        data() {
            return {
                props: {
                    label: [
                        { text: "Genre" },
                        {
                            text: "Black and White Photographs",
                            to: "https://google.com",
                        },
                        { text: "Another Label", to: "https://facebook.com" },
                        { text: "And Another", to: "https://twitter.com" },
                    ],
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultWithOnClick() {
    return {
        data() {
            return {
                props: {
                    label: "Clear Filter",
                    isHighlighted: true,
                    onClick: () => {
                        alert("Filter cleared!")
                    },
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function DefaultWithLink() {
    return {
        data() {
            return {
                props: {
                    label: "<a href='https://www.google.com'>Link to Google</a>",
                    isHighlighted: true,
                },
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function PrimaryFTVAWithMultipleLabels() {
    return {
        data() {
            return {
                props: {
                    label: ["Genre", "Black and White Photographs"],
                    iconName: ButtonTagIcons.SvgIconFilmreel,
                    variant: ButtonTagVariants.Primary,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function SecondaryFTVAWithMultipleLabels() {
    return {
        data() {
            return {
                props: {
                    label: ["Genre", "Black and White Photographs"],
                    iconName: ButtonTagIcons.SvgIconFilmreel,
                    variant: ButtonTagVariants.Secondary,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function PrimaryFTVA() {
    return {
        data() {
            return {
                props: {
                    label: "ftva label text",
                    variant: ButtonTagVariants.Primary,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function SecondaryFTVA() {
    return {
        data() {
            return {
                props: {
                    label: "ftva label text",
                    iconName: ButtonTagIcons.SvgIconGuest,
                    variant: ButtonTagVariants.Secondary,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function SecondaryFTVANoIcon() {
    return {
        data() {
            return {
                props: {
                    label: "ghost tag",
                    variant: ButtonTagVariants.Secondary,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}

export function SecondaryFTVAHighlighted() {
    return {
        data() {
            return {
                props: {
                    label: "ftva label text",
                    variant: ButtonTagVariants.Secondary,
                    isHighlighted: true,
                },
            }
        },
        provide() {
            return {
                theme: computed(() => "ftva"),
            }
        },
        components: { ButtonTag },
        template: `
    <button-tag
        v-bind="props"
    />
  `,
    }
}
