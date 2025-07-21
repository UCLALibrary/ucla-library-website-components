<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

// TYPESCRIPT
import type { BlockStaffArticleListItemType } from '@/types/types'

// THEME
import { useTheme } from '@/composables/useTheme'

// UTILS
import formatDates from '@/utils/formatEventDates'
import formatSeriesDates from '@/utils/formatEventSeriesDates'

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

function parseDate(sectionHandle: string, startDate: string, endDate: string, ongoing: boolean) {
  if (theme?.value !== 'ftva')
    return null
  if (ongoing)
    return 'Ongoing'
  if (sectionHandle === 'ftvaEvent')
    return formatDates(startDate, startDate, 'shortWithYear')
  if (sectionHandle === 'ftvaEventSeries')
    return formatSeriesDates(startDate, endDate, 'shortWithYear')

  return null
}
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
          class="block-staff-article-item"
          :image="item.image"
          :to="item.to"
          :category="item.category"
          :title="item.title"
          :date="item.date"
          :authors="item.authors"
          :description="item.description"
          :external-resource-url="item.externalResourceUrl"
        >
          <template
            v-if="parseDate(item.sectionHandle ?? '', item.startDate ?? '', item.endDate ?? '', item.ongoing ?? false)"
            #customFTVADate
          >
            <span class="ftva-date">
              {{ parseDate(item.sectionHandle ?? '', item.startDate ?? '', item.endDate ?? '', item.ongoing ?? false) }}
            </span>
          </template>
        </BlockStaffArticleList>

        <!-- :start-date="item.startDate"
          :end-date="item.endDate"
          :ongoing="item.ongoing" -->
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_section-staff-article-list.scss";
@use "@/styles/ftva/_section-staff-article-list.scss";
</style>
