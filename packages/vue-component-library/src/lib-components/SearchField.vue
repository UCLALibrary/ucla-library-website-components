<script setup lang="ts">
// Imports
import { computed, ref } from 'vue'

import ButtonSubmit from './ButtonSubmit.vue'
import EntryField from './EntryField.vue'
import type { EntryFieldProps } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

// Types
type SearchFieldProps = Omit<EntryFieldProps, 'modelValue'> & {
  placeholder?: string
  initialValue?: string
  disabled?: boolean
}

// Props
const props = withDefaults(defineProps<SearchFieldProps>(), {
  wrapperClass: 'search-input-wrapper',
  clearIcon: true,
  clearOnEsc: true,
  blurOnEsc: true,
  selectOnFocus: true,
  shortcutKey: '/',
  initialValue: '',
})
const emit = defineEmits(['submit'])
const theme = useTheme()

// Data
const searchValue = ref<string>(props.initialValue || '')

// Computed
const classes = computed(() => {
  return ['search-field', theme?.value || '']
})

// Methods
function submitSearch() {
  emit('submit', searchValue.value)
}
</script>

<template>
  <form :class="classes" name="searchField" @submit.prevent="submitSearch">
    <EntryField v-model="searchValue" v-bind="props" />
    <ButtonSubmit class="button-submit" />
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_search-field.scss";
</style>
