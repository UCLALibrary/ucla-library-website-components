<template>
    <div class="rich-text">
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

<style lang="scss" scoped></style>
