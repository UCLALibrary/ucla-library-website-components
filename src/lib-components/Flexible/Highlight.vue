<template>
    <section class="section-teaser-highlight">
        {{ parsedItems }}
        <block-highlight
            v-for="(item, index) in parsedItems"
            :key="`FlexibleHighlight${index}`"
            :to="item.to"
            :image="item.parsedImage"
            :category="item.category"
            :title="item.title"
            :text="item.text"
            :locations="item.parsedLocation"
            :has-triangle="true"
            :is-vertical="true"
            class="block"
        />
    </section>
</template>

<script>
import _get from "lodash/get"
import BlockHighlight from "@/lib-components/BlockHighlight"

export default {
    name: "FlexibleHighlight",
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
        parsedList() {
            let items = []
            for (let item in this.block.highlight) {
                if (
                    this.block.highlight[item].typeHandle === "internalContent"
                ) {
                    items.push(this.block.highlight[item].contentLink[0])
                } else {
                    items.push(this.block.highlight[item])
                }
            }
            return items
        },
        parsedItems() {
            return this.parsedList.map((obj) => {
                return {
                    ...obj,
                    parsedImage:
                        obj.typeHandle === "externalContent"
                            ? _get(obj, "image[0]", {})
                            : _get(obj, "heroImage[0].image[0]", {}),
                    parsedLocation:
                        obj.typeHandle != "externalContent"
                            ? _get(obj, "associatedLocations", [])
                            : obj.location != null
                            ? [obj.location]
                            : [],
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
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
        width: calc(50% - 16px);
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
