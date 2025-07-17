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
.metadata-table {
    .title {
        margin: 0 0 25px;
        font-family: var(--font-primary);
        font-size: 21px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 25.2px */
    }
    .list-item {
        display: flex;
        justify-content: flex-start;
        gap: 10px;

        margin-bottom: 8px;
    }
    .items {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .label {
        flex: 1;

        font-family: var(--font-secondary);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1; /* 25.6px */
        letter-spacing: 0.16px;
    }
    .values {
        flex: 1;
        display: flex;
        gap: 8px;
    }
    .value {
        font-family: var(--font-secondary);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        :deep(a) {
            color: var(--color-primary-blue-03);
            text-decoration: underline;

            font-family: var(--font-primary);
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%; /* 22.5px */
        }
    }

    .link {
        color: var(--color-primary-blue-03);
        text-decoration: underline;
    }
    .icon {
        max-width: 80px;
        max-height: 30px;
        width: 100%;
        height: 100%;
    }

    // Breakpoints
    @media #{$medium} {
        .list-item {
            margin: 0;

            flex-direction: column;
        }
        .values {
            flex-direction: column;
        }
    }
}
</style>
