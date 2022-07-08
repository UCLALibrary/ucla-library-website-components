<template>
    <section>
        <block-call-to-action-two-up :items="parsedItems" />
    </section>
</template>

<script>
import BlockCallToActionTwoUp from "@/lib-components/BlockCallToActionTwoUp"

export default {
    name: "FlexibleCtaBlock2Up",
    components: { BlockCallToActionTwoUp },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedItems() {
            return this.block.ctaBlock2Up
        },
    },
}
</script>
