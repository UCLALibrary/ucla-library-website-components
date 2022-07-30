<template>
    <div class="flexible-blocks">
        <h2 class="more-information">More Information</h2>
        <component
            :is="block.componentName"
            v-for="block in parsedBlocks"
            :key="block.id"
            :block="block"
            class="flexible-block"
        />
    </div>
</template>

<script>
// Helpers
import _kebabCase from "lodash/kebabCase"

export default {
    name: "FlexibleBlocks",
    components: {
        // TODO register all other block types
        FlexibleCallToAction: () =>
            import("@/lib-components/Flexible/CallToAction").then(
                (d) => d.default
            ),
        FlexibleCtaBlock2Up: () =>
            import("@/lib-components/Flexible/CtaBlock2Up").then(
                (d) => d.default
            ),
        FlexibleBannerFeatured: () =>
            import("@/lib-components/Flexible/BannerFeatured.vue").then(
                (d) => d.default
            ),
        FlexibleHighlight: () =>
            import("@/lib-components/Flexible/Highlight.vue").then(
                (d) => d.default
            ),
        FlexibleSimpleCards: () =>
            import("@/lib-components/Flexible/SimpleCards.vue").then(
                (d) => d.default
            ),
        FlexiblePullQuote: () =>
            import("@/lib-components/Flexible/PullQuote.vue").then(
                (d) => d.default
            ),
        FlexibleCardWithImage: () =>
            import("@/lib-components/Flexible/CardWithImage.vue").then(
                (d) => d.default
            ),
        FlexibleRichText: () =>
            import("@/lib-components/Flexible/RichText.vue").then(
                (d) => d.default
            ),
        FlexibleMediaWithText: () =>
            import("@/lib-components/Flexible/MediaWithText.vue").then(
                (d) => d.default
            ),
        FlexibleMediaGallery: () =>
            import("@/lib-components/Flexible/MediaGallery.vue").then(
                (d) => d.default
            ),
        FlexibleForm: () =>
            import("@/lib-components/Flexible/Form.vue").then((d) => d.default),
        FlexibleImpactNumbersCarousel: () =>
            import("@/lib-components/Flexible/ImpactNumbersCarousel.vue").then(
                (d) => d.default
            ),
        FlexibleAssociatedTopicCards: () =>
            import("@/lib-components/Flexible/AssociatedTopicCards.vue").then(
                (d) => d.default
            ),
    },

    props: {
        blocks: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedBlocks() {
            // Shape blocks to work with components
            let output = this.blocks.map((obj) => {
                console.log(convertName(obj.typeHandle))
                return {
                    ...obj,
                    componentName: convertName(obj.typeHandle),
                }
            })
            // Remove any un-registered blocks
            output = output.filter((obj) => {
                console.log(
                    this.registeredComponents.includes(obj.componentName)
                )
                return this.registeredComponents.includes(obj.componentName)
            })

            return output
        },
        registeredComponents() {
            // Get all local component names as kebabCase, used to check if component is registered above
            let components = Object.keys(this.$options.components || {})
            return components.map((str) => {
                return _kebabCase(str)
            })
        },
    },
}

function convertName(typeHandle) {
    let output = `flexible-${typeHandle}`

    return _kebabCase(output)
}
</script>

<style lang="scss" scoped>
.flexible-blocks {
    .more-information {
        @include visually-hidden;
    }
    .flexible-block {
        margin-bottom: var(--space-3xl);

        &:first-child {
            padding-top: 0;
        }

        &.divider-general {
            padding: 0;
            margin: var(--unit-gutter) auto;
            max-width: $container-l-main + px;
        }
    }

    .flexible-block:nth-child(even) {
        background-color: var(--color-secondary-grey-01);
        --color-theme: var(--color-secondary-grey-01);

        &.form,
        &.flexible-simple-cards,
        &.divider-general,
        &.pull-quote,
        &.section-cards-with-illustrations,
        &.flexible-banner-featured,
        &.section-teaser-highlight,
        &.impact-numbers-carousel {
            background-color: var(--color-white);
        }

        &.divider-general {
            padding: 0;
        }

        ::v-deep .block-call-to-action-two-up {
            background-color: var(--color-white);
        }
        ::v-deep .flexible-media-with-text {
            .clipped-play,
            .clipped-play-mobile {
                background-color: var(--color-secondary-grey-01);
            }
        }
    }

    .flexible-block:nth-child(even).flexible-simple-cards {
        padding-top: 0;

        ::v-deep > .simple-cards::before {
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            max-width: $container-l-main + px;
            border-top: 2px dotted var(--color-secondary-grey-02);
            margin-bottom: var(--space-2xl);
        }
    }

    // .flexible-block:nth-child(even).pull-quote {
    //     padding-top: 0;

    //     ::v-deep > &::before {
    //         content: "";
    //         display: block;
    //         height: 1px;
    //         width: 100%;
    //         max-width: $container-l-main + px;
    //         border-top: 2px dotted var(--color-secondary-grey-02);
    //         margin-bottom: var(--space-2xl);
    //     }
    // }

    .flexible-block:last-child.flexible-simple-cards {
        padding-bottom: 0;
    }

    @media #{$medium} {
        .flexible-block {
            padding: var(--space-2xl) var(--unit-gutter);
        }
    }
}
</style>
