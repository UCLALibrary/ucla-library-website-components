<template>
    <div class="rich-text">
        <div v-if="textBlocks[0]" class="text" v-html="textBlocks[0]" />
        <pull-quote
            v-if="pullQuote[0]"
            class="pull-quote"
            :text="pullQuote[0].text"
            :attribution="pullQuote[0].attribution"
        />
        <div v-if="textBlocks[1]" class="text" v-html="textBlocks[1]" />
        <div v-if="images[0]" class="image-block">
            <responsive-image
                v-if="images[0]"
                class="image"
                :image="images[0]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[0].caption"
                class="caption"
                v-html="images[0].caption"
            />
        </div>

        <div v-if="textBlocks[2]" class="text" v-html="textBlocks[2]" />
        <pull-quote
            v-if="pullQuote[1]"
            class="pull-quote"
            :text="pullQuote[1].text"
            :attribution="pullQuote[1].attribution"
        />
        <div v-if="textBlocks[3]" class="text" v-html="textBlocks[3]" />
        <div v-if="images[1]" class="image-block">
            <responsive-image
                v-if="images[1]"
                class="image"
                :image="images[1]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[1].caption"
                class="caption"
                v-html="images[1].caption"
            />
        </div>

        <div v-if="textBlocks[4]" class="text" v-html="textBlocks[4]" />
        <div v-if="textBlocks[5]" class="text" v-html="textBlocks[5]" />
        <pull-quote
            v-if="pullQuote[2]"
            class="pull-quote"
            :text="pullQuote[2].text"
            :attribution="pullQuote[2].attribution"
        />
        <div v-if="textBlocks[6]" class="text" v-html="textBlocks[6]" />
        <div v-if="images[2]" class="image-block">
            <responsive-image
                v-if="images[2]"
                class="image"
                :image="images[2]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[2].caption"
                class="caption"
                v-html="images[2].caption"
            />
        </div>
        <div v-if="textBlocks[7]" class="text" v-html="textBlocks[7]" />
    </div>
</template>

<script>
import PullQuote from "@/lib-components/PullQuote.vue"
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"

export default {
    name: "ImpactRichText",
    components: { PullQuote, ResponsiveImage },
    props: {
        // Array of image objects
        images: {
            type: Array,
            default: () => [],
        },
        // Array of pullquote objects
        pullQuote: {
            type: Array,
            default: () => [],
        },
        textBlocks: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: $container-l-text + px;
    margin: var(--unit-gutter) auto;
    padding-right: 96px;
    ::v-deep h5 {
        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-1;
    }
    .text {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }
    .image-block {
        display: flex;
        flex-direction: column;

        max-width: 100%;
    }
    .caption {
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);
        padding: 16px 16px 26px 16px;
    }
    .pull-quote {
        margin: 20px 10px 20px 0;
    }

    ::v-deep .link {
        text-decoration: underline;
        text-decoration-color: var(--color-primary-blue-03);
        text-decoration-thickness: 2px;
    }
    @media #{$has-hover} {
        ::v-deep {
            .link:hover {
                @include link-hover;
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        padding: 0 $whitespace-s-sides + px;
        max-width: $container-l-main + px;
    }
}
</style>
