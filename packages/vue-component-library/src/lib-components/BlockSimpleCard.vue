<script setup>
import { computed } from 'vue'

// COMPONENTS
import SvgArrowDiagonal from 'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
import SvgArrowRightSmall from 'ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg'
import SmartLink from '@/lib-components/SmartLink'

import { useTheme } from '@/composables/useTheme'

// UTILITY FUNCTIONS
import getSectionName from '@/utils/getSectionName'
import isInternalLink from '@/utils/isInternalLink'
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

const { title, text, to } = defineProps({
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
})

const theme = useTheme()

const sectionName = computed(() => {
  return getSectionName(to)
})

const classes = computed(() => {
  return ['block-simple-card', `color-${sectionName.value}`, theme?.value || '']
})

const parsedIconName = computed(() => {
  return isInternalLink(to)
    ? SvgArrowRightSmall
    : SvgArrowDiagonal
})

const parsedText = computed(() => {
  return text ? removeHtmlTruncate(text, 250) : ''
})
</script>

<template>
  <li :class="classes">
    <!-- TODO: Fix sectionName to use "to" value to determine section -->
    <span class="section">{{ sectionName }}</span>
    <h3 class="title2">
      <SmartLink v-if="title" :to="to" class="title">
        {{ title }}
      </SmartLink>
    </h3>

    <div v-if="text" class="text">
      {{ parsedText }}
    </div>

    <div class="spacer" />

    <div class="svg-meta" aria-hidden="true">
      <component :is="parsedIconName" class="svg" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-simple-card.scss";
@import "@/styles/ftva/_block-simple-card.scss";
</style>
