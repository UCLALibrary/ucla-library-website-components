<script setup lang="ts">
// Imports
import { computed } from "vue"
import BlockAssetPod from "@/lib-components/BlockAssetPod.vue"
import type { BlockAssetPodProps } from "@/types/components/blockAssetPods.types"

interface GridAssetPodProps {
    readonly items: readonly BlockAssetPodProps[]
}

// Props
const props = defineProps<GridAssetPodProps>()

// Computeds
const hasItems = computed(() => props.items.length > 0)
</script>

<template>
    <div
        v-if="hasItems"
        class="grid-asset-pod"
        :aria-label="`Asset grid with ${items.length} items`"
    >
        <div class="block-container" v-for="item in items" :key="item.title">
            <BlockAssetPod
                :title="item.title"
                :to="item.to"
                :date="item.date"
                :description="item.description"
                :resource-type="item.resourceType"
                :collection="item.collection"
                :image="item.image"
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
