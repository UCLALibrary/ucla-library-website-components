<template>
    <section :class="classes">
        <h2 v-if="sectionTitle" class="section-title" v-text="sectionTitle" />
        <p
            v-if="sectionSummary"
            class="section-summary"
            v-text="sectionSummary"
        />
        <slot />
    </section>
</template>

<script>
export default {
    name: "SectionWrapper",
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
    },
    computed: {
        classes() {
            return ["section-wrapper", `theme-${this.theme}`]
        },
    },
}
</script>

<style lang="scss" scoped>
.section-wrapper {
    --color-theme: var(--color-white);

    &.theme-gray {
        --color-theme: var(--color-secondary-grey-01);
    }

    &.theme-divider {
        padding: 0 var(--unit-gutter);
    }

    padding: var(--space-3xl) var(--unit-gutter);
    margin: 0;
    background-color: var(--color-theme);

    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }
    .section-summary {
        @include step-0;
        margin-top: var(--space-m);

        ::v-deep p {
            margin: 0;
        }
    }

    // Configure spacing of child components (individual components might override things like max-width)
    * {
        max-width: #{$container-l-main}px;
        padding: 0;
        margin: 0 auto;
    }
}
</style>
