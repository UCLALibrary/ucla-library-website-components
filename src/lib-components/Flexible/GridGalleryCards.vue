<template>
    <div class="grid-gallery-cards">
        <h3 class="grid-gallery-subtitle" v-html="block.subtitle" />
        <grid-gallery
            v-if="block.gridGalleryCards"
            :section-summary="block.summary"
            :items="parseGalleryCards"
        />
    </div>
</template>

<script>
import GridGallery from "@/lib-components/GridGallery"

export default {
    name: "FlexibleGridGalleryCards",
    components: {
        GridGallery,
    },
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
                obj.subtitle = galleryData.subtitle || ""
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
                obj.to =
                    subitem.contentLink && subitem.contentLink[0]
                        ? subitem.contentLink[0].to
                        : subitem.to
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
    .grid-gallery-subtitle {
        color: var(--color-primary-blue-03);
        font-size: 35.538px;
        line-height: 43px;
        @include step-2;
        position: sticky;
        top: 0;
        background-color: var(--color-white);
        padding-top: 8px;
        z-index: 30;
        min-height: 46px;
    }
}
</style>
