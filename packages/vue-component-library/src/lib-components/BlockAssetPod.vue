<script setup lang="ts">
// Imports
import { computed, ref } from "vue"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import type {
    BlockAssetPodProps,
    LinkItem,
} from "@/types/components/blockAssetPods.types"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

// Types
interface MetaItem {
    readonly title: string
    readonly value: string | readonly LinkItem[]
    readonly class?: string
}

// Props with defaults
const props = withDefaults(defineProps<BlockAssetPodProps>(), {
    resourceType: () => [],
    collection: () => [],
})

// Data
const isHoveringLink = ref(false)

// Computed
const classes = computed(() => [
    "block-asset-pod",
    theme?.value || "",
    { "is-hovering-link": isHoveringLink.value },
])

const itemsMeta = computed((): readonly MetaItem[] => {
    const items: MetaItem[] = []

    if (props.description) {
        items.push({
            title: "Description",
            value: props.description,
        })
    }

    if (props.date) {
        items.push({
            title: "Date",
            value: props.date,
            class: "date",
        })
    }

    if (props.resourceType?.length) {
        items.push({
            title: "Resource Type",
            value: props.resourceType,
        })
    }

    if (props.collection?.length) {
        items.push({
            title: "Collection",
            value: props.collection,
        })
    }

    return items
})

// Methods
const handleLinkMouseEnter = (): void => {
    isHoveringLink.value = true
}

const handleLinkMouseLeave = (): void => {
    isHoveringLink.value = false
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
            :media="image"
            class="image"
            :alt="`${title} preview`"
        />

        <div class="meta">
            <h3 class="title">{{ title }}</h3>

            <ul class="items" v-if="itemsMeta.length">
                <template v-for="item in itemsMeta" :key="item.title">
                    <li :class="['item', item.class]">
                        <span class="item-title">{{ item.title }}</span>
                        <span class="item-value">
                            <template v-if="Array.isArray(item.value)">
                                <SmartLink
                                    v-for="link in item.value"
                                    :key="link.text"
                                    :to="link.to"
                                    class="links"
                                    @mouseenter="handleLinkMouseEnter"
                                    @mouseleave="handleLinkMouseLeave"
                                    :aria-label="`Go to ${link.text}`"
                                >
                                    {{ link.text }}
                                </SmartLink>
                            </template>
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
