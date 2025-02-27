<script setup>
import { computed } from 'vue'

import { useTheme } from '@/composables/useTheme'

const { colorScheme } = defineProps({
  colorScheme: {
    type: String,
    default: '',
  },
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

    <div v-if="$slots['block-info-bottom']" class="block-info-bottom-wrapper">
      <slot name="block-info-bottom" />
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-info.scss";
@import "@/styles/ftva/_block-info.scss";
</style>
