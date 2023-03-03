<template>
    <div class="single-checkbox">
        <label :class="labelClass"
            >{{ label }}
            <input
                type="checkbox"
                class="input"
                v-model="parseSelected"
                :true-value="value"
                :value="value"
                @change="onChange(value)"
            />

            <!-- TODO create a checkbox SVG for this -->
            <svg-icon-checkbox class="svg" />
        </label>
    </div>
</template>

<script>
// SVGs
import SvgIconCheckbox from "ucla-library-design-tokens/assets/svgs/icon-checkbox.svg"

export default {
    name: "SingleCheckbox",
    data() {
        return {
            isSelected: "",
        }
    },
    components: {
        SvgIconCheckbox,
    },
    watch: {
        selected: {
            handler(newVal) {
                console.log(
                    "what is the new value of singlecheckobox in watch handler:" +
                        newVal
                )
                this.isSelected = newVal
            },
        },
    },
    props: {
        value: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "[LABEL]",
        },
        querySelection: {
            type: String,
            default: "",
        },
        selected: {
            type: String,
            default: "",
        },
    },
    mounted() {
        console.log("In mounted:" + this.isSelected)
    },
    computed: {
        parseSelected: {
            get() {
                return this.isSelected == this.querySelection
                    ? this.isSelected
                    : this.querySelection
            },
            set(value) {
                this.isSelected = value
            },
        },
        labelClass() {
            console.log("In labelClass:" + this.isSelected)
            return ["label", this.isSelected === "yes" ? "checked" : ""]
        },
    },
    methods: {
        onChange(value) {
            console.log("checkbox updates: " + this.isSelected)
            this.$emit(
                "update:selected",
                !this.isSelected ? "" : this.isSelected
            )
            this.$emit("input-selected")
        },
    },
}
</script>

<style lang="scss" scoped>
.single-checkbox {
    min-width: 300px;
    // padding: 18px 16px 18px 16px;
    background: var(--color-primary-blue-03);
    color: white;
    font-family: var(--font-secondary);
    .label {
        font-family: var(--font-secondary);
        display: inline-block;
        width: 100%;
        padding: 15px 16px 15px 16px;
        // margin: 4px 0;
        // padding: 6px 14px 8px 45px;
        cursor: pointer;
        position: relative;
        border: 1.5px solid var(--color-primary-blue-03);
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
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
        right: 20px;
        top: 15px;
        .filler {
            opacity: 0;
            transition: opacity 200ms ease-in-out;
        }
    }

    .svg__icon-checkbox {
        ::v-deep .svg__stroke--default-cyan-03 {
            stroke: transparent;
        }
        ::v-deep .svg__stroke--primary-blue-03 {
            stroke: white;
        }
    }

    .checked {
        border: 1.5px solid var(--color-default-cyan-03);
    }

    // Selected state
    .input:checked
        + .svg__icon-checkbox
        ::v-deep
        .svg__stroke--default-cyan-03 {
        stroke: white;
    }
    // Hovers
    @media #{$has-hover} {
        .label:hover {
            //background-color: rgba(255, 255, 255, 0.1);
            background-color: var(--color-primary-blue-04);
        }
    }

    //Breakpoints
    @media #{$small} {
        min-width: unset;
    }
}
</style>
