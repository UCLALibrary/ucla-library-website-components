<script setup>
import { computed, defineAsyncComponent } from 'vue'

import { useGlobalStore } from '@/stores/GlobalStore'

import ButtonLink from '@/lib-components/ButtonLink.vue'

const props = defineProps(
  {
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
  }
)

const SvgCallToActionChat = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/call-to-action-chat.svg')
)

const SvgCallToActionFind = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/call-to-action-find.svg')
)

const SvgCallToActionMail = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/call-to-action-mail.svg')
)

const SvgCallToActionMoney = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/call-to-action-money.svg')
)

const iconMapping = {
  'svg-call-to-action-chat': {
    icon: SvgCallToActionChat,
    label: 'CTA Chat'
  },
  'svg-call-to-action-find': {
    icon: SvgCallToActionFind,
    label: 'CTA Find'
  },
  'svg-call-to-action-mail': {
    icon: SvgCallToActionMail,
    label: 'CTA Mail'
  },
  'svg-call-to-action-money': {
    icon: SvgCallToActionMoney,
    label: 'CTA Money'
  },
}

const store = useGlobalStore()

const classes = computed(() => {
  return [
    'block-call-to-action',
    { 'full-width': !props.isSmallSize },
    { 'half-width': props.isSmallSize },
    { 'theme-light': !props.isDark },
    { 'theme-dark': props.isDark },
  ]
})

const askALibrarian = computed(() => {
  return store.globals.askALibrarian
})

const meapCallToAction = computed(() => {
  return store.globals.meapCallToAction
})

// Use Global Ask A Libarian data if isGlobal is true
const parsedContent = computed(() => {
  if (props.isGlobal) {
    return {
      to: askALibrarian.value.buttonUrl[0].buttonUrl,
      title: askALibrarian.value.askALibrarianTitle,
      text: askALibrarian.value.askALibrarianText,
      label: askALibrarian.value.buttonUrl[0].buttonText,
      svgName: iconMapping['svg-call-to-action-chat'].icon,
    }
  }
  else if (props.isMeapGlobal) {
    return {
      to: meapCallToAction.value.button[0].buttonUrl,
      title: meapCallToAction.value.titleGeneral,
      text: meapCallToAction.value.summary,
      label: meapCallToAction.value.button[0].buttonText,
      svgName: iconMapping['svg-call-to-action-chat'].icon,
    }
  }
  else {
    return {
      to: props.to,
      title: props.title,
      text: props.text,
      label: props.name,
      svgName: iconMapping[props.svgName].icon,
    }
  }
})
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
    >
      {{ parsedContent.title }}
    </h2>
    <div
      class="text"
      v-html="parsedContent.text"
    />
    <ButtonLink
      v-if="!props.isDark"
      :label="parsedContent.label"
      :to="parsedContent.to"
      :is-secondary="true"
      class="button-link"
    />
    <ButtonLink
      v-if="props.isDark"
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
