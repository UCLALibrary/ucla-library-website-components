<template>
    <div class="flexible-blocks">
        <h2 class="more-information">More Information</h2>
        <div v-for="(block, index) in parsedBlocks" :key="index">
            <section-wrapper v-if="block.needsDivider" theme="divider"
                ><DividerWayFinder
            /></section-wrapper>
            <section-wrapper :theme="block.theme">
                <component
                    :is="block.componentName"
                    :block="block"
                    class="flexible-block"
                />
            </section-wrapper>
        </div>
    </div>
</template>

<script>
// Helpers
import _kebabCase from "lodash/kebabCase"
import SectionWrapper from "./SectionWrapper.vue"
import DividerWayFinder from "./DividerWayFinder.vue"

const NEVER_GRAY = [
    "flexible-associated-topic-cards",
    "flexible-banner-featured",
    "flexible-divider-general",
    "flexible-form",
    "flexible-impact-numbers-carousel",
    "flexible-pull-quote",
    "flexible-simple-cards",
    "flexible-call-to-action",
    "flexible-cta-block2-up",
]

export default {
    name: "FlexibleBlocks",
    components: {
        SectionWrapper,
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
        FlexibleGridGalleryCards: () =>
            import("@/lib-components/Flexible/GridGalleryCards.vue").then(
                (d) => d.default
            ),
        DividerWayFinder,
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
            let output = this.blocks
                .map((obj) => {
                    // Normalize componentName
                    return {
                        ...obj,
                        componentName: convertName(obj.typeHandle),
                    }
                })
                .filter((obj) => {
                    // Remove any un-registered blocks
                    return this.registeredComponents.includes(obj.componentName)
                })
            for (let index = 0; index < output.length; index++) {
                // Set theme color
                if (
                    index > 0 &&
                    output[index - 1].theme == "white" &&
                    !NEVER_GRAY.includes(output[index].componentName) &&
                    index < output.length - 1 // Last flexible block will always be white
                ) {
                    output[index].theme = "gray"
                } else {
                    output[index].theme = "white"
                }

                // Add divider if one white block follows another
                output[index].needsDivider =
                    index > 0 &&
                    output[index].theme == "white" &&
                    output[index - 1].theme == "white"
                        ? true
                        : false
            }

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
}
</style>
