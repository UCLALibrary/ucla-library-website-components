<template>
    <div class="test-meap-nav-masthead">
        <header-smart title="Modern Endangered Archives Program" />

        <main id="main">
            <!--masthead-secondary
                title="Modern Endangered Archives Program"
                text="Our grants enable digitization and access to at-risk cultural heritage collections from around the world. Explore our projects and learn more about available grant opportunities."
                theme="meap"
            /-->
        </main>
    </div>
</template>

<script>
// import MastheadSecondary from "@/lib-components/MastheadSecondary"
import HeaderSmart from "@/lib-components/HeaderSmart"

// Pinia
import { mapState } from 'pinia'
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
    name: "ExampleMeapNavMastHead",
    components: {
        // MastheadSecondary,
        HeaderSmart,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    computed: {
        ...mapState(useGlobalStore, ['header', 'winWidth']),
        primaryMenuItems() {
            return this.header.primary
        },
        secondaryMenuItems() {
            return this.header.secondary
        },
        isMobile() {
            return this.winWidth <= 1150 ? true : false
        },
        whichHeader() {
            return this.isMobile ? "header-main-responsive" : "header-main"
        },
    },
}
</script>

<style lang="scss" scoped>
@media #{$medium} {
    .brand-bar {
        position: absolute;
        width: 100%;
    }
}
</style>