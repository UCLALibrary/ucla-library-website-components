<template>
    <header class="header-main">
        <nav-secondary :items="secondaryNav" :isMicrosite="parseTitle" />
        <nav-primary class="primary" :items="primaryNav" :title="title" />
    </header>
</template>

<script>
import NavPrimary from "@/lib-components/NavPrimary"
import NavSecondary from "@/lib-components/NavSecondary"

export default {
    name: "HeaderMain",
    components: {
        NavPrimary,
        NavSecondary,
    },
    props: {
        primaryNav: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => [],
        },
        secondaryNav: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: "",
        },
    },
    computed: {
        parseTitle() {
            return this.title ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.header-main {
    z-index: 200;

    position: relative;
    height: 128px;

    .primary {
        position: absolute;
    }
    // TODO nav on smaller viewports
}
</style>