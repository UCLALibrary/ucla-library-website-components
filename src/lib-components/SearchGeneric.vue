<template>
    <!-- TODO Need tick's next to radio dropdown  -->
    <!-- TODO Need count of items selected for checkbox -->
    <!-- TODO Need selected tags (sync'd to selected checkboxes) -->
    <!-- TODO Need to get a BaseCheckboxGroup working -->
    <!-- TODO Need to create a BaseCalendarGroup Component -->
    <!-- TODO Need to style this for Mobile -->
    <div class="search-generic">
        <!-- <h4>router query</h4>
        {{ searchGenericQuery }}
        <h4>filters for the page</h4>
        {{ filters }}-->
        <form name="searchHome" @submit.prevent="doSearch">
            <div class="input-container">
                <icon-search class="icon" />
                <input
                    v-model="searchWords"
                    type="text"
                    placeholder="Search by keyword"
                    @keyup="doSearch"
                />
            </div>
        </form>
        <div class="container">
            <search-generic-filter-buttons
                :items="filters"
                :active-index.sync="openedFilterIndex"
                class="search-generic-filter-buttons"
            />
        </div>
        <!-- <hr class="divider" />

        <div class="container">
            <search-generic-filter-buttons
                :items="filters"
                :active-index.sync="openedFilterIndex"
            />

            <search-generic-view-modes
                v-if="views.length"
                :items="views"
                :is-opened.sync="isViewOpened"
                :selected.sync="selectedView"
            />
        </div> -->

        <!-- The 'parsedFilters' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 'v-for' with 'v-if'  vue/no-use-v-if-with-v-for -->

        <!-- This loops through avaible filter groups -->
        <transition
            name="slide-toggle"
            mode="out-in"
            :key="group.esFieldName"
            v-for="(group, index) in parsedFilters"
        >
            <component
                :is="group.componentName"
                v-if="index == openedFilterIndex"
                :items="group.items"
                :selected.sync="selectedFilters[group.esFieldName]"
                class="filter-group"
                @input-selected="doSearch"
            />
        </transition>
    </div>
</template>

<script>
import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import SearchGenericFilterButtons from "./SearchGenericFilterButtons.vue"
import SearchGenericViewModes from "./SearchGenericViewModes.vue"
import BaseRadioGroup from "./BaseRadioGroup.vue"
import BaseCheckboxGroup from "./BaseCheckboxGroup.vue"
// import BaseCalendarGroup from "./BaseCalendarGroup.vue"

export default {
    name: "SearchGeneric",
    components: {
        IconSearch,
        SearchGenericFilterButtons,
        SearchGenericViewModes,
        BaseRadioGroup,
        BaseCheckboxGroup,
        // BaseCalendarGroup,
    },

    props: {
        filters: {
            type: Array, // array of objects that contain the filter objects
            default: () => [],
        },
        searchType: {
            type: String,
            default: "",
        },
        /* views: {
            type: Array,
            default: () => [],
        },*/
        searchGenericQuery: {
            type: Object,
            default: () => {},
        },
        /*queryView: {
            type: String,
            default: "list",
        },*/
    },
    data() {
        return {
            searchWords: this.searchGenericQuery
                ? this.searchGenericQuery.queryText
                : "", // this.$route.query.q,
            selectedFilters: this.searchGenericQuery
                ? this.searchGenericQuery.queryFilters
                : {},
            openedFilterIndex: -1,
            isViewOpened: false,
            selectedView: "list",
        }
    },
    // The 'parsedFilters' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 'v-for' with 'v-if'  vue/no-use-v-if-with-v-for
    computed: {
        parsedFilters() {
            console.log(JSON.stringify(this.selectedFilters))
            return this.filters.map((obj) => {
                let selected = this.selectedFilters[obj.esFieldName] || []
                console.log("In parseselected: " + selected)
                let componentName = "base-checkbox-group"

                // If none selected, then make sure radio's default is empty string
                if (!selected.length && obj.inputType == "radio") {
                    selected = ""
                    this.selectedFilters[obj.esFieldName] = ""
                }

                // Figure out Vue component name
                switch (obj.inputType) {
                    case "radio":
                        componentName = "base-radio-group"
                        break
                    case "calendar":
                        componentName = "base-calendar-group"
                        break
                }

                return {
                    ...obj,
                    selected,
                    componentName,
                }
            })
        },
    },
    watch: {
        isViewOpened(newVal, oldVal) {
            console.log("in is viewOpened")
            if (newVal) {
                this.openedFilterIndex = -1
            }
        },
        openedFilterIndex(newVal, oldVal) {
            console.log("in is openedFilterIndex" + newVal)
            if (newVal !== -1) {
                this.isViewOpened = false
            }
        },
        "searchGenericQuery.queryText"(newVal, oldVal) {
            console.log(
                "in search-genric component searchGenericQuery.queryText watch: " +
                    newVal
            )
            this.searchWords = newVal
        },
        "searchGenericQuery.queryFilters"(newVal, oldVal) {
            console.log(
                "in search-genric component searchGenericQuery.queryFilters watch: " +
                    newVal
            )
            this.selectedFilters = newVal
        },
    },
    /* mounted() {
        // TODO Figure out how to get these intial values from the URL.
        // Probably want to use this: https://www.npmjs.com/package/qs
        for (const filterObj of this.filters) {
            this.selectedFilters[filterObj.esFieldName] =
                filterObj.inputType == "radio" ? "" : []
        }
    },*/
    methods: {
        doSearch() {
            /*this.isViewOpened = false
            this.openedFilterIndex = -1*/
            // TODO Get this pushing real values ot the URL
            // TODO Make this work with vue router
            // When we moved this cpmponent we needed to comment out this line
            // this.$router.push({
            //     path: this.actionURL,
            //     query: {
            //         q: this.searchWords,
            //         view: this.selectedView,
            //         filters: Object.keys(this.selectedFilters).length, // TODO get this encoding correctly
            //     },
            // })
            console.log("dosearch called")
            console.log(
                "selected fileters in component are: " +
                    JSON.stringify(this.selectedFilters)
            )
            console.log(
                "search text in component are: " +
                    JSON.stringify(this.searchWords)
            )
            this.$emit("search-ready", {
                filters: this.selectedFilters,
                text: this.searchWords,
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.search-generic {
    position: relative;

    padding: 0 50px;
    margin: 30px auto;
    background-color: var(--color-white);
    max-width: 890px;
    border: 1px solid transparent;
    border-top-left-radius: 4px;

    .input-container {
        .icon {
            padding: 25px 40px 25px 32px;
            position: absolute;
            z-index: 10;
            width: 28px;
            height: 27px;
        }

        input {
            font-family: var(--font-primary);
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: 0.01em;
            background-color: var(--color-primary-blue-01);
            border-color: transparent;
            padding: 27px 95px;
            width: 100%;

            &::placeholder {
                text-transform: uppercase;
                font-family: var(--font-primary);
            }
        }
    }
    .search-generic-filter-buttons {
        margin-top: 25px;
    }

    .divider {
        margin: 15px 0 24px;
        height: 2px;
        border: none;
        background-color: var(--color-cyan-01);
    }
    .container {
        list-style: none;
        cursor: pointer;
        // width: 890px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .filter-group {
        transition-duration: 400ms;

        position: absolute;
        top: 100%;
        left: 50px;
        right: 50px;

        margin-top: 8px;
        z-index: 100;
    }
}

// Transitions
.slide-toggle-enter,
.slide-toggle-leave-to {
    max-height: 0;
    opacity: 0;
}
.slide-toggle-enter-to,
.slide-toggle-leave {
    max-height: 500px;
    opacity: 1;
}
.slide-toggle-enter-active,
.slide-toggle-leave-active {
    overflow: hidden;
    transition-property: opacity, max-height;
    transition-timing-function: ease-in-out;
}
</style>
