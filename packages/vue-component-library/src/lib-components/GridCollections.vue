<script setup lang="ts">
// Imports
import BlockCollection from "@/lib-components/BlockCollection.vue"
import type { MediaItemType } from "@/types/types"

// Props
type GridCollectionsProps = {
    items: Array<{
        id: string
        href: string
        image: MediaItemType
        title: string
        description: string
    }>
}
defineProps<GridCollectionsProps>()
</script>

<template>
    <div class="grid-collections">
        <BlockCollection
            class="block"
            v-for="collection in items"
            :key="collection.id"
            :href="collection.href"
            :image="collection.image"
            :title="collection.title"
            :description="collection.description"
        />
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_grid-collections.scss";
</style>
