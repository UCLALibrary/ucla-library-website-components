<template>
    <pull-quote
        v-if="block.pullQuote && block.pullQuote.length > 0"
        :text="block.pullQuote[0].text"
        :attribution="block.pullQuote[0].attribution"
    />
</template>

<script>
import PullQuote from "@/lib-components/PullQuote"

export default {
    name: "FlexiblePullQuote",
    components: {
        PullQuote,
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.pull-quote {
    &.flexible-block {
        margin: var(--unit-gutter) auto;
        padding: 0 var(--unit-gutter);
        max-width: $container-l-main + px;

        @media #{$medium} {
            margin: var(--unit-gutter);
        }
    }
}
</style>
