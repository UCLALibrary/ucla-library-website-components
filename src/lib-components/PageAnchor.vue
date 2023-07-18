<template>
    <div class="page-anchor">
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
    max-width: 1060px;
    background-color: var(--color-secondary-grey-01);
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-end;

    position: -webkit-sticky; /* Required for Safari */
    position: sticky;
    /* background-color: rgba(255, 255,255, 0.9); */
    /* background: linear-gradient(to left, pink, transparent 99.99%); */
    width: auto;
    height: 0;
    list-style-type: none;
    top: 0;
    right: 0;
    z-index: 200;
    margin-bottom: var(--space-s);
    @include overline;
    font-weight: 500;
    text-transform: uppercase;
    padding: var(--space-l) var(--space-l) var(--space-s) var(--space-l);

    --link-color: var(--color-primary-blue-03);
    --icon-color: var(--color-primary-blue-03);
    --icon-color-highlight: var(--color-default-cyan-03);
}

.dropdown-button {
  display: flex;
  align-self: flex-end;
  cursor: help;
  /* padding-right: var(--space-xl); */
  margin-top: -20px;
}

.page-anchor-list {
    background-color: var(--color-secondary-grey-01);
    max-width: 1060px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    position: -webkit-sticky; /* Required for Safari */
    position: sticky;
    width: 100%;
    height: auto;
    list-style-type: none;
    top: 0;
    right: 0;
    z-index: 200;
    margin-bottom: var(--space-s);
    @include overline;
    font-weight: 500;
    text-transform: uppercase;
    padding: var(--space-l) 0 var(--space-s) var(--space-l);
}

    .link {
        margin-bottom: 10px;
        text-align: right;
        text-decoration: none;
    }

    .link:hover {
        @include link-hover;
        /* color: var(--color-primary-blue-03); */
        margin-bottom: var(--space-s);
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
    }

/* .page-anchor a {
    @include overline;
    color: var(--color-primary-blue-05);
    text-decoration: none;
}

.page-anchor a:hover {
    color: coral;
} */

/* @media #{$has-hover} {
    .page-anchor a:hover {
        @include link-hover;
    }
} */
</style>
