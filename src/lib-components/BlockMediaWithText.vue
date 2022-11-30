<template>
    <div class="media-with-text">
        <div class="text-grouping">
            <h3 class="section-header" v-html="sectionHeader" />
            <div class="meta-mobile">
                <smart-link v-if="mediaLink" :to="mediaLink" class="media-link">
                    <media-item
                        v-if="item || coverImage"
                        :item="item"
                        :coverImage="coverImage"
                        coverOnly="true"
                        @click.native="showLightbox = true"
                        class="media-mobile"
                    />
                </smart-link>
                <div v-if="!(item || coverImage)" class="no-media-mobile" />
                <div class="clippy">
                    <div
                        v-if="isVideo || isAudio"
                        class="floating-highlight-mobile"
                    />
                    <div
                        v-if="isVideo || isAudio"
                        class="clipped-play-mobile"
                    />
                    <svg-icon-play-filled
                        v-if="isVideo || isAudio"
                        class="icon-play-filled-mobile"
                    />
                </div>
                <svg-icon-headphones
                    v-if="isAudio"
                    class="icon-headphones-mobile"
                />
            </div>
            <div
                v-if="shortDescription"
                class="short-description"
                v-html="shortDescription"
            />
            <button-link
                v-if="buttonUrl"
                class="button"
                :to="buttonUrl"
                :label="buttonText"
                :is-secondary="true"
                :is-download="parsedIsDownload"
            />
        </div>
        <media-item
            v-if="item || coverImage"
            :item="item"
            :coverImage="coverImage"
            coverOnly="true"
            class="meta media"
            @click.native="showLightbox = true"
        >
            <div class="clippy">
                <div v-if="isVideo || isAudio" class="floating-highlight" />
                <div v-if="isVideo || isAudio" class="clipped-play" />
                <svg-icon-play-filled
                    v-if="isVideo || isAudio"
                    class="icon-play-filled"
                />
            </div>
            <svg-icon-headphones v-if="isAudio" class="icon-headphones" />
            <svg-icon-headphones v-if="isAudio" class="icon-headphones" />
        </media-item>
        <div v-if="!(item || coverImage)" class="no-media" />
        <NewLightbox
            v-if="showLightbox"
            :items="lightboxItems"
            @closeModal="showLightbox = false"
            @keydown.native.esc="showLightbox = false"
        />
    </div>
</template>

<script>
// Helper functions
import isInternalLink from "@/mixins/isInternalLink"

