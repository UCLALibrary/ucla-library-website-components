<template>
    <div class="block-sponsor">
        <smart-link :to="funderUrl" target="_blank">
            <responsive-image
                :image="parsedFunderLogo"
                :aspect-ratio="100"
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
        // parsedAltTag() {
        //     return (this.funderLogo[0].alt = this.funderName)
        // },
        parsedFunderLogo() {
            return this.funderLogo[0]
        },
    },
}
</script>

<style lang="scss" scoped>
.block-sponsor {
    max-width: 100%;
    background-color: var(--color-secondary-grey-01);
    padding: 64px 64px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    .container {
        width: 300px;
        height: 78px;
    }
    .svg-logo-library {
        width: 300px;
        height: 78px;
        .svg__fill--primary-blue-03 {
            fill: var(--color-black);
        }
    }
    // Breakpoints
    @media #{$medium} {
        padding: 24px 32px;
    }
    @media #{$small} {
        .container {
            flex-direction: column;
        }
    }
}
</style>
