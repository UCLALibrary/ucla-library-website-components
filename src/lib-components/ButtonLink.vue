<script>
import { defineAsyncComponent } from 'vue'

// Helper functions
import SvgExternalLink from 'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
import isInternalLink from '@/utils/isInternalLink'
import SmartLink from '@/lib-components/SmartLink.vue'

export default {
  name: 'ButtonLink',
  components: {
    SmartLink,
    SvgExternalLink,
    SvgArrowRight: defineAsyncComponent(() =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
      )
    ),
    /* SvgExternalLink: defineAsyncComponent(() =>
       import(
         'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
       )
     ), */
    SvgArrowDownload: defineAsyncComponent(() =>
      import('ucla-library-design-tokens/assets/svgs/icon-download.svg')
    ),
    IconClose: defineAsyncComponent(() =>
      import('ucla-library-design-tokens/assets/svgs/icon-close.svg')
    ),
  },

  props: {
    to: {
      type: String,
      default: '',
    },
    /**
     * Determines what text the button should have.
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * Determines what icon should be used in button.
     * Do not include this prop if it is an internal link.
     */
    iconName: {
      type: String,
      default: '',
    },
    /**
     * Determines if the button should be displayed with secondary styles. (blue)
     */
    isSecondary: {
      type: Boolean,
      default: false,
    },
    isTertiary: {
      type: Boolean,
      default: false,
    },
    isQuaternary: {
      type: Boolean,
      default: false,
    },
    isDownload: {
      type: Boolean,
      default: false,
    },
    linkTarget: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        'button-link',
        {
          'is-secondary': this.isSecondary,
          'is-tertiary': this.isTertiary,
          'is-quaternary': this.isQuaternary,
        },
      ]
    },
    // if -> the iconName is svg-download then the download icon will display
    // else if -> if there is no iconName prop given & it is an internal link then the svg-arrow-right will display
    // else svg-arrow-diagonal will display
    parsedIconName() {
      switch (true) {
        case this.isDownload:
          return 'svg-arrow-download'
        case isInternalLink(this.to):
          return 'svg-arrow-right'
        case this.linkTarget === '_blank' || this.iconName === 'svg-external-link':
          return 'svg-external-link'
        case this.iconName === 'icon-close':
        case this.iconName:
          return this.iconName
        case this.iconName === 'none':
          return ''
        default:
          return 'svg-external-link'
      }
    },
  },
}
</script>

<template>
  <SmartLink
    :to="to"
    :class="classes"
    :is-download="isDownload"
    :link-target="linkTarget"
  >
    <span class="label">{{ label }}</span>

    <component
      :is="parsedIconName"
      v-if="parsedIconName !== ''"
      class="arrow"
      aria-hidden="true"
    />
    <div class="hover">
      <span class="label">{{ label }}</span>
      <component
        :is="parsedIconName"
        v-if="parsedIconName !== ''"
        class="arrow"
        aria-hidden="true"
      />
    </div>
  </SmartLink>
</template>

<style lang="scss" scoped>
.button-link {
  --button-background-color: #{$white};
  --button-text-color: #{$black};
  --button-icon-single-color: #{$default-cyan-03};
  --button-icon-withaccent-color: #{$primary-blue-03};
  --button-icon-accent-color: #{$default-cyan-03};
  --button-border-color: #{$primary-blue-02};

  .hover {
    --button-background-color: #{$primary-blue-03};
    --button-text-color: #{$white};
    --button-icon-single-color: #{$white};
    --button-icon-withaccent-color: #{$white};
    --button-icon-accent-color: #{$default-cyan-03};
    --button-border-color: #{$primary-blue-03};
  }

  &.is-secondary {
    --button-background-color: #{$primary-blue-03};
    --button-text-color: #{$white};
    --button-icon-single-color: #{$white};
    --button-icon-withaccent-color: #{$white};
    --button-icon-accent-color: #{$default-cyan-03};
    --button-border-color: #{$primary-blue-03};

    .hover {
      --button-background-color: #{$white};
      --button-text-color: #{$black};
      --button-icon-single-color: #{$default-cyan-03};
      --button-icon-withaccent-color: #{$primary-blue-03};
      --button-icon-accent-color: #{$default-cyan-03};
      --button-border-color: #{$primary-blue-02};
    }
  }

  &.is-tertiary {
    --button-background-color: #{$primary-blue-03};
    --button-text-color: #{$white};
    --button-icon-single-color: #{$white};
    --button-icon-withaccent-color: #{$white};
    --button-icon-accent-color: #{$white};
    --button-border-color: #{$default-cyan-02};

    .hover {
      --button-background-color: #{$primary-blue-03};
      --button-text-color: #{$white};
      --button-icon-single-color: #{$white};
      --button-icon-withaccent-color: #{$white};
      --button-icon-accent-color: #{$white};
      --button-border-color: #{$white};
    }
  }

  &.is-quaternary {
    --button-background-color: #{$secondary-grey-01};
    --button-text-color: #{$black};
    --button-icon-single-color: #{$black};
    --button-icon-withaccent-color: #{$black};
    --button-icon-accent-color: #{$black};
    --button-border-color: #{$secondary-grey-01};

    .hover {
      --button-background-color: #{$white};
      --button-text-color: #{$black};
      --button-icon-single-color: #{$black};
      --button-icon-withaccent-color: #{$black};
      --button-icon-accent-color: #{$black};
      --button-border-color: #{$secondary-grey-01};
    }
  }

  // General Styling
  box-sizing: border-box;
  position: relative;
  @include button;
  min-height: 48px;
  padding: 4px 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1.5px solid var(--button-border-color);
  color: var(--button-text-color);
  background-color: var(--button-background-color);
  overflow: hidden;
  z-index: 0;

  .hover {
    position: absolute;
    inset: 0 0 0 0;
    clip-path: inset(0% 100% 0% 0%);

    transition-property: clip-path;
    @include animate-normal;

    @include button;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: var(--button-text-color);
    background-color: var(--button-background-color);
    overflow: hidden;
    z-index: 0;
  }

  .label {
    white-space: nowrap;
  }

  .arrow {
    flex-shrink: 0;

    :deep(.svg__stroke--primary-blue-03),
    :deep(.svg__stroke--default-cyan-03) {
      stroke: var(--button-icon-single-color);
    }

    &.svg__icon-close {
      :deep(circle) {
        stroke: transparent;
        fill: transparent;
      }
    }
  }

  :deep(.svg__icon-external-link),
  :deep(.svg__icon-download) {
    .svg__stroke--primary-blue-03 {
      stroke: var(--button-icon-withaccent-color);
    }

    .svg__stroke--default-cyan-03 {
      stroke: var(--button-icon-accent-color);
    }

    .svg__fill--primary-blue-03 {
      fill: var(--button-icon-withaccent-color);
      stroke: transparent;
    }
  }

  *:not(:only-child):first-child {
    padding-left: 8px;
  }

  @media #{$has-hover} {

    &:hover,
    &:focus,
    &:focus-visible {
      cursor: hover;

      .hover {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
  }

  // Breakpoints
  @media #{$medium} {
    padding: 4px 16px;
    display: inline-flex;
  }

  @media #{$small} {
    width: 100%;
  }
}
</style>
