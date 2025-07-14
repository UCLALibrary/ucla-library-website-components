<script setup lang="ts">
// Imports
import { computed } from "vue"
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import ButtonLink from "@/lib-components/ButtonLink.vue"

// Props
type BentoBoxBlockProps = {
    to: string
    image: MediaItemType
    title: string
    text: string
    count?: number
}
const props = withDefaults(defineProps<BentoBoxBlockProps>(), {
    count: 0,
})

// Computed
const parsedCount = computed(() => {
    return `${props.count} Results`
})
</script>

<template>
    <div class="bento-box-block">
        <ResponsiveImage class="image" :media="image" :aspect-ratio="72" />
        <div class="content">
            <span class="count" v-html="parsedCount" />
            <span class="title" v-html="title" />
            <div class="text" v-html="text" />
            <ButtonLink
                :is-senary="true"
                :to="to"
                label="View Results"
                icon-name="svg-external-link"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bento-box-block {
    border-radius: 5px;

    .image {
        width: 100%;
        height: 100%;
    }

    .content {
        padding: 20px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .count {
        font-family: var(--font-primary);
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: var(--color-primary-blue-03);
    }

    .title {
        font-family: var(--font-primary);
        font-size: 21px;
        font-weight: 700;
        line-height: 140%; /* 29.4px */
        color: var(--color-black);
    }

    .text {
        font-family: var(--font-secondary);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }

    // Hovers
    @media #{$has-hover} {
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
