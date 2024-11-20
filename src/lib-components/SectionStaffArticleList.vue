<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

// TYPESCRIPT
import type { BlockStaffArticleListItemType } from '@/types/types'

import BlockStaffArticleList from '@/lib-components/BlockStaffArticleList.vue'

const { items, sectionTitle } = defineProps({
  items: {
    type: Array as PropType<BlockStaffArticleListItemType[]>,
    default: () => [],
  },
  sectionTitle: {
    type: String,
    default: '',
  },
})
// TODO? we could parse the heroImage here instead of on the page similar to flexible/highlight
</script>

<template>
  <section class="section-staff-article-list">
    <div class="container">
      <div
        v-if="sectionTitle"
        class="section-title"
        v-html="sectionTitle"
      />
      <ul class="block-staff-article-list">
        <BlockStaffArticleList
          v-for="(item, index) in items"
          :key="index"
          :image="item.image"
          :to="item.to"
          :category="item.category"
          :title="item.title"
          :date="item.date"
          :authors="item.authors"
          :description="item.description"
          :external-resource-url="item.externalResourceUrl"
          :image-aspect-ratio="item.imageAspectRatio"
          :start-date="item.startDate"
          :end-date="item.endDate"
          :ongoing="item.ongoing"
        />
      </ul>
    </div>
  </section>
</template>

<style
  lang="scss"
  scoped
>
.section-staff-article-list {
  @import "@/styles/default/_section-staff-article-list.scss";
  @import "@/styles/ftva/_section-staff-article-list.scss";
}
</style>
