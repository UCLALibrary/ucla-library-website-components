import EntryField from "@/lib-components/EntryField"
import { computed, ref } from "vue"

export default {
    title: "Funkhaus / EntryField",
    component: EntryField,
}

// Variations of stories below
export function Default() {
    return {
        components: { EntryField },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search Library",
            }
        },

        template: "<entry-field v-model='value' :placeholder='placeholder' />",
    }
}

export function WithoutClearIcon() {
    return {
        components: { EntryField },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search Archives",
            }
        },

        template:
            "<entry-field v-model='value' :placeholder='placeholder' :clear-icon='false' />",
    }
}

export function WithoutClearOnEsc() {
    return {
        components: { EntryField },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search Catalog",
            }
        },

        template:
            "<entry-field v-model='value' :placeholder='placeholder' :clear-on-esc='false' />",
    }
}
