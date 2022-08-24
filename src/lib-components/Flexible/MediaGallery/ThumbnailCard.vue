<template>
    <div class="thumbnail-card">
        <responsive-image
            :image="image"
            :aspect-ratio="60"
            class="image"
            object-fit="cover"
        />
        <h3 class="caption-title" v-text="captionTitle" />
        <p class="caption-text" v-text="captionText" />
    </div>
</template>

<script>
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"

export default {
    name: "FlexibleMediaGalleryThumbnailCard",
    components: { ResponsiveImage },
    props: {
        image: {
            type: Object,
            required: true,
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
    }

    @media #{$has-hover} {
        cursor: pointer;
    }
}
</style>
