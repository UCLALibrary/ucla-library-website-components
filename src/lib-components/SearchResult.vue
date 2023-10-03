<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <li class="search-result-item">
        <div class="category" v-html="category" />
        <smart-link class="title" :to="to" v-html="title" />
        <div v-if="summary" class="summary">{{ parsedText }}</div>
    </li>
</template>

<script>
// UTILITY FUNCTIONS
import removeHtmlTruncate from "@/utils/removeHtmlTruncate"

export default {
    name: "SearchResult",
    mixins: [removeHtmlTruncate],
    props: {
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
        summary: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedText() {
            return this.summary
                ? this.removeHtmlTruncate(this.summary, 250)
                : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.search-result-item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    max-width: $container-l-main + px;

    .category {
        @include overline;
        color: var(--color-secondary-grey-05);
        margin-bottom: 4px;
    }
    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-xs);
        @include truncate(2);
    }

    .description {
        @include step-0;
        color: var(--color-black);
        @include truncate(4);
    }

    // Hovers
    @media #{$has-hover} {
        .title:hover {
            @include link-hover;
        }
    }
}
</style>
