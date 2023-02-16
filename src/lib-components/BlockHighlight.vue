<template>
    <li :class="classes">
        <div class="image-container">
            <div v-if="!isVertical && startDate" class="floating-highlight" />
            <div v-if="!isVertical && startDate" class="clipped-date">
                <time v-if="startDate" class="month" v-html="parsedDateMonth" />
                <time v-if="startDate" class="day" v-html="parsedDateDay" />
            </div>
            <responsive-image
                v-if="image"
                :image="image"
                :aspect-ratio="imageAspectRatio"
                :object-fit="cover"
                class="image"
            />
            <div v-else class="molecule-no-image">
                <molecule-placeholder class="molecule" aria-hidden="true" />
            </div>

            <div v-if="hasTriangle" class="clipped">
                <div class="floating-highlight" />
                <div class="clipped-box" />
            </div>
        </div>
        <div class="meta">
            <div v-if="category" class="category" v-html="category" />
            <smart-link
                v-if="to"
                :linkTarget="parsedTarget"
                :to="to"
                class="title"
            >
                {{ title }}
                <span
                    v-if="alternativeFullName"
                    :lang="language"
                    v-html="alternativeFullName"
                    class="translation"
                />
            </smart-link>
            <h3 v-else class="title-no-link" v-html="title" />

            <div class="byline-group" v-if="bylineOne || bylineTwo">
                <div
                    v-if="bylineOne"
                    class="schedule-item"
                    v-html="bylineOne"
                />
                <div
                    v-if="bylineTwo"
                    class="schedule-item"
                    v-html="bylineTwo"
                />
            </div>

            <div class="date-time" v-if="startDate || ongoing">
                <div v-if="ongoing">Ongoing</div>
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedDate"
                />
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedTime"
                />
            </div>

            <div v-if="locations.length" class="location-group">
                <icon-with-link
                    v-for="(location, index) in parsedLocations"
                    :key="`location-${index}`"
                    :text="location.title"
                    :icon-name="location.svg"
                    :to="location.to"
                />
            </div>
            <!-- changing p tag to div fixes nodemismatch errors -->
            <div v-if="text" class="text">{{ parsedText }}</div>
        </div>
    </li>
</template>

<script>
// COMPONENTS
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"

// UTILITY FUNCTIONS
import formatTimes from "@/mixins/formatEventTimes"
import formatDates from "@/mixins/formatEventDates"
import formatDay from "@/mixins/formatEventDay"
import formatMonth from "@/mixins/formatEventMonth"
import getSectionName from "@/mixins/getSectionName"
import removeHtmlTruncate from "@/mixins/removeHtmlTruncate"

// SVGs
import MoleculePlaceholder from "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"

