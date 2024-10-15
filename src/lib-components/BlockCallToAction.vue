<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

import { useGlobalStore } from '@/stores/GlobalStore'

import ButtonLink from '@/lib-components/ButtonLink.vue'

import { useTheme } from '@/composables/useTheme'

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
    isCentered: {
      type: Boolean,
      default: true,
    },
    isGlobal: {
      type: Boolean,
      default: false,
    },
    isMeapGlobal: {
      type: Boolean,
      default: false,
    },
    useGlobalData: {
      type: Boolean,
      default: false
    }
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

const SvgCallToActionFTVAExternalLinkDark = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-ftva-external-link-dark.svg')
)

const SvgCallToActionFTVAInfo = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-ftva-info.svg')
)

const SvgCallToActionFTVAPDF = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-ftva-pdf.svg')
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
  'svg-call-to-action-ftva-external-link-dark': {
    icon: SvgCallToActionFTVAExternalLinkDark,
    label: 'CTA FTVA External Link'
  },
  'svg-call-to-action-ftva-info': {
    icon: SvgCallToActionFTVAInfo,
    label: 'CTA FTVA Info'
  },
  'svg-call-to-action-ftva-pdf': {
    icon: SvgCallToActionFTVAPDF,
    label: 'CTA FTVA PDF'
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

const askALibrarian = computed(() => {
  return store.globals.askALibrarian
})

const meapCallToAction = computed(() => {
  return store.globals.meapCallToAction
})

const ftvaViewingInformation = computed(() => {
  return store.globals.ftvaViewingInformation
})

const theme = useTheme()

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
  else if (props.useGlobalData && theme?.value === 'ftva') {
    return {
      title: ftvaViewingInformation.value.title,
      text: ftvaViewingInformation.value.text,
      svgName: iconMapping['svg-call-to-action-ftva-info'].icon,
    }
  }
  else {
    return {
      to: props.to,
      title: props.title,
      text: props.text,
      label: props.name,
      svgName: iconMapping[props.svgName as keyof typeof iconMapping].icon,
    }
  }
})

const classes = computed(() => {
  return [
    'block-call-to-action',
    { 'full-width': !props.isSmallSize },
    { 'half-width': props.isSmallSize },
    { 'theme-light': !props.isDark },
    { 'theme-dark': props.isDark },
    { 'slim-left-align': !props.isCentered }, // For FTVA SlimCTA
    theme?.value || ''
  ]
})
</script>

<template>
  <div :class="classes">
    <component
      :is="parsedContent.svgName"
      class="svg"
      aria-hidden="true"
    />
    <div>
      <h2
        v-if="props.title || parsedContent.title"
        class="title"
      >
        {{ parsedContent.title }}
      </h2>
      <div
        :class="{ 'ftva-global-data': props.useGlobalData && theme === 'ftva' }"
        class="text"
        v-html="parsedContent.text"
      />
    </div>
    <div v-if="theme !== 'ftva'">
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-call-to-action.scss";
@import "@/styles/ftva/_block-call-to-action.scss";
</style>
