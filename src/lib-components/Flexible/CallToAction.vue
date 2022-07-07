<template>
    <block-call-to-action
        class="cta-block-content-width"
        :to="parsedItems.buttonUrl"
        :name="parsedItems.buttonText"
        :title="parsedItems.titleCta"
        :text="parsedItems.summary"
        :svg-name="parsedItems.icon"
        :is-dark-blue="parsedItems.backgroundColor"
    />
</template>

<script>
import BlockCallToAction from "@/lib-components/BlockCallToAction"

export default {
    name: "FlexibleCtaBlockContentWidth",
    components: { BlockCallToAction },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedItems() {
            return this.block.callToAction[0]
        },
    },
}
</script>

<style lang="css" scoped>
.cta-block-content-width {
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
}
</style>
