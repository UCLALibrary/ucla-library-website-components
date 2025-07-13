<script setup lang="ts">
// Imports
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "./ResponsiveImage.vue"
import SmartLink from "./SmartLink.vue"
import { computed, ref } from "vue"

type LinkItem = {
    to: string
    text: string
}
type BlockAssetPodProps = {
    title: string
    to: string
    date?: string
    description?: string
    resourceType?: LinkItem[]
    collection?: LinkItem[]
    image: MediaItemType
}

// Props
const props = defineProps<BlockAssetPodProps>()

// Data
const isHoveringLink = ref(false)

// Computed
const classes = computed(() => [
    "block-asset-pod",
    { "is-hovering-link": isHoveringLink.value },
])
const itemsMeta = computed(() => {
    const items: { title: string; value: string | LinkItem[] }[] = []

    if (props.description) {
        items.push({ title: "Description", value: props.description })
    }
    if (props.date) {
        items.push({ title: "Date", value: props.date })
    }
    if (props.resourceType && props.resourceType.length > 0) {
        items.push({
            title: "Resource Type",
            value: props.resourceType.map((item) => ({
                to: item?.to || "",
                text: item?.text || "",
            })),
        })
    }
    if (props.collection && props.collection.length > 0) {
        items.push({
            title: "Collection",
            value: props.collection.map((item) => ({
                to: item?.to || "",
                text: item?.text || "",
            })),
        })
    }

    return items
})
</script>

<template>
    <smart-link :class="classes" :to="to">
        <responsive-image :media="image" class="image" />

        <div class="meta">
            <h3 class="title">{{ title }}</h3>
            <ul class="items">
                <li v-for="item in itemsMeta" :key="item.title" class="item">
                    <span class="item-title">{{ item.title }}</span>
                    <span class="item-value">
                        <smart-link
                            v-if="Array.isArray(item.value)"
                            v-for="link in item.value"
                            :key="link.text"
                            :to="link.to"
                            class="links"
                            @mouseenter="isHoveringLink = true"
                            @mouseleave="isHoveringLink = false"
                        >
                            {{ link.text }}
                        </smart-link>
                        <span v-else>{{ item.value }}</span>
                    </span>
                </li>
            </ul>
        </div>
    </smart-link>
</template>

<style lang="scss" scoped>
.block-asset-pod {
    display: flex;
    align-items: flex-start;
    gap: 24px;

    .image {
        aspect-ratio: 1;
        min-width: 200px;
        width: 20%;
    }

    .meta {
        width: 80%;
    }
    .title {
        margin: 0 0 8px;

        font-size: 22px;
        font-weight: 700;
        line-height: 120%;
        color: var(--color-primary-blue-04);
    }
    .item {
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
    }
    .item-title {
        width: 130px;

        font-family: var(--font-primary);
        font-size: 16px;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        color: var(--color-black);
    }
    .item-value {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 8px;
        width: calc(100% - 140px);

        font-family: var(--font-secondary);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #222; // TODO: add color variable
    }
    .links {
        padding: 0;

        &.is-link {
            font-family: var(--font-primary);
            font-size: 18px;
            font-weight: 700;
            color: var(--color-primary-blue-04);
        }
    }

    // Hovers
    @media #{$has-hover} {
        // only apply hover on block asset pod when not hovering a link
        &:not(.is-hovering-link):hover {
            .title {
                text-decoration: underline;
            }
        }
        .links.is-link:hover {
            text-decoration: underline;
        }
    }

    // Breakpoints
    @media #{$small} {
        flex-direction: column;
        gap: 16px;

        .image {
            width: 100%;
            min-width: unset;
        }

        .meta {
            width: 100%;
        }
        .item-title {
            display: none;
        }
        .item-value {
            width: 100%;
        }
    }
}
</style>
