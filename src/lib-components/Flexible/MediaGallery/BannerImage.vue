<template>
    <div class="banner-image" @click="$emit('toggleThumbnails')">
        <responsive-image :image="image" :aspect-ratio="60" object-fit="cover">
            <div v-if="nItems > 1 && !expanded">
                <div class="gradient" />
                <svg-molecule-image-stack class="molecule-image-stack" aria-hidden="true" />
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
        </responsive-image>
    </div>
</template>

<script>
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import MediaBadge from "@/lib-components/MediaBadge.vue"
import SvgMoleculeImageStack from "ucla-library-design-tokens/assets/svgs/molecule-image-stack.svg"

export default {
    name: "FlexibleMediaGalleryBannerImage",
    components: {
        ResponsiveImage,
        MediaBadge,
        SvgMoleculeImageStack,
    },
    props: {
        image: {
            type: Object,
            required: true,
        },
        nItems: {
            type: Number,
            required: true,
        },
        expanded: {
            type: Boolean,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-image {
    cursor: pointer;

    .gradient {
        display: none;
        background: var(--gradient-radial);
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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

// Hovers
@media #{$has-hover} {
    .banner-image:hover {
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
