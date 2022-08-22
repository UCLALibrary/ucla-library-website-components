<template>
    <li tabindex="1" :class="classes">
        <span class="section" v-html="sectionName" />
        <h3 class="title2">
            <smart-link
                v-if="title"
                :to="to"
                :target="parsedTarget"
                class="title"
            >
                {{ title }}
            </smart-link>
        </h3>
        <div v-if="text" class="text" v-html="text" />
        <div class="svg-meta" aria-hidden="true">
            <component :is="parsedIconName" class="svg" />
        </div>
    </li>
</template>

<script>
// Helper functions
import getSectionName from "@/mixins/getSectionName"
import isInternalLink from "@/mixins/isInternalLink"
import SmartLink from "@/lib-components/SmartLink"

// SVGs
import SvgArrowRightSmall from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"
import SvgArrowDiagonal from "ucla-library-design-tokens/assets/svgs/icon-external-link.svg"

export default {
    name: "BlockSimpleCard",
    mixins: [getSectionName, isInternalLink],
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
        parsedTarget() {
            return this.isInternalLink(this.to) ? "_self" : "blank"
        },
        parsedIconName() {
            return this.isInternalLink(this.to)
                ? "svg-arrow-right-small"
                : "svg-arrow-diagonal"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-simple-card {
    width: 100%;
    min-height: 288px;
    border-radius: var(--rounded-slightly-all);
    overflow: hidden;
    background-color: var(--color-primary-blue-01);
    transition-property: box-shadow, transform;
    @include animate-normal;
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;

    padding: 40px;

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
    }
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .title2 {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: 16px;
    }

    .text {
        @include step--1;
        margin-bottom: var(--space-m);

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .svg {
        right: 32px;
        bottom: 32px;
        position: absolute;
        z-index: 20;

        .arrow-right,
        .line {
            stroke: var(--color-primary-blue-03);
        }
        .arrow-diagonal {
            fill: var(--color-primary-blue-03);
        }
    }
    // Breakpoints
    @media #{$small} {
        padding: var(--unit-gutter);

        .svg {
            right: var(--unit-gutter);
            bottom: var(--unit-gutter);
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover,
        &:focus {
            @include card-horizontal-hover;
            background-color: var(--color-theme);
            z-index: 30;

            .title {
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
                color: var(--color-primary-blue-05);
            }
            .text {
                color: var(--color-primary-blue-05);
            }
            .svg {
                .arrow-right,
                .line {
                    stroke: var(--color-primary-blue-05);
                }
                .arrow-diagonal {
                    fill: var(--color-primary-blue-05);
                }
            }
        }
    }
}
</style>
