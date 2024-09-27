<script setup lang="ts">
// import { defineProps, PropType } from 'vue'
import type { FlexibleHorizontalDividerBlock } from '@/types/flexible_types'
// COMPONENTS
import DividerWayFinder from '@/lib-components/DividerWayFinder.vue'
const { block } = defineProps({
    block: {
        type: Object as PropType<FlexibleHorizontalDividerBlock>,
        default: () => { id: ''; typeHandle: 'horizontalDivider'; horizontalDivider: true; },
    },
})
</script>
<template>
    <DividerWayFinder v-if="block.horizontalDivider"/>
</template>