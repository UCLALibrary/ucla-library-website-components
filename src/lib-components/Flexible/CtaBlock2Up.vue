<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'
import type { FlexibleCallToAction2Up } from '@/types/flexible_types'

import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleCallToAction2Up>,
    default: () => { },
  },
})

const parsedItems = computed(() => {
  return block.content
})
</script>

<template>
  <section>
    <BlockCallToActionTwoUp :items="parsedItems" />
  </section>
</template>
