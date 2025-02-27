<script setup>
import { computed } from 'vue'

import { useTheme } from '@/composables/useTheme'

const { blockList, colorScheme } = defineProps({
  blockList: {
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

    <div v-if="$slots['block-info-text']" class="block-info-text-wrapper">
      <slot name="block-info-text" />
    </div>

    <div v-if="$slots['block-info-list']" class="block-info-list-wrapper">
      <slot name="block-info-list">
        <!-- Default List -->
        <ul class="block-info-list">
          <li
            v-for="(item, index) in blockList"
            :key="`${item}-${index}`"
          >
            {{ item }}
          </li>
        </ul>
      </slot>
    </div>

    <div v-if="$slots['block-info-btn']" class="block-info-btn-wrapper">
      <slot name="block-info-btn" />
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
