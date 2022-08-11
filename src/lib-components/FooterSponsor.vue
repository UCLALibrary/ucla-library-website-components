<template>
    <footer class="footer-sponsor">
        <h3>FOOTER-SPONSOR{{ funders }}</h3>
        <div class="container">
            <block-sponsor :funders="funders" />
        </div>
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
}
</script>

<style lang="scss" scoped>
.footer-sponsor {
    max-width: 100%;
    background-color: var(--color-secondary-grey-01);
    padding: 64px 64px;
    // center the logos

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
