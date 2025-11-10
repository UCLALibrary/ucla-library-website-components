<script setup lang="ts">
// Imports
import { computed } from 'vue'
import BentoPod from './BentoPod.vue'
import { useTheme } from '@/composables/useTheme'

// Props
interface GridBentoPodProps {
  items: Array<{
    id: string
    title: string
    description: string
    items: Array<Record<string, any>>
  }>
}
defineProps<GridBentoPodProps>()

// Data
const { theme } = useTheme()
// Computed
const classes = computed(() => {
  return ['grid-bento-pod', theme?.value || '']
})
// Methods

// Watchers

// Lifecycle Hooks
</script>

<template>
  <div :class="classes">
    <BentoPod
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :items="item.items"
      class="bento-pod"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-bento-pod.scss";
</style>
