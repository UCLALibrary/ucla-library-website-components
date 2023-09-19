<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import SvgMoleculeImageStack from 'ucla-library-design-tokens/assets/svgs/molecule-image-stack.svg'
import MediaItem from '@/lib-components/Media/Item.vue'
import MediaBadge from '@/lib-components/MediaBadge.vue'
import RichText from '@/lib-components/RichText.vue'
import type { MediaItemType } from '@/types/types'

const props = defineProps({
    item: {
        type: Array as PropType<MediaItemType[]>,
        default: () => [],
    },
    coverImage: {
        type: Array as PropType<MediaItemType[]>,
        default: () => [],
    },
    embedCode: {
        type: String,
        default: '',
    },
    nItems: {
        type: Number,
        required: true,
    },
    expanded: {
        type: Boolean,
        required: true,
    },
    isHalfWidth: {
        type: String,
        default: '',
    },
    sectionTitle: {
        type: String,
        default: '',
    },
    sectionSummary: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['toggleThumbnails'])

const classes = computed(() => {
    return [
        'banner-image',
        props.isHalfWidth === 'halfWidth' ? 'half-width-media-item' : '',
    ]
})
</script>

<template>
    <div :class="classes">
        <MediaItem
            :item="item"
            :embed-code="embedCode"
            :cover-image="coverImage"
            :aspect-ratio="60"
            object-fit="cover"
            class="media-item"
            @click="emit('toggleThumbnails')"
        >
            <div v-if="nItems > 1 && !expanded">
                <div class="gradient" />
                <SvgMoleculeImageStack
                    class="molecule-image-stack"
                    aria-hidden="true"
                />
            </div>
            <MediaBadge
                v-if="nItems > 1"
                :is-expanded="expanded"
            >
                {{ nItems }}
                images
                <svg class="glyph-expand">
                    <line
                        x1="20%"
                        y1="50%"
                        x2="80%"
                        y2="50%"
                        stroke-width="1.5px"
                    />
                    <line
                        v-if="!expanded"
                        y1="20%"
                        x1="50%"
                        y2="80%"
                        x2="50%"
                        stroke-width="1.5px"
                    />
                </svg>
            </MediaBadge>
        </MediaItem>

        <div
            v-if="isHalfWidth"
            class="text-wrapper"
        >
            <h3
                v-if="sectionTitle"
                class="title"
                v-text="sectionTitle"
            />

            <RichText
                v-if="sectionSummary"
                class="summary"
                v-html="sectionSummary"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner-image {

    // cursor: pointer;
    .gradient {
        display: none;
        background: var(--gradient-radial);
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .svg__molecule-image-stack {
        --width: calc(min(128px, 30%));
        width: var(--width);
        height: var(--width);
        position: absolute;
        left: calc(50% - var(--width) / 2);
        top: calc((50% - var(--width) / 2) - 16px);

        .svg__fill--primary-blue-03 {
            fill: var(--color-primary-blue-03);
        }
    }

    .glyph-expand {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-left: 8px;

        border-radius: 12px;
        background: #ffffff;
    }
}

.half-width-media-item {
    display: flex;
    flex-direction: row;
    gap: var(--space-xl);

    .media-item {
        width: calc((100% - 16px) / 2);
        cursor: pointer;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: calc((100% - 16px) / 2);

        .title {
            @include step-3;
            color: var(--color-primary-blue-03);
            margin-bottom: var(--space-l);
            text-align: left;
            width: 100%;
        }

        .summary {
            @include step-0;
            align-items: center;
            text-align: left;
            width: 100%;
        }

        .rich-text {
            padding-right: 0;

            :deep(p:not(:last-child)) {
                margin-bottom: var(--space-m);
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        flex-direction: row;
        gap: var(--space-xl);

        .media-item {
            width: calc((100% - 16px) / 2);
            cursor: pointer;
        }

        .text-wrapper {
            width: calc((100% - 16px) / 2);
        }
    }

    @media #{$small} {
        flex-direction: column;
        flex-wrap: wrap;

        .media-item {
            width: 100%;
        }

        .text-wrapper {
            min-width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
        }
    }
}

// Hovers
@media #{$has-hover} {
    .media-item:hover {
        .gradient {
            display: block;
        }

        .svg__molecule-image-stack {
            .svg__fill--primary-blue-03 {
                fill: var(--color-primary-blue-05);
            }
        }
    }
}
</style>
