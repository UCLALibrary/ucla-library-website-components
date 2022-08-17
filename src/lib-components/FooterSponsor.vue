<template>
    <div class="footer-sponsor">
        <block-sponsor
            v-for="(item, index) in parsedFunders"
            :key="index"
            class="sponsor-item"
            :funderLogo="item.funderLogo"
            :funderName="item.funderName"
            :funderUrl="item.funderUrl"
        />
    </div>
</template>

<script>
import BlockSponsor from "@/lib-components/BlockSponsor"

export default {
    name: "FooterSponsor",
    components: {
        BlockSponsor,
    },
    computed: {
        parsedFunders() {
            console.log(
                "PUPPIES!! " + JSON.stringify(this.$store.state.footerSponsor)
            )
            if (Object.keys(this.$store.state.footerSponsor).length !== 0) {
                return this.$store.state.footerSponsor.funders
            } else {
                console.log(
                    "Vuex state data for footer sock not present if navigation is not setup for the website: is it client side:" +
                        process.client
                )
            }
            return []
        },
    },
}
</script>

<style lang="scss" scoped>
.footer-sponsor {
    max-width: 100%;
    background-color: var(--color-secondary-grey-01);
    padding: 64px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: space-between;
    gap: var(--space-l);
    .sponsor-item {
        width: 100%;
    }

    // Breakpoints
    @media #{$medium} {
        display: flex;
        flex-direction: column;
        padding: 24px 32px;
    }

    @media #{$small} {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        gap: var(--space-l);
    }
}
</style>
