<template>
    <component :is="mediaComponent" v-bind="mediaComponentProps" />
</template>

<script>
import pickBy from "lodash/pickBy"

export default {
    name: "ResponsiveMedia",
    components: {
        ResponsiveImage: () =>
            import("@/lib-components/ResponsiveImage").then((d) => d.default),
        ResponsiveVideo: () =>
            import("@/lib-components/ResponsiveVideo").then((d) => d.default),
    },
    props: {
        type: { type: String, default: "" },

        // the image / video / audio / embed
        mediaItem: { type: Object, default: () => ({}) },

        // sizing for the container (not the media item itself)
        height: { type: Number, default: 0 },
        width: { type: Number, default: 0 },
        aspectRatio: { type: Number, default: 0 },

        // Layout options
        backgroundColor: { type: String, default: "" },
        focalPoint: { type: Object, default: () => ({}) },
        mode: { type: String, default: "intrinsic-ratio" },
        objectFit: { type: String, default: "" },

        // video options
        controls: { type: Boolean, default: false },
        loop: { type: Boolean, default: false },
        muted: { type: Boolean, default: true },
        playsinline: { type: Boolean, default: true },
    },
    data() {
        return {
            hasLoaded: false,
            hasErrored: false,
        }
    },
    computed: {
        mediaComponent() {
            return {
                image: "ResponsiveImage",
                video: "ResponsiveVideo",
            }[this.mediaType]
        },
        mediaComponentProps() {
            return {
                ...pickBy(this.$props, (key, value) => value), // only truthy prop values
                image: this.mediaItem, // name currently used for Image and Video
            }
        },
        mediaType() {
            if (this.type || this.mediaItem.type) {
                return this.type
            } else if (this.mediaItem.videoUrl) {
                return "video"
            } else if (this.mediaItem.src) {
                return "image"
            } else {
                return "image"
            }
        },
    },
    methods: {
        onLoad() {
            this.hasLoaded = true
        },
        onError() {
            this.hasErrored = true
        },
    },
}
</script>

<style lang="scss" scoped></style>
