<script setup lang="ts">
// Imports
import { ref } from "vue"
import type { EntryFieldProps } from "@/types/types"

import ButtonSubmit from "./ButtonSubmit.vue"
import EntryField from "./EntryField.vue"

const emit = defineEmits(["submit"])
type SearchFieldProps = Omit<EntryFieldProps, "modelValue"> & {
    placeholder?: string
}

// Props
const props = withDefaults(defineProps<SearchFieldProps>(), {
    wrapperClass: "search-input-wrapper",
    clearIcon: true,
    clearOnEsc: true,
    blurOnEsc: true,
    selectOnFocus: true,
    shortcutKey: "/",
})

// Data
const searchValue = ref<string>("")

// Methods
const submitSearch = () => {
    emit("submit", searchValue.value)
}
</script>

<template>
    <form
        class="search-field"
        name="searchField"
        @submit.prevent="submitSearch"
    >
        <EntryField v-model="searchValue" v-bind="props" />
        <ButtonSubmit class="button-submit" />
    </form>
</template>

<style lang="scss" scoped>
.search-field {
    display: flex;

    .search-input-wrapper {
        flex: 1;
    }
}
</style>
