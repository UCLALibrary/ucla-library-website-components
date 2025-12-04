<script setup lang="ts">
// Imports
import MetadataTable from '@/lib-components/MetadataTable.vue'
import type { MetadataTableProps } from '@/types/components/metadata-table.types'

interface GridMetadataProps {
  items: MetadataTableProps[]
}

// Props
defineProps<GridMetadataProps>()

// Data

// Methods

// Computed

// Watchers

// Lifecycle Hooks
</script>

<template>
  <section class="grid-metadata">
    <div v-for="item in items" :key="item.title" class="grid-metadata-item">
      <MetadataTable :title="item.title" :items="item.items" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-metadata.scss";
</style>
