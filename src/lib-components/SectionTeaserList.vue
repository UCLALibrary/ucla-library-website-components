<script
  setup
  lang="ts"
>

import { computed, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'
import type { EventItemType } from '@/types/types'

// COMPONENTS
import BlockClippedDate from '@/lib-components/BlockClippedDate.vue'
import BlockShowHide from '@/lib-components/BlockShowHide.vue'

const { items, nShown, componentName } = defineProps({
  items: {
    type: Array as PropType<EventItemType[]>,
    default: () => [],
  },
  nShown: {
    type: Number,
    default: 3,
  },
  // TO SWITCH BETWEEN
  // BlockCardThreeColumn OR BlockClippedDate
  componentName: {
    type: String,
    default: 'BlockClippedDate',
  },
})

// DYNAMIC LAZY COMPONENT LOADING
const BlockCardThreeColumn = defineAsyncComponent(() =>
  import('@/lib-components/BlockCardThreeColumn.vue')
)

const parsedComponentName = computed(() => {
  if (componentName === 'BlockCardThreeColumn')
    return BlockCardThreeColumn
  return BlockClippedDate
})
</script>

<template>
  <section class="section-teaser-list">
    <BlockShowHide :disable="items.length <= nShown">
      <ul class="list">
        <component
          :is="parsedComponentName"
          v-for="(item, index) in items"
          :key="index"
          :class="index >= nShown ? 'show-hide-hideable' : null"
          :image="item.image"
          :to="item.to"
          :category="item.category"
          :title="item.title"
          :start-date="item.startDate"
          :end-date="item.endDate"
          :text="item.text"
          :locations="item.locations"
          :section-handle="item.sectionHandle"
          :ongoing="item.ongoing"
          :tagLabels="item.tagLabels"
          class="list-item block"
        />
      </ul>
    </BlockShowHide>
  </section>
</template>

<style
  lang="scss"
  scoped
>
.section-teaser-list {
  background-color: var(--color-white);
  max-width: $container-l-main + px;

  .list {
    @for $i from 1 through 30 {
      :deep(.block-highlight:nth-child(#{$i}) .molecule) {
        left: calc(random(500) * -1) + px;
      }
    }
  }

  .list-item {
    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-xl);

    border-bottom: 2px dotted var(--color-secondary-grey-02);

    &:last-child {
      border: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }

  .hidden .list-item:has(+ .show-hide-hideable) {
    border: 0;
    padding-bottom: 0;
  }
}
</style>
