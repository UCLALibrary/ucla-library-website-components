<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'

import type { FlexibleCallToAction } from '@/types/flexible_types'
import BlockCallToAction from '@/lib-components/BlockCallToAction.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCallToAction>,
    default: () => {},
  },
})

const parsedItems = computed(() => {
  return block.callToAction[0]
})
</script>

<template>
  <BlockCallToAction
    class="cta-block-content-width"
    :to="parsedItems.buttonUrl"
    :name="parsedItems.buttonText"
    :title="parsedItems.titleCta"
    :text="parsedItems.summary"
    :svg-name="parsedItems.icon"
    :is-dark="parsedItems.backgroundColor"
  />
</template>

<style lang="css" scoped></style>
