<template>
    <div :class="classes">
        <div class="slot">
            <slot>
                <div v-if="breadcrumb" class="breadcrumb">
                    <svg-heading-vector
                        class="heading-line"
                        aria-hidden="true"
                    />
                    <h2 class="text">
                        {{ breadcrumb }}
                    </h2>
                </div>
            </slot>
        </div>

        <component
            :is="parsedMediaComponent"
            class="media"
            :image="parsedMediaProp"
            :aspect-ratio="parsedRatio"
        >
            <div v-if="!isVideo" class="gradient" />

            <svg-molecule-half-faceted class="molecule" aria-hidden="true" />
        </component>

        <div class="hatch-box">
            <div class="clipped-box">
                <h2
                    v-if="category"
                    class="category category-mobile"
                    v-html="category"
                />
            </div>
            <div class="hatch">
                <svg-hatch-right class="svg" aria-hidden="true" />
            </div>
        </div>

        <div class="meta">
            <div
                v-if="category"
                class="category category-desktop"
                v-html="category"
            />

            <div v-if="titleLink.length > 0">
                <smart-link
                    id="banner-featured"
                    :to="titleLink"
                    class="title title-linked"
                >
                    {{ title }}
                </smart-link>
            </div>

            <div v-else>
                <h3 id="banner-featured" class="title" v-html="title"></h3>
            </div>

            <div class="meta-text">
                <div class="byline" v-if="bylineArticleExists">
                    <div
                        v-for="(item, index) in parseByLineStaff"
                        :key="`staff-${index}`"
                        class="byline-item"
                    >
                        <smart-link :to="`/${item.to}`">
                            {{ item.title }}
                        </smart-link>
                    </div>

                    <!-- TODO: Convert date format to Month DD, YYYY -->
                    <div class="byline-item">
                        {{ byline["articlePostDate"] }}
                    </div>
                </div>

                <div class="date-created" v-if="dateCreated">
                    <time
                        v-if="dateCreated"
                        class="date-created"
                        v-html="parsedDateCreated"
                    />
                </div>

                <div class="byline" v-if="bylineProjectExists">
                    <div
                        v-for="(item, index) in parseByLineProject"
                        :key="`project-topics-${index}`"
                        class="byline-item"
                        v-html="item.title"
                    ></div>
                </div>

                <div
                    class="byline"
                    v-if="
                        byline.length &&
                        !bylineArticleExists &&
                        !bylineProjectExists
                    "
                >
                    <div
                        v-for="(item, index) in byline"
                        :key="`external-${index}`"
                        class="byline-item"
                        v-html="item"
                    ></div>
                </div>

                <rich-text
                    v-if="description"
                    class="description"
                    :rich-text-content="description"
                />

                <div v-if="startDate || endDate" class="schedule">
                    <time
                        v-if="startDate"
                        class="schedule-item"
                        v-html="parsedDate"
                    />
                    <time
                        v-if="parsedTime"
                        class="schedule-item"
                        v-html="parsedTime"
                    />
                </div>

                <div v-if="locationLinksExists" class="location-group">
                    <icon-with-link
                        v-for="location in parsedLocationsLinks"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        icon-name="svg-icon-location"
                        :to="`/${location.to}`"
                    />
                </div>

                <div v-if="locationExternalExists" class="location-group">
                    <icon-with-link
                        :text="parsedLocationsExternal"
                        icon-name="svg-icon-location"
                    />
                </div>
                <div
                    v-if="
                        locations.length &&
                        !locationLinksExists &&
                        !locationForExternalExists
                    "
                    class="location-group"
                >
                    <icon-with-link
                        v-for="location in parsedLocations"
                        :key="`location-${location.id}`"
                        :text="location.title"
                        :icon-name="location.svg"
                        :to="location.to"
                        :class="location.class"
                    />
                </div>
            </div>
            <button-link
                v-if="to"
                :label="prompt"
                :to="to"
                aria-labelledby="banner-featured-button banner-featured"
                class="button"
                id="banner-featured-button"
            />
            <block-form v-if="!to && registerEvent" />
        </div>
    </div>
</template>

<script>
import format from "date-fns/format"

// Components
import SvgMoleculeHalfFaceted from "ucla-library-design-tokens/assets/svgs/molecule-half-overlay.svg"
import SvgHatchRight from "ucla-library-design-tokens/assets/svgs/graphic-hatch-lines.svg"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import ResponsiveVideo from "@/lib-components/ResponsiveVideo.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"
import SmartLink from "@/lib-components/SmartLink.vue"

