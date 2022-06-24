<template>
    <div class="block-date">
        <svg-arrow-down class="svg" />
        <div class="date">
            {{ date }}
        </div>
        <div class="day">
            {{ day }}
        </div>
    </div>
</template>

<script>
import SvgArrowDown from "ucla-library-design-tokens/assets/svgs/graphic-chevron-right.svg"

export default {
    name: "BlockDate",
    components: {
        SvgArrowDown,
    },
    // TODO See ticket in internal system for notes on this. TLDR: Use JS date objects
    // Then have date-fns format function as computed to show date and day
    props: {
        date: {
            type: String,
            default: "",
        },
        day: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-date {
    width: 274px;
    height: 232px;
    border-radius: var(--rounded-slightly-all);
    background-color: var(--color-primary-blue-01);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .svg {
        // height: 60px;
        transform: rotate(90deg) scale(0.9, 0.9);
    }

    .date {
        font-size: 80px;
        color: var(--color--black);
        margin-bottom: 5px;
    }

    .day {
        font-size: 18px;
        color: var(--color-primary-blue-03);
    }
}
</style>
