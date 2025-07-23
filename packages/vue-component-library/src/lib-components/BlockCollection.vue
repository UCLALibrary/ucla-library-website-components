<script setup lang="ts">
// Imports
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"

// Props
type BlockCollectionProps = {
    href: string
    image: MediaItemType
    title: string
    description: string
}
defineProps<BlockCollectionProps>()
</script>

<template>
    <SmartLink class="block-collection" :to="href">
        <ResponsiveImage class="image" :media="image" :aspect-ratio="108" />
        <div class="content">
            <h5 class="title" v-html="title" />
            <div class="description" v-html="description" />
        </div>
    </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_block-collection.scss";
</style>
