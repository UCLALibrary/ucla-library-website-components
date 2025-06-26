<script setup>
// Imports
import { computed, useSlots } from "vue"
import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"

const emit = defineEmits(["click"])
const slots = useSlots()

// Methods
function handleClick() {
    emit("click")
}
</script>

<template>
    <button class="button-submit" type="submit" @click="handleClick">
        <slot>
            <IconSearch />
        </slot>
    </button>
</template>

<style lang="scss" scoped>
.button-submit {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 74px;
    width: 74px;
    padding: 0;
    background-color: var(--color-primary-blue-01);

    // Target SVG elements
    :deep(svg path) {
        fill: var(--color-primary-blue-04);
        transition: fill 0.3s ease-in-out;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            :deep(svg path) {
                fill: var(--color-primary-blue-02);
            }
        }
    }
    // Breakpoints
    @media #{$medium} {
        height: 53px;
    }
    @media #{$small} {
        height: 60px;

        // Target SVG elements
        :deep(svg path) {
            fill: var(--color-primary-blue-03);
        }
    }
}
</style>
