<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import IconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-dropdown-indicator.svg'
import SvgIconCheck from 'ucla-library-design-tokens/assets/svgs/icon-check.svg'
import { useTheme } from '@/composables/useTheme'

interface ButtonDropdownSearchProps {
  options: string[]
  modelValue: string
  isLong: boolean
}

const props = withDefaults(defineProps<ButtonDropdownSearchProps>(), {
  options: () => [],
  modelValue: '',
  isLong: false,
})

const emit = defineEmits(['update:modelValue'])

const theme = useTheme()

const isOpen = ref(false)

const dropdownRef = ref<HTMLElement | null>(null)

const selected = computed(() => {
  if (!props.options || props.options.length === 0)
    return ''
  return props.modelValue ?? props.options[0]
})

const classes = computed(() => {
  return [
    'button-dropdown-search',
    { 'is-long': props.isLong },
    { open: isOpen.value },
    theme?.value || '',
  ]
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option: string) {
  emit('update:modelValue', option)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (
    isOpen.value
        && dropdownRef.value
        && !dropdownRef.value.contains(event.target as Node)
  )
    isOpen.value = false
}

function handleFocusOut(event: FocusEvent) {
  if (
    isOpen.value
        && dropdownRef.value
        && !dropdownRef.value.contains(event.relatedTarget as Node)
  )
    isOpen.value = false
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  if (dropdownRef.value)
    dropdownRef.value.addEventListener('focusout', handleFocusOut)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  if (dropdownRef.value)
    dropdownRef.value.removeEventListener('focusout', handleFocusOut)
})
</script>

<template>
  <div
    ref="dropdownRef"
    :class="classes"
    tabindex="-1"
    role="listbox"
    aria-label="Button dropdown search"
    :aria-expanded="isOpen"
  >
    <div
      class="dropdown-field"
      role="button"
      aria-haspopup="listbox"
      :aria-label="
        selected
          ? `Selected: ${selected}`
          : 'Select an option for search field'
      "
      @click="toggleDropdown"
    >
      <span class="selected-option" v-html="selected" />
      <IconCaretDown class="arrow" :class="{ open: isOpen }" />
    </div>
    <transition name="dropdown">
      <ul
        v-show="isOpen"
        class="dropdown-options"
        role="listbox"
        aria-label="Search field options"
      >
        <li
          v-for="option in props.options"
          :key="option as string"
          :class="{ selected: option === selected }"
          class="dropdown-option"
          role="option"
          :aria-selected="option === selected"
          @click="selectOption(option as string)"
        >
          <SvgIconCheck class="icon-check" />
          <div class="option-wrapper">
            <span class="option-content" v-html="option" />
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-dropdown-search.scss";
</style>
