<template>
    <section class="section-teaser-highlight">
        <div class="section-header">
            <h2
                v-if="block.sectionTitle"
                class="section-title"
                v-html="block.sectionTitle"
            />
            <div
                v-if="block.sectionSummary"
                class="section-summary"
                v-html="block.sectionSummary"
            />
        </div>
        <ul class="block-group">
            <block-highlight
                v-for="(item, index) in parsedItems"
                :key="`FlexibleHighlight${index}`"
                :to="item.to"
                :image="item.parsedImage"
                :category="item.parsedCategory"
                :bylineOne="item.byline1"
                :bylineTwo="item.byline2"
                :title="item.title"
                :text="item.text"
                :locations="item.parsedLocation"
                :has-triangle="true"
                :is-vertical="true"
                class="block"
            />
        </ul>
    </section>
</template>

<script>
import _get from "lodash/get"
import BlockHighlight from "@/lib-components/BlockHighlight"
import formatDates from "@/mixins/formatEventDates"
import stripMeapFromURI from "@/mixins/stripMeapFromURI"

export default {
    name: "FlexibleHighlight",
    mixins: [formatDates, stripMeapFromURI],
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
            // Maps values based on content type and external or internal content
            return this.parsedList.map((obj) => {
                // Article
                if (
                    obj.typeHandle != "externalContent" &&
                    obj.contentType.includes("article")
                ) {
                    return {
                        ...obj,
                        to: `/${this.stripMeapFromURI(obj.to)}`,
                        parsedImage: _get(obj, "heroImage[0].image[0]", null),
                        parsedLocation: _get(obj, "associatedLocations", []),
                        parsedCategory: _get(
                            obj,
                            "articleCategory[0].title",
                            {}
                        ),
                        byline1: _get(obj, "articleByline1[0].title", ""),
                        byline2:
                            obj.articleByline2 != null
                                ? this.formatDates(
                                      obj.articleByline2,
                                      obj.articleByline2
                                  )
                                : "",
                    }
                }

                // Project
                else if (
                    obj.typeHandle != "externalContent" &&
                    obj.contentType.includes("meapProject")
                ) {
                    return {
                        ...obj,
                        to: `/${this.stripMeapFromURI(obj.to)}`,
                        parsedImage: _get(obj, "heroImage[0].image[0]", null),
                        parsedLocation: _get(obj, "projectLocations", []),
                        parsedCategory: _get(obj, "projectCategory", {}),
                        byline1: _get(obj, "projectByline1[0].title", ""),
                    }
                } else if (obj.typeHandle === "externalContent") {
                    return {
                        ...obj,
                        parsedImage: _get(obj, "image[0]", null),
                        parsedLocation:
                            obj.location != null ? [obj.location] : [],
                        parsedCategory: _get(obj, "category", {}),
                    }
                } else {
                    return {
                        ...obj,
                        parsedImage: _get(obj, "heroImage[0].image[0]", null),
                        to: `/${this.stripMeapFromURI(obj.to)}`,
                    }
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
    padding: 0 calc(var(--unit-gutter) - 16px);
    background-color: var(--color-theme, var(--color-white));
    margin: 0 auto;
    max-width: $container-l-main + px;

    .section-header {
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .section-summary {
        @include step-0;

        ::v-deep p {
            margin: 0;
        }
    }

    .block-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        align-items: flex-start;
    }
    .block {
        width: calc(50% - 16px);
        margin: 0 0 var(--space-xl);
    }

    ::v-deep .block-highlight {
        max-width: calc(50% - 16px);
    }
    // Breakpoints
    @media #{$small} {
        //padding: 0 var(--unit-gutter);
        ::v-deep .block-highlight {
            max-width: 100%;
        }
        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}
</style>
