<template>
    <footer class="footer-sponsor">
        <div class="container">
            <!-- <router-link
                to="/"
                :aria-label="title ? '' : `UCLA Library home page`"
            >
                <h1 v-if="title" class="title">{{ title }}</h1>
                <svg-logo-ucla-library
                    v-else
                    class="svg logo-ucla"
                    alt="UCLA Library logo blue"
                />
            </router-link> -->

            <h3>{{ parsedFunders }}</h3>
            <sponsor>{{ parsedFunders }}</sponsor>

            <!-- funderName - Alt text for img funderLogo - img source funderUrl -
            link from image. open in new window -->
        </div>
    </footer>
</template>

<script>
import Sponsor from "@/lib-components/Sponsor"

export default {
    name: "FooterSponsor",
    components: {
        Sponsor,
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
