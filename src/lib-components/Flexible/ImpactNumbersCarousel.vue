<template>
    <div class="impact-numbers-carousel" v-if="block">
        <h2
            v-if="block.sectionTitle"
            class="section-title"
            v-html="block.sectionTitle"
        />

        <impact-numbers-carousel :blocks="block.blocks" />
    </div>
</template>

<script>
import ImpactNumbersCarousel from "@/lib-components/ImpactNumbersCarousel.vue"

export default {
    name: "FlexibleImpactNumbersCarpusel",
    components: {
        ImpactNumbersCarousel,
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
.impact-numbers-carousel {
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-xl);
    }
}
</style>
