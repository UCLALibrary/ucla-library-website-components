<!-- Related to SectionTeaserList as DynamicComponent -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import format from 'date-fns/format'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// UTILITY FUNCTIONS
import formatFullDay from '@/utils/formatFullDay'
import formatMonth from '@/utils/formatEventMonth'

// TYPESCRIPT
import type { EventFiltersItemType, MediaItemType } from '@/types/types'

const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
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
  startDate: {
    type: String,
    default: '',
  },
  endDate: {
    type: String,
    default: '',
  },
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  }
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-card-three-column', theme?.value || '']
})

// HORIZONTAL TIME
const parsedFormatFullDay = computed(() => {
  if (props.startDate)
    return formatFullDay(props.startDate)
  return ''
})

const parsedDateMonth = computed(() => {
  if (props.startDate)
    return formatMonth(props.startDate)

  return ''
})

const parsedDateDay = computed(() => {
  if (props.startDate)
    return format(new Date(props.startDate), 'd')
  return ''
})

// VERTICAL TIME
// dates are formatted in the short format for ftva only
const parsedDateFormat = computed(() => {
  return theme?.value === 'ftva' ? 'short' : 'long'
})
</script>

<template>
  <li :class="classes">
    <div class="day-month-date">
      <time
        v-if="startDate"
        class="day"
        v-html="parsedFormatFullDay"
      />
      <div class="month-date">
        <time
          v-if="startDate"
          class="month"
          v-html="parsedDateMonth"
        />
        <time
          v-if="startDate"
          v-html="parsedDateDay"
        />
      </div>
    </div>

    <div class="image-block">
      <ResponsiveImage
        v-if="image"
        :media="image"
        class="image"
      />
      <div
        v-else
        class="molecule-no-image"
      >
        <MoleculePlaceholder
          class="molecule"
          aria-hidden="true"
        />
      </div>
    </div>

    <div class="meta">
      <CardMeta
        class="card-meta-items"
        :to="to"
        :category="category"
        :title="title"
        :start-date="startDate"
        :end-date="endDate"
        :date-format="parsedDateFormat"
      >
        <template #floatingslot>
          <div
            v-for="(label, index) in tagLabels"
            :key="`${label.title}-${index}`"
          >
            <BlockTag
              :label="label.title"
              :is-secondary="true"
              :is-highlighted="label.isHighlighted"
            />
          </div>
        </template>
      </CardMeta>
    </div>
  </li>
</template>

<style
  lang="scss"
  scoped
>
.block-card-three-column {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;

  font-family: var(--font-primary);
  $large-width: 284px;
  $large-height: 213px;

  .day-month-date {
    display: flex;
    flex-direction: column;
    flex: 1;

    color: $accent-blue;
    padding-top: 2px;
  }

  .day {
    @include ftva-subtitle-1;
    color: $body-grey;
  }

  .month-date {
    font-weight: 400;
    font-family: var(--font-primary);
    font-size: 36px;
    letter-spacing: 0.25%;
    line-height: 1;

    .month {
      padding-right: 5px;
    }
  }

  .image-block {
    width: $large-width;
    height: $large-height;

    .image {
      width: 100%;
      height: 100%;
    }

    .molecule-no-image {
      width: 100%;
      height: 100%;
      margin-right: var(--space-xl);
      background: var(--gradient-01);
      overflow: hidden;

      display: flex;
      align-items: center;
      position: relative;

      .molecule {
        flex-shrink: 0;
        position: absolute;
        opacity: 0.7;
      }
    }
  }

  .meta {
    flex-basis: 50%;
    flex: 2;

    :deep(.card-meta) {
      display: grid;
      grid-template-rows: min-content 1fr;

      padding: 20px;
      padding-top: 2px;
      padding-bottom: 0px;
      min-height: $large-height;

      * {
        margin: 0;
      }

      .category {
        @include ftva-subtitle-1;
        color: $subtitle-grey;
      }

      .title {
        @include ftva-card-title-2;
        color: $heading-grey;
      }

      .date-time {
        align-self: flex-end;

        @include ftva-emphasized-subtitle;
        color: $accent-blue;
        letter-spacing: .04px;
        padding-top: 15px;
        padding-bottom: 10px;

        .start-date {
          display: none;
        }
      }

      &:hover>a.title {
        text-decoration-thickness: 3px;
        text-underline-offset: 4px;
      }
    }

    .time-tags {
      text-transform: uppercase;
      @include ftva-emphasized-subtitle;
      color: $accent-blue;
    }

    :deep(.floating-slot) {
      display: flex;
      justify-content: left;
      gap: 16px;
    }
  }

  // Breakpoints
  @media #{$medium} {
    flex-direction: column;

    .day-month-date {
      display: none;
    }

    :deep(.responsive-image .media) {
      border-radius: 12px 12px 0 0;
    }

    .image-block {
      flex: 1;
      width: 100%;

      .molecule-no-image {
        min-height: $large-height;
        border-radius: 12px 12px 0 0;
      }
    }

    .meta {
      flex-basis: 0;
      flex: 1;
      width: 100%;
      border-radius: 0 0 12px 12px;

      :deep(.card-meta) {
        padding-top: 20px;
        min-height: 0;

        .category {
          order: 2;
          align-self: flex-start;
          padding-top: 10px;
        }

        .title {
          order: 3;
          align-self: flex-start;
          padding-top: 10px;
        }

        .floating-slot {
          order: 1;
        }

        .date-time {
          order: 3;
          display: flex;
          flex-direction: row;

          .start-date {
            position: relative;
            display: inline;
            margin-right: 28px;

            // show the diamond icon after, but only if it's not the last child
            &:not(:last-child)::after {
              content: url('ucla-library-design-tokens/assets/svgs/icon-ftva-diamond.svg');
              position: absolute;
              right: -30px;
              top: -2px;
              margin: 0px 10px;
            }
          }
        }
      }
    }
  }

  @media #{$small} {
    .day-month-date {
      display: none;
    }

    .image-block {
      border-radius: 12px 12px 0 0;
    }

    .meta {
      :deep(.card-meta) {
        padding-top: 20px;
      }

      .title {
        @include truncate(2);
      }
    }

    .image-container {
      .molecule-no-image {
        height: 200px;
      }
    }
  }
}
</style>
