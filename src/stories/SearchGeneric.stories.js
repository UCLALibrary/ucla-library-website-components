import SearchGeneric from "@/lib-components/SearchGeneric"

// Storybook default settings
export default {
    title: "SEARCH / Generic",
    component: SearchGeneric,
}

const items = [
    {
        name: "Neque porro quisquam",
    },
    {
        name: "Qui dolorem ipsum quia dolor",
    },
    {
        name: "Consectetur, adipisci velit.",
    },
    {
        name: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        name: "Excepteur sint occaecat cupidatat non proident",
    },
    {
        name: "Vel illum qui dolorem eum fugiat",
    },
    {
        name: "Quis nostrum exercitationem ullam",
    },
    {
        name: "Quis autem vel eum iure reprehenderit",
    },
    {
        name: "Excepteur sint occaecat cupidatat non proident1",
    },
    {
        name: "Vel illum qui dolorem eum fugiat1",
    },
    {
        name: "Quis nostrum exercitationem ullam1",
    },
    {
        name: "Quis autem vel eum iure reprehenderit1",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            routerQueryData: {
                queryText: "",
                queryFilters: {},
            },
            filters: [
                {
                    label: "Location",
                    esFieldName: "location",
                    inputType: "radio",
                    items: items,
                },
                {
                    label: "Department",
                    esFieldName: "departments.title.keyword",
                    inputType: "checkbox",
                    items: items,
                },
            ],
            /* views: [
                {
                    slug: "list",
                    iconName: "icon-list",
                    title: "List",
                },
                {
                    slug: "card",
                    iconName: "icon-card",
                    title: "Card",
                },
                {
                    slug: "calendar",
                    iconName: "icon-calendar",
                    title: "Calendar",
                },
            ],*/
        }
    },
    components: { SearchGeneric },
    template: `
        <search-generic
            :filters="filters"
            :search-generic-query="routerQueryData"
        />
    `,
})
export const RouterQuery = () => ({
    data() {
        return {
            routerQueryData: {
                queryText: "suzy lee",
                queryFilters: {
                    "subjectLibrarian.keyword": "",
                    "departments.title.keyword": ["Neque porro quisquam"],
                },
            },
            filters: [
                {
                    label: "Location",
                    esFieldName: "location",
                    inputType: "radio",
                    items: items,
                },
                {
                    label: "Department",
                    esFieldName: "departments.title.keyword",
                    inputType: "checkbox",
                    items: items,
                },
            ],
            /* views: [
                {
                    slug: "list",
                    iconName: "icon-list",
                    title: "List",
                },
                {
                    slug: "card",
                    iconName: "icon-card",
                    title: "Card",
                },
                {
                    slug: "calendar",
                    iconName: "icon-calendar",
                    title: "Calendar",
                },
            ],*/
        }
    },
    components: { SearchGeneric },
    template: `
        <search-generic
            :filters="filters"
            :search-generic-query="routerQueryData"
        />
    `,
})

// export const Default = () => ({
//     data() {
//         return {
//             filters: [
//                 {
//                     label: "Location",
//                     searchField: "location_tesim",
//                     isMultiValuedField: true,
//                     filterItems: items,
//                 },
//                 {
//                     label: "Department",
//                     searchField: "date_range_tesim",
//                     isMultiValuedField: false,
//                     filterItems: items,
//                 },
//                 {
//                     label: "Type",
//                     searchField: "type_tesim",
//                     isMultiValuedField: true,
//                     filterItems: items,
//                 },
//             ],
//         }
//     },
//     template: `
//         <search-generic
//             searchType="help"
//             :filters="filters"
//         />
//     `,
// })

// export const OneFilter = () => ({
//     data() {
//         return {
//             filters: [
//                 {
//                     label: "location",
//                     searchField: "location_tesim",
//                     isMultiValuedField: false,
//                     filterItems: items,
//                 },
//             ],
//         }
//     },
//     template: `
//         <search-generic
//             searchType="help"
//             :filters="filters"
//         />
//     `,
// })

// export const TwoFilterWithViews = () => ({
//     data() {
//         return {
//             filters: [
//                 {
//                     label: "Location",
//                     searchField: "location_ssi",
//                     isMultiValuedField: true,
//                     filterItems: items,
//                 },
//                 {
//                     label: "Date Range",
//                     searchField: "date_range_ssi",
//                     isMultiValuedField: false,
//                     filterItems: items,
//                 },
//             ],
//             viewModes: views,
//         }
//     },
//     template: `
//         <search-generic
//             :filters="filters"
//             :view-modes="viewModes"
//         />
//     `,
// })
//
// export const WithViewModes = () => ({
//     data() {
//         return {
//             filters: [
//                 {
//                     label: "Location",
//                     searchField: "location_ssi",
//                     isMultiValuedField: false,
//                     filterItems: items,
//                 },
//             ],
//             viewModes: views,
//         }
//     },
//     template: `
//         <search-generic
//             searchType="help"
//             :filters="filters"
//             :view-modes="viewModes"
//         />
//     `,
// })
