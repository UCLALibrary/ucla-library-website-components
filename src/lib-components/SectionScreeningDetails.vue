<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

// COMPONENTS
import BlockScreeningDetail from '@/lib-components/BlockScreeningDetail.vue'
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'

// TYPESCRIPT
import type { SectionScreeningDetailsItemType } from '@/types/types'

const { items } = defineProps({
  items: {
    type: Array as PropType<SectionScreeningDetailsItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <section class="section-screening-details">
    <div
      v-for="(item, index) in items"
      :key="`block-screening-detail-${item.title}`"
    >
      <BlockScreeningDetail
        :key="`block-screening-detail-${item.title}`"
        :count="items.length"
        :screening-count="`Screening ${index + 1} of ${items.length}`"
        :title="item.title"
        :alternate-title="item.alternateTitle"
        :language="item.language"
        :year="item.year"
        :country="item.country"
        :language-info="item.languageInfo"
        :runtime="item.runtime"
        :tag-labels="item.tagLabels"
        :text="item.text"
        :trailer="item.trailer"
        :image="item.image"
        class="block"
      />

      <DividerWayFinder
        v-if="index !== items.length - 1"
        class="divider"
      />
    </div>
  </section>
</template>
