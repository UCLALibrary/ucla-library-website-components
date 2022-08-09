<template>
    <smart-link
        :to="to"
        :target="parsedTarget"
        :class="classes"
        :is-download="isDownload"
    >
        <span class="label">{{ label }}</span>
        <component :is="parsedIconName" class="arrow" />
    </smart-link>
</template>

<script>
// Helper functions
import isInternalLink from "@/mixins/isInternalLink"
import SmartLink from "@/lib-components/SmartLink.vue"
import SvgArrowRight from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"
import SvgExternalLink from "ucla-library-design-tokens/assets/svgs/icon-external-link.svg"
import SvgArrowDownload from "ucla-library-design-tokens/assets/svgs/icon-download.svg"

export default {
    name: "ButtonLink",
    mixins: [isInternalLink],
    components: {
        SmartLink,
        SvgArrowRight,
        SvgExternalLink,
        SvgArrowDownload,
    },
    props: {
        /**
         * Determines what text the button should have.
         */
        to: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        /**
         * Determines what icon should be used in button.
         * Do not include this prop if it is an internal link.
         */
        iconName: {
            type: String,
            default: "",
        },
        /**
         * Determines if the button should be displayed with secondary styles. (blue)
         */
        isSecondary: {
            type: Boolean,
            default: false,
        },
        isTertiary: {
            type: Boolean,
            default: false,
        },
        isDownload: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "button-link",
                {
                    "is-secondary": this.isSecondary,
                    "is-tertiary": this.isTertiary,
                },
            ]
        },
        parsedTarget() {
            return this.isInternalLink(this.to) ? "_self" : "blank"
        },
        // if -> the iconName is svg-download then the download icon will display
        // else if -> if there is no iconName prop given & it is an internal link then the svg-arrow-right will display
        // else svg-arrow-diagonal will display
        parsedIconName() {
            let output = ""
            if (this.isDownload) {
                output = "svg-arrow-download"
            } else if (this.isInternalLink(this.to)) {
                output = "svg-arrow-right"
            } else if (this.iconName == "none") {
                output = ""
            } else output = "svg-external-link"
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
.button-link {
    box-sizing: border-box;
    position: relative;
    @include button;
    min-height: 48px;
    padding: 4px 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 1.5px solid var(--color-primary-blue-02);
    color: var(--color-black);
    background-color: var(--color-white);
    --button-background-slide: var(--color-primary-blue-03);
    transition-property: all;
    @include animate-normal;
    overflow: hidden;
    z-index: 0;

    .label {
        white-space: nowrap;
    }

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--button-background-slide);
        position: absolute;
        top: 0;
        left: -100%;
        transition-property: all;
        @include animate-normal;
        z-index: -10;
    }

    ::v-deep .arrow {
        flex-shrink: 0;
    }

    ::v-deep .arrow .svg__stroke--primary-blue-03 {
        stroke: var(--color-default-cyan-03);
    }

    ::v-deep .svg__icon-external-link,
    ::v-deep .svg__icon-download {
        .svg__stroke--primary-blue-03 {
            stroke: var(--color-white);
        }
        .svg__fill--primary-blue-03 {
            fill: var(--color-white);
            stroke: transparent;
        }
    }

    *:not(:only-child):first-child {
        padding-left: 8px;
    }

    &.is-secondary {
        background-color: var(--color-primary-blue-03);
        --button-background-slide: var(--color-white);
        border-color: var(--color-primary-blue-03);
        color: var(--color-white);

        ::v-deep .arrow .svg__stroke--primary-blue-03 {
            stroke: var(--color-white);
        }
        ::v-deep .svg__icon-external-link,
        ::v-deep .svg__icon-download {
            .svg__stroke--primary-blue-03 {
                stroke: var(--color-white);
            }
            .svg__fill--primary-blue-03 {
                fill: var(--color-white);
                stroke: transparent;
            }
        }
    }

    &.is-tertiary {
        background: var(--color-primary-blue-03);
        border-color: var(--color-default-cyan-02);
        color: var(--color-white);

        ::v-deep .arrow .svg__stroke--primary-blue-03 {
            stroke: var(--color-white);
        }
        ::v-deep .svg__icon-external-link,
        ::v-deep .svg__icon-download {
            .svg__stroke--primary-blue-03 {
                stroke: var(--color-white);
            }
            .svg__fill--primary-blue-03 {
                fill: var(--color-white);
                stroke: transparent;
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover,
        &:focus,
        &:focus-visible {
            border-color: var(--color-primary-blue-03);
            color: var(--color-white);
            cursor: pointer;

            &::before {
                left: 0;
            }

            ::v-deep .arrow .svg__stroke--primary-blue-03 {
                stroke: var(--color-white);
            }

            &.is-secondary {
                border-color: var(--color-primary-blue-02);
                color: var(--color-black);

                ::v-deep .arrow .svg__stroke--primary-blue-03 {
                    stroke: var(--color-default-cyan-03);
                }
                ::v-deep .svg__icon-external-link,
                ::v-deep .svg__icon-download {
                    .svg__stroke--primary-blue-03 {
                        stroke: var(--color-primary-blue-03);
                    }
                    .svg__fill--primary-blue-03 {
                        fill: var(--color-primary-blue-03);
                        stroke: transparent;
                    }
                }
            }

            &.is-tertiary {
                border-color: var(--color-white);
                background: var(--color-primary-blue-03);
            }
        }

        &:focus,
        &:focus-visible {
            outline: none;
            border-radius: 0;
        }
    }
    // Breakpoints
    @media #{$medium} {
        padding: 4px 16px;
        display: flex;
    }

    @media #{$small} {
        width: 100%;
    }
}
</style>
