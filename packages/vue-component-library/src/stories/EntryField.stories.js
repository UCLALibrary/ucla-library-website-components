import EntryField from "@/lib-components/EntryField"
import { defineModel, ref } from "vue"

export default {
    title: "Funkhaus / EntryField",
    component: EntryField,
}

// Variations of stories below
export function Default() {
    return {
        components: { EntryField },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search",
            }
        },

        template: "<entry-field v-model='value' :placeholder='placeholder' />",
    }
}

export function WithoutClearIcon() {
    return {
        components: { EntryField },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search",
            }
        },

        template:
            "<entry-field v-model='value' :placeholder='placeholder' :clear-icon='false' />",
    }
}

export function WithoutClearOnEsc() {
    return {
        components: { EntryField },
        data() {
            const value = ref("")

            return {
                value,
                placeholder: "Search",
            }
        },

        template:
            "<entry-field v-model='value' :placeholder='placeholder' :clear-on-esc='false' />",
    }
}
