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
        </div>
        <card-meta
            :to="to"
            :category="category"
            :title="title"
            :start-date="startDate"
            :end-date="endDate"
            :ongoing="ongoing"
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
    name: "BlockCardWithImage",
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
                "block-card-with-image",
                { "is-vertical": this.isVertical },
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
.block-card-with-image {
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

        ::v-deep .card-meta {
            margin-top: 16px;
        }
        ::v-deep .image {
            width: 100%;
            .media {
                object-fit: cover;
            }
        }
    }
    // Breakpoints
    @media #{$medium} {
        &.is-vertical {
            .molecule-no-image {
                height: 226px;
            }
        }
    }
}
</style>
