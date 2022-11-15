<template>
    <div :class="classes">
        <div class="molecule row" />

        <div class="text row">
            <span class="category" v-html="category" />

            <h2 class="title" v-html="title" />

            <h3 class="dates" v-html="dates" />

            <smart-link :class="classes" :to="to" v-html="prompt" />
            <!-- TO DO: Use button-link component instead -->
        </div>

        <div class="sizer" />
    </div>
</template>

<script>
// Utility functions
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BlockEvent",
    mixins: [getSectionName],
    props: {
        title: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        dates: {
            type: String,
            default: "",
        },
        prompt: {
            type: String,
            default: "View",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["block-event", `button color-${this.sectionName}`]
        },
        sectionName() {
            return this.getSectionName(this.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.block-event {
    position: relative;
    z-index: 0;
    background-color: var(--color-primary-blue-03);
    color: var(--color-white);
    font-family: var(--font-primary);
    max-width: 800px;

    .row {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: flex-start;
        align-items: flex-start;
    }

    .molecule {
        background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg");
        background-size: auto 100%;
        height: 40%;
    }

    .category {
        @include overline;
        color: var(--color-secondary-yellow-01);
        margin-bottom: var(--space-s);
    }
    .title {
        @include step-2;
        margin-bottom: var(--space-s);
    }
    .dates {
        @include step-0;
        margin-bottom: var(--space-m);
    }
    .text {
        bottom: 0;
        top: auto;
        max-width: 500px;
        padding: 20px var(--unit-gutter);
        margin: 0 auto;
        height: 60%;
    }
    .button {
        border: 1px solid var(--color-primary-blue-02);
        background-color: var(--color-primary-blue-03);
        padding: 16px 40px;
        @include button;
        color: var(--color-theme);
        transition: color 400ms ease-in-out;

        // Themes
        --color-theme: var(--color-primary-blue-02);

        &.color-visit {
            --color-theme: var(--color-visit-fushia-03);
        }

        &.color-help {
            --color-theme: var(--color-help-green-03);
        }

        &.color-about {
            --color-theme: var(--color-about-purple-03);
        }
    }

    .sizer {
        padding-bottom: 137.5%;
    }

    // Hover
    @media #{$has-hover} {
        .button:hover {
            color: var(--color-white);
        }
    }

    // Breakpoints
    @media #{$medium} {
        .text {
            height: 75%;
        }
    }
    @media #{$small} {
        .button {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
