<template>
    <section class="section-teaser-list">
        <block-show-hide :disable="items.length <= nShown">
            <ul class="list">
                <block-highlight
                    v-for="(item, index) in items"
                    :key="index"
                    :class="index >= nShown ? 'show-hide-hideable' : null"
                    :image="item.image"
                    :to="item.to"
                    :category="item.category"
                    :title="item.title"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :text="item.text"
                    :locations="item.locations"
                    class="list-item block"
                />
            </ul>
        </block-show-hide>
    </section>
</template>

<script>
import BlockHighlight from "@/lib-components/BlockHighlight.vue"
import BlockShowHide from "@/lib-components/BlockShowHide.vue"

export default {
    name: "SectionTeaserList",
    components: {
        BlockHighlight,
        BlockShowHide,
    },
    props: {
        items: {
            //Array of objects {image, to, category, title, dates, times, text}
            type: Array,
            default: () => [],
        },
        nShown: {
            type: Number,
            default: 3,
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-list {
    background-color: var(--color-white);
    max-width: $container-l-main + px;

    .list {
        @for $i from 1 through 30 {
            ::v-deep .block-highlight:nth-child(#{$i}) .molecule {
                left: calc(random(500) * -1) + px;
            }
        }
    }

    .list-item {
        margin-bottom: var(--space-xl);
        padding-bottom: var(--space-xl);

        border-bottom: 2px dotted var(--color-secondary-grey-02);

        &:last-child {
            border: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }

    .hidden .list-item:has(+ .show-hide-hideable) {
        border: 0;
        padding-bottom: 0;
    }
}
</style>
