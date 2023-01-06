<template>
    <div class="card-with-image" v-if="block.cardWithImage">
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
                :key="`FlexibleCardWithImage${index}`"
                :to="item.to"
                :image="item.parsedImage"
                :category="item.parsedCategory"
                :bylineOne="item.byline1"
                :bylineTwo="item.byline2"
                :title="item.title"
                :text="item.text"
                :locations="item.parsedLocation"
                :image-aspect-ratio="60"
                :is-vertical="true"
                :section-handle="item.sectionHandle"
                class="block"
            />
        </ul>
    </div>
</template>

<script>
import _get from "lodash/get"
import formatDates from "@/mixins/formatEventDates"
import stripMeapFromURI from "@/mixins/stripMeapFromURI"
import BlockHighlight from "@/lib-components/BlockHighlight.vue"

export default {
    name: "FlexibleCardWithImage",
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
            for (let item in this.block.cardWithImage) {
                if (
                    this.block.cardWithImage[item].typeHandle ===
                    "internalContent"
                ) {
                    items.push(this.block.cardWithImage[item].contentLink[0])
                } else {
                    items.push(this.block.cardWithImage[item])
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
                        parsedImage: _get(obj, "heroImage[0].image[0]", {}),
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
.card-with-image {
    max-width: $container-l-main + px;
    margin: 0 auto;

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
        justify-content: flex-start;
        gap: 32px 16px;

        .block {
            width: calc((100% - 32px) / 3);
        }
    }

    // Breakpoints
    @media #{$medium} {
        align-items: flex-start;

        .block-group {
            .block {
                width: calc((100% - 16px) / 2);
            }
        }
    }
    @media #{$small} {
        //align-items: center;
        .block-group {
            .block {
                width: 100%;
            }
        }
    }
}
</style>
