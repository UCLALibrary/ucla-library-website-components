<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

// COMPONENTS
import BlockScreeningDetail from '@/lib-components/BlockScreeningDetail.vue'

// TYPE
import type { SectionScreeningDetailsItemType } from '@/types/types'

const { items } = defineProps({
  items: {
    type: Array as PropType<SectionScreeningDetailsItemType[]>,
    default: () => [],
  },
})

// const screeningCount = items.length
</script>

<template>
  <section class="section-screening-details">
    <div>
      <h3>COUNT</h3>
      <div class="block">
        <BlockScreeningDetail
          v-for="item in items"
          :key="`block-screening-detail-${item.title}`"
          :title="item.title"
          :alternativeTitle="item.alternativeTitle"
          :language="item.language"
          :year="item.year"
          :country="item.country"
          :languageInfo="item.languageInfo"
          :runtime="item.runtime"
          :tagLabels="item.tagLabels"
          :text="item.text"
          :trailer="item.trailer"
          class="block"
        />

      </div>
    </div>

    <smart-link
      v-if="to"
      class="more"
      :to="to"
    >
      <ButtonMore />
    </smart-link>
  </section>
</template>
