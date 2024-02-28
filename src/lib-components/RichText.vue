<script>
// UTILITY FUNCTIONS
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

export default {
    name: 'RichText',
    components: {},

    props: {
        richTextContent: {
            type: String,
            default: '',
        },
    },
    computed: {
        parsedContent() {
            const content = stripCraftURLFromText(this.richTextContent)

            return accessibleExternalLinks(content)
        },
    },
}
</script>

<template>
    <div class="rich-text">
        <div
            class="parsed-content"
            v-html="parsedContent"
        />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.rich-text {
    max-width: $container-l-main + px;
    margin: 0 auto;
    padding-right: 96px;

    :deep(h3) {
        color: var(--color-primary-blue-03);
        @include step-2;
        font-weight: 400;
        margin-bottom: var(--space-l);
        margin-top: var(--space-xl);
    }

    :deep(h4) {
        color: var(--color-primary-blue-03);
        @include step-1;
        margin-bottom: 24px;
    }

    :deep(h5) {
        color: var(--color-black);
        @include step-0;
    }

    :deep(p),
    :deep(li) {
        color: var(--color-black);
        @include step-0;
        margin: 0 0 var(--space-l) 0;
    }

    :deep(p:only-child) {
        margin: 0;
    }

    :deep(p:last-child) {
        margin-bottom: 0;
    }

    :deep(blockquote) {
        border-left: 4px solid var(--color-default-cyan-03);
        border-radius: 2px;
        padding: 24px var(--spacing-text-left);
        --spacing-text-left: 64px;
        --container-width: $container-m-text + px;

        font-weight: 400;
        font-size: 20px;
        font-style: normal;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
        margin-left: 50px;

        p {
            font-size: 24px;
            font-style: italic;
            font-weight: 600;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue-03);
            font-family: var(--font-primary);
            text-transform: none;
        }
    }

    :deep(img) {
        height: auto;
        object-fit: cover;
        display: inline-block;
    }

    :deep(figure) {
        width: 100%;
        margin: var(--space-s);
        display: flex;
        flex-direction: column;

        a[target="_blank"]:after {
            display: none;
        }
    }

    :deep(.image--right) {
        float: right;
        margin-left: var(--space-s);
    }

    :deep(.image--left) {
        float: left;
        margin-right: var(--space-s);
    }

    :deep(.image--center) {
        margin: 0 auto;
    }

    :deep(.image--half) {
        width: 50%;
    }

    :deep(figcaption) {
        font-family: var(--font-secondary);
        @include step--1;
        color: var(--color-secondary-grey-05);
        padding: var(--space-s) var(--space-s) 0 var(--space-s);
    }

    :deep(iframe) {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    :deep(a) {
        @include link-default;
        @include step-0;
        word-wrap: break-word;

        &:hover {
            @include link-hover;
        }
    }

    :deep(a[target="_blank"]) {
        position: relative;
    }

    :deep(a[target="_blank"]:after) {
        content: url("node_modules/ucla-library-design-tokens/assets/svgs/icon-external-link.svg");
        display: inline-block;
        background-size: contain;
        scale: 0.6;
        margin-left: -0.3em;
        width: 1em;
        height: 1em;
        vertical-align: text-top;
    }

    :deep(ul),
    :deep(ol) {
        padding: 0 16px;
        margin: 0 0 32px;

        li {
            margin: var(--space-m) 0;
            padding-left: 16px;
            @include step-0;
        }
    }

    :deep(ol) {
        margin-left: 24px;

        ::marker {
            font-family: var(--font-secondary);
            font-size: 20px;
            line-height: 1;
            color: var(--color-primary-blue-03);
        }
    }

    :deep(ul) {
        list-style: none;
        list-style-position: outside;
    }

    :deep(ul, li) {
        background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-stroke.svg");
        background-repeat: no-repeat;
        background-position-y: 5px; // This will shift the bullet down as needed
        background-size: 24px;
        padding-left: 40px;
        overflow: hidden;
    }

    :deep(table) {
        padding: var(--space-xl);
        border: 1px solid var(--color-primary-blue-05);
        border-radius: 4px;
        width: 100%;

        th {
            @include step-0;
            font-weight: $font-weight-medium;
            color: var(--color-primary-blue-05);
            text-align: left;
            padding: 16px;
            border-bottom: 2px dotted var(--color-secondary-grey-03);
        }

        strong {
            @include step-0;
            font-weight: $font-weight-medium;
            color: var(--color-primary-blue-05);
        }

        th:first-child {
            padding-left: 0;
        }

        th:last-child {
            padding-right: 0;
        }

        // no border on last row
        tr:last-child>td {
            border-bottom: 0;
            padding-bottom: 0;
        }

        td {
            @include step-0;
            color: var(--color-black);
            border-bottom: 2px dotted var(--color-secondary-grey-03);
            padding: 16px;
            vertical-align: top;
        }

        td:first-child {
            padding-left: 0;
        }

        td:last-child {
            padding-right: 0;
        }
    }

    // Breakpoints
    @media #{$medium} {
        padding-right: 0;
        max-width: $container-l-main + px;
    }

    @media #{$small} {
        :deep(figure) {
            width: 100%;
            height: auto;
            margin: 0;
        }

        :deep(.image--right) {
            margin-left: 0;
        }

        :deep(figcaption) {
            padding-bottom: var(--space-s);
        }

        :deep(.image--left) {
            margin-right: 0;
        }

        :deep(.image--half) {
            width: 100%;
        }

        :deep(iframe) {
            width: 100%;
            width: 100%;
            height: auto;
        }

        :deep(blockquote) {
            --spacing-text-left: 24px;
            --container-width: 100%;
        }
    }
}
</style>
