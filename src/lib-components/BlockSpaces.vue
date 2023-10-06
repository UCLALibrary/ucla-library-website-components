<script>
// https://calendar.library.ucla.edu/admin/api/1.1/endpoint/space_locations
import SvgHeadingArrow from 'ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg'
import SmartLink from '@/lib-components/SmartLink'
import ButtonLink from '@/lib-components/ButtonLink'
import RichText from '@/lib-components/RichText'

export default {
  name: 'BlockSpaces',
  components: {
    SvgHeadingArrow,
    SmartLink,
    ButtonLink,
    RichText,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: 'Reserve',
    },
  },
}
</script>

<template>
  <li class="block-spaces">
    <component :is="to ? 'SmartLink' : 'div'" :to="to" class="container">
      <div class="arrow-and-title">
        <SvgHeadingArrow class="heading-arrow" />
        <!-- if the is a link (:to) - display as a link -->
        <h3 v-if="to" class="space-title">
          <SmartLink :to="to">
            {{ title }}
          </SmartLink>
        </h3>
        <!-- if no link (:to)  - do not display as a link -->
        <h3 v-else class="space-title-no-link" v-html="title" />
      </div>
      <div class="meta">
        <RichText v-if="text" class="text" :rich-text-content="text" />
        <!-- if no buttonUrl -  do not display button -->
        <ButtonLink
          v-if="to"
          class="button"
          :button-url="to"
          :label="buttonText"
          :is-secondary="true"
          :to="to"
          link-target="_blank"
        />
      </div>
    </component>
  </li>
</template>

<style lang="scss" scoped>
.block-spaces {
  border: 2px solid var(--color-primary-blue-01);
  border-radius: $rounded-slightly + px;
  @include animate-normal;
  position: relative;
  list-style-type: none;

  .container {
      padding: var(--space-xl) var(--space-l);
      display: flex;
      flex-direction: column;
      .heading-arrow {
          width: 32px;
          height: 32px;
          flex-basis: 32px;
      }

      .arrow-and-title {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 8px;
          justify-content: flex-start;
          align-content: stretch;
          align-items: center;
          margin-bottom: var(--space-m);

          .space-title {
              @include step-2;
              color: var(--color-primary-blue-03);
          }
      }

      .space-title-no-link {
          @include step-2;
          color: var(--color-primary-blue-05);
      }

      .svg__graphic-chevron-right {
          .svg__stroke--wayfinder {
              stroke: var(--color-visit-fushia-03);
          }
      }

      .meta {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-content: flex-start;
          align-items: flex-start;

          .location {
              @include step-0;
              color: var(--color-primary-blue-03);
              margin-bottom: var(--space-m);
              .icon {
                  margin-bottom: -10px;
              }
              .location-title {
                  line-height: 20px;
              }
          }
          .text {
              @include step-0;
              margin: 0 24px var(--space-m) 40px;
              padding: 0;
          }
          .button {
              margin-left: 40px;
          }
      }
  }

  // Hover states
  @media #{$has-hover} {
      .space-title a:hover,
      .is-link:hover {
          @include link-hover;
      }
      .location-title:hover {
          @include link-hover;
      }
      &:hover {
          @include card-horizontal-hover;

          text-decoration: none;

          :deep(a.smart-link),
          :deep(button.smart-link) {
              text-decoration: none;
          }
      }
  }

  // Breakpoints
  @media #{$medium} {
      .container {
          display: flex;
          flex-direction: column;

          .arrow-and-title {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: flex-start;
              align-items: center;

              .space-title {
                  margin-left: 0;
              }
          }
      }
  }

  @media #{$small} {
      .container {
          .meta {
              .text {
                  margin-left: 0;
              }
              .button {
                  margin-left: 0;
              }
          }
      }
  }
}
</style>
