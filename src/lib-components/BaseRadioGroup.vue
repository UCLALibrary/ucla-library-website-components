<template>
    <!-- TODO write story for this -->
    <transition name="slide-toggle" mode="out-in">
        <fieldset class="base-radio-group">
            <ul class="list">
                <li class="list-item">
                    <label
                        v-for="(item, index) in items"
                        :key="`BaseRadioGroup${index}`"
                        class="label"
                    >
                        <input
                            v-model="parsedSelected"
                            type="radio"
                            :value="item.name"
                            class="input"
                            @change="onChange(item.name)"
                        />

                        <svg-icon-radio-button class="svg" />

                        {{ item.name }}
                    </label>
                </li>
            </ul>
        </fieldset>
    </transition>
</template>

<script>
import SvgIconRadioButton from "ucla-library-design-tokens/assets/svgs/icon-radio-button.svg"

export default {
    name: "BaseRadioGroup",
    components: {
        SvgIconRadioButton,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        selected: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            parsedSelected: "",
        }
    },
    watch: {
        selected: {
            handler(newVal) {
                this.parsedSelected = newVal
            },
            immediate: true,
        },
    },
    methods: {
        onChange(value) {
            this.$emit("update:selected", value)
            this.$emit("input-selected")
        },
    },
}
</script>

<style lang="scss" scoped>
.base-radio-group {
    font-size: 18px;
    color: var(--color-white);
    background-color: var(--color-primary-blue-04);
    border: 1.5px solid var(--color-default-cyan-03);
    margin: 0;
    padding: 22px 16px;

    .list {
        column-count: 3;
        list-style: none;
    }
    .label {
        font-family: var(--font-secondary);
        display: inline-block;
        width: 100%;
        margin: 4px 0;
        padding: 8px 14px 8px 48px;
        cursor: pointer;
        position: relative;
        border-radius: var(--rounded-slightly-all);
        background-color: rgba(255, 255, 255, 0);
        transition: background-color 400ms ease-in-out;
    }
    .input {
        height: 20px;
        width: 20px;
        opacity: 0;
        position: absolute;
        z-index: -1;
        margin: 0;
        padding: 0;
    }
    .svg {
        position: absolute;
        left: 14px;
        top: 5px;

        .filler {
            opacity: 0;
            transition: opacity 200ms ease-in-out;
        }
    }
    .svg__icon-radio-button {
        ::v-deep .svg__fill--default-cyan-03 {
            fill: transparent;
        }
        ::v-deep .svg__stroke--primary-blue-03 {
            stroke: white;
        }
    }

    // Selected state
    .input:checked
        + .svg__icon-radio-button
        ::v-deep
        .svg__fill--default-cyan-03 {
        fill: white;
    }

    //Breakpoints
    @media #{$medium} {
        .list {
            column-count: 2;
        }
    }
    @media #{$small} {
        .list {
            column-count: 1;
        }
    }
    // Hovers
    @media #{$has-hover} {
        .label:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}
</style>
