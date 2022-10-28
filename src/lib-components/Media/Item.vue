<template>
    <div class="media-item">
        <div v-if="isEmbed" v-html="embedCode" class="media media-embed" />
        <img
            v-if="isImage"
            class="media media-image"
            :style="mediaStyles"
            :src="mediaItem.url"
            :srcset="mediaItem.srcset"
            :title="mediaItem.title"
            :height="mediaItem.height"
            :width="mediaItem.width"
        />
        <video
            v-if="isVideo"
            class="media media-video"
            :style="mediaStyles"
            :src="mediaItem.url"
            :poster="coverImage.url"
            :loop="loop"
            :autoplay="autoplay"
            :muted="muted"
            :controls="controls"
            :playsinline="playsinline"
            :alt="parsedAlt"
        />
        <ResponsiveVideo
            v-if="isVideo"
            class="media"
            v-bind="ResponsiveVideoProps"
        />
        <div class="sizer" :style="sizerStyles" />
        <slot />
    </div>
</template>

<script>
import pickBy from "lodash/pickBy"

export default {
    name: "MediaItem",
    components: {
        ResponsiveVideo: () =>
            import("../ResponsiveVideo").then((d) => d.default),
        //     VideoPlayer: () => import("./VideoPlayer").then((d) => d.default),
    },
    props: {
        // the image / video / audio / embed
        imageFile: { type: Array, default: () => [] },
        audioFile: { type: Array, default: () => [] },
        videoFile: { type: Array, default: () => [] },
        embedCode: { type: String, default: "" },
        // extra metadata
        coverImage: { type: Object, default: () => {} },
        altText: { type: String, default: "" },
        // sizing for the container (not the media item itself)
        height: { type: Number, default: 0 },
        width: { type: Number, default: 0 },
        aspectRatio: { type: Number, default: 0 },
        // Layout options
        backgroundColor: { type: String, default: "" },
        focalPoint: { type: Array, default: () => [] },
        mode: { type: String, default: "intrinsic-ratio" },
        objectFit: { type: String, default: "contain" },
        // video options
        controls: { type: Boolean, default: true },
        autoplay: { type: Boolean, default: false },
        loop: { type: Boolean, default: false },
        muted: { type: Boolean, default: true },
        playsinline: { type: Boolean, default: true },
    },
    computed: {
        isAudio() {
            return !!this?.audioFile?.[0]
        },
        isEmbed() {
            return !!this?.embedCode?.length > 0
        },
        isImage() {
            return !!this.imageFile?.[0]
        },
        isVideo() {
            return !!this?.videoFile?.[0]
        },
        mediaItem() {
            let item = {}
            if (this.isEmbed) {
                item = { embedCode: this.embedCode }
            } else if (this.isVideo) {
                item = this.videoFile[0]
            } else if (this.isImage) {
                item = this.imageFile[0]
            }
            return item
        },
        ResponsiveVideoProps() {
            return {
                ...this.mediaItem,
                image: {
                    ...this.mediaItem,
                    videoUrl: this.mediaItem.url,
                    alt: this.mediaItem.altText,
                },
                controls: this.controls,
                loop: this.loop,
                muted: this.muted,
                playsinline: this.playsinline,
            }
        },
        mediaStyles() {
            return {
                objectFit: this.objectFit,
            }
        },
        parsedAspectRatio() {
            return (
                this.aspectRatio ||
                (this.height / this.width) * 100 ||
                (this.mediaItem?.height / this.mediaItem?.width) * 100 ||
                (this.coverImage?.[0]?.height / this.coverImage?.[0]?.width) *
                    100 ||
                0
            )
        },
        sizerStyles() {
            return {
                paddingBottom: `${this.parsedAspectRatio}%`,
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.media-item {
    position: relative;
    margin: 0;
    z-index: 0;
    // opacity: 0; // TODO add this back when we resolve why onload is not firing on craft images in netlify, works locally
    transition: opacity 400ms ease-in-out;
    .media {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .sizer {
        width: 100%;
    }
}
</style>
