<script setup lang="ts">
// Imports
import { computed, defineAsyncComponent } from "vue"
import { useTheme } from "@/composables/useTheme"
import {
    ButtonTagIcons,
    ButtonTagVariants,
} from "@/types/components/buttonTag.types"
const SvgArrowRight = defineAsyncComponent(
    () => import("ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg")
) // TODO: use the correct icon for this component

type ButtonTagProps = {
    label?: string | Array<string>
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
    { "has-on-click": props.onClick },
])

const isLabelArray = computed(() => {
    return Array.isArray(props.label)
})
</script>

<template>
    <span :class="classes" @click="onClick">
        <component
            v-if="iconName"
            :is="iconMap[iconName]"
            class="svg"
            aria-hidden="true"
        />

        <span v-if="!isLabelArray" class="label">{{ label }}</span>
        <template v-else>
            <template v-for="(item, index) in label" :key="item">
                <span class="label">
                    {{ item }}
                </span>
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
@import "@/styles/default/_button-tag.scss";
@import "@/styles/ftva/_button-tag.scss";
</style>
