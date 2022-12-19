<template>
    <div :class="classes">
        <a>
            {{ title }}
        </a>
        <button type="button" @click="closeBlockFilter()">
            <svg-glyph-close class="svg-glyph-close" />
        </button>
    </div>
</template>

<script>
// Helpers
import getSectionName from "@/mixins/getSectionName"

import SvgGlyphClose from "ucla-library-design-tokens/assets/svgs/icon-close.svg"

export default {
    name: "BlockRemoveSearchFilter",
    mixins: [getSectionName],
    data() {
        return {}
    },
    components: {
        SvgGlyphClose,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        filterType: {
            type: String,
            default: "",
        },
        index: {
            type: Number,
            default: 0,
        },
        color: {
            type: String,
            default: "", // This will be "visit", "about", "help".
        },
    },
    computed: {
        classes() {
            return ["block-remove-search-filter", `color-${this.sectionName}`]
        },
        sectionName() {
            return this.color || this.getSectionName(this.$route.path)
        },
    },
    methods: {
        closeBlockFilter() {
            this.$emit("removeBlockFilter", this.index)
        },
    },
}
</script>

<style scoped lang="scss">
.block-remove-search-filter {
    padding: 12px;
    display: flex;
    flex-direction: row;
    border: 1.5px #c099ff solid;
    background: #ffffff;
    border-radius: 4px;
    align-items: center;
    width: fit-content;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;

    &:hover {
        background: #efe5ff;
        cursor: pointer;
    }

    a {
        margin-right: 8px;
        color: #032d5b;
    }

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
</style>
