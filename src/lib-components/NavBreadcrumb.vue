<template>
    <div class="nav-breadcrumb subtitle">
        <smart-link :to="to" class="parent-page-url" v-html="parentTitle" />
        <svg-icon-caret-left aria-hidden="true" />
        <span class="current-page-title" v-html="title" />
    </div>
</template>

<script>
// SVGs
import SvgIconCaretLeft from "ucla-library-design-tokens/assets/svgs/icon-caret-left.svg"
export default {
    name: "NavBreadcrumb",
    components: {
        SvgIconCaretLeft,
    },
    props: {
        to: {
            type: String,
            default: "",
        },
        parentTitle: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.nav-breadcrumb {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    max-width: $container-xl-full-width + px;
    margin: var(--space-m) auto;
    padding: 0 var(--unit-gutter);

    .parent-page-url {
        @include step-1;
        color: var(--color-primary-blue-03);
        flex-shrink: 0;
    }

    .svg__icon-caret-left {
        flex-shrink: 0;
    }
    .current-page-title {
        @include step-0;
        color: var(--color-black);
        @include truncate(1);
    }

    @media #{$extra-large} {
        padding: 0;
    }

    @media #{$medium} {
        padding: 0 $whitespace-s-sides + px;
    }

    @media #{$small} {
        padding-left: calc(var(--unit-gutter) - 8px);
        .current-page-title {
            display: none;
        }
        .svg__icon-caret-left {
            order: 1;
        }
        .parent-page-url {
            order: 2;
        }
    }
}

// Hovers
@media #{$has-hover} {
    .parent-page-url:hover {
        @include link-hover;
    }
}
</style>
