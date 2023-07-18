<template>
    <div v-bind="attrsStyles">
        <input
            ref="inputRef"
            type="search"
            data-search-input="true"
            v-model="searchInputModelValue"
            v-bind="attrsWithoutStyles"
            @input="onInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            @keydown="onKeydown"
        />
        <button
            v-show="showClearIcon"
            class="clear-icon clear"
            aria-label="Clear"
            @mousedown="clear"
            @keydown.space.enter="clear"
        ></button>
    </div>
</template>

<script>
const filterObject = (obj, properties, remove = true) => {
    // console.log(obj)
    // console.log(properties)
    const res = {}
    if (properties && properties.length > 0) {
        Object.keys(obj).forEach((objAttr) => {
            const condition = remove
                ? properties.indexOf(objAttr) === -1
                : properties.indexOf(objAttr) >= 0

            if (condition) {
                res[objAttr] = obj[objAttr]
            }
        })
    }

    return res
}

const defaultBoolean = (val = true) => ({ type: Boolean, default: val })

export default {
    inheritAttrs: false,
    props: {
        type: {
            type: String,
            default: "search",
        },
        modelValue: {
            type: String,
            default: "",
        },
        wrapperClass: {
            type: String,
            default: "search-input-wrapper",
        },

        clearIcon: defaultBoolean(),

        clearOnEsc: defaultBoolean(),
        blurOnEsc: defaultBoolean(),
        selectOnFocus: defaultBoolean(),
    },

    data() {
        return {
            searchInputModelValue: this.modelValue,
            hasFocus: false,
            inputRef: null,
        }
    },
    computed: {
        attrsWithoutStyles() {
            return filterObject(this.$attrs, ["class", "style"])
        },
        attrsStyles() {
            const res = filterObject(this.$attrs, ["class", "style"], false)

            if (!res.class) res.class = this.wrapperClass

            return res
        },
        showClearIcon() {
            console.log(
                "in show clear icon",
                this.clearIcon,
                this.searchInputModelValue.length
            )
            return this.clearIcon && this.searchInputModelValue.length > 0
        },
    },
    mounted() {
        this.inputRef = this.$refs.inputRef
        window.document.addEventListener("keydown", this.onDocumentKeydown)
    },
    beforeDestroy() {
        window.document.removeEventListener("keydown", this.onDocumentKeydown)
    },

    methods: {
        clear() {
            console.log("in clear")
            this.searchInputModelValue = ""
            this.$emit("update:modelValue", "")
        },
        onInput(e) {
            this.searchInputModelValue = e.target.value
            this.$emit("update:modelValue", e.target.value)
        },
        onKeydown(e) {
            if (e.key === "Escape") {
                if (this.clearOnEsc) this.clear()
                if (this.blurOnEsc) {
                    const el = this.inputRef
                    if (el) el.blur()
                }
            }
        },
        onDocumentKeydown(e) {
            if (
                e.key === this.shortcutKey &&
                e.target !== this.inputRef &&
                window.document.activeElement !== this.inputRef &&
                !(e.target instanceof HTMLInputElement) &&
                !(e.target instanceof HTMLSelectElement) &&
                !(e.target instanceof HTMLTextAreaElement)
            ) {
                e.preventDefault()
                const allVisibleSearchInputs = [].slice
                    .call(
                        document.querySelectorAll(
                            '[data-search-input="true"]:not([data-shortcut-enabled="false"])'
                        )
                    )
                    .filter((el) => {
                        return !!(
                            el.offsetWidth ||
                            el.offsetHeight ||
                            el.getClientRects().length
                        )
                    })
                const elToFocus =
                    allVisibleSearchInputs.length > 1
                        ? allVisibleSearchInputs[0]
                        : this.inputRef

                if (elToFocus) {
                    elToFocus.focus()
                    if (this.selectOnFocus) {
                        elToFocus.select()
                    }
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
$input-color: #333;
$input-background: #f6f9fc;
$icon-color: darken($input-background, 30%);
$active-color: #1ea7fd;

.search-input-wrapper {
    position: relative;

    input[data-search-input="true"] {
        display: block;
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;
        background-color: var(--color-primary-blue-01);
        border-color: transparent;
        padding: 24px 24px 24px 16px;
        width: 100%;

        &::placeholder {
            text-transform: uppercase;
            font-family: var(--font-primary);
            text-overflow: ellipsis;
        }
        /*
        &:focus {
            background-color: var(--color-primary-blue-01);
            border-color: $active-color;
            outline: 0;
            box-shadow: none;
        }*/
    }

    .clear-icon {
        color: $icon-color;
        position: absolute;
        &.clear {
            right: 15px;
            bottom: 22px;
            cursor: pointer;
            z-index: 10;
            box-sizing: border-box;
            display: block;
            width: 24px;
            height: 24px;
            border: 2px solid transparent;
            border-radius: 40px;
            background: none;
            padding: 0px;
            outline: none;
            &:focus {
                background: darken($input-background, 4%);
            }
        }
        &.clear::after,
        &.clear::before {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            width: 16px;
            height: 2px;
            background: $icon-color;
            transform: rotate(45deg);
            border-radius: 5px;
            top: 9px;
            left: 2px;
        }
        &.clear::after {
            transform: rotate(-45deg);
        }
    }
}

/* Fix the X appearing in search field on Chrome and IE */
input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
}
input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}
</style>
