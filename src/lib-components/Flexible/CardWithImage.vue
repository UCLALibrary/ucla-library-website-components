<template>
    <div class="card-with-image" v-if="block.cardWithImage">
        <block-highlight
            v-for="item in parsedContent"
            :key="item.contentLink[0].to"
            :to="item.contentLink[0].to"
            :image="item.image[0]"
            :category="item.contentLink[0].category"
            :title="item.contentLink[0].title"
            :text="item.text"
            :is-vertical="true"
            :image-aspect-ratio="60"
            class="block"
        />
    </div>
</template>

<script>
import BlockHighlight from "@/lib-components/BlockHighlight.vue"

export default {
    name: "FlexibleCardWithImage",
    components: {
        BlockHighlight,
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        // Determines whether content link or new content is used for text
        parsedContent() {
            //TO DO remove this once the gql is fixed for cardwith image
            if (
                this.block.cardWithImage &&
                this.block.cardWithImage[0].contentLink
            )
                return this.block.cardWithImage.map((obj) => {
                    if (!obj.contentLink) return
                    return {
                        ...obj,
                    }
                })

            return []
        },
    },
}
</script>

<style lang="scss" scoped>
.card-with-image {
    max-width: 960px;
    padding: 0 calc(var(--unit-gutter) - 16px);
    background-color: var(--color-white);
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        margin: 0 8px 50px 8px;
    }

    // Breakpoints
    @media #{$small} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}
</style>
