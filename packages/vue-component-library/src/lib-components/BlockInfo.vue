<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { colorScheme } = defineProps({
  colorScheme: {
    type: String,
    default: '',
  }
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-info', colorScheme, theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div v-if="$slots['block-info-top']" class="block-info-top-wrapper">
      <slot name="block-info-top" />
    </div>

    <div v-if="$slots['block-info-mid']" class="block-info-mid-wrapper">
      <slot name="block-info-mid" />
    </div>

    <div v-if="$slots['block-info-end']" class="block-info-end-wrapper">
      <slot name="block-info-end" />
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
@use "@/styles/default/_block-info.scss";
@use "@/styles/ftva/_block-info.scss";
</style>
