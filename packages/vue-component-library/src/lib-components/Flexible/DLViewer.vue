<script setup lang="ts">
import type { PropType } from 'vue'

// COMPONENTS
import DLViewer from '@/lib-components/DLViewer.vue'
import RichText from '@/lib-components/RichText.vue'

import type { FlexibleDLViewerBlock } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleDLViewerBlock>,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="flexible-dl-viewer">
    <div v-if="block?.manifestUrl" class="dl-viewer-wrapper">
      <DLViewer :iiif_manifest_url="block.manifestUrl" />
    </div>
    <RichText
      v-if="block?.caption"
      class="viewer-caption"
      :rich-text-content="block.caption"
    />
  </div>
</template>

<style lang="scss" scoped>
.flexible-dl-viewer {
  .dl-viewer-wrapper {
    margin-bottom: var(--space-m, 1rem);
  }

  .viewer-caption {
    font-size: var(--step-0);
    color: var(--color-neutral-07);
  }
}
</style>
