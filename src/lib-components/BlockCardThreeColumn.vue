<!-- Related to SectionCardsThreeColumn -->
<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import type { PropType } from 'vue'
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import BlockTag from '@/lib-components/BlockTag.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// UTILITY FUNCTIONS
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
      >
        <template #blocktag>
          <div
            v-for="(label, index) in tagLabels"
            :key="`${label.title}-${index}`"
          >
            <BlockTag
              :label="label.title"
              icon-name="SvgIconGuest"
              :is-secondary="true"
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

  font-family: var(--font-primary);
  $large-width: 284px;
  $large-height: 213px;

  li {
    list-style: none;
    list-style-position: outside;
    @include card-clickable-area;

    &:hover {
      cursor: pointer;
    }
  }

  .day-month-date {
    display: flex;
    flex-direction: column;
    flex: 1;

    color: $accent-blue;
    background-color: var(--color-theme, var(--color-white));
    padding-top: 2px;
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

    background-color: var(--color-theme, var(--color-white));

    :deep(.card-meta) {
      display: grid;
      grid-template-rows: min-content 1fr;

      padding: 20px;
      min-height: $large-height;

      * {
        margin: 0;
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

        .start-date {
          display: none;
        }
      }

      &:hover>a.title {
        text-decoration: none;
      }
    }

    .time-tags {
      text-transform: uppercase;
      @include ftva-emphasized-subtitle;
      color: $accent-blue;
    }

    :deep(.block-tags-slot) {
      display: flex;
      justify-content: left;
      gap: 16px;

      .block-tag .label {
        padding-left: 10px
      }
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
        /* TODO There should be a default image instaed */
        min-height: $large-height;
        border-radius: 12px 12px 0 0;
      }
    }

    .meta {
      flex-basis: 0;
      flex: 1;
      width: 100%;
      border-radius: 0 0 12px 12px;
      /* height: fit-content; */
      /* min-height: 150px; */

      :deep(.card-meta) {
        /* height: fit-content; */
        height: auto;

        .title {
          order: 2;
          align-self: flex-start;
          padding-top: 10px;
        }

        .block-tags-slot {
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
