<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Helper functions
import isInternalLink from '@/utils/isInternalLink'
import SmartLink from '@/lib-components/SmartLink.vue'

const props = defineProps({
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
})

const SvgExternalLink = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-external-link.svg')
)

const SvgArrowRight = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg')
)

const SvgArrowDownload = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-download.svg')
)

const IconClose = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-close.svg')
)

const theme = useTheme()

const classes = computed(() => {
  return [
    'button-link',
    theme?.value || '',
    props.isSecondary
      ? 'is-secondary'
      : props.isTertiary
        ? 'is-tertiary'
        : props.isQuaternary
          ? 'is-quaternary'
          : '',
  ]
})

// if -> the iconName is svg-download then the download icon will display
// else if -> if there is no iconName prop given & it is an internal link then the svg-arrow-right will display
// else svg-arrow-diagonal will display

const parsedIconName = computed(() => {
  switch (true) {
    case props.isDownload:
      return SvgArrowDownload
    case props.iconName === 'none':
      return ''
    case isInternalLink(props.to):
      return SvgArrowRight
    case props.linkTarget === '_blank'
      || props.iconName === 'svg-external-link':
      return SvgExternalLink
    case props.iconName === 'icon-close':
      return IconClose
    // case props.iconName:
    //     return props.iconName
    default:
      return SvgExternalLink
  }
})
</script>

<template>
  <SmartLink
    :to="to"
    :class="classes"
    :is-download="isDownload"
    :link-target="linkTarget"
  >
    <span class="label">{{ label }}</span>
    <slot />
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

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_button-link.scss";
@import "@/styles/ftva/_button-link.scss";
</style>
