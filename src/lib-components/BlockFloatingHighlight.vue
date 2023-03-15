<!-- Equivalent to section teaser highlight -->
<template>
    <li :class="classes">
        <div class="image-container">
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
import CardMeta from "@/lib-components/CardMeta.vue"

// UTILITY FUNCTIONS

import getSectionName from "@/mixins/getSectionName"

// SVGs
import MoleculePlaceholder from "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"

export default {
    name: "BlockFloatingHighlight",
    components: {
        ResponsiveImage,
        MoleculePlaceholder,
        CardMeta,
    },
    mixins: [getSectionName],
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
            default: true,
        },
        isVertical: {
            type: Boolean,
            default: true,
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
                "block-floating-highlight",
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
    },
}
</script>

<style lang="scss" scoped>
.block-floating-highlight {
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

    // Variations
    &.is-vertical {
        flex-direction: column;
        .molecule-no-image {
            width: 100%;
            height: 179.2px;
        }
        // for clipped version
        &.has-triangle {
            ::v-deep .card-meta {
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

    // Breakpoints
    @media #{$medium} {
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

        &.is-vertical.has-triangle {
            .card-meta {
                padding: 0;
                .title {
                    max-width: 680px;
                }

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
    }
    @media #{$small} {
        &.is-vertical.has-triangle {
            .meta {
                .title {
                    max-width: 312px;
                }
            }
        }
    }
}
</style>
