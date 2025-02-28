<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { FlexibleImpactNumberCards } from '@/types/flexible_types'
import { useTheme } from '@/composables/useTheme'

import ImpactNumberCard from '@/lib-components/ImpactNumberCard.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleImpactNumberCards>,
    default: () => { },
  },
})

const theme = useTheme()
const classes = computed(() => {
  return ['impact-number-cards', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="section-header">
      <h3
        v-if="block.sectionTitle"
        class="section-title"
        v-html="block.sectionTitle"
      />
      <div
        v-if="block.sectionSummary"
        class="section-summary"
        v-html="block.sectionSummary"
      />
    </div>
    <ul class="impact-number-cards-list">
      <ImpactNumberCard
        v-for="(item, index) in block.impactNumberCards"
        :key="`impactNumberCards${index}`"
        :title="item.title"
        :text="item.text"
        :impact-number="item.impactNumber"
        class="flexible-impact-number-card"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_impact-number-cards.scss";
@import "@/styles/ftva/_impact-number-cards.scss";
</style>
