<script>
import { defineAsyncComponent } from 'vue'

// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// UTILITY FUNCTIONS
import getSectionName from '@/utils/getSectionName'
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'
import IllustrationDigitizedResources from 'ucla-library-design-tokens/assets/svgs/illustration-digitized-resources.svg'
import IllustrationTeaching from 'ucla-library-design-tokens/assets/svgs/illustration-teaching.svg'
export default {
  name: 'BlockCardWithIllustration',
  components: {
    SmartLink,
    IllustrationBookBinding: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-book-binding.svg'
      )),
    IllustrationBorrowingBooks: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-borrowing-books.svg'
      )),
    IllustrationDatabases: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-databases.svg'
      )),
    IllustrationDigitizedResources,
    /*: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-digitized-resources.svg'
      )),*/
    IllustrationFindSpace: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-find-space.svg'
      )),
    IllustrationRemoteAccess: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-remote-access.svg'
      )),
    IllustrationResearch: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-research.svg'
      )),
    IllustrationTeaching,
    /*: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/illustration-teaching.svg'
      )),*/
  },
  props: {
    iconName: {
      type: String,
      default: 'illustration-remote-access',
    },
    category: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    isHorizontal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'block-card-with-illustration',
        `color-${this.sectionName}`,
        { 'is-horizontal': this.isHorizontal },
      ]
    },
    sectionName() {
      return getSectionName(this.to)
    },
    parsedSvgName() {
      return `${this.iconName}`
    },
    isExternalLink() {
      return !!this.to.includes('http')
    },
    parsedTextHorizontal() {
      return this.text ? removeHtmlTruncate(this.text, 250) : ''
    },
    parsedTextVertical() {
      return this.text ? removeHtmlTruncate(this.text) : ''
    },
  },
}
</script>

<template>
  <li :class="classes">
    <component
      :is="parsedSvgName"
      class="svg"
      aria-hidden="true"
    />

    <div class="meta">
      <div
        v-if="category"
        class="category"
        v-html="category"
      />

      <SmartLink
        v-if="to"
        :to="to"
      >
        <h3
          class="title"
          v-html="title"
        />
      </SmartLink>

      <div
        v-if="isHorizontal"
        class="text"
      >
        {{ parsedTextHorizontal }}
      </div>

      <div
        v-else
        class="text"
      >
        {{ parsedTextVertical }}
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.block-card-with-illustration {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color-primary-blue-01);
  border-radius: var(--rounded-slightly-all);

  transition-property: box-shadow, transform;
  @include animate-normal;

  // Themes
  --color-theme: var(--color-primary-blue-01);

  &.color-visit {
    --color-theme: var(--color-visit-fushia-01);
  }

  &.color-help {
    --color-theme: var(--color-help-green-01);
  }

  &.color-about {
    --color-theme: var(--color-about-purple-01);
  }

  .meta {
    background-color: var(--color-primary-blue-01);
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .smart-link {
    @include card-clickable-area;
  }

  .title {
    @include step-1;
    color: var(--color-primary-blue-05);
  }

  .text {
    @include step--1;
    font-family: var(--font-secondary);
    color: var(--color-primary-blue-05);
  }

  // VARIATIONS
  // Vertical
  &:not(&.is-horizontal) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100% / 3) - 22px);

    .svg {
      flex-shrink: 0;
      padding: 20px 0;
    }

    .meta {
      background-color: var(--color-primary-blue-01);
      width: 100%;
      height: 100%;

      .title {
        @include truncate(2);
        justify-content: flex-end;
        text-align: center;
      }

      .text {
        @include truncate(4);
        text-align: center;
      }
    }

    @media #{$medium} {
      min-width: 288px;
    }
  }

  // Horizontal
  &.is-horizontal {
    display: flex;
    flex-direction: row;
    align-items: stretch;

    width: 100%;

    .svg {
      align-self: center;
      flex-grow: 0;
      flex-shrink: 0;
      padding: 0 20px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0;

      width: 100%;

      .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-bottom: var(--space-s);
      }

      .title {
        @include truncate(2);
        text-align: left;

        margin-bottom: var(--space-m);
        margin-top: 0;
      }

      .text {
        @include truncate(4);
        text-align: left;
      }
    }

    @media #{$small} {
      .svg {
        display: none;
      }

      .meta {
        padding: 24px;
      }
    }
  }

  // Hovers
  @media #{$has-hover} {
    &:hover {
      @include card-horizontal-hover;
      border: 2px solid var(--color-theme);
      cursor: pointer;

      .meta {
        background-color: var(--color-theme);
      }

      .title {
        @include link-hover;
      }
    }
  }
}
</style>
