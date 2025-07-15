<script setup lang="ts">
// Imports
import type { MediaItemType } from "@/types/types"
import BlockAssetPod from "@/lib-components/BlockAssetPod.vue"

// TODO: add types in seperate file
type LinkItem = {
    to: string
    text: string
}

type GridAsssetPodProps = {
    items: {
        title: string
        to: string
        date?: string
        description?: string
        resourceType?: LinkItem[]
        collection?: LinkItem[]
        image: MediaItemType
    }[]
}

// Props
defineProps<GridAsssetPodProps>()
</script>

<template>
    <div class="grid-asset-pod">
        <div class="block-container" v-for="item in items" :key="item.title">
            <block-asset-pod
                :title="item.title"
                :to="item.to"
                :date="item.date"
                :description="item.description"
                :resource-type="item.resourceType"
                :collection="item.collection"
                :image="item.image"
                class="block-asset-pod"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid-asset-pod {
    .block-container {
        border-bottom: 2px dotted var(--color-secondary-grey-03);
        padding-bottom: 24px;
        margin-bottom: 24px;

        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
}
</style>
