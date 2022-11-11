<template>
    <figure v-if="image && image.src" :class="classes">
        <img
            :src="image.src || src"
            :height="image.width || width"
            :width="image.height || height"
            :alt="image.alt || alt"
            :srcset="image.srcset || srcset"
            :sizes="image.sizes || sizes"
            :object-fit="objectFit"
            :style="parsedFocalPoint"
            class="media"
            @load="onLoad"
            @error="onError"
        />
        <figcaption
            v-if="image.caption || caption"
            class="caption"
            v-html="image.caption || caption"
        />
        <div class="sizer" :style="styles" />
        <slot />
    </figure>
</template>

<script>
export default {
    name: "ResponsiveImage",
    props: {
        src: {
            type: String,
            default: "",
        },
        height: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 0,
        },
        alt: {
            type: String,
            default: "",
        },
        srcset: {
            type: String,
            default: "",
        },
        sizes: {
            type: String,
            default: "",
        },
        caption: {
            type: String,
            default: "",
        },
        aspectRatio: {
            type: Number,
            default: 0,
        },
        objectFit: {
            type: String,
            default: "",
        },
        image: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            hasLoaded: false,
            hasErrored: false,
        }
    },
    computed: {
        parsedFocalPoint() {
            let objectPosition = ""
            if (this.image.focalPoint && this.image.focalPoint.length > 0) {
                let points = this.image.focalPoint.map((obj) => {
                    return obj * 100 + "%"
                })
                objectPosition = `object-position:${points.join(" ")}`
            }
            return objectPosition
        },
        parsedAspectRatio() {
            const height = this.image.height || this.height
            const width = this.image.width || this.width
            return this.aspectRatio || (height / width) * 100
        },
        styles() {
            return {
                paddingBottom: `${this.parsedAspectRatio}%`,
            }
        },
        classes() {
            return [
                "responsive-image",
                `object-fit-${this.objectFit}`,
                { "has-loaded": this.hasLoaded },
                { "has-errored": this.hasErrored },
            ]
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

<style lang="scss" scoped>
.responsive-image {
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
        object-fit: cover;
    }
    .caption {
        display: none;
        // font-family: var(--font-secondary);
        // font-weight: 400;
        // font-size: 16px;
        // line-height: 160%;
        // letter-spacing: 0.01em;
        // color: var(--color-secondary-grey-05);
        // padding: 16px 16px 32px 16px;
        // bottom: -20px;
        // z-index: 10;
        // position: absolute;
    }
    .sizer {
        width: 100%;
    }
    // Variants
    &.object-fit-cover {
        .media {
            object-fit: cover;
        }
    }
    &.object-fit-contain {
        .media {
            object-fit: contain;
        }
    }
    // State
    &.has-loaded {
        opacity: 1;
    }
}
</style>
