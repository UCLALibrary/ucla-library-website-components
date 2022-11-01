<template>
    <div class="section-spaces">
        <h3 id="spaces" class="spaces-title">Spaces</h3>
        <ul class="section-spaces-list">
            <block-spaces
                v-for="(item, index) in items"
                :key="`BlockSpace${index}`"
                :to="item.to"
                :title="item.title"
                :is-online="item.isOnline"
                :location="item.location"
                :text="item.text"
                :button-text="item.buttonText"
                :button-url="item.buttonUrl"
                class="block"
            />
        </ul>
    </div>
</template>

<script>
import BlockSpaces from "@/lib-components/BlockSpaces.vue"

export default {
    name: "SectionSpacesList",
    components: {
        BlockSpaces,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-spaces {
    max-width: $container-l-main + px;
    margin: 0 auto;
    .spaces-title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: 16px;
    }
}
.section-spaces-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;

    .block {
        //margin-bottom: var(--space-m);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 16px;
        width: calc((100% - 16px) / 2);
    }
    // Breakpoints
    @media #{$medium} {
        .block {
            width: 100%;
        }
    }
}
</style>
