<template>
    <div class="block-sponsor">
        <smart-link :to="funderUrl" target="_blank">
            <responsive-image
                :image="parsedFunderLogo"
                :aspect-ratio="100"
                object-fit="contain"
                class="container"
            />
        </smart-link>
    </div>
</template>

<script>
import ResponsiveImage from "@/lib-components/ResponsiveImage"

export default {
    name: "BlockSponsor",
    components: {
        ResponsiveImage,
    },
    props: {
        funderLogo: {
            type: Array,
            default: () => [],
        },
        funderName: {
            type: String,
            default: "",
        },
        funderUrl: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedFunderLogo() {
            return this.funderLogo[0]
        },
    },
}
</script>

<style lang="scss" scoped>
.block-sponsor {
    .container {
        max-height: 150px;
    }
}
</style>
