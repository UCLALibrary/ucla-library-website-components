import SearchField from "@/lib-components/SearchField"

export default {
    title: "Funkhaus / SearchField",
    component: SearchField,
}

const template = `
<div>
    <search-field
        v-bind="props"
        @submit="handleSubmit" 
    />

    <i>This string is not part of the component, but is used to demonstrate the functionality of the <strong>SearchField</strong> component.</i>
    <br>You submitted: {{ searchValue }}
</div>
`

const methods = {
    handleSubmit(value) {
        this.searchValue = value
    },
}

// Variations of stories below
export function Default() {
    return {
        components: { SearchField },
        data() {
            return {
                props: { placeholder: "Search Library" },
                searchValue: "",
            }
        },
        methods,
        template,
    }
}

export function WithoutClearIcon() {
    return {
        components: { SearchField },
        data() {
            return {
                props: { placeholder: "Search Archives", clearIcon: false },
                searchValue: "",
            }
        },
        methods,
        template,
    }
}

export function WithoutClearOnEsc() {
    return {
        components: { SearchField },
        data() {
            return {
                props: { placeholder: "Search Catalog", clearOnEsc: false },
                searchValue: "",
            }
        },
        methods,
        template,
    }
}
