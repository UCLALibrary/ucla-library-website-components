<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'
import type { EventItemType } from '@/types/types'

import BlockCardThreeColumn from '@/lib-components/BlockCardThreeColumn.vue'

const { items, nShown } = defineProps({
  items: {
    type: Array as PropType<EventItemType[]>,
    default: () => [],
  }
})
</script>

<template>
  <section class="section-cards-three-column">
    <ul>
      <BlockCardThreeColumn
        v-for="(item, index) in items"
        class="block-card-three-column-list"
        :to="item.to"
        :start-date="item.startDate"
        :image="item.image"
        :image-aspect-ratio="100"
        :title="item.title"
        :tag-labels="item.tagLabels"
        :start-time="item.startDate"
      />
    </ul>
  </section>
</template>

<style
  lang="scss"
  scoped
>
.section-cards-three-column {
  background-color: var(--color-white);
  border-radius: 12px;
  --divider-color: var(--color-secondary-grey-02);
  max-width: 100%;
  margin: auto;

  .block-card-three-column-list {
    border-bottom: 2px dotted var(--divider-color);
    padding: 30px 0;

    &:last-child {
      border-bottom: 0;
      margin: 0;
    }
  }

  // Breakpoints
  @media #{$medium} {
    --divider-color: none;
  }
}
</style>
