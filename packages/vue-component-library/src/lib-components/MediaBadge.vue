<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const theme = useTheme()

const parsedClasses = computed(() => {
  return ['media-badge', theme?.value || '']
})
</script>

<template>
  <div :class="parsedClasses">
    <div v-if="theme !== 'ftva'" class="floating-highlight" />
    <div class="badge-content">
      <slot class="badge-content-item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_media-badge.scss";
@import "@/styles/ftva/_media-badge.scss";
</style>
