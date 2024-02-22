import { defineComponent } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import SearchGenericFilterButtons from "./SearchGenericFilterButtons.vue"
import SearchGenericViewModes from "./SearchGenericViewModes.vue"
import BaseRadioGroup from "./BaseRadioGroup.vue"
import BaseCheckboxGroup from "./BaseCheckboxGroup.vue"
import SectionRemoveSearchFilter from "./SectionRemoveSearchFilter.vue"

// import BaseCalendarGroup from "./BaseCalendarGroup.vue"

import SearchInput from "./SearchInput.vue"


const props = defineProps({
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
        placeholder: {
            type: String,
            default: "",
        },
        /*queryView: {
            type: String,
            default: "list",
        },*/
    })
    
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
                    // console.log("in issingle checkbox for loop")
                    if (obj.inputType === "single-checkbox")
                        esfieldName = obj.esFieldName
                })
                this.selectedFilters[esfieldName] = selectedFilter
            },
            get() {
                let esfieldName = ""
                this.filters.map((obj) => {
                    // console.log("in issingle checkbox for loop")
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
            // console.log(JSON.stringify(this.selectedFilters))
            return this.filters.map((obj) => {
                let selected = this.selectedFilters[obj.esFieldName] || []
                // console.log("In parseselected: " + selected)
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
            // console.log("in is viewOpened")
            if (newVal) {
                this.openedFilterIndex = -1
            }
        },
        openedFilterIndex(newVal, oldVal) {
            //console.log("in is openedFilterIndex" + newVal)
            if (newVal !== -1) {
                this.isViewOpened = false
            }
        },
        "searchGenericQuery.queryText"(newVal, oldVal) {
            /*console.log(
                "in search-genric component searchGenericQuery.queryText watch: " +
                    newVal
            )*/
            this.searchWords = newVal
        },
        "searchGenericQuery.queryFilters"(newVal, oldVal) {
            /* console.log(
                "in search-genric component searchGenericQuery.queryFilters watch: " +
                    JSON.stringify(newVal)
            )*/
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

    // do not forget this section
    directives: {
        vOnClickOutside,
    },
    methods: {
        hide() {
            this.openedFilterIndex = -1
        },
        doSearch() {
            console.log("dosearch called")
            console.log(
                "selected filters in component are: " +
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
})