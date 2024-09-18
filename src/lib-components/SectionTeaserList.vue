<!-- Associated with BlockClippedDate & BlockCardThreeColumn -->
<script
  setup
  lang="ts"
>
import { computed, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'
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

// THEME
const theme = useTheme()

// DYNAMIC LAZY COMPONENT LOADING
const BlockCardThreeColumn = defineAsyncComponent(() =>
  import('@/lib-components/BlockCardThreeColumn.vue')
)

// COMPUTED PROPERTIES
const parsedComponentName = computed(() => {
  if (componentName === 'BlockCardThreeColumn')
    return BlockCardThreeColumn
  return BlockClippedDate
})

const isDisabledBlockShowHide = computed(() => {
  if (items.length <= nShown || (theme?.value === 'ftva' && componentName !== 'BlockClippedDate'))
    return true
  return false
})

const classes = computed(() => {
  return ['section-teaser-list list', theme?.value || '']
})
</script>

<template>
  <section :class="classes">
    <BlockShowHide :disable="isDisabledBlockShowHide">
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
          :tag-labels="item.tagLabels"
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
@import "@/styles/default/_section-teaser-list.scss";
@import "@/styles/ftva/_section-teaser-list.scss";
</style>
