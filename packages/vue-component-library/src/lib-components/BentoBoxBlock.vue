<script setup lang="ts">
// Imports
import { computed } from "vue"
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import ButtonLink from "@/lib-components/ButtonLink.vue"
import { useTheme } from "@/composables/useTheme"

const theme = useTheme()

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
const classes = computed(() => {
    return ["bento-box-block", theme?.value || ""]
})
</script>

<template>
    <div :class="classes">
        <div class="wrapper">
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
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_bento-box-block.scss";
</style>
