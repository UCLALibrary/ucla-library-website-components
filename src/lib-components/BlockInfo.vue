<script setup>
import { computed } from 'vue'

import IconWithLink from './IconWithLink.vue'
import RichText from './RichText.vue'
import { useTheme } from '@/composables/useTheme'

const { colorScheme, contactList } = defineProps({
  colorScheme: {
    type: String,
    default: '',
  },
  contactList: {
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
      <slot name="block-info-contact" :contact-list="contactList">
        <ul class="block-info-contact">
          <li>
            <IconWithLink
              :text="contactList.phone"
              icon-name="svg-icon-phone"
              :to="contactList.phone"
            />
          </li>
          <li>
            <IconWithLink
              :text="contactList.email"
              icon-name="svg-icon-email"
              :to="contactList.email"
            />
          </li>
          <li class="block-info-address">
            <IconWithLink
              icon-name="svg-icon-location"
            />
            <RichText :rich-text-content="contactList.address" />
          </li>
        </ul>
      </slot>
    </div>

    <div v-if="$slots['block-info-bottom']" class="block-info-bottom-wrapper">
      <slot name="block-info-bottom" />
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
