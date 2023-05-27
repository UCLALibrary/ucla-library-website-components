<template>
    <div class="search-home">
        <div v-if="parsedTabs.length" class="tabs">
            <button
                v-for="(tab, index) in parsedTabs"
                :key="tab.title"
                :class="tab.classes"
                @click="setActiveTab(index)"
                v-text="tab.title"
                ref="searchtab"
            />
        </div>

        <div class="box">
            <form name="searchHome" :action="actionUrl" @submit.prevent="">
                <div class="input-container">
                    <!--input
                        v-model="searchWords"
                        type="search"
                        class="input-search"
                        :placeholder="placeholder"
                    /-->
                    <search-input
                        class="search-input"
                        :model-value.sync="searchWords"
                        :search-icon="false"
                        :shortcut-icon="false"
                        :placeholder="placeholder"
                    />
                    <button class="button-submit" @click="doSearch">
                        <icon-search class="icon" />
                    </button>
                </div>
            </form>

            <div class="divider" />

            <nav v-if="linkItems.length || advancedSearchLink" class="links">
                <div v-if="linkItems.length" class="regular-links">
                    <smart-link
                        v-for="link in linkItems"
                        :key="link.url"
                        class="link"
                        :to="link.url"
                        v-text="link.text"
                    />
                </div>

                <div v-if="advancedSearchLink" class="advanced-links">
                    <smart-link
                        :to="advancedSearchLink.url"
                        v-text="advancedSearchLink.text"
                    />
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import IconSearch from "ucla-library-design-tokens/assets/svgs/icon-search.svg"
import SmartLink from "@/lib-components/SmartLink.vue"
import SearchInput from "./SearchInput.vue"

const tabs = [
    {
        title: "UCLA Library Website",
        actionURL: "/search-site",
        queryParam: "q",
        placeholder: "Search library website",
    },
    {
        title: "UC Library Search",
        actionURL:
            "https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&tab=Articles_books_more_slot&search_scope=ArticlesBooksMore&lang=en&query=any,contains,",
        placeholder: "Search articles, books and more",
    },
]

export default {
    components: {
        IconSearch,
        SmartLink,
        SearchInput,
    },
    props: {
        /**
         * List of links with the following properties: [{text, url, target}]
         */
        linkItems: {
            type: Array,
            default: () => [],
        },
        /**
         * An advanced search link in this format: {text, url, target}
         */
        advancedSearchLink: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            searchWords: "",
            activeTabIndex: 1,
        }
    },
    computed: {
        parsedTabs() {
            return tabs.map((obj, index) => {
                let classes = "tab"
                if (index === this.activeTabIndex) {
                    classes = "tab is-active"
                }
                return {
                    ...obj,
                    classes,
                }
            })
        },
        isMaterialsSearch() {
            return this.activeTabIndex === 1
        },
        isSiteSearch() {
            return this.activeTabIndex === 0
        },
        actionUrl() {
            return tabs[this.activeTabIndex].actionURL
        },
        placeholder() {
            return tabs[this.activeTabIndex].placeholder
        },
        queryParam() {
            return tabs[this.activeTabIndex].queryParam
        },
        queryifySearchWords() {
            // Replaces spaces with '+' for search words.
            return this.searchWords.split(" ").join("+")
        },
    },
    methods: {
        doSearch() {
            if (this.isSiteSearch) {
                this.$router.push({
                    path: this.actionUrl,
                    query: { [this.queryParam]: this.searchWords },
                })
            } else {
                window.location = `${this.actionUrl}${this.queryifySearchWords}`
            }
        },
        setActiveTab(index) {
            this.activeTabIndex = index
        },
    },
}
</script>

<style lang="scss" scoped>
.search-home {
    .tabs {
        display: flex;
        justify-content: flex-end;

        cursor: pointer;
    }

    .tab {
        padding: 20px 25px;
        background-color: var(--color-primary-blue-01);
        border: 1px solid transparent;
        border-radius: var(--rounded-slightly-top);
        transition: background-color 400ms ease-in-out;
        &.is-active {
            background-color: var(--color-white);
            margin-right: 0;
        }
        &:not(.is-active) {
            margin: 0 4px 4px 4px;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    .box {
        background-color: var(--color-white);
        padding: 30px 50px 0 50px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;
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
        .search-input {
            flex-grow: 1;
        }
        .button-submit {
            display: flex;
            align-items: center;
            padding: 0 24px;
        }
    }

    .input-search {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;
        background-color: var(--color-primary-blue-01);
        border-color: transparent;
        padding: 27px 37px 27px 95px;
        width: 100%;
        &::placeholder {
            text-transform: uppercase;
        }
    }

    .divider {
        margin-top: 16px;
        border-bottom: 2px solid var(--color-default-cyan-03);
        height: 1px;
    }

    .links {
        display: flex;
        margin: 24px 0;
    }

    .regular-links {
        display: flex;
        .link {
            display: flex;
            &:after {
                content: "";
                border-right: 2px solid #efefef;
                margin: 0 24px;
            }
            &:last-child:after {
                display: none;
            }
        }
    }

    .advanced-links {
        color: var(--color-primary-blue-03);
        margin-left: auto;
        text-transform: uppercase;
    }

    // Breakpoints
    @media #{$small} {
        .tabs {
            font-size: 14px;
        }
        .box {
            padding: 18px 24px;
        }
        .input-container {
            .input-search {
                font-size: 16px;
                padding: 20px 0 20px 12px;
            }
            .button-submit {
                padding-right: 12px;
                padding-left: 0;
            }
        }
        .links {
            display: unset;
            font-size: 14px;
        }
        .regular-links {
            margin-top: 20px;
            margin-right: 12px;
            .vertical-divider {
                margin: 0 4px;
            }
        }
        .advanced-links {
            margin-top: 24px;
        }
    }
}
</style>
