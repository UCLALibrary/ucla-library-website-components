<script setup lang="ts">
// Imports
import { computed } from 'vue'
import type { BlockButtonsProps } from '@/types/components/blockButtons.types'
import type { MediaItemType } from '@/types/types'
import SearchResultsCount from '@/lib-components/SearchResultsCount.vue'
import BlockButtons from '@/lib-components/BlockButtons.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import { useTheme } from '@/composables/useTheme'
import { SearchResultsCountVariants } from '@/types/components/SearchResultsCountTypes'

interface CollectionOverviewProps {
  title: string
  subtitle?: string
  itemsCount?: number
  description?: string
  image: MediaItemType
  blockButtons?: BlockButtonsProps
}

// Props
const props = defineProps<CollectionOverviewProps>()

const theme = useTheme()

// Computed
const labelParsed = computed(() => {
  if (props.itemsCount)
    return props.itemsCount > 1 ? 'items' : 'item'

  return ''
})

const hasButtons = computed(() => {
  return (
    props.blockButtons
        && props.blockButtons.buttons
        && props.blockButtons.buttons.length > 0
  )
})
const classes = computed(() => {
  return ['collection-overview', theme?.value]
})
</script>

<template>
  <section :class="classes">
    <template class="phone">
      <h2 class="title">
        {{ title }}
      </h2>

      <SearchResultsCount
        v-if="itemsCount"
        :count="itemsCount"
        :suffix-label="labelParsed"
        label=""
        prefix=""
        :animate="true"
        class="search-results-count"
        :variant="SearchResultsCountVariants.HORIZONTAL"
      />
    </template>

    <div class="layout-container">
      <div class="meta">
        <template class="desktop">
          <h2 class="title">
            {{ title }}
          </h2>

          <SearchResultsCount
            v-if="itemsCount"
            :count="itemsCount"
            :suffix-label="labelParsed"
            :animate="true"
            label=""
            prefix=""
            class="search-results-count"
            :variant="SearchResultsCountVariants.HORIZONTAL"
          />
        </template>

        <h3 v-if="subtitle" class="subtitle">
          {{ subtitle }}
        </h3>
        <div class="description" v-html="description" />

        <BlockButtons
          v-if="blockButtons && hasButtons"
          :buttons="blockButtons.buttons"
          :align="blockButtons.align"
          :direction="blockButtons.direction"
        />
      </div>
      <ResponsiveImage :media="image" class="image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_collection-overview.scss";
</style>
