<script setup>
// Imports
import { computed, useSlots } from "vue"
import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import { useTheme } from "@/composables/useTheme"

const emit = defineEmits(["click"])
const slots = useSlots()

const theme = useTheme()

// Computeds
const classes = computed(() => ["button-submit", theme?.value || ""])

// Methods
function handleClick() {
    emit("click")
}
</script>

<template>
    <button :class="classes" type="submit" @click="handleClick">
        <slot>
            <IconSearch />
        </slot>
    </button>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-submit.scss";
</style>
