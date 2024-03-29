<template>
    <div class="impact-numbers-carousel">
        <div class="slide-indicator">
            <svg-icon-molecule-bullet
                v-for="(block, index) in blocks"
                :key="index"
                :class="checkCurrentSlide(index)"
                @click.native="setCurrentSlide(index)"
            />
        </div>
        <vue-glide
            :per-view="1"
            :rewind="false"
            :active="currentSlide"
            @change="setCurrentSlide"
        >
            <vue-glide-slide v-for="(block, index) in blocks" :key="index">
                <div class="slide-image">
                    <responsive-image :image="block.image[0]" />
                </div>
                <div class="impact-numbers-text-container">
                    <span class="impactNumber">{{ block.largeText }}</span>
                    <span class="impactText">{{ block.mediumText }}</span>
                </div>
                <div class="small-descriptor">
                    {{ block.smallDescriptor }}
                </div>
            </vue-glide-slide>
            <template slot="control">
                <!-- <div class="controls"> -->
                <button data-glide-dir="<" :class="prevIsDisabled">
                    <svg-arrow-right
                        aria-label="Go to previous item"
                        class="prev-control"
                    />
                </button>
                <button data-glide-dir=">" :class="nextIsDisabled">
                    <svg-arrow-right aria-label="Go to next item" />
                </button>
                <!-- </div> -->
            </template>
        </vue-glide>
        <div role="tablist" class="dots" />
    </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js"

// SVGs
import SvgArrowRight from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"
import SvgIconMoleculeBullet from "ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-filled.svg"
import ResponsiveImage from "@/lib-components/ResponsiveImage"

export default {
    name: "ImpactNumbersCarousel",
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        SvgArrowRight,
        SvgIconMoleculeBullet,
        ResponsiveImage,
    },
    props: {
        /**
         * An array of blocks with the following properties: [{ largeText,
         * mediumText, smallDescriptor, imagePath, altImageText }].
         */
        blocks: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    data() {
        return {
            currentSlide: 0,
        }
    },
    computed: {
        // returns 'disabled' if current slide is first
        prevIsDisabled() {
            return this.currentSlide === 0 ? "disabled" : ""
        },
        // returns 'disabled' if current slide is last
        nextIsDisabled() {
            return this.currentSlide === this.blocks.length - 1
                ? "disabled"
                : ""
        },
    },
    methods: {
        checkCurrentSlide(index) {
            if (index === this.currentSlide) {
                return "current-slide"
            }
        },
        setCurrentSlide(currentSlide) {
            this.currentSlide = currentSlide
        },
    },
}
</script>

<style lang="scss" scoped>
@import "vue-glide-js/dist/vue-glide.css";
@import "src/styles/vue-glide.scss";

.impact-numbers-carousel {
    display: flex;
    max-width: $container-l-main + px;
    margin-top: var(--space-xl);

    .slide-indicator {
        ::v-deep .svg__fill--primary-blue-03 {
            fill: transparent;
        }
        ::v-deep .current-slide path.svg__fill--primary-blue-03 {
            fill: var(--color-primary-blue-03);
        }
    }

    .glide {
        width: calc(100% - 32px);
        .responsive-image {
            max-height: 544px;
        }

        .impact-numbers-text-container {
            background: white;
            margin-top: -64px;
            margin-bottom: var(--space-m);
            padding-left: 25px;
            position: relative;
            width: 431px;
            -webkit-clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 95px,
                100% 102%,
                0 102%
            );
            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 95px,
                100% 102%,
                0 102%
            );

            .impactNumber {
                font-family: var(--font-secondary);
                font-weight: medium;
                font-size: 128px;
                line-height: 100%;
                letter-spacing: -0.02em;
                color: var(--color-primary-blue-03);
            }

            .impactText {
                @include step-5;
                line-height: 85%;
                letter-spacing: -0.005em;
                color: var(--color-black);
            }
        }

        .small-descriptor {
            margin-left: 25px;
            max-width: 352px;
        }
    }

    [data-glide-el="controls"] {
        button,
        .separator {
            bottom: 36px;
            position: absolute;
            // the right arrow svg has a built in 21px padding, so adding 4px
            // to the right to make 25px margin to match the left margin
            right: 48px;

            &[data-glide-dir="<"] {
                right: 104px;
            }

            &.disabled {
                cursor: default;

                path {
                    stroke: var(--color-secondary-grey-02);
                }
            }

            path {
                stroke: var(--color-secondary-grey-04);
            }
        }

        .prev-control {
            right: 52px;
            transform: scaleX(-1);
        }

        .separator {
            border-left: dotted 1px;
            bottom: 56px;
            border-color: var(--color-secondary-grey-02);
            height: 16px;
            right: 107px;
        }
    }
}
@media #{$small} {
    .impact-numbers-carousel {
        flex-direction: column-reverse;

        .slide-indicator {
            display: flex;
            justify-content: center;
            margin: 12px 0;
        }
        .glide {
            .impact-numbers-text-container {
                width: unset;
                //clip-path: none;
            }
        }

        [data-glide-el="controls"] button,
        [data-glide-el="controls"] .separator {
            display: none;
        }
    }
}
</style>
