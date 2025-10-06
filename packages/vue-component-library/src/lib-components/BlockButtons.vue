<script setup lang="ts">
// Imports
import { computed } from "vue"
import ButtonLinkRefactored from "@/lib-components/ButtonLinkRefactored.vue"
import {
    BlockButtonDirection,
    BlockButtonsAlign,
    type BlockButtonsProps,
} from "@/types/components/blockButtons.types"
import { useTheme } from "@/composables/useTheme"
import { ButtonLinkVariants } from "@/types/components/buttonLink.types"

// Data
const props = withDefaults(defineProps<BlockButtonsProps>(), {
    align: BlockButtonsAlign.Left,
    direction: BlockButtonDirection.Vertical,
})

const theme = useTheme()

// Computed
const classes = computed(() => {
    return [
        "block-buttons",
        theme?.value,
        `align-${props.align}`,
        `direction-${props.direction}`,
    ]
})
</script>

<template>
    <div :class="classes">
        <ButtonLinkRefactored
            v-for="button in buttons"
            :key="button.label"
            :to="button.to"
            :label="button.label"
            :icon-name="button?.iconName"
            :variant="button?.variant ?? ButtonLinkVariants.PRIMARY"
            :is-download="button?.isDownload"
            class="block-button"
        />
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_block-buttons.scss";
</style>
