<template>
    <div class="grid-gallery-cards">
        <div
            v-if="
                (block.gridGalleryCards && block.gridGalleryCards.length > 0) ||
                block.sectionTitle
            "
            class="section-header"
        >
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

        <grid-gallery
            v-if="block.gridGalleryCards && block.gridGalleryCards.length > 0"
            class="section-summary"
            :section-summary="block.summary"
            :items="parseGalleryCards"
        />
    </div>
</template>

<script>
import GridGallery from "@/lib-components/GridGallery"
import stripMeapFromURI from "@/mixins/stripMeapFromURI"

export default {
    name: "FlexibleGridGalleryCards",
    components: {
        GridGallery,
    },
    mixins: [stripMeapFromURI],
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parseGalleryCards() {
            const timelineData = this.flattenTimeLineStructure(this.block)
            console.log("did it flatten?" + timelineData)

            return timelineData
        },
    },
    methods: {
        flattenTimeLineStructure(galleryData) {
            let flattenedValues = []
            for (let subitem of galleryData.gridGalleryCards) {
                let obj = {}
                obj.sectionTitle = galleryData.sectionTitle || ""
                obj.sectionSummary = galleryData.summary || ""
                obj.headlineText =
                    subitem.contentLink && subitem.contentLink[0]
                        ? subitem.contentLink[0].headlineText
                        : subitem.headlineText
                obj.snippet =
                    subitem.contentLink && subitem.contentLink[0]
                        ? subitem.contentLink[0].snippet
                        : subitem.snippet
                obj.featured = subitem.featured === "true" ? true : false
                obj.to = this.stripMeapFromURI(
                    subitem.contentLink && subitem.contentLink[0]
                        ? subitem.contentLink[0].to
                        : subitem.to
                )
                obj.image =
                    subitem.contentLink &&
                    subitem.contentLink[0] &&
                    subitem.contentLink[0].heroImage
                        ? subitem.contentLink[0].heroImage[0].image[0]
                        : subitem.image
                        ? subitem.image[0]
                        : {}
                flattenedValues.push(obj)
            }
            return flattenedValues
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-gallery-cards {
    margin: 12px auto;
    position: relative;

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
        color: var(--color-black);

        ::v-deep p {
            margin: 0;
        }
    }
}
</style>
