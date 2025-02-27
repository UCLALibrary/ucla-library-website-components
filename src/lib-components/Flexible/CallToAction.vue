<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'

import type { FlexibleCallToAction } from '@/types/flexible_types'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'

import { useTheme } from '@/composables/useTheme'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCallToAction>,
    default: () => { },
  },
})

const parsedItems = computed(() => {
  return block.callToAction[0]
})

const theme = useTheme()
const classes = computed(() => {
  return ['flexible-block-call-to-action', theme?.value || '']
})
</script>

<template>
  <BlockCallToAction
    :class="classes"
    :to="parsedItems.buttonUrl"
    :name="parsedItems.buttonText"
    :title="parsedItems.titleCta"
    :text="parsedItems.summary"
    :svg-name="parsedItems.icon"
    :is-dark="(parsedItems.backgroundColor === 'true') || (parsedItems.isDark === 'true')"
  />
</template>

<style lang="css" scoped></style>
