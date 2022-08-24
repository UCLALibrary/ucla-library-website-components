<template>
    <ul class="section-teaser-highlight">
        <block-highlight
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            :image="item.image"
            :category="item.category"
            :title="item.title"
            :byline-one="item.bylineOne"
            :byline-two="item.bylineTwo"
            :start-date="item.startDate"
            :end-date="item.endDate"
            :text="item.text"
            :has-triangle="true"
            :is-vertical="true"
            :locations="item.locations"
            class="block"
        />
    </ul>
</template>

<script>
import BlockHighlight from "@/lib-components/BlockHighlight.vue"

export default {
    name: "SectionTeaserHighlight",
    components: {
        BlockHighlight,
    },
    props: {
        /**
         * Array of objects [{ image, to, category, title, dates, times, text }]
         */
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
    max-width: $container-l-main + px;
    background-color: var(--color-white);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
    .block {
        width: calc(50% - 16px);
        margin: 0 0 var(--space-xl);
    }

    // Breakpoints
    @media #{$small} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 var(--space-xl);
        }
    }
}
</style>
