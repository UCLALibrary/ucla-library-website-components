<template>
    <section :class="classes">
        <div v-if="sectionTitle" class="section-header">
            <SectionHeader
                v-if="sectionTitle"
                class="section-title"
                v-text="sectionTitle"
            />
            <div
                v-if="sectionSummary"
                class="section-summary"
                v-html="sectionSummary"
            />
        </div>
        <slot />
    </section>
</template>

<script>
import SectionHeader from "@/lib-components/SectionHeader.vue"

export default {
    name: "SectionWrapper",
    components: { SectionHeader },
    props: {
        sectionTitle: {
            type: String,
            default: "",
        },
        sectionSummary: {
            type: String,
            default: "",
        },
        theme: {
            type: String,
            default: "white",
        },
        level: {
            type: Number,
            default: 0,
        },
        noMargins: {
            type: Boolean,
            default: false,
        },
    },
    provide() {
        return {
            sectionLevel: this.levelComputed,
            ancestorSetMargins: this.ancestorSetMargins || this.setMargins,
        }
    },
    inject: {
        parentLevel: { from: "sectionLevel", default: 1 },
        ancestorSetMargins: { default: false },
    },
    computed: {
        classes() {
            return [
                "section-wrapper",
                `section-wrapper${this.levelComputed}`,
                `theme-${this.theme}`,
                { "top-level": this.setMargins },
            ]
        },
        levelComputed() {
            return Number(this.level || this.parentLevel + 1)
        },
        setMargins() {
            if (this.noMargins || this.ancestorSetMargins) {
                return false
            }
            return true
        },
    },
}
</script>

<style lang="scss" scoped>
.section-wrapper {
    > .section-header {
        margin-bottom: var(--space-xl);

        > .section-title {
            color: var(--color-primary-blue-03);
            margin-bottom: var(--space-m);
        }

        .section-summary {
            @include step-0;

            ::v-deep p {
                margin: 0;
            }
        }
    }

    &.top-level {
        --color-theme: var(--color-white);

        &.theme-gray {
            --color-theme: var(--color-secondary-grey-01);
            padding: var(--space-3xl) var(--unit-gutter);
        }

        &.theme-white {
            padding: 0 var(--unit-gutter);
            margin: var(--space-3xl) auto;
            &.section-banner {
                margin-top: 0;
                > * {
                    max-width: $container-xl-banner + px;
                }
            }
            &.section-no-top-margin {
                margin-top: 0;
            }
            .section-featured-banner {
                max-width: $container-l-cta + px;
            }
        }

        &.theme-divider {
            padding: 0 var(--unit-gutter);
        }

        padding: var(--space-3xl) var(--unit-gutter);
        margin: 0 auto;
        background-color: var(--color-theme);

        // Configure spacing of child components (individual components might override things like max-width)
        > * {
            max-width: #{$container-l-main}px;
            padding: 0;
            margin-left: auto;
            margin-right: auto;

            &.block-call-to-action {
                max-width: var(--block-width);
                padding: var(--space-2xl);
            }
        }

        > :first-child:not(.divider-way-finder) {
            margin-top: 0;
        }

        > :last-child:not(.divider-way-finder) {
            margin-bottom: 0;
        }
    }
}
</style>