// Utility functions
import formatEventTimes from "@/mixins/formatEventTimes"
import formatEventDates from "@/mixins/formatEventDates"
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BannerFeatured",
    mixins: [getSectionName, formatEventTimes, formatEventDates],
    components: {
        SvgMoleculeHalfFaceted,
        SvgHatchRight,
        ResponsiveImage,
        ResponsiveVideo,
        IconWithLink,
        SmartLink,
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        RichText: () =>
            import("@/lib-components/RichText.vue").then((d) => d.default),
        SvgHeadingVector: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg"
            ).then((d) => d.default),
        SvgIconOnline: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"
            ).then((d) => d.default),

        SvgIconEmail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-email.svg"
            ).then((d) => d.default),
        SvgIconPhone: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-phone.svg"
            ).then((d) => d.default),
        SvgIconLocation: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location.svg"
            ).then((d) => d.default),
        SvgIconPerson: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-person.svg"
            ).then((d) => d.default),
        BlockForm: () =>
            import("@/lib-components/BlockForm.vue").then((d) => d.default),
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        dateCreated: {
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        byline: {
            type: Array,
            default: () => [],
        },
        to: {
            // URL to link to, if blank won't link
            type: String,
            default: "",
        },
        breadcrumb: {
            type: String,
            default: "",
        },
        prompt: {
            // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
            type: String,
            default: "",
        },
        alignRight: {
            type: Boolean,
            default: true,
        },
        ratio: {
            type: Number,
            default: 56.25,
        },
        registerEvent: {
            type: Boolean,
            default: false,
        },
        titleLink: {
            type: String,
            default: "",
        },
        sectionHandle: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "banner-featured",
                { "hatch-left": !this.alignRight },
                `color-${this.sectionName}`,
            ]
        },
        isVideo() {
            if (this.image && this.image.src) {
                let fileName = this.image.src.toLowerCase()
                let extension = fileName.split(".").pop()
                if (
                    extension == "mp4" ||
                    extension == "m4a" ||
                    extension == "f4v" ||
                    extension == "m4b" ||
                    extension == "mov"
                ) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        },
        parseImage() {
            if (this.isVideo) return null
            let imageObj = this.image
            console.log("image obj: " + JSON.stringify(imageObj))
            return imageObj
        },
        parseVideo() {
            if (!this.isVideo) return null
            let videoObj = {}
            let mainVideo = this.image
            videoObj = {
                videoUrl: mainVideo.src,
                sizes: mainVideo.sizes,
                height: mainVideo.height,
                width: mainVideo.width,
                altText: mainVideo.alt,
                caption: mainVideo.caption,
                poster: mainVideo.poster,
            }
            return videoObj
        },
        parsedMediaComponent() {
            return this.isVideo ? "responsive-video" : "responsive-image"
        },
        parsedMediaProp() {
            return this.isVideo ? this.parseVideo : this.parseImage
        },
        bylineArticleExists() {
            return (
                this.byline &&
                (this.byline["articleStaff"] || this.byline["articlePostDate"])
            )
        },
        bylineProjectExists() {
            return this.byline && this.byline["project"]
        },
        locationLinksExists() {
            return this.locations && this.locations["location_links"]
        },
        locationExternalExists() {
            return this.locations && this.locations["location_external"]
        },
        parseByLineStaff() {
            return this.byline["articleStaff"]
        },
        parseByLineProject() {
            return this.byline["project"]
        },
        parsedLocationsLinks() {
            return this.locations["location_links"]
        },
        parsedLocationsExternal() {
            return this.locations["location_external"]
        },
        parsedDateCreated() {
            return format(new Date(this.dateCreated), "MMMM d, Y")
        },
        parsedDate() {
            return this.formatDates(this.startDate, this.endDate)
        },
        parsedTime() {
            if (this.startDate && this.sectionHandle == "event") {
                return this.formatTimes(this.startDate, this.endDate)
            }
            return ""
        },
        sectionName() {
            return this.section || this.getSectionName(this.to)
        },

        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            // if (this.$store.state.winWidth <= 750) {
            //     output = 100
            // }
            return output
        },
        parsedLocations() {
            return this.locations.map((obj) => {
                return {
                    ...obj,
                    svg:
                        obj.title == "Online"
                            ? "svg-icon-virtual"
                            : "svg-icon-location",
                    class:
                        obj.title == "Online"
                            ? "location-online"
                            : "location-link",
                    to: obj.to != null ? `/${obj.to}` : "",
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-featured {
    z-index: 0;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);
    max-width: $container-l-cta + px;

    // Themes
    --banner-color-theme: var(--color-default-cyan-03);
    &.color-visit {
        --banner-color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --banner-color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --banner-color-theme: var(--color-about-purple-03);
    }

    .hatch,
    .heading-arrow {
        ::v-deep .svg__stroke--wayfinder {
            stroke: var(--banner-color-theme);
        }
    }

    .slot {
        position: absolute;
        z-index: 20;
        padding-left: $component-09 + px;
        margin-top: $component-08 + px;
    }
    .breadcrumb {
        color: var(--color-white);
        font-size: 26px;
        text-transform: capitalize;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
            height: 96px;
        }
        ::v-deep .text {
            border: 1px solid var(--color-white);
            padding: 14px 24px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
            line-height: 1;
            font-weight: #{$font-weight-regular};
            font-size: 26px;
        }
    }
    ::v-deep .responsive-image,
    .responsive-video {
        max-height: 728px;
        .media {
            object-fit: cover;
        }
    }
    //TODO update with variables
    .gradient {
        background: var(--gradient-image-01),
            linear-gradient(
                180deg,
                rgba(15, 15, 15, 0) 0%,
                rgba(15, 15, 15, 0.25) 67.57%,
                #0f0f0f 100%
            );
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .molecule {
        right: 0;
        top: 0;
        bottom: 95px;
        margin: auto;
        position: absolute;
        z-index: 20;
        opacity: 0.3;
        mix-blend-mode: screen;

        height: 70%;
        width: auto;
    }
    --hatch-height: 96px;
    --hatch-width: 35%;
    --hatch-density: 818px;
    .hatch-box {
        width: 100%;
        position: relative;
        z-index: 30;
        overflow: hidden;

        margin-top: calc(-1 * var(--hatch-height));
    }
    .clipped-box {
        max-width: calc(100% - var(--hatch-width));
        background-color: var(--color-white);
        position: relative;
        z-index: 20;
        height: calc(var(--hatch-height) + 2px);

        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 95px,
            100% 102%,
            0 102%
        );
    }
    .hatch {
        height: var(--hatch-height);
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: calc(65% - 99px);

        .svg {
            position: relative;
            bottom: 8px;
            width: var(--hatch-density);
            height: auto;
        }
    }

    // Variant
    &.hatch-left {
        .clipped-box {
            margin-left: auto;
            padding-right: 50px;
            padding-left: 100px;
            clip-path: polygon(39px 0, 105% 0, 100% 102%, 0 102%, 0% 95px);
        }
        .hatch {
            right: calc(65% - 99px);
            left: auto;

            .svg {
                transform: scaleX(-1);
            }
        }
        .meta {
            padding-left: 376px;
            padding-right: 0;
            margin-left: auto;

            align-content: flex-start;
            align-items: flex-start;
        }
    }

    .category-mobile {
        display: none;
    }

    .meta {
        margin: -60px auto 0;
        position: relative;
        z-index: 40;
        padding-right: clamp(360px, 35%, 400px);
        max-width: $container-l-main + px;

        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-end;
    }

    .meta-text {
        margin-bottom: var(--space-l);
    }

    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-bottom: var(--space-s);
    }
    .title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-s);
    }
    .byline,
    .description,
    .schedule {
        @include step-0;
        margin-bottom: var(--space-s);
    }
    .date-created {
        margin: var(--space-s) 0;
        @include step-0;
        color: var(--color-secondary-grey-04);
    }

    .byline {
        color: var(--color-secondary-grey-04);
    }
    .description {
        color: var(--color-black);
    }
    .schedule {
        color: var(--color-secondary-grey-04);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .schedule-item {
        &:after {
            content: "|";
            color: var(--color-secondary-grey-02);
            margin: 0 10px;
            height: 18px;
            display: inline-block;
            position: relative;
        }
        &:last-child {
            margin-right: 0;
        }
        &:last-child:after {
            display: none;
        }
    }
    .location-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: var(--space-m);
        color: var(--color-primary-blue-03);
    }

    // Breakpoints

    @media #{$medium} {
        --hatch-height: 74px;
        --hatch-density: 632px;
        .slot {
            padding-left: 32px;
            margin-top: 32px;
        }
        .breadcrumb .text {
            font-size: 20px;
        }
        .breadcrumb .heading-line {
            height: 80px;
        }
        .hatch {
            left: calc(65% - 44px);
        }
        .meta {
            padding-left: 16px;
            padding-right: clamp(280px, 42%, 400px);
            margin-left: 0;
        }
        &.hatch-left .meta {
            padding-left: clamp(340px, 42%, 400px);
            padding-right: var(--unit-gutter);
        }
        .schedule {
            flex-direction: column;
        }

        .schedule-item:after {
            display: none;
        }
    }

    @media #{$small} {
        --hatch-height: 36px;
        --hatch-density: 338px;
        .media {
            height: 375px;
        }
        .slot {
            font-size: 28px;
            padding-left: 16px;
            margin-top: 16px;
        }
        .breadcrumb {
            font-size: 20px;
            .text {
                padding: 12px 16px;
            }
        }
        .molecule {
            margin-bottom: -45px;
            height: 215px;
            width: auto;
        }
        .hatch {
            left: calc(65% - 44px);
        }
        .category-mobile {
            display: block;
            padding-left: 0;
            height: 36px;
            padding-top: 7px;

            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            align-items: flex-start;
        }

        .meta {
            width: 100%;
            margin-top: 0;
            padding-left: 0;
            padding-right: 0;
        }
        .category-desktop {
            display: none;
        }
        .title {
            margin-top: var(--space-m);
        }

        // Variant
        &.hatch-left {
            .clipped-box {
                padding-left: var(--unit-gutter);
                padding-right: var(--unit-gutter);
            }
            .hatch {
                right: calc(65% - 44px);
            }
            .category-mobile {
                align-content: center;
                align-items: center;
            }
            .meta {
                width: 100%;
                margin-top: 0;
                padding-left: 0;
                padding-right: 0;
            }
        }
    }
    // Hover
    .title-linked:hover {
        @include link-hover;
    }
}
</style>
