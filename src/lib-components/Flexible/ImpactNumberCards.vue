<script setup lang="ts">
import type { PropType } from 'vue'
import type { FlexibleImpactNumberCards } from '@/types/flexible_types'

import ImpactNumberCard from '@/lib-components/ImpactNumberCard.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleImpactNumberCards>,
    default: () => { },
  },
})
</script>

<template>
  <div class="impact-number-cards">
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
.impact-number-cards {
  max-width: $container-l-main + px;
  margin: 0 auto;

  .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .section-summary {
    @include step-0;
    color: var(--color-black);

    :deep(p) {
      margin: 0;
    }
  }

  .impact-number-cards-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 32px 16px;
  }

  @media #{$medium} {
    .impact-number-cards-list {
      align-items: flex-start;

      .flexible-impact-number-card {
        width: calc((100% - 16px) / 2);
      }
    }
  }

  @media #{$small} {
    .impact-number-cards-list {
      display: flex;
      flex-direction: column;

      .flexible-impact-number-card {
        width: 100%;
      }
    }
  }
}
</style>
