<script setup lang="ts">
// Imports
import { useEventListener } from "@/composables/useEventListener"
import { computed, ref, useAttrs } from "vue"

const emit = defineEmits(["update:modelValue", "clear"])
const attrs = useAttrs()

type EntryFieldProps = {
    modelValue?: string
    wrapperClass?: string
    clearIcon?: boolean
    clearOnEsc?: boolean
    blurOnEsc?: boolean
    selectOnFocus?: boolean
    shortcutKey?: string
}

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
function filterAttributes(
    obj: Record<string, unknown>,
    keys: string[],
    exclude = true
) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) =>
            exclude ? !keys.includes(key) : keys.includes(key)
        )
    )
}
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
const attrsWithoutStyles = computed(() =>
    filterAttributes(attrs, ["class", "style"])
)
const attrsStyles = computed(() => ({
    ...(filterAttributes(attrs, ["class", "style"], false) as Record<
        string,
        unknown
    >),
    class: attrs.class ?? props.wrapperClass,
}))
const showClearIcon = computed(
    () => props.clearIcon && props.modelValue.length > 0
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
            v-show="showClearIcon"
            class="clear-icon clear"
            aria-label="Clear input"
            @mousedown.prevent="clear"
            @keydown.space.prevent.enter.prevent="clear"
        />
    </div>
</template>

<style lang="scss" scoped>
$input-color: #333;
$input-background: #f6f9fc;
$icon-color: darken($input-background, 30%);
$active-color: #1ea7fd;

.search-input-wrapper {
    position: relative;

    input[data-search-input="true"] {
        display: block;
        width: 100%;
        padding: 24px 24px 24px 16px;

        font-family: var(--font-primary);
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;

        background-color: var(--color-primary-blue-01);
        border-color: transparent;

        &::placeholder {
            text-transform: uppercase;
            font-family: var(--font-primary);
            text-overflow: ellipsis;
        }
    }

    .clear-icon {
        position: absolute;
        color: $icon-color;

        &.clear {
            z-index: 10;
            right: 15px;
            bottom: 22px;

            display: block;
            width: 24px;
            height: 24px;
            padding: 0px;
            box-sizing: border-box;

            border: 2px solid transparent;
            border-radius: 40px;

            background: none;
            outline: none;
            cursor: pointer;

            transition: background-color 0.3s ease-in-out;

            &:focus {
                background-color: darken($input-background, 10%);
            }
        }

        &.clear::after,
        &.clear::before {
            content: "";
            position: absolute;
            top: 9px;
            left: 2px;

            display: block;
            width: 16px;
            height: 2px;

            transform: rotate(45deg);
            box-sizing: border-box;
            background: $icon-color;
            border-radius: 5px;
        }

        &.clear::after {
            transform: rotate(-45deg);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .clear-icon:hover {
            &.clear {
                background-color: darken($input-background, 10%);
            }
        }
    }
}

/* Fix the X appearing in search field on Chrome and IE */
input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
}

input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}
</style>
