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
        class="grid-asset-pod dlc"
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
@import "@/styles/dlc/_grid-asset-pod.scss";
</style>
