<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlockCardMetaType, EventItemType } from '@/types/types'
import BlockFloatingHighlight from '@/lib-components/BlockFloatingHighlight.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<EventItemType[] & BlockCardMetaType[]>,
    default: () => [],
  },
})
</script>

<template>
  <ul class="section-teaser-highlight">
    <BlockFloatingHighlight
      v-for="item in items"
      :key="item.to"
      :image="item.image"
      :to="item.to"
      :category="item.category"
      :title="item.title"
      :start-date="item.startDate"
      :end-date="item.endDate"
      :text="item.text"
      :locations="item.locations"
      :alternative-full-name="item.alternativeFullName"
      :language="item.language"
      :section-handle="item.sectionHandle"
      :byline-one="item.bylineOne"
      :byline-two="item.bylineTwo"
      :has-triangle="true"
      :is-vertical="true"
      :ongoing="item.ongoing"
      class="block"
    />
  </ul>
</template>

<style lang="scss" scoped>
.section-teaser-highlight {
  max-width: $container-l-main + px;
  background-color: var(--color-white);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  gap: var(--space-xl) 32px;

  .block {
      width: calc((100% - 32px) / 2);
  }

  // Breakpoints
  @media #{$small} {
      padding: 0;

      .block {
          width: 100%;
      }
  }
}
</style>
