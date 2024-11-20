<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'

// TYPESCRIPT
import type { BlockStaffArticleListItemType } from '@/types/types'

// THEME
import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS
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

const theme = useTheme()

const classes = computed(() => {
  return ['section-staff-article-list', theme?.value || '']
})
</script>

<template>
  <section :class="classes">
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
@import "@/styles/default/_section-staff-article-list.scss";
@import "@/styles/ftva/_section-staff-article-list.scss";
</style>
