<template>
    <header class="header-smart">
        <site-brand-bar class="brand-bar" />
        <component
            :is="whichHeader"
            :class="isMobile ? 'mobile-header' : 'desktop-header'"
            :primary-nav="primaryMenuItems"
            :secondary-nav="secondaryMenuItems"
        />
    </header>
</template>

<script>
import SiteBrandBar from "@/lib-components/SiteBrandBar"
import HeaderMainResponsive from "@/lib-components/HeaderMainResponsive"
import HeaderMain from "@/lib-components/HeaderMain"

export default {
    name: "HeaderSmart",
    components: {
        SiteBrandBar,
        HeaderMainResponsive,
        HeaderMain,
    },
    computed: {
        primaryMenuItems() {
            return this.$store.state.primary
        },
        secondaryMenuItems() {
            return this.$store.state.secondary
        },
        isMobile() {
            return this.$store.state.winWidth <= 1024 ? true : false
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
