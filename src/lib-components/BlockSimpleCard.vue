<template>
    <li :class="classes">
        <!-- TODO: Fix sectionName to use "to" value to determine section -->
        <span class="section">{{ sectionName }}</span>
        <h3 class="title2">
            <smart-link v-if="title" :to="to" class="title">
                {{ title }}
            </smart-link>
        </h3>

        <div v-if="text" class="text">{{ parsedText }}</div>

        <div class="spacer" />

        <div class="svg-meta" aria-hidden="true">
            <component :is="parsedIconName" class="svg" />
        </div>
    </li>
</template>

<script>
// COMPONENTS
import SmartLink from "@/lib-components/SmartLink"

// UTILITY FUNCTIONS
import getSectionName from "@/mixins/getSectionName"
import isInternalLink from "@/mixins/isInternalLink"
import removeHtmlTruncate from "@/mixins/removeHtmlTruncate"

// SVGs
import SvgArrowDiagonal from "ucla-library-design-tokens/assets/svgs/icon-external-link.svg"
import SvgArrowRightSmall from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"

export default {
    name: "BlockSimpleCard",
    mixins: [getSectionName, isInternalLink, removeHtmlTruncate],
    components: {
        SvgArrowRightSmall,
        SvgArrowDiagonal,
        SmartLink,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["block-simple-card", `color-${this.sectionName}`]
        },
        sectionName() {
            return this.getSectionName(this.to)
        },
        parsedIconName() {
            return this.isInternalLink(this.to)
                ? "svg-arrow-right-small"
                : "svg-arrow-diagonal"
        },
        parsedText() {
            return this.text ? this.removeHtmlTruncate(this.text, 250) : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.block-simple-card {
    min-height: 296px;
    border-radius: var(--rounded-slightly-all);
    overflow: hidden;
    background-color: var(--color-primary-blue-01);
    transition-property: box-shadow, transform;
    @include animate-normal;
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 40px 40px 32px;

    // Themes
    --color-theme: var(--color-default-cyan-01);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-01);
    }
    &.color-help {
        --color-theme: var(--color-help-green-01);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-01);
    }

    .section {
        display: none;
        @include overline;
    }
    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        @include card-clickable-area;
    }

    .text {
        @include step--1;
        @include truncate(5);
    }

    .spacer {
        flex-basis: 0;
        flex-grow: 1;
    }

    .svg-meta {
        align-self: flex-end;
    }

    .svg {
        z-index: 20;
        display: block;
    }
    // Breakpoints
    @media #{$small} {
        padding: var(--unit-gutter);
    }

    // Hovers
    @media #{$has-hover} {
        &:hover,
        &:focus {
            @include card-horizontal-hover;
            background-color: var(--color-theme);
            z-index: 30;
            cursor: pointer;

            .title {
                text-decoration-thickness: 1.5px;
                color: var(--color-primary-blue-05);
            }
            .text {
                color: var(--color-primary-blue-05);
            }
            ::v-deep .svg {
                .svg__stroke--primary-blue-03 {
                    stroke: var(--color-primary-blue-05);
                }
                .svg__fill--primary-blue-03 {
                    fill: var(--color-primary-blue-05);
                }
            }
        }
    }
}
</style>
