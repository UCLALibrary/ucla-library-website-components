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
.block-collection {
    height: 100%;
    width: 100%;
    cursor: pointer;

    .wrapper {
        border-radius: 5px;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .title {
        margin: 25px 0 0;

        text-align: left;
        font-family: var(--font-primary);
        font-size: 24px;
        font-weight: 700;
        line-height: 120%; /* 28.8px */
        color: var(--color-primary-blue-03);

        text-decoration: underline transparent;

        transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
    }

    .description {
        text-align: left;
        font-family: var(--font-secondary);
        font-size: 18px;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                color: var(--color-black);
                text-decoration-color: var(--color-black);
            }
        }
    }
    // Breakpoints
    @media #{$extra-large} {
    }
    @media #{$medium} {
    }
    @media #{$small} {
    }
}
</style>
