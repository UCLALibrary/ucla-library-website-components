<template>
    <div class="page-anchor">
        <div class="page-anchor-content">
            <button class="dropdown-button" @click="toggleDropdown">
                TABLE OF CONTENTS <span class="caret" :class="{ 'caret-open': isDropdownOpen }"></span>
            </button>

            <ul v-if="isDropdownOpen" class="dropdown-menu page-anchor-list">
                <li v-for="(title, index) in sectionTitles" :key="index" :class="classes">
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
        SvgIconCaretDown
    },
    data() {
        return {
        isDropdownOpen: false
        };
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
                let titleWithNoSpecialChars = title.replace('&', '').replace(/\s+/g, ' ').trim()
                return titleWithNoSpecialChars.toLowerCase().replace(/ /g, "-")
            })
        },
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        }
    }
}
</script>

<style scoped>
.page-anchor {
    position: sticky;
    position: -webkit-sticky; /* Required for Safari */
    height: 100%;
    background-color: var(--color-secondary-grey-01);

    .page-anchor-content {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        justify-content: flex-end;
        align-items: flex-end;
        text-transform: uppercase;
        padding: var(--space-l) var(--space-l) var(--space-s) var(--space-l);
    }

    .dropdown-button {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        cursor: help;
    }

    .page-anchor-list, .link {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        list-style-type: none;
    }

    .link:hover {
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
        text-decoration-color: var(--color-primary-blue-03);
        text-decoration-color: var(--color-border);
        text-decoration-thickness: 1.5px;
    }
}
</style>
