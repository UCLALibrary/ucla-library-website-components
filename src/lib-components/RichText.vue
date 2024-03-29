<template>
    <div class="rich-text">
        <div class="parsed-content" v-html="parsedContent" />
        <slot />
    </div>
</template>

<script>
// UTILITY FUNCTIONS
import stripCraftURLFromText from "@/mixins/stripCraftURLFromText"
import accessibleExternalLinks from "@/mixins/accessibleExternalLinks"

export default {
    name: "RichText",
    components: {},
    props: {
        richTextContent: {
            type: String,
            default: "",
        },
    },
    mixins: [stripCraftURLFromText, accessibleExternalLinks],
    computed: {
        parsedContent() {
            let content = this.stripCraftURLFromText(this.richTextContent)

            return this.accessibleExternalLinks(content)
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: $container-l-main + px;
    margin: 0 auto;
    padding-right: 96px;

    ::v-deep h3 {
        color: var(--color-primary-blue-03);
        @include step-2;
        font-weight: 400;
        margin-bottom: var(--space-l);
        margin-top: var(--space-xl);
    }
    ::v-deep h4 {
        color: var(--color-primary-blue-03);
        @include step-1;
        margin-bottom: 24px;
    }
    ::v-deep h5 {
        color: var(--color-black);
        @include step-0;
    }
    ::v-deep p,
    ::v-deep li {
        color: var(--color-black);
        @include step-0;
        margin: 0 0 var(--space-l) 0;
    }

    ::v-deep p:only-child {
        margin: 0;
    }

    ::v-deep p:last-child {
        margin-bottom: 0;
    }

    ::v-deep blockquote {
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

    ::v-deep img {
        height: auto;
        object-fit: cover;
        display: inline-block;
    }

    ::v-deep figure {
        width: 100%;
        margin: var(--space-s);
        display: flex;
        flex-direction: column;
        a[target="_blank"]:after {
            display: none;
        }
    }

    ::v-deep .image--right {
        float: right;
        margin-left: var(--space-s);
    }

    ::v-deep .image--left {
        float: left;
        margin-right: var(--space-s);
    }

    ::v-deep .image--center {
        margin: 0 auto;
    }
    ::v-deep .image--half {
        width: 50%;
    }

    ::v-deep figcaption {
        font-family: var(--font-secondary);
        @include step--1;
        color: var(--color-secondary-grey-05);
        padding: var(--space-s) var(--space-s) 0 var(--space-s);
    }

    ::v-deep iframe {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    ::v-deep a {
        @include link-default;
        @include step-0;
        word-wrap: break-word;

        &:hover {
            @include link-hover;
        }
    }

    ::v-deep a[target="_blank"] {
        position: relative;
    }

    ::v-deep a[target="_blank"]:after {
        content: url("node_modules/ucla-library-design-tokens/assets/svgs/icon-external-link.svg");
        display: inline-block;
        background-size: contain;
        scale: 0.6;
        margin-left: -0.3em;
        width: 1em;
        height: 1em;
        vertical-align: text-top;
    }

    ::v-deep ul,
    ::v-deep ol {
        padding: 0 16px;
        margin: 0 0 32px;

        li {
            margin: var(--space-m) 0;
            padding-left: 16px;
            @include step-0;
        }
    }
    ::v-deep ol {
        margin-left: 24px;

        ::marker {
            font-family: var(--font-secondary);
            font-size: 20px;
            line-height: 1;
            color: var(--color-primary-blue-03);
        }
    }

    ::v-deep ul {
        list-style: none;
        list-style-position: outside;
    }

    ::v-deep ul li {
        background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-stroke.svg");
        background-repeat: no-repeat;
        background-position-y: 5px; // This will shift the bullet down as needed
        background-size: 24px;
        padding-left: 40px;
        overflow: hidden;
    }

    ::v-deep table {
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
        tr:last-child > td {
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
        ::v-deep figure {
            width: 100%;
            height: auto;
            margin: 0;
        }
        ::v-deep .image--right {
            margin-left: 0;
        }

        ::v-deep figcaption {
            padding-bottom: var(--space-s);
        }

        ::v-deep .image--left {
            margin-right: 0;
        }
        ::v-deep .image--half {
            width: 100%;
        }
        ::v-deep iframe {
            width: 100%;
            width: 100%;
            height: auto;
        }
        ::v-deep blockquote {
            --spacing-text-left: 24px;
            --container-width: 100%;
        }
    }
}
</style>
