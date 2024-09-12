<!-- Related to SectionCardsThreeColumn -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// UTILITY FUNCTIONS
import format from 'date-fns/format'
import formatDates from '@/utils/formatEventDates'
import formatShortDay from '@/utils/formatShortDay'
import formatFullDay from '@/utils/formatFullDay'
import formatDay from '@/utils/formatEventDay'
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
  startTime: {
    type: String,
    default: '',
  },
  // long = 'Febuary 1, 2022', short = 'Feb 1, 2022
  dateFormat: {
    type: String,
    default: 'long',
  },
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
  isVisible: {
    type: Boolean,
    default: true,
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
    return formatDay(props.startDate)

  return ''
})

// VERTICAL TIME
// dates are formatted in the short format for ftva only
const parsedDateFormat = computed(() => {
  return theme?.value === 'ftva' ? 'short' : 'long'
})

const parsedStartDatePlusTime = computed(() => {
  if (props.startDate)
    return props.endDate ? formatDates(props.startDate, props.endDate, props.dateFormat) : formatDates(props.startDate, props.startDate, props.dateFormat)
  return ''
})

const parsedFormatShortDay = computed(() => {
  if (props.startDate)
    return formatShortDay(props.startDate)
  return ''
})

const parsedDayMonthDate = computed(() => {
  if (props.startDate)
    return format(new Date(props.startDate), 'EEE, MMM dd')
})
</script>

<template>
  <li :class="classes">
    <div
      v-show="isVisible"
      class="day-month-date"
    >
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
        :title="title"
        :start-date="startDate"
        :end-date="endDate"
        :date-format="parsedDateFormat"
        :text="text"
      >
        <template #blocktag>
          <div v-for="(label, index) in tagLabels">
            <BlockTag
              :key="`${label.title}-${index}`"
              :label="label.title"
              icon-name="SvgIconGuest"
              :is-secondary="true"
              :class="label.title ? content : null"
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
  position: relative;

  li {
    list-style: none;
    list-style-position: outside;
    @include card-clickable-area;

    &:hover {
      cursor: pointer;
    }
  }

  display: flex;
  flex-direction: row;

  font-family: var(--font-primary);
  $large-width: 272px;
  $large-height: 272px;

  .day-month-date {
    display: flex;
    flex-direction: column;

    color: $accent-blue;
    min-width: $large-width;
    width: 272px;
    height: $large-height;
    background-color: var(--color-theme, var(--color-white));
    padding-top: 2px
  }

  .day {
    font-weight: 400;
    font-family: var(--font-secondary);
    font-size: 16px;
    letter-spacing: 1.5%;
    text-transform: uppercase;
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
    width: 25%;
    flex-shrink: 0;

    .image {
      width: 100%;
      height: 272px;
    }

    .molecule-no-image {
      width: 100%;
      height: 272px;
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
    width: 50%;
    height: 272px;
    background-color: var(--color-theme, var(--color-white));
    padding: 2px 20px 15px 20px;

    :deep(.card-meta) {
      display: grid;
      grid-template-columns: repeat(10 fr);
      /* grid-template-rows: 125px 50px; */
      grid-template-rows: min-content 1fr;

      * {
        margin: 0;
      }

      .title {
        grid-column: 1 / -1;
        order: 1;
        margin: 0;
      }

      .date-time {
        grid-column: 1 / -1;
        order: 2;
      }

      .block-tags-slot.content {
        grid-column: 1 / -1;
        order: 3;
      }

      margin: 0px;
      padding: 25px 20px 15px 20px;
      height: $large-height;

      .title {
        @include ftva-card-title-2;
        color: $heading-grey;
        @include truncate($lines: 2);
        overflow: hidden;
      }

      &:hover>a.title {
        text-decoration: none;
      }
    }

    .time-tags {
      text-transform: uppercase;
      @include ftva-emphasized-subtitle;
      color: $accent-blue;
      padding-top: 60px;
    }

    .date {
      padding-right: 2px;
    }

    :deep(.block-tags-slot) {
      display: flex;
      flex-direction: row;
      justify-content: left;
      gap: 16px;
    }
  }

  /* VERTICAL TIME FORMAT */
  :deep(.card-meta) {
    .date-time {
      @include ftva-emphasized-subtitle;
      color: $accent-blue;
      letter-spacing: .04px;
      padding-bottom: 10px;

      .start-date {
        display: none;
      }
    }
  }

  // Breakpoints
  @media #{$medium} {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;

    .day-month-date {
      display: none;
    }

    :deep(.responsive-image .media) {
      border-radius: 12px 12px 0 0;
    }

    .image-block {
      width: 100%;

      .molecule-no-image {
        border-radius: 12px 12px 0 0;
      }

      .image {
        width: 100%;
      }
    }

    .meta {
      padding: 12px 2px 18px 18px;
      width: 100%;
      border-radius: 0 0 12px 12px;

      :deep(.card-meta) {
        /* display: grid;
          grid-template-columns: repeat(10 fr); */
        grid-template-rows: 50px 120px;

        .title {
          order: 2;
        }

        .date-time {
          order: 3;
        }

        .block-tags-slot.content {
          order: 1;
        }

        .date-time {
          display: flex;
          flex-direction: row;

          @include ftva-emphasized-subtitle;
          color: $accent-blue;
          letter-spacing: .04px;
          padding-bottom: 10px;

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

/* @import "@/styles/default/_block-card-three-column.scss";
@import "@/styles/ftva/_block-card-three-column.scss"; */
</style>
