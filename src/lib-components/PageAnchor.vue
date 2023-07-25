<template>
    <div class="page-anchor">
        <div class="page-anchor-content">
            <button class="dropdown-button" @click="toggleDropdown">
                On this page
                <span
                    class="caret"
                    :class="{ 'is-active': isDropdownOpen }"
                >
                    <span class="chevron">
                        <svg-icon-caret-down class="caret-down-svg" />
                    </span>
                </span>
            </button>

            <!-- Desktop - Page Anchor remains open when link is clicked -->
            <ul v-if="isDropdownOpen && isDesktop" class="dropdown-menu page-anchor-list">
                <li
                    v-for="(title, index) in sectionTitles"
                    :key="index"
                    :class="classes"
                >
                    <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
                </li>
                <li :class="classes"><a href="#">Back to Top</a></li>
            </ul>

            <!-- Tablet or Mobile - Page Anchor closes when link is clicked -->
            <ul v-if="isDropdownOpen && !isDesktop" class="dropdown-menu page-anchor-list" @click="toggleDropdown">
                <li
                    v-for="(title, index) in sectionTitles"
                    :key="index"
                    :class="classes"
                >
                    <a :href="`#${kebabCaseTitles[index]}`">{{ title }}</a>
                </li>
                <li :class="classes"><a href="#">Back to Top</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
// Helpers
import getSectionName from "@/mixins/getSectionName"

import SvgIconCaretDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"

export default {
    name: "PageAnchor",
    mixins: [getSectionName],
    components: {
        SvgIconCaretDown,
    },
    data() {
        return {
            isDropdownOpen: false,
            windowWidth: window.innerWidth,
        }
    },
    props: {
        sectionTitles: {
            type: Array,
            required: true,
        },
        color: {
            type: String,
            default: "", // This will be "visit", "about", "help".
        },
    },
    computed: {
        classes() {
            return ["link", `color-${this.sectionName}`]
        },
        sectionName() {
            return this.color || this.getSectionName(this.$route.path)
        },
        kebabCaseTitles() {
            return this.sectionTitles.map((title) => {
                let titleWithNoSpecialChars = title
                    .replace("&", "")
                    .replace(/\s+/g, " ")
                    .trim()
                return titleWithNoSpecialChars.toLowerCase().replace(/ /g, "-")
            })
        },
        isDesktop() {
            if (this.windowWidth > 1024) {
            return true;
            } return false;
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
    },
}
</script>

<style lang="scss" scoped>
.page-anchor {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: linear-gradient(to left, white, transparent 99.99%);
    z-index: 30;
    float: right;

    .page-anchor-content {
        display: inline-flex;
        justify-content: flex-end;
        flex-direction: column;
        min-height: 48px;
        padding: 4px 40px;
        position: relative;
    }

    .dropdown-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        justify-content: flex-end;
        flex-wrap: nowrap;
        min-width: 250px;
        max-width: 100%;
        @include overline;
    }

    .page-anchor-list {
        position: absolute;
        top: 48px;
        right: 0;
        width: 100%;
        padding: 4px 40px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        background: linear-gradient(to left, white, transparent 99.99%);

        li {
            padding: $component-04 + px $component-05 + px;
        }
    }

    .page-anchor-list,
    .link a {
        --color-border: var(--color-primary-blue-03);
        @include overline;
        text-align: right;
        text-decoration-thickness: 2px;
        text-decoration-color: var(--color-border);
        text-underline-offset: 1px;
    }

    .link a:hover {
        text-decoration-line: underline;
    }

    .link {
        &.color-help a:hover {
            --color-border: var(--color-help-green-03);
        }
        &.color-visit a:hover {
            --color-border: var(--color-visit-fushia-03);
        }
        &.color-about a:hover {
            --color-border: var(--color-about-purple-03);
        }
        &.color-default a:hover {
            --color-border: var(--color-default-cyan-03);
        }
    }

    // Open state
    .is-active {
        .caret-down-svg {
            transform: rotate(180deg);
        }
    }

    // Breakpoints
    @media #{$medium} {
        display: block;
        background-color: var(--color-white);
        float: none;
        width: 100%;
        .page-anchor-content {
            width: 100%;
            padding: 4px var(--unit-gutter);
        }
        .dropdown-button {
            width: 100%;
            background-color: var(--color-white);
            padding: 0;
        }
        .page-anchor-list {
            width: 100%;
            background-color: var(--color-white);
            padding: 4px var(--unit-gutter);

            .link {
                padding-right: 0;
            }
        }
    }
}
</style>
