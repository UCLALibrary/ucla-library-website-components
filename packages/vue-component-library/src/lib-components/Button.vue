<script setup lang="ts">
import { computed } from "vue"
import SmartLink from "./SmartLink.vue"
import type { ButtonProps } from "@/types/components/button.types"
import { ButtonColor, ButtonVariant } from "@/types/components/button.types"
import { useTheme } from "@/composables/useTheme"

// Props
const props = withDefaults(defineProps<ButtonProps>(), {
    variant: ButtonVariant.Primary,
    color: ButtonColor.Default,
    type: "button",
    isDisabled: false,
    isOutlined: false,
    linkTarget: "",
    isDownload: false,
})

// Emits
const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const theme = useTheme()

// Computeds
const classes = computed(() => [
    "button",
    theme?.value || "",
    props.variant,
    props.color ? `color-${props.color}` : "",
    { "is-outlined": props.isOutlined },
    { "is-disabled": props.isDisabled },
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
