<template>
    <div class="footer-sponsor">
        <div class="sponsor-text">
            Text TK from Development, program generously supported by
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
    --unit-content-width: 1040px;
}
.sponsor-text {
    @include overline;
    display: flex;
    line-height: $line-height-0;
    color: var(--color-secondary-grey-05);
    margin: 0 auto;
    width: 100%;
    max-width: var(--unit-content-width);
    padding-top: var(--space-3xl);
}
.sponsor-logos {
    padding-bottom: var(--space-3xl); 
    margin: 0 auto; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    max-width: var(--unit-content-width);
}

// Breakpoints
@media #{$medium} {
    .sponsor-logos {
        flex-direction: column;
        align-items: flex-end;
        gap: var(--space-2xl);
    }
    .sponsor-text {
        align-self: flex-end;
        width: unset;
        margin: unset;
    }
}
</style>
