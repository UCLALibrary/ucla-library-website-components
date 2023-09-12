<template>
    <div :class="classes">
        <MediaItem
            :item="item"
            :embed-code="embedCode"
            :cover-image="coverImage"
            :aspect-ratio="60"
            object-fit="cover"
            class="media-item"
            @click.native="$emit('toggleThumbnails')"
        >
            <div v-if="nItems > 1 && !expanded">
                <div class="gradient" />
                <svg-molecule-image-stack
                    class="molecule-image-stack"
                    aria-hidden="true"
                />
            </div>
            <media-badge v-if="nItems > 1" :is-expanded="expanded">
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
            </media-badge>
        </MediaItem>
        <div v-if="isHalfWidth" class="text-wrapper">
            <h3 class="title">{{ title }}</h3>
            <p class="summary">
                {{ summary }}
            </p>
        </div>
    </div>
</template>
f5rtfdrc

<script>
import MediaItem from "@/lib-components/Media/Item.vue"
import MediaBadge from "@/lib-components/MediaBadge.vue"
import SvgMoleculeImageStack from "ucla-library-design-tokens/assets/svgs/molecule-image-stack.svg"

export default {
    name: "FlexibleMediaGalleryBannerImage",
    components: {
        MediaItem,
        MediaBadge,
        SvgMoleculeImageStack,
    },
    props: {
        item: {
            type: Array,
            default: () => [],
        },
        coverImage: {
            type: Array,
            default: () => [],
        },
        embedCode: {
            type: String,
            default: "",
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
            type: Boolean,
        },
        title: {
            type: String,
            default: "",
        },
        summary: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "banner-image",
                this.isHalfWidth ? "half-width-media-item" : "",
            ]
        },
    },
}
</script>

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
    gap: 120px;

    .media-item {
        min-width: 456px;
        min-height: 456px;
        cursor: pointer;
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 352px;

        .title {
            @include step-3;
            color: var(--color-primary-blue-03);
            margin-bottom: 16px;
            text-align: left;
            width: 100%;
        }
        .summary {
            align-items: center;
            text-align: left;
            width: 100%;
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
