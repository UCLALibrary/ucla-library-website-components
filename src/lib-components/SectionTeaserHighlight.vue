<template>
    <ul class="section-teaser-highlight">
        <block-highlight
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            :image="item.image"
            :category="item.category"
            :title="item.title"
            :alternativeFullName="item.alternativeFullName"
            :language="item.language"
            :byline-one="item.bylineOne"
            :byline-two="item.bylineTwo"
            :start-date="item.startDate"
            :end-date="item.endDate"
            :text="item.text"
            :has-triangle="true"
            :is-vertical="true"
            :locations="item.locations"
            :section-handle="item.sectionHandle"
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
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    gap: var(--space-xl) 32px;

    .block {
        width: calc((100% - 32px) / 2);
    }

    // Breakpoints
    @media #{$small} {
        padding: 0;

        .block {
            width: 100%;
        }
    }
}
</style>
