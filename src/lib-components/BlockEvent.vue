<script>
import format from 'date-fns/format'
import SmartLink from '@/lib-components/SmartLink'

// Utility functions
import getSectionName from '@/utils/getSectionName'
import formatTimes from '@/utils/formatEventTimes'
import formatDates from '@/utils/formatEventDates'

export default {
  name: 'BlockEvent',
  components: { SmartLink },
  props: {
    title: {
      type: String,
      default: '',
    },
    category: {
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
    prompt: {
      type: String,
      default: 'View',
    },
    to: {
      type: String,
      default: '',
    },
    sectionHandle: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return ['block-event', `button color-${this.sectionName}`]
    },
    sectionName() {
      return getSectionName(this.to)
    },
    parsedDate() {
      return formatDates(this.startDate, this.endDate)
    },
    parsedSingledDate() {
      return format(new Date(this.startDate), 'MMMM d, Y')
    },
    parsedTime() {
      if (this.startDate && this.sectionHandle === 'event')
        return formatTimes(this.startDate, this.endDate)

      return ''
    },
  },
}
</script>

<template>
  <div :class="classes">
    <div class="molecule row" />

    <div class="text row">
      <span class="category">{{ category }}</span>
      <h2 class="title" v-text="title" />
      <div class="date-time">
        <time v-if="startDate" class="dates" v-text="parsedDate" />
        <time v-if="parsedTime" class="time" v-text="parsedTime" />
      </div>
      <SmartLink :class="classes" :to="to" v-text="prompt" />
      <!-- TO DO: Use button-link component instead -->
    </div>

    <div class="sizer" />
  </div>
</template>

<style lang="scss" scoped>
.block-event {
    position: relative;
    z-index: 0;
    background-color: var(--color-primary-blue-03);
    color: var(--color-white);
    font-family: var(--font-primary);
    max-width: 800px;

    .row {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: flex-start;
        align-items: flex-start;
    }

    .molecule {
        background-image: url("ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg");
        background-size: auto 100%;
        height: 40%;
    }

    .category {
        @include overline;
        color: var(--color-secondary-yellow-01);
        margin-bottom: var(--space-s);
    }
    .title {
        @include step-2;
        margin-bottom: var(--space-s);
    }
    .date-time {
        display: flex;
        flex-direction: column;
        margin-bottom: var(--space-m);
    }
    .dates,
    .time {
        @include step-0;
    }

    .text {
        bottom: 0;
        top: auto;
        max-width: 500px;
        padding: 20px var(--unit-gutter);
        margin: 0 auto;
        height: 60%;
    }
    .button {
        border: 1px solid var(--color-primary-blue-02);
        background-color: var(--color-primary-blue-03);
        padding: 16px 40px;
        @include button;
        color: var(--color-white);
        transition: color 400ms ease-in-out;

        // Themes
        --color-theme: var(--color-primary-blue-02);

        &.color-visit {
            --color-theme: var(--color-visit-fushia-03);
        }

        &.color-help {
            --color-theme: var(--color-help-green-03);
        }

        &.color-about {
            --color-theme: var(--color-about-purple-03);
        }
    }

    .sizer {
        padding-bottom: 137.5%;
    }

    // Hover
    @media #{$has-hover} {
        .button:hover {
            color: var(--color-theme);
        }
    }

    // Breakpoints
    @media #{$medium} {
        .text {
            height: 75%;
        }
    }
    @media #{$small} {
        .button {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
