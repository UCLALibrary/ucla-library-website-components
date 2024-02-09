<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockCardMetaType, EventItemType, SectionSpaceListItemType } from '@/types/types'

import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<EventItemType[] & BlockCardMetaType[] & SectionSpaceListItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <ul class="section-teaser-card">
    <BlockCardWithImage
      v-for="(item, index) in items"
      :key="`Card${index}`"
      :image="item.image"
      :to="item.to"
      :category="item.category"
      :title="item.title"
      :alternative-full-name="item.alternativeFullName"
      :language="item.language"
      :start-date="item.startDate"
      :end-date="item.endDate"
      :text="item.text"
      :image-aspect-ratio="60"
      :is-vertical="true"
      :is-online="item.isOnline"
      :byline-one="item.bylineOne"
      :byline-two="item.bylineTwo"
      :section-handle="item.sectionHandle"
      :ongoing="item.ongoing"
      class="card"
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
