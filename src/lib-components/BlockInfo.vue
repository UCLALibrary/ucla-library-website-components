<script setup>
import { computed } from 'vue'

import IconWithLink from './IconWithLink.vue'
import RichText from './RichText.vue'
import { useTheme } from '@/composables/useTheme'

const { colorScheme, contactInfo } = defineProps({
  colorScheme: {
    type: String,
    default: '',
  },
  contactInfo: {
    type: Object,
    default: () => ({})
  }
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-info', colorScheme, theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div v-if="$slots['block-info-top']" class="block-info-top-wrapper">
      <slot name="block-info-top" />
    </div>

    <div v-if="$slots['block-info-mid']" class="block-info-mid-wrapper">
      <slot name="block-info-mid" />
    </div>

    <div v-if="$slots['block-info-contact']" class="block-info-contact-wrapper">
      <slot name="block-info-contact" :contact-info="contactInfo">
        <ul class="block-info-contact">
          <li>
            <IconWithLink
              :text="contactInfo.phone"
              icon-name="svg-icon-phone"
              :to="contactInfo.phone"
            />
          </li>
          <li>
            <IconWithLink
              :text="contactInfo.email"
              icon-name="svg-icon-email"
              :to="contactInfo.email"
            />
          </li>
          <li class="block-info-address">
            <IconWithLink
              icon-name="svg-icon-location"
            />
            <RichText :rich-text-content="contactInfo.address" />
          </li>
        </ul>
      </slot>
    </div>

    <div v-if="$slots['block-info-end']" class="block-info-end-wrapper">
      <slot name="block-info-end" />
    </div>
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-info.scss";
@import "@/styles/ftva/_block-info.scss";
</style>
