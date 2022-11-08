<template>
    <div class="media-item">
        <div v-if="isEmbed" v-html="embedCode" class="media media-embed" />
        <img
            v-else-if="isImage"
            class="media media-image"
            :style="mediaStyles"
            v-bind="item[0]"
        />
        <video
            v-else-if="isVideo"
            class="media media-video"
            :style="mediaStyles"
            :poster="coverImageUrl"
            :autoplay="autoplay"
            :controls="controls"
            :muted="muted"
            :playsinline="playsinline"
        >
            <source
                v-for="videoSource in item"
                :key="videoSource.id"
                v-bind="videoSource"
            />
            Your browser does not support the video tag.
        </video>
        <p v-else-if="isAudio" class="media">Audio uploads not supported yet</p>
        <p v-else class="media">Could not identify media type</p>
        <div class="sizer" :style="sizerStyles" />
        <slot />
    </div>
</template>

<script>
export default {
    name: "MediaItem",
    props: {
        // the image / video / audio / embed
        item: { type: Array, default: () => [] },
        embedCode: { type: String, default: "" },
        // extra metadata
        coverImage: { type: Array, default: () => [] },
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
            return this.item?.[0]?.kind == "audio"
        },
        isEmbed() {
            return !!this?.embedCode?.length > 0
        },
        isImage() {
            return this.item?.[0]?.kind == "image"
        },
        isVideo() {
            return this.item?.[0]?.kind == "video"
        },
        coverImageUrl() {
            return this.coverImage?.[0]?.url
        },
        mediaStyles() {
            return {
                objectFit: this.objectFit,
                objectPosition: this.item?.[0]?.focalPoint
                    ?.map((obj) => obj * 100 + "%")
                    ?.join(" "),
            }
        },
        parsedAspectRatio() {
            return (
                this.aspectRatio ||
                (this.height / this.width) * 100 ||
                (this.item?.[0]?.height / this.item?.[0]?.width) * 100 ||
                (this.coverImage?.[0]?.height / this.coverImage?.[0]?.width) *
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
    }
    .sizer {
        width: 100%;
    }
}
</style>
