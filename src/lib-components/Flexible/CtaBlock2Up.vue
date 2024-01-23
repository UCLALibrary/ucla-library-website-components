<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'
import type { FlexibleCtaBlock2Up } from '@/types/flexible_types'

import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCtaBlock2Up>,
    default: () => {},
  },
})

const parsedItems = computed(() => {
  return block.ctaBlock2Up
})
</script>

<template>
  <section>
    <BlockCallToActionTwoUp :items="parsedItems" />
  </section>
</template>
