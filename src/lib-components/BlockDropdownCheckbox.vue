<template>
    <div class="block-dropdown-checkbox">
        <label :class="labelClass"
            >{{ label }}
            <input type="checkbox" class="input" @change="onChange(true)" />

            <!-- TODO create a checkbox SVG for this -->
            <svg-icon-checkbox class="svg" />
        </label>
    </div>
</template>

<script>
// SVGs
import SvgIconCheckbox from "ucla-library-design-tokens/assets/svgs/icon-checkbox.svg"

export default {
    name: "BlockDropdownCheckbox",
    data() {
        return {
            isSelected: false,
        }
    },
    components: {
        SvgIconCheckbox,
    },
    props: {
        label: {
            type: String,
            default: "[LABEL]",
        },
    },
    computed: {
        labelClass() {
            return ["label", this.isSelected ? "checked" : ""]
        },
    },
    methods: {
        onChange() {
            this.isSelected = !this.isSelected
        },
    },
}
</script>

<style lang="scss" scoped>
.block-dropdown-checkbox {
    width: 300px;
    // padding: 18px 16px 18px 16px;
    background: var(--color-primary-blue-03);
    color: white;
    font-family: var(--font-secondary);
}

.label {
    font-family: var(--font-secondary);
    display: inline-block;
    width: 100%;
    padding: 18px 16px 18px 16px;
    // margin: 4px 0;
    // padding: 6px 14px 8px 45px;
    cursor: pointer;
    position: relative;
    border: 1.5px solid var(--color-primary-blue-03);
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
    border: 1.5px solid var(--color-visit-fushia-03);
}

// Selected state
.input:checked + .svg__icon-checkbox ::v-deep .svg__stroke--default-cyan-03 {
    stroke: white;
}

// Hovers
@media #{$has-hover} {
    .label:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
}
</style>
