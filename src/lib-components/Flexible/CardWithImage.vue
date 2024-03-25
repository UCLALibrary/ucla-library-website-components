<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'
import { computed } from 'vue'

// UTILS
import _get from 'lodash/get'
import formatDates from "@/utils/formatEventDates"
import stripMeapFromURI from '@/utils/stripMeapFromURI'

// COMPONENTS
import BlockCardWithImage from '@/lib-components/BlockCardWithImage.vue'

// TYPESCRIPT
import type { FlexibleCardWithImage } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCardWithImage>,
    default: () => { },
  },
})

const parsedList = computed(() => {
  const items = []
  for (const item in block.cardWithImage) {
    if (
      block.cardWithImage[item].typeHandle ===
      "internalContent"
    ) {
      items.push(block.cardWithImage[item].contentLink[0])
    } else {
      items.push(block.cardWithImage[item])
    }
  }
  return items
})

const parsedItems = computed(() => {
  // Maps values based on content type and external or internal content
  // filter out null objects
  return parsedList.value
    .filter((e) => e !== null)
    .map((obj) => {
      // Article
      if (
        obj.typeHandle !== "externalContent" &&
        obj.contentType.includes("article")
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            "heroImage[0].image[0]",
            null
          ),
          parsedLocation: _get(
            obj,
            "associatedLocations",
            []
          ),
          parsedCategory: _get(
            obj,
            "articleCategory[0].title",
            ""
          ),
          byline1: _get(obj, "articleByline1[0].title", ""),
          byline2:
            obj.articleByline2 !== null
              ? formatDates(
                obj.articleByline2,
                obj.articleByline2
              )
              : "",
        }
      }

      // Project
      else if (
        obj.typeHandle !== "externalContent" &&
        obj.contentType.includes("meapProject")
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            "heroImage[0].image[0]",
            null
          ),
          parsedLocation: _get(obj, "projectLocations", []),
          parsedCategory: _get(obj, "projectCategory", ""),
          byline1: _get(obj, "projectByline1[0].title", ""),
        }
      } else if (
        obj.typeHandle !== "externalContent" &&
        obj.contentType === "event"
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            "heroImage[0].image[0]",
            null
          ),
          parsedLocation: _get(
            obj,
            "associatedLocations",
            []
          ),
          parsedCategory: _get(obj, "eventType.title", ""),
          startDate: _get(obj, "startDateWithTime", ""),
          endDate: _get(obj, "endDateWithTime", ""),
          text: _get(obj, "eventDescription", ""),
        }
      } else if (
        obj.typeHandle !== "externalContent" &&
        (obj.contentType === "exhibition" ||
          "workshopOrEventSeries")
      ) {
        return {
          ...obj,
          to: `/${stripMeapFromURI(obj.to)}`,
          parsedImage: _get(
            obj,
            "heroImage[0].image[0]",
            null
          ),
          parsedLocation: _get(
            obj,
            "associatedLocations",
            []
          ),
          startDate: _get(obj, "startDate", ""),
          endDate: _get(obj, "endDate", ""),
        }
      } else if (obj.typeHandle === "externalContent") {
        return {
          ...obj,
          parsedImage: _get(obj, "image[0]", null),
          parsedLocation:
            obj.location !== null ? [obj.location] : [],
          parsedCategory: _get(obj, "category", ""),
        }
      } else {
        return {
          ...obj,
          parsedImage: _get(
            obj,
            "heroImage[0].image[0]",
            null
          ),
          to: `/${stripMeapFromURI(obj.to)}`,
        }
      }
    })
})
</script>

<template>
  <div
    class="card-with-image"
    v-if="block.cardWithImage"
  >
    <div class="section-header">
      <h2
        class="section-title"
        v-if="block.sectionTitle"
      >{{ block.sectionTitle }}</h2>

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
        class="block"
      />
    </ul>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.card-with-image {
  max-width: $container-l-main + px;
  margin: 0 auto;

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
    justify-content: flex-start;
    gap: 32px 16px;

    .block {
      width: calc((100% - 32px) / 3);
    }
  }

  // Breakpoints
  @media #{$medium} {
    align-items: flex-start;

    .block-group {
      .block {
        width: calc((100% - 16px) / 2);
      }
    }
  }

  @media #{$small} {
    .block-group {
      .block {
        width: 100%;
      }
    }
  }
}
</style>
