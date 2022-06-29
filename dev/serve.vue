<script>
import Vue from "vue"
import MastheadPrimary from "../src/lib-components/MastheadPrimary.vue"
// Uncomment import and local "components" registration if library is not registered globally.
// import { UclaLibraryWebsiteComponentSample } from '@/entry.esm';

export default Vue.extend({
    components: { MastheadPrimary },
    name: "ServeDev",
    // components: {
    //  UclaLibraryWebsiteComponentSample,
    // }
})
</script>

<template>
    <div id="app">
        <ucla-library-website-component-sample />
        <divider-general class="divider" />
        <divider-general class="divider" :is-bold="true" />
        <alphabetical-browse-by />
        <smart-link to="/"> This will render as a vue-router link </smart-link>
        <button-link label="This is a button " to="/help/" />
        <masthead-primary label="MASTHEAD PRIMARY" />
    </div>
</template>
<style lang="scss" scoped>
.divider {
    margin: 10px 10px;
}
</style>
