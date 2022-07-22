<template>
    <footer class="footer-sponsor">
        <div class="container">
            <svg-logo-arcadia class="svg-logo-arcadia" />
            <svg-logo-library class="svg-logo-library" />
        </div>
    </footer>
</template>

<script>
import SvgLogoArcadia from "ucla-library-design-tokens/assets/svgs/logo-arcadia.svg"
import SvgLogoLibrary from "ucla-library-design-tokens/assets/svgs/logo-library.svg"

export default {
    name: "FooterSponsor",
    // mixins: [formatLinkTarget],
    components: {
        SvgLogoArcadia,
        SvgLogoLibrary,
    },
    props: {
        // sockItems: {
        //     type: Array,
        //     default: () => [],
        // },
    },
}
</script>

<style lang="scss" scoped>
.footer-sponsor {
    max-width: $container-xl-banner + px;
    background-color: var(--color-secondary-grey-01);
    padding: 64px 64px;

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
