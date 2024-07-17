<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

// COMPONENTS
import BlockScreeningDetail from '@/lib-components/BlockScreeningDetail.vue'

// TYPESCRIPT
import type { SectionScreeningDetailsItemType } from '@/types/types'

const { items, sectionTitle } = defineProps({
  items: {
    type: Array as PropType<SectionScreeningDetailsItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    default: '',
  },
})

// const screeningCount = items.length
</script>

<template>
  <section class="section-screening-details">
    <!-- <div>
      <h3>COUNT</h3>
      <div class="block">
        HELLO
      </div>
    </div> -->

    <!-- TEST -->
    <div class="container">
      <div
        v-if="sectionTitle"
        class="section-title"
        v-html="sectionTitle"
      />

      <BlockScreeningDetail
        v-for="(item, index) in items"
        :key="`block-screening-detail-${item.title}`"
        :count="items.length"
        :screening-count="`Screening ${index + 1} of ${items.length}`"
        :title="item.title"
        :alternative-title="item.alternativeTitle"
        :language="item.language"
        :year="item.year"
        :country="item.country"
        :language-info="item.languageInfo"
        :runtime="item.runtime"
        :tag-labels="item.tagLabels"
        :text="item.text"
        :trailer="item.trailer"
        :poster-image="item.image"
        class="block"
      />
    </div>
  </section>
</template>
