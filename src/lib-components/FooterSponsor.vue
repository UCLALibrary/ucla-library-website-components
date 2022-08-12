<template>
    <footer class="footer-sponsor">
        <h3>FOOTER-SPONSOR</h3>
        <h3>parsedFunder -- {{ parsedFunders }}</h3>
        <block-sponsor
            v-for="(item, index) in funders"
            :key="index"
            class="sponsor-item"
        />
    </footer>
</template>

<script>
import BlockSponsor from "@/lib-components/BlockSponsor"

export default {
    name: "FooterSponsor",
    components: {
        BlockSponsor,
    },
    props: {
        funders: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedFunders() {
            return this.funders
        },
    },
}
</script>

<style lang="scss" scoped>
.footer-sponsor {
    max-width: 100%;
    background-color: var(--color-secondary-grey-01);
    border: 2px dotted red;
    padding: 64px 64px;
    // center the logos

    .sponsor-item {
        background-color: white;
        // min-width: 500px;
        // max-height: 250px;
        border: 2px dotted gold;
        margin-bottom: 24px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: var(--space-l);
    }

    .svg-logo-arcadia {
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
