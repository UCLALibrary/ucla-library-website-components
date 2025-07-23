<script setup lang="ts">
// Imports
import SvgList from "ucla-library-design-tokens/assets/svgs/icon-list.svg"
import SvgGrid from "ucla-library-design-tokens/assets/svgs/icon-card.svg"
import { defineEmits, defineProps } from "vue"

// Props
type PageViewToggleProps = {
    pageView?: "list" | "grid"
}
const props = withDefaults(defineProps<PageViewToggleProps>(), {
    pageView: "list",
})

// Emits
const emit = defineEmits(["update:pageView"])

// Methods
function setView(view: "list" | "grid") {
    if (view !== props.pageView) emit("update:pageView", view)
}
</script>

<template>
    <div class="button-page-view">
        <button
            class="button-page-view"
            :class="{ active: pageView === 'list' }"
            type="button"
            :aria-pressed="pageView === 'list'"
            aria-label="List view"
            @click="setView('list')"
        >
            <SvgList class="icon" />
        </button>
        <button
            class="button-page-view"
            :class="{ active: pageView === 'grid' }"
            type="button"
            :aria-pressed="pageView === 'grid'"
            aria-label="Grid view"
            @click="setView('grid')"
        >
            <SvgGrid class="icon" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/dlc/_button-page-view.scss";
</style>
