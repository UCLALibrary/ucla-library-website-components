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
.grid-collections {
    --columns: 3;
    --gap-row: 40px;
    --gap-col: 16px;
    --block-width: calc(
        (100% - (var(--columns) - 1) * var(--gap-col)) / calc(var(--columns))
    );

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-row) var(--gap-col);
    .block {
        padding: 0;
        width: var(--block-width);
    }
    // Hovers
    @media #{$has-hover} {
    }
    // Breakpoints
    @media #{$extra-large} {
    }
    @media #{$medium} {
    }
    @media #{$small} {
        --block-width: 100%;
    }
}
</style>
