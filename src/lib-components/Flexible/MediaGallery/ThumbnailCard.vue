<template>
    <SectionWrapper class="thumbnail-card" :noMargins="true">
        <MediaItem
            :item="thumbnailImage"
            :aspect-ratio="60"
            class="image"
            object-fit="cover"
        />
        <SectionHeader class="caption-title" v-text="captionTitle" />
        <p class="caption-text">{{ parsedText }}</p>
    </SectionWrapper>
</template>

<script>
// COMPONENTS
import SectionWrapper from "@/lib-components/SectionWrapper.vue"
import SectionHeader from "@/lib-components/SectionHeader.vue"
import MediaItem from "@/lib-components/Media/Item.vue"

// UTILITY FUNCTIONS
import removeHtmlTruncate from "@/mixins/removeHtmlTruncate"

export default {
    name: "FlexibleMediaGalleryThumbnailCard",
    mixins: [removeHtmlTruncate],
    components: { MediaItem, SectionWrapper, SectionHeader },
    props: {
        item: {
            type: Array,
            default: () => [],
        },
        coverImage: {
            type: Array,
            default: () => [],
        },
        embedCode: {
            type: Array,
            default: () => [],
        },
        captionTitle: {
            type: String,
            default: "",
        },
        captionText: {
            type: String,
            default: "",
        },
    },
    computed: {
        thumbnailImage() {
            // returns an array of objects that can be v-bound to <img> tags. Currently MediaItem only uses the first but in the future we might combine them all with <picture> and <source>, allowing the browser to chooose among versions
            return (this.coverImage || []) // replace null & undefined with empty array
                .concat(this.item || []) // add item to use if there's no coverImage
                .filter((item) => item.kind == "image") // only keep "image" items
        },
        parsedText() {
            return this.captionText
                ? this.removeHtmlTruncate(this.captionText, 100)
                : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.thumbnail-card {
    width: 100%;

    .image {
        margin-bottom: var(--space-s);
    }

    .caption-title {
        @include step-1;
        color: var(--color-black);
        margin-bottom: var(--space-xs);
    }

    .caption-text {
        @include step-0;
        color: var(--color-secondary-grey-05);
        @include truncate($lines: 4);
    }

    @media #{$has-hover} {
        cursor: pointer;
    }
}
</style>
