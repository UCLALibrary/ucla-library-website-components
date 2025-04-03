<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import format from 'date-fns/format'

// THEME
import { useTheme } from '@/composables/useTheme'


// UTILS
import _get from 'lodash/get'
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
  },
})

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


// format(new Date(startDate), 'MMMM d, Y')


// const parsedDate = computed(() => {
//   let dateParsed = ''
//   let formattedDate = ''
//   if (
//     block.cardWithImage
//     && block.cardWithImage[0].contentLink
//     && block.cardWithImage[0].contentLink[0].startDateWithTime
//   )
//     if (obj.contentType.includes('ftvaEvent')) {
//       return dateParsed = format(new Date("startDateWithTime"), 'MMMM d, Y')
//     }
//   if (obj.ftvaEventSeries) { dateParsed = "ongoing" || "startDateWithTime" }
//   if (obj.ftvaArticle) { dateParsed = "postDate" }
//   if (obj.ftvaGeneralContentPage) { dateParsed = null }

//   return dateParsed
// })

// const parsedLink = computed(() => {
//   let to = ''
//   if (obj.contentType === "ftvaGeneralContentPage") {
//     to = obj.slug
//   } else {
//     to = obj.uri
//   }
//   return to
// })

const parsedItems = computed(() => {
  // Maps values based on content type and external or internal content
  // filter out null objects
  if (theme.value === 'ftva') {
    return parsedList.value
      .map((obj) => {
        console.log("FTVA OBJ", obj)
        return {
          ...obj,
          to: (obj.sectionHandle === "ftvaGeneralContentPage" && obj.slug) || obj.uri,
          parsedImage: (obj.imageCarousel && obj.imageCarousel[0] && obj.imageCarousel[0].image[0]) || obj.ftvaImage,
          title: obj.eventTitle || obj.title || obj.titleGeneral,
          //startDate: (obj.contentType === "ftvaArticle" || obj.contentType === "ftvaEvent") ? obj.startDateWithTime : null,
          postDate: (obj.contentType === "ftvaArticle") ? "obj.postDate" : null,
          //dateFormat: obj.contentType === "ftvaArticle" || obj.contentType === "ftvaEvent" ? obj.startDate : null
          // articleByline2: Long Date with no Time
          // articleByline2: obj.contentType === "ftvaArticle" ? obj.startDateWithTime : null,
          byline2:
            obj.contentType === "ftvaEvent"
              ? format(new Date(obj.startDateWithTime), 'MMMM d, Y')
              : '',
        }

      })
  } else {
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
  }
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['card-with-image', theme?.value || '']
})
</script>

<template>
  <div
    v-if="block.cardWithImage"
    :class="classes"
  >
    <h3>{{ parsedList }}</h3>
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
        :date-format="parsedDateFormat"
        class="block"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_flexible-block-card-with-image.scss";
@import "@/styles/ftva/_flexible-block-card-with-image.scss";
</style>
