<script setup lang="ts">
// Imports
import { computed, ref } from "vue"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import type {
    BlockAssetPodProps,
    LinkItem,
} from "@/types/components/blockAssetPods.types"

// Types
interface MetaItem {
    readonly title: string
    readonly value: string | readonly LinkItem[]
}

// Props with defaults
const props = withDefaults(defineProps<BlockAssetPodProps>(), {
    date: undefined,
    description: undefined,
    resourceType: () => [],
    collection: () => [],
})

// Data
const isHoveringLink = ref(false)

// Computed
const classes = computed(() => [
    "block-asset-pod",
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
                <li v-for="item in itemsMeta" :key="item.title" class="item">
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
            </ul>
        </div>
    </SmartLink>
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
        flex: 1;
        min-width: 0; // Prevents flex item from overflowing
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

        // Remove last-child margin
        &:last-child {
            margin-bottom: 0;
        }
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
