<template>
    <section class="media-gallery">
        <flexible-media-gallery-new-lightbox
            v-if="showLightboxModal"
            :items="block.mediaGallery"
            :selected-item="selectionIndex"
            tabindex="0"
            @closeModal="hideLightboxModal"
            @keydown.native.esc="hideLightboxModal"
        />

        <flexible-media-gallery-banner-image
            v-if="block.mediaGallery && block.mediaGallery[selectionIndex].item"
            :item="block.mediaGallery[selectionIndex].item"
            :cover-image="block.mediaGallery[selectionIndex].coverImage"
            :embed-code="block.mediaGallery[selectionIndex].embedCode"
            :n-items="nItems"
            :expanded="expandThumbnails"
            @toggleThumbnails="toggleThumbnails"
            :isHalfWidth="block.mediaGalleryStyle"
            :title="halfWidthTitle"
            :summary="halfWidthSummary"
        />

        <div v-if="expandThumbnails" class="thumbnails">
            <flexible-media-gallery-thumbnail-card
                v-for="(item, index) in block.mediaGallery"
                :key="item.id"
                v-bind="item"
                @click.native="selectItem(index)"
            />
        </div>
    </section>
</template>

<script>
import FlexibleMediaGalleryBannerImage from "@/lib-components/Flexible/MediaGallery/BannerImage.vue"
import FlexibleMediaGalleryNewLightbox from "@/lib-components/Flexible/MediaGallery/NewLightbox.vue"
import FlexibleMediaGalleryThumbnailCard from "@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue"

export default {
    name: "FlexibleMediaGallery",
    components: {
        FlexibleMediaGalleryBannerImage,
        FlexibleMediaGalleryNewLightbox,
        FlexibleMediaGalleryThumbnailCard,
    },
    props: {
        block: {
            type: Object,
            required: true,
        },
    },
    data: function () {
        return {
            expandThumbnails: false,
            selectionIndex: 0,
            showLightboxModal: false,
        }
    },
    computed: {
        expand_toggle_text() {
            return `${this.block.mediaGallery.length} images ${
                this.expandThumbnails ? "-" : "+"
            }`
        },
        glyphExpandClass() {
            return [
                "glyph-expand",
                this.isExpanded ? "glyph-expand-minus" : "glyph-expand-plus",
            ]
        },
        glyphExpandSVGContent() {
            return '<line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />' +
                this.expandThumbnails
                ? ""
                : '<line x1="0" y1="80" x2="100" y2="20" stroke="black" />'
        },
        nItems() {
            return this.block.mediaGallery.length
        },
        plusMinusIcon() {
            // These are the "fullwidth" unicode plus (U+FF0B) & minus (U+FF0D)
            return this.expandThumbnails ? "－" : "＋"
        },
        getMediaGalleryStyle() {
            //return this.block.mediaGallery.mediaGalleryStyle == "halfWidth"
            return this.block.mediaGallery ? true : false
        },
        halfWidthTitle() {
            return this.block.mediaGalleryStyle == "halfWidth"
                ? this.block.sectionTitle
                : ""
        },
        halfWidthSummary() {
            return this.block.mediaGalleryStyle == "halfWidth"
                ? this.block.richTextSimplified
                : ""
        },
    },
    methods: {
        hideLightboxModal() {
            this.showLightboxModal = false
        },
        toggleThumbnails() {
            this.expandThumbnails = !this.expandThumbnails
        },
        clickNext() {
            if (this.selectionIndex + 1 < this.nItems) {
                this.selectionIndex += 1
            }
        },
        clickPrev() {
            if (this.selectionIndex > 0) {
                this.selectionIndex -= 1
            }
        },
        selectItem(itemIndex) {
            this.selectionIndex = itemIndex
            this.showLightboxModal = true
        },
    },
}
</script>

<style lang="scss" scoped>
.media-gallery {
    background-color: var(--color-theme, var(--color-white));

    .thumbnails {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
        column-gap: var(--space-m);
        row-gap: var(--space-xl);
        padding-top: var(--space-xl);
        list-style-type: none;
    }
}
</style>
