<script setup>
import { computed } from 'vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

import { useTheme } from '@/composables/useTheme'

const { contentList, colorScheme } = defineProps({
  contentList: {
    type: Array,
    default: () => []
  },

  colorScheme: {
    type: String,
    default: '',
  },
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-info', colorScheme, theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div v-if="$slots['block-info-header']" class="block-info-header-wrapper">
      <slot name="block-info-header" />
    </div>

    <div v-if="$slots['block-info-body']" class="block-info-body-wrapper">
      <slot name="block-info-body" />
    </div>

    <div v-if="$slots['block-info-list']" class="block-info-list-wrapper">
      <slot name="block-info-list" />
    </div>

    <div v-if="$slots['block-info-footer']" class="block-info-footer-wrapper">
      <slot name="block-info-footer" />
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

<!-- <h1 class="block-info-header">
      Ticket Info
    </h1>
    <ul class="block-info-list">
      <li
        v-for="(item, index) in parsedTicketInfo"
        :key="`${item}-${index}`"
      >
        {{ item }}
      </li>
    </ul>
    <ButtonLink
      label="Plan Your Visit"
      :to="to"
      class="button"
      :is-secondary="true"
      icon-name="none"
    /> -->
