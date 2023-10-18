<template>
    <header class="header-smart">
        <site-brand-bar class="brand-bar" />
        <component :is="whichHeader" :class="isMobile ? 'mobile-header' : 'desktop-header'" :primary-nav="primaryMenuItems"
            :secondary-nav="secondaryMenuItems" :title="title" />
    </header>
</template>

<script>
import SiteBrandBar from "@/lib-components/SiteBrandBar"
import HeaderMainResponsive from "@/lib-components/HeaderMainResponsive"
import HeaderMain from "@/lib-components/HeaderMain"
import { mapState } from 'pinia'
import { useGlobalStore } from '@/stores/GlobalStore'

export default {
    name: "HeaderSmart",
    components: {
        SiteBrandBar,
        HeaderMainResponsive,
        HeaderMain,
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
            return this.winWidth <= 1024
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