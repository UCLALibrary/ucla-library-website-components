<script lang="ts" setup>
import { computed } from 'vue'

import type { PropType } from 'vue'

import BlockSimpleCard from '@/lib-components/BlockSimpleCard.vue'

import type { SimpleCardItemType } from '@/types/types'

const { items, sectionTitle, sectionSummary } = defineProps({
  items: {
    type: Array as PropType<SimpleCardItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    default: '',
  },
  sectionSummary: {
    type: String,
    default: '',
  },
})

const parsedContent = computed (() => {
  let output = ['card', 'card-small']
  switch (items.length) {
    case 1:
      output = ['card']
      break
    case 2:
    case 4:
      output = ['card', 'card-large']
      break
    case 5:
      output = ['card', 'card-five']
      break
  }

  return items.map((obj) => {
    return {
      ...obj,
      classes: output,
    }
  })
})
</script>

<template>
  <div class="simple-cards">
    <div class="section-header">
      <h2
        v-if="sectionTitle"
        class="section-title"
        v-text="sectionTitle"
      />
      <div
        v-if="sectionSummary"
        class="section-summary"
        v-html="sectionSummary"
      />
    </div>

    <ul class="simple-cards-list">
      <BlockSimpleCard
        v-for="(item, index) in parsedContent"
        :key="`SimpleCardsKey${index}`"
        :class="item.classes"
        :to="item.to"
        :title="item.title"
        :text="item.text"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.simple-cards {
    max-width: $container-l-main + px;

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

        ::v-deep p {
            margin: 0;
        }
    }
    .simple-cards-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: stretch;
        gap: 16px;
    }

    .card-large {
        width: calc((100% - 16px) / 2);
    }
    .card-small {
        width: calc((100% - 32px) / 3);
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: calc((100% - 16px) / 2);
        }
        &:nth-last-child(-n + 3) {
            width: calc((100% - 32px) / 3);
        }
    }
    // Breakpoints
    @media #{$medium} {
        .card-small {
            width: calc((100% - 16px) / 2);
        }
        .card-five {
            width: calc((100% - 16px) / 2);
            &:nth-child(-n + 2) {
                width: calc((100% - 16px) / 2);
            }
            &:nth-last-child(-n + 3) {
                width: calc((100% - 16px) / 2);
            }
        }
    }
    @media #{$small} {
        display: flex;
        flex-direction: column;
        .card,
        .card.card-five {
            width: 100%;
        }
    }
}
</style>
