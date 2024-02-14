<!-- eslint-disable no-console -->
<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import _get from 'lodash/get'
import BlockFloatingHighlight from '@/lib-components/BlockFloatingHighlight.vue'
import formatDates from '@/utils/formatEventDates'
import stripMeapFromURI from '@/utils/stripMeapFromURI'
import type { FlexibleHighlightBlock } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleHighlightBlock>,
    default: () => { },
  }
})

const parsedList = computed(() => {
  const items = []
  for (const item in block.highlight) {
    if (
      block.highlight[item].typeHandle === 'internalContent'
    )
      items.push(block.highlight[item].contentLink[0])
    else
      items.push(block.highlight[item])
  }
  return items
})
console.log(parsedList.value)

const parsedItems = computed(() => {
  // Maps values based on content type and external or internal content
  // filter out null objects
  return parsedList.value
    .filter(e => e !== null)
    .map((obj) => {
      // Article
      if (
        obj.typeHandle !== 'externalContent'
        && obj.contentType.includes('article')
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          locations: _get(
            obj,
            'associatedLocations',
            undefined
          ),
          category: _get(
            obj,
            'articleCategory[0].title',
            ''
          ),
          byline1: _get(obj, 'articleByline1[0].title', ''),
          byline2:
            obj.articleByline2 != null
              ? formatDates(
                obj.articleByline2,
                obj.articleByline2
              )
              : '',
        }
      }

      // Project
      else if (
        obj.typeHandle !== 'externalContent'
        && obj.contentType.includes('meapProject')
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          locations: _get(obj, 'projectLocations', undefined),
          category: _get(obj, 'projectCategory', ''),
          byline1: _get(obj, 'projectByline1[0].title', ''),
        }
      }
      else if (
        obj.typeHandle !== 'externalContent'
        && obj.contentType === 'event'
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          locations: _get(
            obj,
            'associatedLocations',
            undefined
          ),
          category: _get(obj, 'eventType.title', ''),
          startDate: _get(obj, 'startDateWithTime', ''),
          endDate: _get(obj, 'endDateWithTime', ''),
          text: _get(obj, 'eventDescription', ''),
        }
      }
      else if (
        obj.typeHandle !== 'externalContent'
        && (obj.contentType === 'exhibition'
          || 'workshopOrEventSeries')
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          locations: _get(
            obj,
            'associatedLocations',
            undefined
          ),
          startDate: _get(obj, 'startDate', ''),
          endDate: _get(obj, 'endDate', ''),
        }
      }
      else if (obj.typeHandle === 'externalContent') {
        console.log(obj.locations)
        return {
          ...obj,
          parsedImage: _get(obj, 'image[0]', undefined),
          // TODO: FIX BlockHighlight gql fragment to add locations in nuxt repo
          /* locations:
            obj.locations != null ? [obj.locations] : undefined, */
          category: _get(obj, 'category', ''),
        }
      }
      else {
        return {
          ...obj,
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          to: `/${stripMeapFromURI(obj.to)}`,
        }
      }
    })
})
console.log(parsedItems.value)
</script>

<template>
  <section class="section-teaser-highlight">
    <div class="section-header">
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
    <ul class="block-group">
      <BlockFloatingHighlight
        v-for="(item, index) in parsedItems"
        :key="`FlexibleHighlight${index}`"
        :to="item.to"
        :image="item.parsedImage"
        :category="item.category"
        :byline-one="item.byline1"
        :byline-two="item.byline2"
        :title="item.title"
        :text="item.text"
        :locations="item.locations"
        :start-date="item.startDate"
        :end-date="item.endDate"
        :section-handle="item.contentType"
        :ongoing="item.ongoing"
        :has-triangle="true"
        :is-vertical="true"
        class="block"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.section-teaser-highlight {
  padding: 0 calc(var(--unit-gutter) - 16px);
  background-color: var(--color-theme, var(--color-white));
  margin: 0 auto;
  max-width: $container-l-main + px;

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

    :deep(p) {
      margin: 0;
    }
  }

  .block-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
  }

  .block {
    width: calc(50% - 16px);
    margin: 0 0 var(--space-xl);
  }

  :deep(.block-highlight) {
    max-width: calc(50% - 16px);
  }

  // Breakpoints
  @media #{$small} {

    //padding: 0 var(--unit-gutter);
    :deep(.block-highlight) {
      max-width: 100%;
    }

    .block {
      width: 100%;
      margin: 0 0 50px;
    }
  }
}
</style>
