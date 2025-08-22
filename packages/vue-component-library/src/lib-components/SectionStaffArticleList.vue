<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

// TYPESCRIPT
import format from 'date-fns/format'
import type { BlockStaffArticleListItemType } from '@/types/types'

// THEME
import { useTheme } from '@/composables/useTheme'

// UTILS
import formatDates from '@/utils/formatEventDates'
import formatSeriesDates from '@/utils/formatEventSeriesDates'
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

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

function parseDate(sectionHandle: string, startDate: string, endDate: string, ongoing: boolean, date: string) {
  // Eventually move this logic to templates in the ftva nuxt/main library muxt repo
  if (theme?.value !== 'ftva')
    return null
  if (ongoing)
    return 'Ongoing'
  if (sectionHandle === 'ftvaEvent')
    return formatDates(startDate, startDate, 'shortWithYear')
  if (sectionHandle === 'ftvaEventSeries')
    return formatSeriesDates(startDate, endDate, 'shortWithYear')
  if (date)
    return format(new Date(date), 'MMMM d, Y')
  return null
}
function parsedTextAll(description: string) {
  return description
    ? removeHtmlTruncate(description, 250)
    : ''
}
function getNonFTVADescription(description: string) {
  console.log('theme', theme.value)
  return theme.value === 'ftva' ? '' : description
}
function getNonFTVADate(date: string) {
  console.log('theme', theme.value)
  return theme.value === 'ftva' ? '' : date
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
          :date="getNonFTVADate(item.date ?? '')"
          :authors="item.authors"
          :description="getNonFTVADescription(item.description ?? '')"
          :external-resource-url="item.externalResourceUrl"
        >
          <template
            v-if="theme === 'ftva' && item.description"
            #customFTVADescription
          >
            {{ parsedTextAll(item.description) }}
          </template>
          <template
            v-if="theme === 'ftva' && parseDate(item.sectionHandle ?? '', item.startDate ?? '', item.endDate ?? '', item.ongoing ?? false, item.date ?? '')"
            #customFTVADate
          >
            {{ parseDate(item.sectionHandle ?? '', item.startDate ?? '', item.endDate ?? '', item.ongoing ?? false,
                         item.date ?? '') }}
          </template>
        </BlockStaffArticleList>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_section-staff-article-list.scss";
@import "@/styles/ftva/_section-staff-article-list.scss";
</style>
