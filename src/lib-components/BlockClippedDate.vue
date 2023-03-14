<!-- Equivalent to cards in Section teaser List -->
<template>
    <li :class="classes">
        <div class="image-container">
            <div v-if="startDate" class="floating-highlight" />
            <div v-if="startDate" class="clipped-date">
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
        </div>
        <card-meta
            :to="to"
            :category="category"
            :title="title"
            :start-date="startDate"
            :end-date="endDate"
            :text="text"
            :locations="locations"
            :alternativeFullName="alternativeFullName"
            :language="language"
            :section-handle="sectionHandle"
        />
    </li>
</template>

<script>
// COMPONENTS
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"
import CardMeta from "@/lib-components/CardMeta.vue"

import getSectionName from "@/mixins/getSectionName"
import formatDay from "@/mixins/formatEventDay"
import formatMonth from "@/mixins/formatEventMonth"

// SVGs
import MoleculePlaceholder from "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"

export default {
    name: "BlockClippedDate",
    components: {
        SmartLink,
        IconWithLink,
        ResponsiveImage,
        MoleculePlaceholder,
        CardMeta,
    },
    mixins: [getSectionName, formatDay, formatMonth],
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
    width: 100%;

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
    // Breakpoints
    @media #{$medium} {
        // .text {
        //     margin-top: 0;
        // }

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

            .image-container {
                margin-bottom: var(--space-l);
            }
        }
    }
    @media #{$small} {
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
</style>
