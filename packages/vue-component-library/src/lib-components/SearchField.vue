<script setup lang="ts">
// Imports
import { computed, ref } from 'vue'

import ButtonSubmit from './ButtonSubmit.vue'
import EntryField from './EntryField.vue'
import type { EntryFieldProps } from '@/types/types'
import { useTheme } from '@/composables/useTheme'

// Props
const props = withDefaults(defineProps<SearchFieldProps>(), {
  wrapperClass: 'search-input-wrapper',
  clearIcon: true,
  clearOnEsc: true,
  blurOnEsc: true,
  selectOnFocus: true,
  shortcutKey: '/',
})
const emit = defineEmits(['submit'])
const theme = useTheme()

// Types
type SearchFieldProps = Omit<EntryFieldProps, 'modelValue'> & {
  placeholder?: string
}

// Data
const searchValue = ref<string>('')

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
