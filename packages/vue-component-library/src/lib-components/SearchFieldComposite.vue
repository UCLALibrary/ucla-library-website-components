<script setup lang="ts">
import { computed, ref } from 'vue'
import ButtonDropdownSearch from './ButtonDropdownSearch.vue'
import ResponsiveImage from './ResponsiveImage.vue'
import DividerGeneral from './DividerGeneral.vue'
import SearchInput from './SearchInput.vue'
import ButtonSubmit from './ButtonSubmit.vue'
import { useTheme } from '@/composables/useTheme'
import type { MediaItemType } from '@/types/types'

interface SearchFieldCompositeProps {
  // Search field props
  initialValue?: string
  placeholder?: string
  disabled?: boolean
  clearIcon?: boolean
  clearOnEsc?: boolean
  blurOnEsc?: boolean
  selectOnFocus?: boolean
  shortcutKey?: string

  // Dropdown search props
  dropdownOptions?: string[]
  dropdownModelValue?: string

  // Divider props
  showDivider?: boolean

  // Background image props
  backgroundImage?: MediaItemType
  backgroundText?: string
}

const props = withDefaults(defineProps<SearchFieldCompositeProps>(), {
  initialValue: '',
  placeholder: 'Search...',
  disabled: false,

  clearIcon: true,
  clearOnEsc: true,
  blurOnEsc: true,
  selectOnFocus: true,
  shortcutKey: '/',
  dropdownOptions: () => [],
  dropdownModelValue: '',
  showDivider: false,
})

const emit = defineEmits<{
  'update:dropdownModelValue': [value: string]
  submit: [value: string]
  dropdownChange: [value: string]
}>()

// Theme
const theme = useTheme()

// Data
const dropdownValue = ref(props.dropdownModelValue)
const searchValue = ref<string>(props.initialValue || '')

// Methods
function handleSearchSubmit() {
  emit('submit', searchValue.value)
}

function handleDropdownChange(value: string) {
  dropdownValue.value = value
  emit('update:dropdownModelValue', value)
  emit('dropdownChange', value)
}

// Computeds
const hasDropdownOptions = computed(() => {
  return props.dropdownOptions && props.dropdownOptions.length > 0
})

const hasBackgroundImage = computed(() => {
  return (
    props.backgroundImage
        && typeof props.backgroundImage === 'object'
        && props.backgroundImage.src
  )
})

const classes = computed(() => {
  return [
    'search-field-composite',
    theme?.value || '',

    {
      'has-dropdown': hasDropdownOptions.value,
      'has-divider': props.showDivider && !hasBackgroundImage.value,
      'has-background': hasBackgroundImage.value,
    },
  ]
})
</script>

<template>
  <div :class="classes">
    <!-- Background Image (if provided) -->
    <ResponsiveImage
      v-if="hasBackgroundImage"
      :media="backgroundImage!"
      class="background-image"
    />
    <p
      v-if="hasBackgroundImage && backgroundText"
      class="background-text"
      v-html="backgroundText"
    />

    <div class="search-components">
      <form
        class="search-field"
        name="searchField"
        @submit.prevent="handleSearchSubmit"
      >
        <SearchInput
          v-model="searchValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :clear-icon="clearIcon"
          :clear-on-esc="clearOnEsc"
          :blur-on-esc="blurOnEsc"
          :select-on-focus="selectOnFocus"
          :shortcut-key="shortcutKey"
          class="search-input-wrapper"
        />

        <ButtonSubmit class="button-submit" />
      </form>

      <ButtonDropdownSearch
        v-if="hasDropdownOptions"
        :options="dropdownOptions"
        :model-value="dropdownValue"
        :is-long="false"
        class="button-dropdown-search"
        @update:model-value="handleDropdownChange"
      />
    </div>

    <DividerGeneral
      v-if="showDivider && !hasBackgroundImage"
      :is-tertiary="true"
      class="divider-general"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_search-field-composite.scss";
</style>
