<script setup lang="ts">
import type { MediaItemType } from "@/types/types"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
// Props
type MetaDataTableProps = {
    title: string
    items: Array<{
        label: string
        value: { text: string; href?: string }
        image?: MediaItemType
    }>
}
defineProps<MetaDataTableProps>()
</script>

<template>
    <div class="metadata-table">
        <h3 class="title" v-html="title" />
        <ul class="items">
            <li class="list-item" v-for="(item, index) in items" :key="index">
                <span class="label" v-html="item.label" />
                <div class="values">
                    <template v-if="item.image">
                        <responsive-image
                            class="icon"
                            :media="item.image"
                            object-fit="cover"
                        />
                    </template>
                    <template v-if="item.value.href && !item.image">
                        <!-- Value is a link (no image) -->
                        <smart-link class="link value" :to="item.value.href">
                            <span v-html="item.value.text" />
                        </smart-link>
                    </template>
                    <template v-else-if="item.value.href && item.image">
                        <!-- Image and text, text is a link -->
                        <smart-link class="link value" :to="item.value.href">
                            <span v-html="item.value.text" />
                        </smart-link>
                    </template>
                    <template v-else-if="item.image && item.value.text">
                        <!-- Image and text, no link -->
                        <span class="value" v-html="item.value.text" />
                    </template>
                    <template v-else>
                        <!-- Just text -->
                        <span class="value" v-html="item.value.text" />
                    </template>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_metadata-table.scss";
</style>
