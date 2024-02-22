<template>
    <div class="search-pop-up" v-on-click-outside="hide">
        <icon-search @click="opened=!opened" />
        <form class="search-modal" v-show="opened" name="searchHome" @submit.prevent="">
            <search-input
                class="search-input"
                :model-value.sync="searchWords"
                :placeholder="placeholder"
                @keyup.native.enter="doSearch"
            />
            <button class="button-submit" type="submit" @click="doSearch">
                <icon-search class="icon" />
            </button>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"

// import BaseCalendarGroup from "./BaseCalendarGroup.vue"

import SearchInput from "./SearchInput.vue"

export default defineComponent({
    name: "SearchGeneric",
    components: {
        IconSearch,
        SearchInput,

        // BaseCalendarGroup,
    },

    props: {
        searchType: {
            type: String,
            default: "",
        },
        searchGenericQuery: {
            type: Object,
            default: () => {},
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            searchWords: this.searchGenericQuery
                ? this.searchGenericQuery.queryText
                : "", // this.$route.query.q,
            opened: true,
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
        "searchGenericQuery.queryText"(newVal, oldVal) {
            /*console.log(
                "in search-genric component searchGenericQuery.queryText watch: " +
                    newVal
            )*/
            this.searchWords = newVal
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
            this.opened = false
        },
        doSearch() {
            console.log("dosearch called")
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
</script>

<style lang="scss" scoped>
.search-pop-up {
    // z-index: 10;
    position: relative;
    width: 32px;
    height: 32px;
    // background-color: var(--color-white);
    // border: 1px solid transparent;
    // border-radius: 4px;
    // margin-right: auto;
    // margin-left: auto;
    // margin-top: -32px;
    // max-width: $container-l-cta + px;
    // padding: 32px 32px 0;

    .search-modal {
        position:absolute;
        top: 32px;
        right: 0;
        
        max-width: $container-l-main + px;
        min-width: 500px;
        margin: 0;

        
        display: flex;
        background-color: var(--color-primary-blue-01);
        border-color: transparent;
        border: 5px red dotted;
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
            padding: 24px 24px 24px 16px;
            width: 100%;

            &::placeholder {
                text-transform: uppercase;
                font-family: var(--font-primary);
                text-overflow: ellipsis;
            }
        }
        .search-input {
            flex-grow: 1;
        }
        .button-submit {
            display: flex;
            align-items: center;
            padding: 0 24px;
        }
    }
    .search-pop-up-filter-buttons {
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
        margin: 12px 24px;
    }
    .filter-group {
        transition-duration: 400ms;

        position: absolute;
        /* top: 100%;*/
        left: 54px;
        right: 54px;

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
//Breakpoints
@media #{$medium} {
    .search-pop-up {
        padding-left: var(--unit-gutter);
        padding-right: var(--unit-gutter);
        padding-top: var(--space-xl);
        border-radius: 0;
        margin-top: 0;
        .filter-group {
            left: 64px;
            right: 64px;
        }
        .input-container {
            .button-submit {
                padding: 0 12px;
            }
            input {
                padding: 24px 0 24px 16px;
            }
        }
        .section-remove-container {
            margin: 12px 0;
        }
    }
}
@media #{$small} {
    .search-pop-up {
        .search-pop-up-filter-buttons {
            flex-direction: column;
            gap: 8px;
        }
        .filter-group {
            margin-top: 8px;
            z-index: 100;
            left: 24px;
            right: 24px;
        }
    }
}
</style>
