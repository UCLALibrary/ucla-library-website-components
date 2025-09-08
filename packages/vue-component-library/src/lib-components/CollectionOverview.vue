<script setup lang="ts">
// Imports
import { computed } from 'vue'
import type { BlockButtonsProps } from '@/types/components/blockButtons.types'
import type { MediaItemType } from '@/types/types'
import SearchResultsCount from '@/lib-components/SearchResultsCount.vue'
import BlockButtons from '@/lib-components/BlockButtons.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

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
</script>

<template>
  <section class="collection-overview">
    <template class="phone">
      <h2 class="title">
        {{ title }}
      </h2>

      <SearchResultsCount
        v-if="itemsCount"
        :count="itemsCount"
        prefix=""
        :label="labelParsed"
        :animate="true"
        class="search-results-count"
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
            prefix=""
            :label="labelParsed"
            :animate="true"
            class="search-results-count"
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
.collection-overview {
    .layout-container {
        display: flex;
        align-items: flex-start;
        gap: 48px;
    }

    .meta,
    .image {
        width: 50%;
    }

    .title {
        margin: 0 0 8px;

        font-family: var(--font-primary);
        font-size: 48px;
        font-weight: 400;
        line-height: 1.1;
        color: var(--color-black);
    }

    .search-results-count {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 8px;

        width: fit-content;
        margin: 0 0 48px;

        // Custom label styles
        :deep(.parsed-results),
        :deep(.count) {
            font-family: var(--font-primary);
            font-size: 24px;
            font-weight: 400;
        }
    }

    .subtitle {
        margin: 0 0 18px;

        font-family: var(--font-primary);
        font-size: 32px;
        font-weight: 400;
        line-height: 1.2;
        color: var(--color-primary-blue-03);
    }
    .description {
        margin: 0 0 20px;

        font-family: var(--font-secondary);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: var(--color-gray-800);
    }

    // Show/Hide mobile/desktop elements
    .phone {
        display: none;
    }
    .desktop {
        display: block;
    }

    // Breakpoints
    @media #{$medium} {
        .layout-container {
            gap: 24px;
        }

        // Show/Hide mobile/desktop elements
        .phone {
            display: block;
        }
        .desktop {
            display: none;
        }
    }
    @media #{$small} {
        .layout-container {
            flex-direction: column-reverse;
            gap: 48px;
        }

        .meta,
        .image {
            width: 100%;
        }
    }
}
</style>
