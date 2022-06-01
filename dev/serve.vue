<script>
import Vue from "vue"
import AlphabeticalBrowseBy from "../src/lib-components/AlphabeticalBrowseBy.vue"
// Uncomment import and local "components" registration if library is not registered globally.
// import { UclaLibraryWebsiteComponentSample } from '@/entry.esm';

export default Vue.extend({
    components: { AlphabeticalBrowseBy },
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
    </div>
</template>
<style lang="scss" scoped>
.divider {
    margin: 10px 10px;
}
</style>
