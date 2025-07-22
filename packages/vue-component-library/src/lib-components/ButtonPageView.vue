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
.button-page-view {
    display: flex;
    gap: 2px;

    .button-page-view {
        display: flex;
        align-items: center;
        position: relative;

        padding: 0;

        background-color: var(--color-primary-blue-01);
        transition: background-color 0.2s ease-out;

        cursor: pointer;

        &.active {
            background-color: var(--color-primary-blue-05);
            :deep(svg) {
                rect {
                    fill: var(--color-white);
                    stroke: var(--color-white);
                }
                path {
                    fill: var(--color-white);
                    stroke: var(--color-white);
                }
            }
        }
    }
    .icon {
        width: 40px;
        height: 40px;
        display: block;
    }

    :deep(svg) {
        rect {
            fill: var(--color-primary-blue-05);
            stroke: var(--color-primary-blue-05);
            transition: stroke 0.2s ease-out, fill 0.2s ease-out;
        }
        path {
            fill: var(--color-primary-blue-05);
            stroke: var(--color-primary-blue-05);
            transition: stroke 0.2s ease-out, fill 0.2s ease-out;
        }
    }

    // Hover states
    @media #{$has-hover} {
        .button-page-view:hover {
            background-color: var(--color-primary-blue-03);
            :deep(svg) {
                rect {
                    fill: var(--color-white);
                    stroke: var(--color-white);
                }
                path {
                    fill: var(--color-white);
                    stroke: var(--color-white);
                }
            }
        }
    }
}
</style>
