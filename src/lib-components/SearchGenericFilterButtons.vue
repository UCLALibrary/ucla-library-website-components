<template>
    <div class="search-generic-filter-buttons">
        <button
            v-for="(filter, index) in parsedItems"
            :key="filter.label"
            :class="filter.class"
            @click="toggleOpen(index)"
        >
            <span class="title" v-html="filter.label" />

            <div class="chevron">
                <svg-icon-caret-down class="caret-down-svg" />
            </div>
        </button>

        <single-checkbox
            @input-selected="doUpdate"
            v-if="isSingleCheckBox"
            :label="getLabel"
            :querySelection="selectedFilter"
            value="yes"
            :selected.sync="selectedFilter"
        />
    </div>
</template>

<script>
import SvgIconCaretDown from "ucla-library-design-tokens/assets/svgs/icon-caret-down.svg"
import SingleCheckbox from "./SingleCheckbox.vue"

export default {
    name: "SearchGenericFilterButtons",
    components: {
        SvgIconCaretDown,
        SingleCheckbox,
    },
    data() {
        return {
            selectedFilter: "",
        }
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        activeIndex: {
            type: Number,
            default: -1,
        },
        singleCheckboxSelected: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        isSingleCheckBox() {
            let isSingleCheckBox = false
            this.items.map((obj) => {
                console.log("in issingle checkbox for loop")
                if (obj.inputType === "single-checkbox") isSingleCheckBox = true
            })
            return isSingleCheckBox
        },
        getLabel() {
            let label = ""
            this.items.map((obj) => {
                if (obj.inputType === "single-checkbox") label = obj.label
            })
            return label
        },
        parsedItems() {
            console.log(
                "what is singlecheckbox selection from query:" +
                    JSON.stringify(this.singleCheckboxSelected)
            )
            let parsedItems = []
            this.items.map((obj, index) => {
                if (obj.inputType !== "single-checkbox") {
                    console.log(obj.label)
                    let btnClass = "button"
                    if (this.activeIndex == index) {
                        btnClass = "button is-active"
                    }
                    parsedItems.push({
                        ...obj,
                        class: btnClass,
                    })
                } else {
                    console.log(this.singleCheckboxSelected[obj.esFieldName])
                    this.selectedFilter =
                        this.singleCheckboxSelected[obj.esFieldName]
                    console.log(this.selectedFilter)
                }
            })
            return parsedItems
        },
    },
    methods: {
        toggleOpen(index) {
            if (index == this.activeIndex) {
                this.$emit("update:activeIndex", -1)
            } else {
                this.$emit("update:activeIndex", index)
            }
        },
        doUpdate() {
            this.$emit("update:selected", this.selectedFilter)
            this.$emit("single-checkbox-selected")
        },
    },
}
</script>

<style lang="scss" scoped>
.search-generic-filter-buttons {
    width: 100%;
    font-family: var(--font-secondary);
    font-size: 18px;

    display: flex;
    flex-direction: row;

    .button {
        flex: 1 1 auto;

        height: 60px;
        font-size: 18px;
        font-family: var(--font-secondary);
        color: var(--color-white);
        background-color: var(--color-primary-blue-03);
        margin-right: 8px;
        padding: 0;
        position: relative;
        overflow: hidden;
        border: 1.5px solid transparent;

        transition-property: border, border-radius;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
        &:last-child {
            margin-right: 0;
        }
    }

    .title {
        display: block;
        height: 100%;
        width: 100%;
        padding: 0 50px 0 16px;
        transition: background-color 400ms ease-in-out;

        display: flex;
        align-items: center;
        align-content: center;
    }

    .chevron {
        font-size: 16px;
        color: var(--color-white);
        position: absolute;
        width: 56px;
        right: 0;
        top: 0;
        height: 100%;
        transition: background-color 400ms ease-in-out;
        background-color: var(--color-blue-03);

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        ::v-deep .svg__stroke--primary-blue-03 {
            stroke: white;
        } // chevron up & down
    }

    .svg__icon-radio-button {
        .svg__fill--default-cyan-03 {
            fill: transparent;
        }
        .svg__stroke--primary-blue-03 {
            stroke: white;
        }
    }

    // Open state
    .is-active {
        border: 1.5px solid var(--color-fushia-03);
        border-radius: var(--rounded-slightly-all);
        .caret-down-svg {
            transform: rotate(180deg);
        }
        .title,
        .chevron {
            background-color: var(--color-primary-blue-03);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .title:hover,
        .chevron:hover {
            background-color: var(--color-primary-blue-03);
        }
    }
}
</style>
