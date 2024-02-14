<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import RichText from '@/lib-components/RichText.vue'

// UTILITY FUNCTIONS
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'

// import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

import type { LocationItemType } from '@/types/types'

const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '',
  },
  endDate: {
    type: String,
    default: '',
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  bylineOne: {
    type: String,
    default: '',
  },
  bylineTwo: {
    type: String,
    default: '',
  },
  sectionHandle: {
    type: String,
    default: '',
  },
})

const route = useRoute()

const isImpactReport = computed(() => {
  return !!route.path.includes('impact')
})

const parsedTarget = computed(() => {
  return isImpactReport.value ? '_blank' : ''
})

const parsedDate = computed(() => {
  if (props.startDate)
    return formatDates(props.startDate, props.endDate)

  return ''
})

const parsedTime = computed (() => {
  if (props.startDate && props.sectionHandle === 'event')
    return formatTimes(props.startDate, props.endDate)

  return ''
})

const parsedLocations = computed(() => {
  return props.locations.map((obj) => {
    let input = 'svg-icon-location'
    if (obj.title === 'Online')
      input = 'svg-icon-virtual'
    return {
      ...obj,
      svg: input,
      to: obj.to != null ? `/${obj.to}` : '',
    }
  })
})
</script>

<template>
  <div class="card-meta">
    <div v-if="category" class="category" v-html="category" />
    <SmartLink v-if="to" :link-target="parsedTarget" :to="to" class="title">
      {{ title }}
      <span
        v-if="alternativeFullName"
        :lang="language"
        class="translation"
        v-html="alternativeFullName"
      />
    </SmartLink>
    <h3 v-else class="title-no-link" v-html="title" />

    <div v-if="bylineOne || bylineTwo" class="byline-group">
      <div v-if="bylineOne" class="schedule-item" v-html="bylineOne" />
      <div v-if="bylineTwo" class="schedule-item" v-html="bylineTwo" />
    </div>

    <div v-if="startDate || ongoing" class="date-time">
      <div v-if="ongoing">
        Ongoing
      </div>
      <time v-if="startDate" class="schedule-item" v-html="parsedDate" />
      <time v-if="startDate" class="schedule-item" v-html="parsedTime" />
    </div>

    <div v-if="locations.length" class="location-group">
      <IconWithLink
        v-for="(location, index) in parsedLocations"
        :key="`location-card-meta${index}`"
        :text="location.title"
        :icon-name="location.svg"
        :to="location.to"
      />
    </div>
    <RichText v-if="text" class="text" :rich-text-content="text" />
  </div>
</template>

<style lang="scss" scoped>
.card-meta {
  .meta {
      z-index: 10;
      width: 100%;
  }
  .category {
      @include overline;
      color: var(--color-primary-blue-05);
      margin-top: var(--space-xs);
      margin-bottom: var(--space-s);
  }
  .title {
      @include card-clickable-area;
      display: block;

      .translation {
          display: block;
      }
  }
  .title,
  .title-no-link {
      @include step-1;
      color: var(--color-primary-blue-03);
      margin: var(--space-s) 0;
      line-height: $line-height--1;
  }

  .date-time {
      @include step-0;
      color: var(--color-secondary-grey-05);
      margin: $component-02 + px 0 var(--space-s);
      display: flex;
      flex-direction: column;
      .svg-online {
          margin-bottom: -5px;
          margin-left: 10px;
          padding-left: 10px;
          border-left: 1px solid var(--color-secondary-grey-02);
      }
  }
  .byline-group {
      display: flex;
      flex-direction: column;
      @include step-0;
      color: var(--color-secondary-grey-04);
      margin: var(--space-s) 0;
  }
  .text {
      @include step-0;
      color: var(--color-black);
      @include truncate(4);
      max-width: none;
      padding-right: 0;
      margin-top: var(--space-s);

      :deep(strong) {
          font-weight: 500;
      }
  }
  .location-group {
      color: var(--color-primary-blue-03);
      font-family: var(--font-secondary);
      line-height: 1;
      margin-bottom: var(--space-s);
      display: flex;
      flex-direction: column;
  }
  .icon-with-link {
      position: relative;
      z-index: 20;
  }

  // Breakpoints
  @media #{$medium} {
      .text {
          margin-top: 0;
      }
  }

  // Hovers
  @media #{$has-hover} {
      &:hover {
          .title {
              @include link-hover;
          }
      }
  }
}
</style>
