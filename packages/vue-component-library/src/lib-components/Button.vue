<script setup lang="ts">
import { computed } from "vue"
import SmartLink from "./SmartLink.vue"

// Emits
const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

// Types
interface ButtonProps {
    text: string
    to?: string
    variant?: "primary" | "secondary"
    type?: "button" | "submit" | "reset"
    isOutlined?: boolean
    isDisabled?: boolean
    isGrey?: boolean
    linkTarget?: string
    isDownload?: boolean
}

// Props
const props = withDefaults(defineProps<ButtonProps>(), {
    variant: "primary",
    type: "button",
    isDisabled: false,
    isOutlined: false,
    isGrey: false,
    linkTarget: "",
    isDownload: false,
})

// Computeds
const classes = computed(() => [
    "button",
    props.variant,
    { "is-outlined": props.isOutlined },
    { "is-disabled": props.isDisabled },
    { "is-grey": props.isGrey },
])

// Methods
function handleClick(event: MouseEvent) {
    if (!props.isDisabled) emit("click", event)
}
</script>

<template>
    <SmartLink
        v-if="to"
        :class="classes"
        :to="to"
        :link-target="linkTarget"
        :is-download="isDownload"
    >
        {{ text }}
    </SmartLink>

    <button
        v-else
        :class="classes"
        :type="type"
        :disabled="isDisabled"
        @click="handleClick"
    >
        {{ text }}
    </button>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_button.scss";
</style>
