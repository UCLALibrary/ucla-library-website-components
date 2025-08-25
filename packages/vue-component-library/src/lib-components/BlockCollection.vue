<script setup lang="ts">
// Imports
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import { computed } from "vue"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

// Props
type BlockCollectionProps = {
    href: string
    image: MediaItemType
    title: string
    description: string
}
defineProps<BlockCollectionProps>()

// Computed
const classes = computed(() => {
    return ["block-collection", "dlc", theme?.value || ""]
})
</script>

<template>
    <SmartLink :class="classes" :to="href">
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
