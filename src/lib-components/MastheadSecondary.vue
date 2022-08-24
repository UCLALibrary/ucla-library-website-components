<template>
    <div :class="classes">
        <responsive-image
            v-if="hasHeroImage"
            class="hero-image"
            :image="this.heroImage"
        />
        <div class="container">
            <div class="meta">
                <h1 class="title" v-html="title" />
                <div v-if="text" class="text" v-html="text" />
            </div>
        </div>
    </div>
</template>

<script>
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import _isEmpty from "lodash/isEmpty"

export default {
    props: {
        hasMolecules: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            default: "",
        },
        theme: {
            type: String,
            default: "",
        },
        heroImage: {
            type: Object,
            default: () => ({}),
        },
    },
    components: {
        ResponsiveImage,
    },
    computed: {
        classes() {
            return [
                "masthead-secondary",
                {
                    "has-molecule": this.hasMolecules && !this.hasHeroImage,
                },
                {
                    "has-slot": this.$slots.default,
                },
                {
                    "theme-meap": this.theme.toLowerCase() == "meap",
                },
            ]
        },
        hasHeroImage() {
            return !_isEmpty(this.heroImage)
        },
    },
}
</script>

<style lang="scss" scoped>
.masthead-secondary {
    position: relative;
    background: var(--gradient-03), var(--text-overlay);
    .hero-image {
        position: absolute;
        width: 100%;
        height: 100%;
        filter: brightness(0.75);

        ::v-deep .media {
            object-fit: cover;
        }
    }

    .container {
        max-width: $container-l-cta + px;

        position: relative;
        z-index: 20;
        margin: 0 auto;
        padding-top: var(--space-2xl);
        padding-bottom: var(--space-3xl);
    }
    .meta {
        color: var(--color-white);

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: var(--space-s);

        .title {
            @include step-5;
            text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
        }
        .text {
            @include step-0;
            text-shadow: 0px 2px 8px rgba(113, 113, 113, 0.08);
        }
    }

    // Variants
    &.has-molecule:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-masthead.svg");
        background-repeat: no-repeat;
        background-position: center 60%;
        mix-blend-mode: soft-light;
    }

    &.theme-meap {
        .container {
            padding: var(--space-2xl) 0;
        }
        .meta {
            gap: var(--space-s);

            padding: var(--space-l) var(--space-xl) var(--space-xl);
            background: var(--color-primary-blue-03);

            .title {
                @include step-4;
            }
        }
    }

    // Breakpoints
    @media (max-width: 1200px) {
        &.theme-meap .container {
            margin-left: var(--unit-gutter);
            margin-right: var(--unit-gutter);
        }
        .container {
            margin-left: var(--unit-gutter);
            margin-right: var(--unit-gutter);
        }
    }
    @media #{$medium} {
        &.theme-meap .container {
            padding-left: var(--unit-gutter);
            padding-right: var(--unit-gutter);
            margin: 0;
        }
        .container {
            padding-left: var(--unit-gutter);
            padding-right: var(--unit-gutter);
            margin: 0;
        }
    }
}
</style>
