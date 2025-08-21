<script setup lang="ts">
// Imports
import { computed, ref } from "vue"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import type { BlockAssetPodProps } from "@/types/components/blockAssetPods.types"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

// Props with defaults
defineProps<BlockAssetPodProps>()

// Data
const isHoveringLink = ref(false)

// Computed
const classes = computed(() => [
    "block-asset-pod",
    theme?.value || "",
    { "is-hovering-link": isHoveringLink.value },
])

// Methods
const handleLinkMouseEnter = (event: MouseEvent): void => {
    if ((event.currentTarget as HTMLElement)?.classList.contains("is-link")) {
        isHoveringLink.value = true
    }
}

const handleLinkMouseLeave = (event: MouseEvent): void => {
    if ((event.currentTarget as HTMLElement)?.classList.contains("is-link")) {
        isHoveringLink.value = false
    }
}

// Get the class for the metadata item
const getMetadataItemClass = (key: string): string => {
    return key.toLowerCase().replace(/\s+/g, "-")
}
</script>

<template>
    <SmartLink
        :class="classes"
        :to="to"
        role="article"
        :aria-label="`View ${title}`"
    >
        <ResponsiveImage
            :media="media"
            class="image"
            :alt="`${title} preview`"
        />

        <div class="meta">
            <h3 class="title">{{ title }}</h3>

            <ul class="items" v-if="metadata?.length">
                <template v-for="item in metadata" :key="item.key">
                    <li :class="['item', getMetadataItemClass(item.key)]">
                        <span class="item-title">{{ item.key }}</span>
                        <span class="item-value">
                            <SmartLink
                                v-if="item.to"
                                :to="item.to"
                                class="smart-link"
                                @mouseenter="handleLinkMouseEnter"
                                @mouseleave="handleLinkMouseLeave"
                                :aria-label="`Go to ${item.value}`"
                            >
                                {{ item.value }}
                            </SmartLink>
                            <span v-else>{{ item.value }}</span>
                        </span>
                    </li>
                </template>
            </ul>
        </div>
    </SmartLink>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_block-asset-pod.scss";
</style>