export default {
    name: "BlockHighlight",
    components: {
        SmartLink,
        IconWithLink,
        ResponsiveImage,
        MoleculePlaceholder,
    },
    mixins: [
        formatTimes,
        formatDates,
        formatDay,
        formatMonth,
        getSectionName,
        removeHtmlTruncate,
    ],
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        alternativeFullName: {
            type: String,
            default: "",
        },
        language: {
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
        ongoing: {
            type: Boolean,
            default: false,
        },
        hasTriangle: {
            type: Boolean,
            default: false,
        },
        isVertical: {
            type: Boolean,
            default: false,
        },
        imageAspectRatio: {
            type: Number,
            default: 0,
        },
        locations: {
            type: Array,
            default: () => [],
        },
        text: {
            type: String,
            default: "",
        },
        bylineOne: {
            type: String,
            default: "",
        },
        bylineTwo: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: "", // This will be "visit", "about", "help".
        },
        sectionHandle: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "block-highlight",
                { "is-vertical": this.isVertical },
                { "has-triangle": this.hasTriangle },
                `color-${this.sectionName}`,
            ]
        },
        sectionName() {
            return this.color || this.getSectionName(this.$route.path)
        },
        isImpactReport() {
            return this.$route.path.includes("impact") ? true : false
        },
        parsedTarget() {
            return this.isImpactReport ? "_blank" : ""
        },
        parsedDate() {
            if (this.startDate) {
                return this.formatDates(this.startDate, this.endDate)
            }
            return ""
        },
        parsedDateDay() {
            if (this.startDate) {
                return this.formatDay(this.startDate)
            }
            return ""
        },
        parsedDateMonth() {
            if (this.startDate) {
                return this.formatMonth(this.startDate)
            }
            return ""
        },

        parsedTime() {
            if (this.startDate && this.sectionHandle == "event") {
                return this.formatTimes(this.startDate, this.endDate)
            }
            return ""
        },
        parsedLocations() {
            return this.locations.map((obj) => {
                let input = "svg-icon-location"
                if (obj.title == "Online") input = "svg-icon-virtual"
                return {
                    ...obj,
                    svg: input,
                    to: obj.to != null ? `/${obj.to}` : "",
                }
            })
        },
        parsedText() {
            return this.text ? this.removeHtmlTruncate(this.text, 250) : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.block-highlight {
    background-color: var(--color-theme, var(--color-white));
    font-family: var(--font-primary);
    position: relative;
    display: flex;
    flex-direction: row;
    // Themes for floating highlight/ triangle
    --floating-highlight-color-theme: var(--color-default-cyan-03);
    &.color-visit {
        --floating-highlight-color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --floating-highlight-color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --floating-highlight-color-theme: var(--color-about-purple-03);
    }
    .clipped {
        width: 100%;
        height: 47px;
        margin-top: -54px;
        position: relative;
        z-index: 0;
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: calc(100% - 55px);
            top: 0;
            left: 5px;
            height: 47px;
            background-color: var(--floating-highlight-color-theme);
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                calc(100% - 21px) 1.5px,
                0 1.5px
            );
        }
        .clipped-box {
            position: absolute;
            z-index: 30;
            top: 8px;
            left: -1px;
            width: calc(100% - 57px);
            height: 47px;
            background-color: var(--color-theme, var(--color-white));
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                0 47px,
                0 1.5px
            );
        }
    }
    .meta {
        z-index: 10;
        width: 100%;
    }
    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-top: var(--space-xs);
        margin-bottom: var(--space-s);
    }
    .title {
        @include card-clickable-area;
        display: block;

        .translation {
            display: block;
        }
    }
    .title,
    .title-no-link {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin: var(--space-s) 0;
        line-height: $line-height--1;
    }
    // .title:has(+ .date-time) {
    //     margin-bottom: $component-02 + px;
    // }
    .date-time {
        @include step-0;
        color: var(--color-secondary-grey-05);
        margin: $component-02 + px 0 var(--space-s);
        display: flex;
        flex-direction: column;
        .svg-online {
            margin-bottom: -5px;
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid var(--color-secondary-grey-02);
        }
    }
    .byline-group {
        display: flex;
        flex-direction: column;
        @include step-0;
        color: var(--color-secondary-grey-04);
        margin: var(--space-s) 0;
    }
    .image-container {
        .molecule-no-image {
            width: 100%;
            margin-right: var(--space-xl);
            background: var(--gradient-01);
            overflow: hidden;
            display: flex;
            align-items: center;
            position: relative;

            .molecule {
                flex-shrink: 0;
                position: absolute;
                opacity: 0.7;
            }
        }
    }
    .text {
        @include step-0;
        color: var(--color-black);
        @include truncate(4);
        margin-top: var(--space-s);

        ::v-deep strong {
            font-weight: normal;
        }
    }
    .location-group {
        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary);
        line-height: 1;
        margin-bottom: var(--space-s);
        display: flex;
        flex-direction: column;
    }
    .icon-with-link {
        position: relative;
        z-index: 20;
    }
    // Variations
    &.is-vertical {
        flex-direction: column;
        .molecule-no-image {
            width: 100%;
            height: 179.2px;
        }
        &:not(.has-triangle) {
            .meta {
                margin-top: 16px;
            }
            ::v-deep .image {
                width: 100%;
                .media {
                    object-fit: cover;
                }
            }
        }
        // for clipped version
        &.has-triangle {
            .meta {
                margin-top: -24px;
                padding: 0 72px 0 16px;
            }
            ::v-deep .image {
                height: 272px;
                .media {
                    object-fit: cover;
                }
            }
            .molecule-no-image {
                height: 272px;
            }
        }
    }
    &:not(&.is-vertical) {
        width: 100%;

        .image-container {
            width: 50%;
            max-height: 272px;
            flex-shrink: 0;
            margin-right: var(--space-xl);

            .image {
                width: 100%;
                height: 272px;
            }
            .molecule-no-image {
                height: 272px;
            }
        }
        .meta {
            max-width: calc(50% - var(--space-xl));
            padding-bottom: 16px;
            overflow: hidden;

            > *:last-child {
                margin-bottom: 0;
            }

            .category {
                margin-top: 0;
            }
        }
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: 123px;
            top: 191px;
            left: 6px;
            height: 90px;
            background-color: var(--floating-highlight-color-theme);
            clip-path: polygon(
                0 0,
                calc(100% - 37px) 0,
                100% 75px,
                calc(100% - 1.5px) 75px,
                calc(100% - 38px) 1.5px,
                0 1.5px
            );
        }
        .clipped-date {
            margin-top: 54px;
            z-index: 30;
            position: absolute;
            top: 145px;
            left: 0px;
            width: 125px;
            height: 84px;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 84px,
                calc(100% - 1.5px) 84px,
                0 84px,
                0 1.5px
            );
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 32px;
            color: var(--color-primary-blue-03);
            .month {
                font-weight: 400;
                font-family: var(--font-secondary);
                font-size: 16px;
                letter-spacing: 1.5%;
            }
            .day {
                font-weight: 500;
                font-family: var(--font-primary);
                font-size: 36px;
                letter-spacing: 0.25%;
                line-height: 1;
            }
        }

        ::v-deep .image {
            width: 456px;
            max-height: 272px;
            margin-right: 56px;
            .clipped-date {
                margin-top: 54px;
                z-index: 30;
                position: absolute;
                top: 145px;
                left: 0px;
                width: 125px;
                height: 84px;
                background-color: var(--color-white);
                clip-path: polygon(
                    0 0,
                    calc(100% - 39px) 0,
                    100% 84px,
                    calc(100% - 1.5px) 84px,
                    0 84px,
                    0 1.5px
                );
            }
        }
    }
    // Breakpoints
    @media #{$medium} {
        .text {
            margin-top: 0;
        }
        &.is-vertical {
            .molecule-no-image {
                height: 226px;
            }
            &.has-triangle {
                ::v-deep .image {
                    height: 200px;
                }
                .molecule-no-image {
                    height: 200px;
                }
            }
        }
        &:not(&.is-vertical) {
            flex-direction: column;
            padding-left: 0;
            padding-right: 0;
            .floating-highlight,
            .clipped-date {
                display: none;
            }

            .image-container,
            .meta {
                width: 100%;
                max-width: 100%;
            }

            .image-container {
                margin-bottom: var(--space-l);
            }
        }
        &.is-vertical.has-triangle 
            .title {
                max-width: 680px;
            }
            .meta {
                padding: 0;
            

            .category {
                padding-right: 72px;
            }
        }
        .schedule {
            flex-direction: column;
        }

        .schedule-item:after {
            display: none;
        }
    }
    @media #{$small} {
        &.is-vertical.has-triangle {
            .title {
                max-width: 300px;
            }
        }
        &:not(&.is-vertical) {
            .image {
                max-width: 100%;
            }
            .image-container {
                .molecule-no-image {
                    height: 200px;
                }
            }
        }
    }
    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                @include link-hover;
            }
        }
    }
}
</style>
