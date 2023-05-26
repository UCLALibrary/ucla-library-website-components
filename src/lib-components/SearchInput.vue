<template>
    <div>
        <input
            ref="inputRef"
            type="search"
            data-search-input="true"
            v-model="searchWords"
            :placeholder="placeholder"
            @input="onInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            @keydown="onKeydown"
        />

        <button
            class="search-icon clear"
            aria-label="Clear"
            @mousedown="clear"
            @keydown.space.enter="clear"
        ></button>
    </div>
</template>
<script>
export default {
    props: {
        searchGenericQuery: {
            type: Object,
            default: () => {},
        },
        placeholder: {
            type: String,
            default: "",
        },
    },

    data() {
        return {
            hasFocus: false,
            inputRef: null,
            searchWords: this.searchGenericQuery
                ? this.searchGenericQuery.queryText
                : "", // this.$route.query.q,
            selectedFilters: this.searchGenericQuery
                ? this.searchGenericQuery.queryFilters
                : {},
        }
    },
    computed: {},
    mounted() {
        this.inputRef = this.$refs.inputRef
        window.document.addEventListener("keydown", this.onDocumentKeydown)
    },
    beforeUnmount() {
        window.document.removeEventListener("keydown", this.onDocumentKeydown)
    },
    methods: {
        clear() {
            this.searchWords = ""
        },
        onInput(e) {
            this.searchWords = e.target.value
        },
        onKeydown(e) {
            if (e.key === "Escape") {
                this.clear()
                this.inputRef.blur()
            }
        },
        onDocumentKeydown(e) {
            if (
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

                elToFocus?.focus()
                if (this.selectOnFocus) elToFocus?.select()
            }
        },
    },
}
</script>
