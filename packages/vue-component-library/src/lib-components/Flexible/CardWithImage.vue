<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import format from 'date-fns/format'
import _get from 'lodash/get'
import { useTheme } from '@/composables/useTheme'
import formatDates from '@/utils/formatEventDates'
import stripMeapFromURI from '@/utils/stripMeapFromURI'

// COMPONENTS
import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'

// TYPESCRIPT
import type { FlexibleCardsWithImage } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCardsWithImage>,
    default: () => { },
  }
})

// THEME + (optional) COLOR
const theme = useTheme()
const currentTheme = theme?.value || '' // since we want to the use the theme for script logic, we need to set a backup value for non-themed sites
const currentCardWithImageType = block.cardWithImageType || ''
const classes = computed(() => {
  return ['card-with-image', theme?.value || '', currentCardWithImageType]
    .filter(Boolean)
    .join(' ')
    .trim()
})

function parsedFtvaLink(obj: any) {
  if (obj.typeHandle === 'externalContent')
    return obj.to
  else if (obj.contentType === 'article' || obj.contentType === 'generalContentPage')
    return `https://www.library.ucla.edu/${obj.uri}`
  else if (obj.contentType === 'ftvaGeneralContentPage')
    return obj.slug
  else
    return obj.uri
}

function parsedFtvaArticleAndEventDate(obj: any) {
  if ((currentTheme === 'ftva') && obj.contentType === 'ftvaEvent')
    return format(new Date(obj.startDateWithTime), 'MMMM d, Y')

  else if (obj.contentType === 'ftvaArticle')
    return format(new Date(obj.postDate), 'MMMM d, Y')
  else
    return ''
}

function parsedFtvaImage(obj: any) {
  if ((currentTheme === 'ftva')
    && (obj.contentType === 'ftvaEvent'
      || obj.contentType === 'ftvaEventSeries'
      || obj.contentType === 'ftvaArticle'
      || obj.contentType === 'ftvaGeneralContentPage')
  )
    return (obj.imageCarousel && obj.imageCarousel[0] && obj.imageCarousel[0].image[0]) || obj.ftvaImage[0] || undefined

  else if (obj.contentType === 'article' || obj.contentType === 'generalContentPage' || obj.contentType === 'collection')
    return ((obj.heroImage.length > 0) && obj.heroImage[0].image[0]) || undefined

  else if (obj.typeHandle === 'externalContent')
    return obj.image[0] || undefined

  else
    return undefined
}

const parsedList = computed(() => {
  const items = []
  for (const indexProperty in block.cardWithImage) {
    // console.log("card with image loop, property:", indexProperty)
    // console.log("block.cardWithImage[indexProperty].typeHandle", block.cardWithImage[indexProperty].typeHandle)
    if (
      block.cardWithImage[indexProperty].typeHandle === 'internalContent'
      && block.cardWithImage[indexProperty].contentLink
      && block.cardWithImage[indexProperty].contentLink.length > 0
    )
      items.push(block.cardWithImage[indexProperty].contentLink[0])
    else if (block.cardWithImage[indexProperty].typeHandle !== 'internalContent')
      items.push(block.cardWithImage[indexProperty])
  }
  return items
})

const parsedItems = computed(() => {
  // Maps values based on content type and external or internal content
  // filter out null objects
  return parsedList.value
    .filter(e => e !== null)
    .map((obj) => {
      // FTVA
      if (currentTheme === 'ftva') {
        return {
          ...obj,
          to: parsedFtvaLink(obj),
          title: obj.eventTitle || obj.title || obj.titleGeneral,
          parsedImage: parsedFtvaImage(obj),
          postDate: (obj.contentType === 'ftvaArticle') ? 'obj.postDate' : null,
          // byline2 Formats the date to April 3, 2025
          byline2: parsedFtvaArticleAndEventDate(obj),
        }
      }

      else if (
        obj.typeHandle !== 'externalContent'
        && obj.contentType.includes('article')
      ) {
        return {
          ...obj,
          to: stripMeapFromURI(obj.to),
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          parsedLocation: _get(
            obj,
            'associatedLocations',
            []
          ),
          parsedCategory: _get(
            obj,
            'articleCategory[0].title',
            ''
          ),
          byline1: _get(obj, 'articleByline1[0].title', ''),
          byline2:
            obj.articleByline2 !== null
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
          to: stripMeapFromURI(obj.to),
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          parsedLocation: _get(obj, 'projectLocations', []),
          parsedCategory: _get(obj, 'projectCategory', ''),
          byline1: _get(obj, 'projectByline1[0].title', ''),
        }
      }
      else if (
        obj.typeHandle !== 'externalContent'
        && obj.contentType === 'event'
      ) {
        return {
          ...obj,
          to: stripMeapFromURI(obj.to),
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          parsedLocation: _get(
            obj,
            'associatedLocations',
            []
          ),
          parsedCategory: _get(obj, 'eventType.title', ''),
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
          to: stripMeapFromURI(obj.to),
          parsedImage: _get(
            obj,
            'heroImage[0].image[0]',
            undefined
          ),
          parsedLocation: _get(
            obj,
            'associatedLocations',
            []
          ),
          startDate: _get(obj, 'startDate', ''),
          endDate: _get(obj, 'endDate', ''),
        }
      }
      else if (obj.typeHandle === 'externalContent') {
        return {
          ...obj,
          parsedImage: _get(obj, 'image[0]', undefined),
          // parsedLocation:  obj.location !== null ? [obj.location] : [],
          parsedCategory: _get(obj, 'category', ''),
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
          to: stripMeapFromURI(obj.to),
        }
      }
    })
})
</script>

<template>
  <div
    v-if="block.cardWithImage"
    :class="classes"
  >
    <div class="section-header">
      <h2
        v-if="block.sectionTitle"
        class="section-title"
      >
        {{ block.sectionTitle }}
      </h2>

      <div
        v-if="block.sectionSummary"
        class="section-summary"
        v-html="block.sectionSummary"
      />
    </div>

    <ul class="block-group">
      <BlockCardWithImage
        v-for="(item, index) in parsedItems"
        :key="`FlexibleCardWithImage${index}`"
        :to="item.to"
        :image="item.parsedImage"
        :category="item.parsedCategory"
        :byline-one="item.byline1"
        :byline-two="item.byline2"
        :title="item.title"
        :text="item.text"
        :locations="item.parsedLocation"
        :image-aspect-ratio="60"
        :is-vertical="true"
        :start-date="item.startDate"
        :end-date="item.endDate"
        :section-handle="item.contentType"
        :ongoing="item.ongoing"
        :color="currentCardWithImageType"
        class="block"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_flexible-block-card-with-image.scss";
@import "@/styles/ftva/_flexible-block-card-with-image.scss";
</style>
