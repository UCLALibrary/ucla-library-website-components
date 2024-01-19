<script setup lang="ts">
import { computed } from 'vue'

import BlockCallToActionTwoUp from '@/lib-components/BlockCallToActionTwoUp.vue'

const { block } = defineProps({
  block: {
    type: Object,
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
