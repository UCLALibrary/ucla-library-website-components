<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'
import type { GridGalleryItemType } from '@/types/types'
import type { FlexibleGridGallery } from '@/types/flexible_types'

import GridGallery from '@/lib-components/GridGallery.vue'
import stripMeapFromURI from '@/utils/stripMeapFromURI'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleGridGallery>,
    default: () => { },
  },
})

function flattenTimeLineStructure(galleryData: FlexibleGridGallery) {
  const flattenedValues = []
  for (const subitem of galleryData.content) {
    const obj: GridGalleryItemType = {}
    obj.headlineText
      = subitem.contentLink && subitem.contentLink[0]
        ? subitem.contentLink[0].headlineText
        : subitem.headlineText
    obj.snippet
      = subitem.contentLink && subitem.contentLink[0]
        ? subitem.contentLink[0].snippet
        : subitem.snippet
    obj.featured = subitem.featured === 'true'
    obj.to = stripMeapFromURI(
      subitem.contentLink && subitem.contentLink[0]
        ? subitem.contentLink[0].to
        : subitem.to
    )
    obj.image
      = subitem.contentLink
        && subitem.contentLink[0]
        && subitem.contentLink[0].heroImage
        ? subitem.contentLink[0].heroImage[0].image[0]
        : subitem.image
          ? subitem.image[0]
          : {}
    flattenedValues.push(obj)
  }

  return flattenedValues
}

const parseGalleryCards = computed(() => {
  const timelineData = flattenTimeLineStructure(block)
  return timelineData
})
</script>

<template>
  <div class="grid-gallery-cards">
    <div
      v-if="(block.gridGalleryCards && block.gridGalleryCards.length > 0)
        || block.sectionTitle
        "
      class="section-header"
    >
      <h2
        v-if="block.sectionTitle"
        class="section-title"
        v-html="block.sectionTitle"
      />
      <div
        v-if="block.sectionSummary"
        class="section-summary"
        v-html="block.sectionSummary"
      />
    </div>

    <GridGallery
      v-if="block.gridGalleryCards && block.gridGalleryCards.length > 0"
      class="section-summary"
      :items="parseGalleryCards"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid-gallery-cards {
  margin: 12px auto;
  position: relative;

  .section-header {
    margin-bottom: var(--space-xl);
  }

  .section-title {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-m);
  }

  .section-summary {
    @include step-0;
    color: var(--color-black);

    :deep(p) {
      margin: 0;
    }
  }
}
</style>
