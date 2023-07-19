<template>
    <div class="page-anchor">
        <button class="dropdown-button" @click="toggleDropdown">
            TABLE OF CONTENTS
            <span
                class="caret"
                :class="{ 'caret-open': isDropdownOpen }"
            ></span>
            <span class="chevron">
                <svg-icon-caret-down class="caret-down-svg" />
            </span>
        </button>

        <ul v-if="isDropdownOpen" class="dropdown-menu page-anchor-list">
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
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
    },
}
</script>

<style scoped>
.page-anchor {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    /* background-color: var(--color-white); */
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    z-index: 30;

    .rando {
        display: none;
    }

    .dropdown-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        cursor: help;
        justify-content: flex-end;
        flex-wrap: nowrap;
        background-color: var(--color-white);
    }

    .page-anchor-list,
    .link {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        list-style-type: none;
        background-color: var(--color-white);
    }

    .link:hover {
        --color-border: var(--color-primary-blue-03);
        &.color-help {
            --color-border: var(--color-help-green-03);
        }
        &.color-visit {
            --color-border: var(--color-visit-fushia-03);
        }
        &.color-about {
            --color-border: var(--color-about-purple-03);
        }
        &.color-default {
            --color-border: var(--color-default-cyan-03);
        }
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: var(--color-border);
        text-decoration-thickness: 1.5px;
    }
}
</style>
