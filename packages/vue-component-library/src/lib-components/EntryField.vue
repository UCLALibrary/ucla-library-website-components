<script setup lang="ts">
// Imports
import { computed, ref, useAttrs } from "vue"
import type { EntryFieldProps } from "@/types/types"

import { useEventListener } from "@/composables/useEventListener"
import { filterAttributes } from "@/utils/filterAttributes"
import { useTheme } from "@/composables/useTheme"

const emit = defineEmits(["update:modelValue", "clear"])
const attrs = useAttrs()
const theme = useTheme()

// Props
const props = withDefaults(defineProps<EntryFieldProps>(), {
    modelValue: "",
    wrapperClass: "search-input-wrapper",
    clearIcon: true,
    clearOnEsc: true,
    blurOnEsc: true,
    selectOnFocus: true,
    shortcutKey: "/",
})

// Data
const inputRef = ref<HTMLInputElement | null>(null)

// Methods
function clear() {
    emit("update:modelValue", "")
    emit("clear")
}
function onInput(event: Event) {
    const target = event.target as HTMLInputElement

    emit("update:modelValue", target.value)
}
function onKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
        event.preventDefault()
        if (props.clearOnEsc) clear()
        if (props.blurOnEsc) inputRef.value?.blur()
    }
}
function onDocumentKeydown(event: KeyboardEvent) {
    if (
        event.key === props.shortcutKey &&
        event.target !== inputRef.value &&
        document.activeElement !== inputRef.value &&
        !["INPUT", "SELECT", "TEXTAREA"].includes(
            (event.target as Element).tagName
        )
    ) {
        event.preventDefault()
        const visibleInputs = Array.from(
            document.querySelectorAll<HTMLInputElement>(
                '[data-search-input="true"]:not([data-shortcut-enabled="false"])'
            )
        ).filter(
            (el) =>
                el.offsetWidth || el.offsetHeight || el.getClientRects().length
        )
        const elToFocus =
            visibleInputs.length > 1 ? visibleInputs[0] : inputRef.value
        if (elToFocus) {
            elToFocus.focus()
            if (props.selectOnFocus) elToFocus.select()
        }
    }
}

// Computeds
const classes = computed(() => [
    "search-input-wrapper",
    props.clearIcon ? "has-clear-icon" : "",
    attrs.class ?? props.wrapperClass,
    theme?.value || "",
])
const attrsWithoutStyles = computed(() =>
    filterAttributes(attrs, ["class", "style"])
)
const attrsStyles = computed(() => ({
    ...(filterAttributes(attrs, ["class", "style"], false) as Record<
        string,
        unknown
    >),
    class: classes.value,
}))
const isClearIconShown = computed(
    () => props.clearIcon && !!props.modelValue && props.modelValue.length > 0
)

// Event Listeners
useEventListener<KeyboardEvent>(window.document, "keydown", onDocumentKeydown)
</script>

<template>
    <div v-bind="attrsStyles">
        <input
            ref="inputRef"
            :value="modelValue"
            @update:modelValue="onInput"
            type="search"
            data-search-input="true"
            v-bind="attrsWithoutStyles"
            @input="onInput"
            @keydown="onKeydown"
        />
        <button
            v-show="isClearIconShown"
            class="clear-icon clear"
            aria-label="Clear input"
            @mousedown.prevent="clear"
            @keydown.space.prevent.enter.prevent="clear"
        />
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_entry-field.scss";
</style>
