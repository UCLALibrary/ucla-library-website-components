<template>
    <section class="section-teaser-list">
        <block-show-hide :disable="items.length <= nShown">
            <ul v-for="(item, index) in items" :key="index" class="meta">
                <block-highlight
                    :class="index >= nShown ? 'show-hide-hideable' : null"
                    :image="item.image"
                    :to="item.to"
                    :category="item.category"
                    :title="item.title"
                    :start-date="item.startDate"
                    :end-date="item.endDate"
                    :text="item.text"
                    :locations="item.locations"
                    class="block"
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
    // padding: 0 var(--unit-gutter);
    max-width: $container-l-main + px;

    .meta {
        // display: flex;
        // flex-direction: column;
        // flex-wrap: nowrap;
        // justify-content: center;
        // align-content: center;
        // align-items: center;

        border-bottom: 2px dotted var(--color-secondary-grey-02);

        // TODO fix border so that it doesn't appear when show-hide is collapsed
        &:nth-child(n+4), &:last-child {
            border: 0;
        }
    }

    .block {
        margin-top: 50px;
        margin-bottom: 50px;
    }
}
</style>
