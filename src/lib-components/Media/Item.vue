<template>
    <div class="media-item">
        <div v-if="isEmbed" v-html="embedCode" class="media media-embed" />
        <img
            v-else-if="isImage"
            class="media media-image"
            :style="mediaStyles"
            v-bind="item[0]"
        />
        <img
            v-else-if="coverOnly"
            class="media media-image"
            :style="mediaStyles"
            v-bind="coverImage[0]"
        />
        <VideoJs
            v-else-if="isVideo || isAudio"
            class="media media-video"
            :style="mediaStyles"
            :sources="item"
            :poster="coverImageSrc"
            :controls="controls"
            :autoplay="autoplay"
            :loop="loop"
            :muted="muted"
            :playsinline="playsinline"
            :audioPosterMode="isAudio"
        />
        <p
            v-else
            class="media"
            style="background-color: white; padding: 10px"
            v-text="
                isAudio
                    ? 'Audio uploads not supported yet'
                    : 'Could not identify media type'
            "
        />
        <div class="sizer" :style="sizerStyles" />
        <slot />
    </div>
</template>

<script>
import VideoJs from "./VideoJs.vue"

export default {
    name: "MediaItem",
    components: { VideoJs },
    props: {
        // the image / video / audio / embed
        item: { type: Array, default: () => [] },
        embedCode: { type: String, default: "" },
        coverImage: { type: Array, default: () => [] },
        coverOnly: { type: Boolean, default: false },
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
        muted: { type: Boolean, default: false },
        playsinline: { type: Boolean, default: true },
    },
    computed: {
        isAudio() {
            return this.item[0] && this.item[0].kind == "audio"
        },
        isEmbed() {
            return !!(this.embedCode && this.embedCode.length) > 0
        },
        isImage() {
            return this.item[0] && this.item[0].kind == "image"
        },
        isVideo() {
            return this.item[0] && this.item[0].kind == "video"
        },
        coverImageSrc() {
            return this.coverImage[0] && this.coverImage[0].src
        },
        mediaStyles() {
            return {
                objectFit: this.objectFit,
                objectPosition:
                    this.item[0] &&
                    this.item[0].focalPoint &&
                    this.item[0].focalPoint
                        .map((obj) => obj * 100 + "%")
                        .join(" "),
            }
        },
        parsedAspectRatio() {
            return (
                this.aspectRatio ||
                (this.height / this.width) * 100 ||
                (!this.coverOnly &&
                    this.item[0] &&
                    this.item[0].height / this.item[0].width) * 100 ||
                (this.coverImage[0] &&
                    this.coverImage[0].height / this.coverImage[0].width) *
                    100 ||
                (9 / 16) * 100
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

        ::v-deep figure, ::v-deep iframe {
            width: 100%;
            height: 100%;
        }
    }
    .sizer {
        width: 100%;
    }
}
</style>
