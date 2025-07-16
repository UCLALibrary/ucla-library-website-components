<script setup lang="ts">
// Imports
import { computed, defineAsyncComponent } from "vue"
import { useTheme } from "@/composables/useTheme"
import {
    ButtonTagIcons,
    ButtonTagVariants,
} from "@/types/components/buttonTag.types"
import SmartLink from "@/lib-components/SmartLink.vue"
const SvgArrowRight = defineAsyncComponent(
    () => import("ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg")
) // TODO: use the correct icon for this component

type ButtonTagProps = {
    label?: string | Array<string> | Array<{ text: string; to?: string }>
    valueText?: string
    iconName?: ButtonTagIcons
    variant?: ButtonTagVariants
    isHighlighted?: boolean
    onClick?: () => void
}

// Async icon components
const iconMap = {
    [ButtonTagIcons.SvgIconGuest]: defineAsyncComponent(
        () =>
            import("ucla-library-design-tokens/assets/svgs/icon-ftva-guest.svg")
    ),
    [ButtonTagIcons.SvgIconFilm]: defineAsyncComponent(
        () =>
            import("ucla-library-design-tokens/assets/svgs/icon-ftva-film.svg")
    ),
    [ButtonTagIcons.SvgIconTV]: defineAsyncComponent(
        () => import("ucla-library-design-tokens/assets/svgs/icon-ftva-tv.svg")
    ),
    [ButtonTagIcons.SvgIconFilmreel]: defineAsyncComponent(
        () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-filmreel.svg"
            )
    ),
    [ButtonTagIcons.SvgIconDigital]: defineAsyncComponent(
        () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-digitalformat.svg"
            )
    ),
    [ButtonTagIcons.SvgIconOnline]: defineAsyncComponent(
        () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-online.svg"
            )
    ),
    [ButtonTagIcons.SvgIconFamilyFriendly]: defineAsyncComponent(
        () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-ftva-familyfriendly.svg"
            )
    ),
}

const theme = useTheme()

// Props
const props = withDefaults(defineProps<ButtonTagProps>(), {
    label: "",
    variant: ButtonTagVariants.Primary,
    isHighlighted: false,
})

// Computeds
const classes = computed(() => [
    "button-tag",
    theme?.value || "",
    `is-${props.variant}`,
    { "is-highlighted": props.isHighlighted },
    { "has-on-click": props.onClick || hasLinkInLabel.value },
])

const hasLinkInLabel = computed(() => {
    if (typeof props.label === "string") {
        return props.label.includes("<a")
    } else if (Array.isArray(props.label)) {
        return props.label.some((item) => {
            if (typeof item === "string") {
                return item.includes("<a")
            } else if (typeof item === "object" && item.text) {
                return item.text.includes("<a")
            }
            return false
        })
    }
    return false
})

const isLabelArray = computed(() => {
    return Array.isArray(props.label)
})
</script>

<template>
    <span :class="classes" @click="onClick">
        <component
            v-if="iconName"
            :is="iconMap[iconName]"
            class="icon-left"
            aria-hidden="true"
        />

        <div v-if="!isLabelArray" class="label" v-html="label" />
        <template v-else>
            <template v-for="(item, index) in label" :key="item">
                <!-- Breadcrumb variant -->
                <smart-link
                    v-if="typeof item === 'object'"
                    :to="item.to"
                    class="label"
                >
                    {{ item.text }}
                </smart-link>
                <!-- Regular text or HTML content -->
                <span v-else class="label" v-html="item" />

                <component
                    v-if="index !== label.length - 1"
                    :is="SvgArrowRight"
                    class="icon-arrow"
                    aria-hidden="true"
                />
            </template>
        </template>

        <!-- slot for 'x' button or any additional content parent needs to display in tag -->
        <slot />
    </span>
</template>

<style lang="scss" scoped>
.button-tag {
    --transition-duration: 0.2s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 8px 16px;
    border-radius: 50px;
    border: 2px solid var(--color-secondary-grey-02);
    background-color: transparent;

    height: 36px;
    width: fit-content;

    transition: background-color var(--transition-duration) ease-in-out,
        border-color var(--transition-duration) ease-in-out;

    // Custom icon on the left
    .icon-left {
        height: 15px;
        width: 15px;

        :deep(path) {
            fill: $subtitle-grey;

            transition: fill var(--transition-duration) ease-in-out;
        }
    }

    .label {
        font-family: var(--font-primary);
        font-size: 15px;
        font-weight: 700;
        color: $subtitle-grey;

        transition: color var(--transition-duration) ease-in-out;
    }
    // Arrow between label items
    .icon-arrow {
        :deep(path) {
            stroke: $subtitle-grey;

            transition: stroke var(--transition-duration) ease-in-out;
        }
    }

    // Add pointer cursor for clickable tags
    &.has-on-click {
        cursor: pointer;

        :deep(a) {
            text-decoration: underline;
        }
    }

    // Highlight styles
    &.is-highlighted {
        background-color: $subtitle-grey;
        border: none;
        height: 32px;

        .label {
            color: var(--color-white);
        }
    }

    .label {
        &:is(button) {
            cursor: default;
        }

        &.is-link {
            transition: color var(--transition-duration) ease-in-out;
        }
    }

    // FTVA Styles
    &.ftva {
        @include ftva-tags;

        border: 1.5px solid $subtitle-grey;
        height: 32px;
        gap: 8px;

        .label {
            font-weight: 500;
        }

        &.is-primary {
            background-color: $accent-blue;
            border: none;

            .icon-left {
                :deep(path) {
                    fill: $pure-white;
                }
            }

            .label {
                color: $pure-white;
            }

            .icon-arrow {
                :deep(path) {
                    stroke: $pure-white;
                }
            }
        }

        &.is-highlighted {
            background-color: $page-blue;

            .label {
                color: $subtitle-grey;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        &.is-highlighted.has-on-click:hover {
            border-color: var(--color-secondary-blue-01);
            background-color: var(--color-secondary-blue-01);
        }
        .is-link:hover {
            color: var(--color-secondary-blue-01);
        }
    }
}
</style>
