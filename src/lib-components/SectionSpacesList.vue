<template>
    <div class="section-spaces">
        <h3 id="spaces" class="spaces-title">Spaces</h3>
        <block-show-hide :disable="items.length <= nShown">
            <ul class="section-spaces-list">
                <block-spaces
                    v-for="(item, index) in items"
                    :class="index >= nShown ? 'show-hide-hideable' : null"
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
        </block-show-hide>
    </div>
</template>

<script>
import BlockShowHide from "@/lib-components/BlockShowHide.vue"
import BlockSpaces from "@/lib-components/BlockSpaces.vue"

export default {
    name: "SectionSpacesList",
    components: {
        BlockShowHide,
        BlockSpaces,
    },
    data() {
        return {
            collapsed: true,
        }
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        nShown: {
            type: Number,
            default: 4,
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
