<script setup lang="ts">
import type { PropType } from 'vue'
import type { SectionTeaserCardItemType } from '@/types/types'

import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'

const props = defineProps({
  /**
   * Array of objects [{ image, to, category, title, dates, times, text }]
   */
  items: {
    type: Array as PropType<SectionTeaserCardItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <ul class="section-teaser-card">
    <BlockCardWithImage
      v-for="(card, index) in items" :key="`Card${index}`" class="card" :image="card.image"
      :to="card.to" :category="card.category" :title="card.title" :alternative-full-name="card.alternativeFullName"
      :language="card.language" :start-date="card.startDate" :end-date="card.endDate" :text="card.text"
      :image-aspect-ratio="60" :is-vertical="true" :is-online="card.isOnline" :byline-one="card.bylineOne"
      :byline-two="card.bylineTwo" :section-handle="card.sectionHandle" :ongoing="card.ongoing"
    />
  </ul>
</template>

<style lang="scss" scoped>
.section-teaser-card {
    max-width: $container-l-main + px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: var(--space-xl) 16px;

    .card {
        width: calc((100% - 32px) / 3);
    }

    // Breakpoints
    @media #{$medium} {
        align-items: flex-start;

        .card {
            width: calc((100% - 16px) / 2);
        }
    }

    @media #{$small} {
        align-items: center;

        .card {
            width: 100%;
        }
    }
}
</style>
