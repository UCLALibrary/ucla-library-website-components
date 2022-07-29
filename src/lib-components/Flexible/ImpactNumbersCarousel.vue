<template>
    <impact-numbers-carousel :blocks="block.blocks" />
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

<style lang="scss" scoped></style>
