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
                <input
                    v-model="searchWords"
                    type="text"
                    placeholder="Search by keyword"
                />

                <button class="button-submit" type="submit">
                    <icon-search class="icon" />
                </button>
            </div>
        </form>

        <div v-if="filters.length > 0" class="container">
            <search-generic-filter-buttons
                v-click-outside="hide"
                :items="filters"
                :single-checkbox-selected="selectedFilters"
                :active-index.sync="openedFilterIndex"
                class="search-generic-filter-buttons"
                :selected.sync="parseSingleChexboxSelection"
                @single-checkbox-selected="doSearch"
            />
        </div>

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

        <section-remove-search-filter
            :filters="selectedFilters"
            class="section-remove-container"
            :selected.sync="parseSelection"
            @remove-selected="doSearch"
        />
    </div>
</template>

<script>
import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import SearchGenericFilterButtons from "./SearchGenericFilterButtons.vue"
import SearchGenericViewModes from "./SearchGenericViewModes.vue"
import BaseRadioGroup from "./BaseRadioGroup.vue"
import BaseCheckboxGroup from "./BaseCheckboxGroup.vue"
import SectionRemoveSearchFilter from "./SectionRemoveSearchFilter.vue"
// import BaseCalendarGroup from "./BaseCalendarGroup.vue"

import ClickOutside from "vue-click-outside"
export default {
    name: "SearchGeneric",
    components: {
        IconSearch,
        SearchGenericFilterButtons,
        SearchGenericViewModes,
        BaseRadioGroup,
        BaseCheckboxGroup,
        SectionRemoveSearchFilter,

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
            opened: false,
        }
    },
    // The 'parsedFilters' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 'v-for' with 'v-if'  vue/no-use-v-if-with-v-for
    computed: {
        parseSingleChexboxSelection: {
            set(selectedFilter) {
                let esfieldName = ""
                this.filters.map((obj) => {
                    console.log("in issingle checkbox for loop")
                    if (obj.inputType === "single-checkbox")
                        esfieldName = obj.esFieldName
                })
                this.selectedFilters[esfieldName] = selectedFilter
            },
            get() {
                let esfieldName = ""
                this.filters.map((obj) => {
                    console.log("in issingle checkbox for loop")
                    if (obj.inputType === "single-checkbox")
                        esfieldName = obj.esFieldName
                })
                return this.selectedFilters[esfieldName]
            },
        },
        parseSelection: {
            set(selectedFilters) {
                this.selectedFilters = selectedFilters
            },
            get() {
                return this.selectedFilters
            },
        },
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
                    JSON.stringify(newVal)
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

    mounted() {
        // prevent click outside event with popupItem.
        this.popupItem = this.$el
    },

    // do not forget this section
    directives: {
        ClickOutside,
    },
    methods: {
        hide() {
            this.openedFilterIndex = -1
        },
        doSearch() {
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
    z-index: 10;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid transparent;
    border-radius: 4px;
    margin-right: auto;
    margin-left: auto;
    margin-top: -72px;
    max-width: $container-l-cta + px;
    padding: 32px 32px 0;

    form {
        max-width: $container-l-main + px;
        margin: 0 auto;

        + .container {
            border-top: 2px solid var(--color-default-cyan-03);
            margin-top: 16px;
        }
    }

    .input-container {
        display: flex;
        background-color: var(--color-primary-blue-01);
        border-color: transparent;
        .icon {
            &:hover {
                ::v-deep .svg__fill--primary-blue-03 {
                    fill: var(--color-default-cyan-03);
                }
            }
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
            padding: 24px;
            width: 100%;

            &::placeholder {
                text-transform: uppercase;
                font-family: var(--font-primary);
            }
        }
        .button-submit {
            display: flex;
            align-items: center;
            padding: 0 24px;
        }
    }
    .search-generic-filter-buttons {
        margin-top: 16px;
    }

    .divider {
        margin: 15px 0 24px;
        height: 2px;
        background-color: var(--color-default-cyan-01);
    }
    .container {
        list-style: none;
        cursor: pointer;
        max-width: $container-l-main + px;
        margin-left: auto;
        margin-right: auto;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .section-remove-container {
        margin: 15px 25px;
    }
    .filter-group {
        transition-duration: 400ms;

        position: absolute;
        /* top: 100%;*/
        left: 50px;
        right: 50px;

        margin-top: 8px;
        z-index: 100;
    }

    @media #{$medium} {
        padding-left: var(--unit-gutter);
        padding-right: var(--unit-gutter);
        padding-top: var(--space-xl);
        border-radius: 0;
        margin-top: 0;
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
@media #{$small} {
    .search-generic-filter-buttons {
        flex-direction: column;
        gap: 8px;
    }
    .search-generic {
        .filter-group {
            margin-top: 8px;
            z-index: 100;
        }
    }
}
</style>
