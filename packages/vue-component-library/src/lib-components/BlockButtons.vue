<script setup lang="ts">
// Imports
import { computed } from "vue"
import ButtonLink from "@/lib-components/ButtonLink.vue"
import {
    BlockButtonDirection,
    BlockButtonsAlign,
    type BlockButtonsProps,
} from "@/types/components/blockButtons.types"

// Data
const props = withDefaults(defineProps<BlockButtonsProps>(), {
    align: BlockButtonsAlign.Left,
    direction: BlockButtonDirection.Vertical,
})

// Computed
const classes = computed(() => {
    return [
        "block-buttons",
        `align-${props.align}`,
        `direction-${props.direction}`,
    ]
})
</script>

<template>
    <div :class="classes">
        <ButtonLink
            v-for="button in buttons"
            :key="button.label"
            :to="button.to"
            :label="button.label"
            icon-name="none"
            class="block-button"
        />
    </div>
</template>

<style lang="scss" scoped>
.block-buttons {
    display: flex;
    gap: 24px;

    .block-button {
        width: fit-content;
    }

    // Directions
    &.direction-horizontal {
        flex-direction: row;

        &.align-left {
            justify-content: flex-start;
        }
        &.align-center {
            justify-content: center;
        }
        &.align-right {
            justify-content: flex-end;
        }
    }
    &.direction-vertical {
        flex-direction: column;

        &.align-left {
            align-items: flex-start;
        }
        &.align-center {
            align-items: center;
        }
        &.align-right {
            align-items: flex-end;
        }
    }
}
</style>
