<script setup lang="ts">
// Imports
import { computed } from 'vue'
import RichText from '@/lib-components/RichText.vue'
import BlockButtons from '@/lib-components/BlockButtons.vue'
import type { ButtonLinkRefactoredProps } from '@/types/components/buttonLink.types'
import { useTheme } from '@/composables/useTheme'

interface HeaderCollectionProps {
  subtitle: string
  title: string
  text: string
  buttons: ButtonLinkRefactoredProps[]
}

// Props
defineProps<HeaderCollectionProps>()

// Theme
const theme = useTheme()

// Computed
const classes = computed(() => {
  return ['header-collection', theme?.value || '']
})
</script>

<template>
  <section :class="classes">
    <span class="subtitle" v-html="subtitle" />
    <h1 class="title" v-html="title" />

    <RichText v-if="text" class="rich-text" :rich-text-content="text" />

    <BlockButtons :buttons="buttons" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_header-collection.scss";
</style>
