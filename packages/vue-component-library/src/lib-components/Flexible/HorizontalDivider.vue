<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FlexibleHorizontalDividerBlock } from '@/types/flexible_types'

// COMPONENTS
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleHorizontalDividerBlock>,
    default: () => { },
  },
})
</script>

<template>
  <DividerWayFinder v-if="block.horizontalDivider" />
</template>
