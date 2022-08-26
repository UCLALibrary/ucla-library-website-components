<template>
    <div class="footer-sponsor">
        <div class="sponsor-text"> Text TK from Development, program generously supported by
            </div>
        <div class="sponsor-logos">
            <block-sponsor
                v-for="(item, index) in parsedFunders"
                :key="index"
                class="sponsor-item"
                :funderLogo="item.funderLogo"
                :funderName="item.funderName"
                :funderUrl="item.funderUrl"
            />
            </div>
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
    background-color: var(--color-secondary-grey-01);
    display: flex;
    flex-direction: column;
    gap: var(--space-2xl);
    justify-content: center;
    padding: 0 var(--unit-gutter);
}
.sponsor-text {
    @include overline;
    line-height: $line-height-0;
    color: var(--color-secondary-grey-05);
    padding-top: 64px;
    text-align: center;
}
.sponsor-logos {
    max-width: 100%;
    padding-bottom: 64px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: space-between;
    gap: var(--space-xl);
    .sponsor-item {
        width: 100%;
    }
}

// Breakpoints
@media #{$medium} {
    .sponsor-logos {
        flex-direction: column;
        padding-bottom: 32px;
    }
    .sponsor-text {
        padding-top: 32px;
    }
}

@media #{$small} {
    .sponsor-logos {
        flex-direction: column;
        align-content: space-between;
    }
}
</style>
