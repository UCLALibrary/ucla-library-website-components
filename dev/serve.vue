<script>
import Vue from "vue"
// Uncomment import and local "components" registration if library is not registered globally.
// import { UclaLibraryWebsiteComponentSample } from '@/entry.esm';

export default Vue.extend({
    name: "ServeDev",
    computed: {
        parsedLinkItems() {
            return [
                {
                    text: "Course Reserves",
                    url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                    target: "_blank",
                },
                {
                    text: "UCLA Research Guides",
                    url: "https://guides.library.ucla.edu/",
                    target: "",
                },
                {
                    text: "Databases A-Z",
                    url: "https://guides.library.ucla.edu/az.php",
                    target: "_blank",
                },
            ]
        },
        parsedAdvancedSearchLink() {
            return {
                text: "Advanced Search",
                url: "https://www.library.ucla.edu/search",
                target: "_blank",
            }
        },
    },
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
        <button-link label="This is a button " to="/help/" /><button-more
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <heading-arrow text="Featured " to="/visit/" />
        <search-home
            :linkItems="parsedLinkItems"
            :advancedSearchLink="parsedAdvancedSearchLink"
            @activeTabSet="action"
            @search="action"
        />
    </div>
</template>

<style lang="scss" scoped>
.divider {
    margin: 10px 10px;
}
</style>
