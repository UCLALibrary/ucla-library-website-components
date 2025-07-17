<script setup lang="ts">
/**
 * ButtonLinkRefactored.vue
 * This component is a refactored version of ButtonLink.vue, designed to provide a more flexible and maintainable button link component.
 * The main difference is in usage of enums
 */
// Imports
import { computed, defineAsyncComponent } from "vue"
import { useTheme } from "@/composables/useTheme"
import isInternalLink from "@/utils/isInternalLink"
import SmartLink from "@/lib-components/SmartLink.vue"

import {
    ButtonLinkIcons,
    ButtonLinkVariants,
    type ButtonLinkRefactoredProps,
} from "@/types/components/buttonLink.types"

const theme = useTheme()

// Data
const props = withDefaults(defineProps<ButtonLinkRefactoredProps>(), {
    variant: ButtonLinkVariants.PRIMARY,
})

const SvgExternalLink = defineAsyncComponent(
    () =>
        import("ucla-library-design-tokens/assets/svgs/icon-external-link.svg")
)

const SvgArrowRight = defineAsyncComponent(
    () => import("ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg")
)

const SvgArrowDownload = defineAsyncComponent(
    () => import("ucla-library-design-tokens/assets/svgs/icon-download.svg")
)

const IconClose = defineAsyncComponent(
    () => import("ucla-library-design-tokens/assets/svgs/icon-close.svg")
)

// Computeds
const classes = computed(() => {
    return ["button-link", theme?.value || "", `is-${props.variant}`]
})
const parsedIconName = computed(() => {
    switch (true) {
        case props.iconName === ButtonLinkIcons.DOWNLOAD:
            return SvgArrowDownload
        case props.iconName === ButtonLinkIcons.NONE:
            return ""
        case isInternalLink(props.to):
            return SvgArrowRight
        case props.linkTarget === "_blank" ||
            props.iconName === ButtonLinkIcons.EXTERNAL_LINK:
            return SvgExternalLink
        case props.iconName === ButtonLinkIcons.CLOSE:
            return IconClose
        default:
            return SvgExternalLink
    }
})
const isDownload = computed(() => {
    return props.iconName === ButtonLinkIcons.DOWNLOAD
})
</script>

<template>
    <smart-link
        :to="to"
        :class="classes"
        :is-download="isDownload"
        :link-target="linkTarget"
    >
        <span class="label">{{ label }}</span>
        <slot />
        <component
            :is="parsedIconName"
            v-if="parsedIconName !== ''"
            class="arrow"
            aria-hidden="true"
        />
        <div class="hover">
            <span class="label">{{ label }}</span>
            <component
                :is="parsedIconName"
                v-if="parsedIconName !== ''"
                class="arrow"
                aria-hidden="true"
            />
        </div>
    </smart-link>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_button-link.scss";
@import "@/styles/ftva/_button-link.scss";
</style>
