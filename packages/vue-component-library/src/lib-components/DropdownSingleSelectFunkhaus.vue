<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import IconCaretDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
    },
    modelValue: String,
})

const emit = defineEmits(["update:modelValue"])

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const parsedOptions = computed(() => {
    return props.options.filter((option) => option !== selected.value)
})
const selected = computed(() => {
    if (!props.options || props.options.length === 0) return ""
    return props.modelValue ?? props.options[0]
})
const classes = computed(() => {
    return ["dropdown-single-select-funkhaus", { open: isOpen.value }]
})

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectOption(option: string) {
    emit("update:modelValue", option)
    isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
    if (
        isOpen.value &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target as Node)
    ) {
        isOpen.value = false
    }
}

function handleFocusOut(event: FocusEvent) {
    if (
        isOpen.value &&
        dropdownRef.value &&
        !dropdownRef.value.contains(event.relatedTarget as Node)
    ) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside)
    if (dropdownRef.value) {
        dropdownRef.value.addEventListener("focusout", handleFocusOut)
    }
})

onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleClickOutside)
    if (dropdownRef.value) {
        dropdownRef.value.removeEventListener("focusout", handleFocusOut)
    }
})
</script>

<template>
    <div
        :class="classes"
        ref="dropdownRef"
        tabindex="-1"
        role="listbox"
        aria-label="Dropdown single select"
        :aria-expanded="isOpen.toString()"
    >
        <div
            class="dropdown-field"
            @click="toggleDropdown"
            role="button"
            aria-haspopup="listbox"
            :aria-label="
                selected ? 'Selected: ' + selected : 'Select an option'
            "
            :aria-expanded="isOpen.toString()"
        >
            <span v-html="selected" class="selected-option" />
            <IconCaretDown class="arrow" :class="{ open: isOpen }" />
        </div>
        <transition name="dropdown">
            <ul
                v-show="isOpen"
                class="dropdown-options"
                role="listbox"
                aria-label="Available options"
            >
                <li
                    v-for="option in parsedOptions"
                    :key="option as string"
                    :class="{ selected: option === selected }"
                    class="dropdown-option"
                    role="option"
                    :aria-selected="option === selected"
                    @click="selectOption(option as string)"
                >
                    <span v-html="option" class="option-content" />
                </li>
            </ul>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.dropdown-single-select-funkhaus {
    position: absolute;
    top: -50%;
    left: 50%;

    width: 240px;
    position: relative;
    font-family: inherit;

    .dropdown-field {
        background: var(--color-primary-blue-01);
        padding: 0.75em 1em;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;

        user-select: none;

        transition: background-color 0.2s, box-shadow 0.2s;

        position: relative;
        z-index: 20;
    }

    .selected-option,
    .dropdown-option {
        font-family: var(--font-secondary);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }

    .arrow {
        flex-shrink: 0;
        display: block;
        width: 35px;
        height: auto;

        transition: transform 0.2s;
    }

    .dropdown-options {
        margin: 0;
        padding: 0;
        list-style: none;
        background-color: var(--color-white);
        position: absolute;

        width: 100%;
        z-index: 10;
        border-radius: 0 0 10px 10px;

        li {
            padding: 0.75em 1em;
            cursor: pointer;
            transition: background-color 0.2s;

            &.selected {
                background-color: var(--color-primary-blue-01);
            }
        }
    }

    // Opened state
    &.open {
        border-radius: 0 0 10px 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);

        .dropdown-field {
            background: var(--color-white);
        }

        .dropdown-options {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
        }

        .arrow {
            transform: rotate(180deg);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .dropdown-field {
            &:hover {
                background: var(--color-primary-blue-01);
            }
        }

        .dropdown-options {
            li {
                &:hover {
                    background-color: var(--color-primary-blue-01);
                }
            }
        }
    }

    // Breakpoints
    @media #{$small} {
    }

    // Dropdown Animation
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: opacity 0.2s, transform 0.2s;
    }

    .dropdown-enter-from,
    .dropdown-leave-to {
        opacity: 0;
        transform: translateY(-50px);
    }

    .dropdown-enter-to,
    .dropdown-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