export default {
    name: "BlockMediaWithText",
    components: {
        SvgIconHeadphones: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/molecule-headphones.svg"
            ).then((d) => d.default),
        SvgIconPlayFilled: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-play-filled.svg"
            ).then((d) => d.default),
        SmartLink: () =>
            import("@/lib-components/SmartLink.vue").then((d) => d.default),
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        MediaItem: () =>
            import("@/lib-components/Media/Item.vue").then((d) => d.default),
        NewLightbox: () =>
            import(
                "@/lib-components/Flexible/MediaGallery/NewLightbox.vue"
            ).then((d) => d.default),
    },
    mixins: [isInternalLink],
    props: {
        sectionHeader: {
            type: String,
            default: "",
        },
        shortDescription: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        buttonUrl: {
            type: String,
            default: "",
        },
        embedCode: {
            type: String,
            default: "",
        },
        typeMedia: {
            type: String,
            default: "",
        },
        item: {
            type: Array,
            default: () => [],
        },
        coverImage: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            showLightbox: false,
        }
    },
    computed: {
        isAudio() {
            return (
                this.typeMedia == "audio" ||
                (this.item && this.item[0] && this.item[0].kind == "audio")
            )
        },
        isVideo() {
            return (
                this.typeMedia == "video" ||
                (this.item && this.item[0] && this.item[0].kind == "video")
            )
        },
        lightboxItems() {
            return [
                {
                    item: this.item,
                    coverImage: this.coverImage,
                    embedCode: this.embedCode,
                    captionTitle: this.sectionHeader,
                    captionText: this.shortDescription,
                },
            ]
        },
        parsedIsDownload() {
            return this.buttonUrl && this.typeMedia === "other" ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.media-with-text {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    max-width: $container-l-main + px;
    // Themes
    --background-color: var(--color-theme, var(--color-white));
    &.color-grey {
        --background-color: var(--color-secondary-grey-02);
    }

    .text-grouping {
        margin-right: 50px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        align-items: flex-start;
    }
    .section-header {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: 24px;
    }
    .short-description {
        @include step-0;
        margin-bottom: 24px;
    }
    .meta {
        max-width: 500px;
        z-index: 0;
        position: relative;
    }
    .media {
        z-index: 0;
        position: relative;
        max-width: 100%;
        min-width: 426px;
        height: auto;
    }
    .no-media {
        z-index: 0;
        position: relative;
        width: 426px;
        height: 240px;
        background-color: var(--color-primary-blue-02);
    }
    .meta-mobile {
        display: none;
    }
    .clippy {
        z-index: 100;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .floating-highlight {
        z-index: 200;
        position: absolute;
        bottom: 8px;
        left: 5px;
        width: 112px;
        height: 72px;
        background-color: var(--color-visit-fushia-03);

        clip-path: polygon(
            0 0,
            calc(100% - 37px) 0,
            100% 75px,
            calc(100% - 1.5px) 75px,
            calc(100% - 38px) 1.5px,
            0 1.5px
        );
    }
    .clipped-play {
        bottom: 0;
        left: 0;
        z-index: 200;
        position: absolute;
        width: 112px;
        height: 72px;
        background-color: var(--background-color);

        clip-path: polygon(
            0 0,
            calc(100% - 38px) 0,
            100% 78px,
            calc(100% - 1.5px) 84px,
            0 84px,
            0 1.5px
        );
    }
    .svg__icon-play {
        fill: var(--color-primary-blue-03);
    }
    .icon-play-filled {
        z-index: 400;
        position: absolute;
        bottom: 16px;
        margin-left: 24px;
    }
    .icon-headphones {
        z-index: 400;
        position: absolute;
        left: 50%;
        margin-left: -40px;
        top: 50%;
        margin-top: -40px;
    }

    // Breakpoints

    @media #{$medium} {
        .media {
            width: calc(50% - 48px);
            height: auto;
            max-width: 100%;
            min-width: 296px;
        }
        .no-media {
            width: calc(50% - 48px);
            max-width: 100%;
            min-width: 296px;
        }
    }
    @media #{$small} {
        &.media-with-text {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;

            max-width: 100%;

            .text-grouping {
                max-width: 100%;
                margin-right: 0;
            }
            .meta {
                display: none;
            }
            .meta-mobile {
                display: block;

                display: block;
                width: 100%;
                height: auto;
                margin-bottom: 24px;
                z-index: 0;
                position: relative;
            }
            .media-mobile {
                width: 100%;
                height: auto;
                z-index: 10;
                position: relative;
            }
            .no-media-mobile {
                width: 100%;
                height: 200px;
                z-index: 10;
                position: relative;
                background-color: var(--color-primary-blue-02);
            }
            .floating-highlight-mobile {
                z-index: 200;
                position: absolute;
                bottom: 8px;
                left: 5px;
                width: 112px;
                height: 72px;
                background-color: var(--color-visit-fushia-03);

                clip-path: polygon(
                    0 0,
                    calc(100% - 37px) 0,
                    100% 75px,
                    calc(100% - 1.5px) 75px,
                    calc(100% - 38px) 1.5px,
                    0 1.5px
                );
            }
            .clipped-play-mobile {
                bottom: 0;
                left: 0;
                z-index: 200;
                position: absolute;
                width: 112px;
                height: 72px;
                background-color: var(--background-color);

                clip-path: polygon(
                    0 0,
                    calc(100% - 38px) 0,
                    100% 78px,
                    calc(100% - 1.5px) 84px,
                    0 84px,
                    0 1.5px
                );
            }
            .icon-play-filled-mobile {
                z-index: 400;
                position: absolute;
                bottom: 16px;
                margin-left: 24px;
            }
            .icon-headphones-mobile {
                z-index: 400;
                position: absolute;
                left: 50%;
                margin-left: -40px;
                top: 50%;
                margin-top: -40px;
            }

            .button {
                width: 100%;
                margin-left: 0;
            }
        }
    }
}
</style>
