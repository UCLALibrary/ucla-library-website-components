<script setup lang="ts">
// Imports
import { computed } from 'vue'
import BentoPod from './BentoPod.vue'
import { useTheme } from '@/composables/useTheme'

// Props
type GridBentoPodProps = {
  items: Array<{
    id: string
    title: string
    description: string
    items: Array<Record<string, any>>
  }>
}
const props = defineProps<GridBentoPodProps>()

// Data
const { theme } = useTheme()

// Computed
const classes = computed(() => {
  return ['grid-bento-pod', theme?.value || '']
})

// Split items into two columns fairly
const leftColumnItems = computed(() => {
  return props.items.filter((_, index) => index % 2 === 0)
})

const rightColumnItems = computed(() => {
  return props.items.filter((_, index) => index % 2 === 1)
})
</script>

<template>
  <div :class="classes">
    <div class="grid-column">
      <BentoPod
        v-for="item in leftColumnItems"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :items="item.items"
        class="bento-pod"
      />
    </div>
    <div class="grid-column">
      <BentoPod
        v-for="item in rightColumnItems"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :items="item.items"
        class="bento-pod"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-bento-pod.scss";
</style>
