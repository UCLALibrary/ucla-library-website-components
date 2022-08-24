<template>
    <div class="rich-text">
        <h2
            v-if="block.sectionTitle"
            class="section-title"
            v-html="block.sectionTitle"
        />

        <rich-text :rich-text-content="parsedContent" />
    </div>
</template>

<script>
import RichText from "@/lib-components/RichText"

export default {
    name: "FlexibleRichText",
    components: { RichText },

    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            return this.block.richText
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }
}
</style>
