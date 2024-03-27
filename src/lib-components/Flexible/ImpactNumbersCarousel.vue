<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

import type { FlexibleImpactNumbersCarousel } from '@/types/flexible_types'

import ImpactNumbersCarousel from '@/lib-components/ImpactNumbersCarousel.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleImpactNumbersCarousel>,
    default: () => { },
  },
})
</script>

<template>
  <div
    class="impact-numbers-carousel"
    v-if="block"
  >
    <div class="section-header">
      <h2
        v-if="block.sectionTitle"
        class="section-title"
        v-text="block.sectionTitle"
      />
      <div
        v-if="block.sectionSummary"
        class="section-summary"
        v-html="block.sectionSummary"
      />
    </div>

    <impact-numbers-carousel :blocks="block.blocks" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
.impact-numbers-carousel {
  .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-xl);
  }
}
</style>
