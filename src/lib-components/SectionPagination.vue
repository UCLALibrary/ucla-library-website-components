<template>
    <div :class="classes">
        <smart-link v-if="previousTo" :to="previousTo" class="previous">
            <svg-icon-arrow-right class="previous-svg" />
            <div class="underline-hover">Previous</div>
        </smart-link>
        <smart-link v-if="nextTo" :to="nextTo" class="next">
            <div class="underline-hover">Next</div>
            <svg-icon-arrow-right class="next-svg" />
        </smart-link>
    </div>
</template>

<script>
import SvgIconArrowRight from "ucla-library-design-tokens/assets/svgs/icon-arrow-right.svg"

export default {
    name: "SectionPagination",
    components: {
        SvgIconArrowRight,
    },
    props: {
        nextTo: {
            type: String,
            default: "",
        },
        previousTo: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            if (this.previousTo == "") {
                return ["section-pagination", "first-page"]
            }
            if (this.nextTo == "") {
                return ["section-pagination", "last-page"]
            } else {
                return ["section-pagination"]
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-pagination {
    max-width: 990px;

    font-family: var(--font-secondary);
    font-size: 18px;
    padding-left: 13px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    .previous {
        display: flex;
        align-items: center;
    }
    .next {
        display: flex;
        align-items: center;
    }
    .previous-svg {
        transform: scaleX(-1);
        margin-right: 5px;
    }
    .next-svg {
        margin-left: 5px;
    }
    &.first-page {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-content: stretch;
        align-items: center;
    }
    &.last-page {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: center;
    }

    // Hover states
    @media #{$has-hover} {
        .previous:hover,
        .previous:active {
            color: var(--color-primary-blue-03);
        }
        .next:hover,
        .next:active {
            color: var(--color-primary-blue-03);
        }
    }
}
</style>
