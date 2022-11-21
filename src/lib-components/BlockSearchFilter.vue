<template>
    <div class="block-search-filter">
        <a>
            {{ title }}
        </a>
        <button type="button" @click="closeBlockFilter()">
            <svg-glyph-close class="svg-glyph-close" />
        </button>
    </div>
</template>

<script>
import SvgGlyphClose from "ucla-library-design-tokens/assets/svgs/icon-close.svg"
export default {
    name: "BlockSearchFilter",
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
    },
    methods: {
        closeBlockFilter() {
            this.$emit("removeBlockFilter", this.index)
        },
    },
}
</script>

<style scoped lang="scss">
.block-search-filter {
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
}
</style>
