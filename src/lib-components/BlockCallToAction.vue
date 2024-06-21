<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'pinia'
import { useGlobalStore } from '@/stores/GlobalStore'

import ButtonLink from '@/lib-components/ButtonLink.vue'

export default {
  name: 'BlockCallToAction',
  components: {
    ButtonLink,
    SvgCallToActionMoney: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/call-to-action-money.svg'
      )
    ),
    SvgCallToActionChat: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/call-to-action-chat.svg'
      )
    ),
    SvgCallToActionMail: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/call-to-action-mail.svg'
      )
    ),
    SvgCallToActionFind: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/call-to-action-find.svg'
      )
    ),
  },
  props: {
    svgName: {
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
    name: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    isSmallSize: {
      type: Boolean,
      default: false,
    },
    isGlobal: {
      type: Boolean,
      default: false,
    },
    isMeapGlobal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // gives access to this.globals inside the component
    // same as reading from store.count
    ...mapState(useGlobalStore, ['globals']),
    classes() {
      return [
        'block-call-to-action',
        { 'full-width': !this.isSmallSize },
        { 'half-width': this.isSmallSize },
        { 'theme-light': !this.isDark },
        { 'theme-dark': this.isDark },
      ]
    },
    askALibrarian() {
      return this.globals.askALibrarian
    },
    meapCallToAction() {
      return this.globals.meapCallToAction
    },
    // Use Global Ask A Libarian data if isGlobal is true
    parsedContent() {
      if (this.isGlobal) {
        return {
          to: this.askALibrarian.buttonUrl[0].buttonUrl,
          title: this.askALibrarian.askALibrarianTitle,
          text: this.askALibrarian.askALibrarianText,
          label: this.askALibrarian.buttonUrl[0].buttonText,
          svgName: 'svg-call-to-action-chat',
        }
      }
      else if (this.isMeapGlobal) {
        return {
          to: this.meapCallToAction.button[0].buttonUrl,
          title: this.meapCallToAction.titleGeneral,
          text: this.meapCallToAction.summary,
          label: this.meapCallToAction.button[0].buttonText,
          svgName: 'svg-call-to-action-chat',
        }
      }
      else {
        return {
          to: this.to,
          title: this.title,
          text: this.text,
          label: this.name,
          svgName: this.svgName,
        }
      }
    },
  },
}
</script>

<template>
  <div :class="classes">
    <component
      :is="parsedContent.svgName"
      class="svg"
      aria-hidden="true"
    />
    <h2
      class="title"
      v-text="parsedContent.title"
    />
    <div
      class="text"
      v-html="parsedContent.text"
    />
    <!--  this parsedContent.text can have html content so v-html should be used here -->
    <ButtonLink
      v-if="!isDark"
      :label="parsedContent.label"
      :to="parsedContent.to"
      :is-secondary="true"
      class="button-link"
    />
    <ButtonLink
      v-if="isDark"
      :label="parsedContent.label"
      :to="parsedContent.to"
      :is-tertiary="true"
      class="button-link"
    />
  </div>
</template>

<style lang="scss" scoped>
.block-call-to-action {
  max-width: var(--block-width);
  background-color: var(--color-background);
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;

  // Sizes
  &.full-width {
    --block-width: #{$container-l-cta}px;
    --block-padding-title: 70px;
    --block-padding-text: 10px;
  }

  &.half-width {
    --block-width: calc(#{$container-l-cta}px / 2);
    --block-padding-title: 114px;
    --block-padding-text: 112px;
  }

  // Color Themes
  &.theme-light {
    --color-background: var(--color-primary-blue-01);
    --color-title: var(--color-primary-blue-03);
    --color-text: var(--color-black);
    --color-button-background: var(--color-primary-blue-03);
    --color-svg-molecule-outline: var(--color-primary-blue-03);
    --color-svg-molecule-inner-highlight: var(--color-help-green-03);

    .svg :deep(.svg__stroke--primary-blue-03) {
      stroke: var(--color-primary-blue-03);
    }

    :deep(.svg__stroke--help-green-03) {
      stroke: var(--color-help-green-03);
    }

    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-default-cyan-03);
    }

    :deep(.svg__fill--default-cyan-03) {
      fill: var(--color-default-cyan-03);
    }
  }

  &.theme-dark {
    --color-background: var(--color-primary-blue-03);
    --color-title: var(--color-white);
    --color-text: var(--color-white);
    --color-svg-molecule-outline: var(--color-primary-blue-02);
    --color-svg-molecule-inner-highlight: var(--color-white);
    --color-button-background: var(--color-primary-blue-03);
    --color-button-border: 2px solid var(--color-default-cyan-02);

    :deep(.svg__stroke--primary-blue-03) {
      stroke: var(--color-primary-blue-02);
    }

    :deep(.svg__stroke--help-green-03) {
      stroke: var(--color-white);
    }

    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--color-help-green-03);
    }

    :deep(.svg__fill--default-cyan-03) {
      fill: var(--color-help-green-03);
    }
  }

  .svg {
    margin-bottom: 32px;
    flex-grow: 0;
    flex-shrink: 0;

    .outline {
      stroke: var(--color-svg-molecule-outline);
    }

    .color {
      stroke: var(--color-svg-molecule-inner-highlight);
    }
  }

  .title {
    @include step-2;
    text-align: center;
    letter-spacing: 0.0025em;
    color: var(--color-title);
    margin-bottom: 16px;
    max-width: 640px;
  }

  .text {
    @include step-0;
    text-align: center;
    color: var(--color-text);
    margin-bottom: 32px;
    max-width: 640px;
  }

  // Breakpoints
  @media #{$medium} {
    &.full-width {
      --block-padding-title: 48px;
      --block-padding-text: 48px;
    }

    &.half-width {
      --block-padding-title: 48px;
      --block-padding-text: 48px;
      width: 100%;
    }

    .title,
    .text {
      padding: 0;
    }
  }

  @media #{$small} {
    &.full-width {
      --block-padding-title: 48px;
      --block-padding-text: 48px;
    }

    &.half-width {
      --block-padding-title: 48px;
      --block-padding-text: 48px;
    }
  }
}
</style>
