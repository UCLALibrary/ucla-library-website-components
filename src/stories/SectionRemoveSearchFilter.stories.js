import SectionRemoveSearchFilter from "@/lib-components/SectionRemoveSearchFilter"


export default {
    title: "SEARCH / Section Remove Search Filter",
    component: SectionRemoveSearchFilter,
}
const mockRework = [
    { name: "location", value:"Neque porro quisquam"},
    { name: "departments", value:"DIIT"},
    { name: "departments", value:"Digital Library Program"},
    { name: "departments", value:"Arts Library"},
    { name: "departments", value:"Special Collections"},
    { name: "departments,", value:"CLICC"}
]


const mock = [
    { name: "location", value:"Neque porro quisquam"},
    { name: "departments", value:"DIIT"},
    { name: "departments", value:"Digital Library Program"},
    { name: "departments", value:"Arts Library"},
    { name: "departments", value:"Special Collections"},
    { name: "departments,", value:"CLICC"}
]
const mockBigger = [
    {name:"location", value: "Neque porro quisquam"},
    {name: "departments", value:"DIIT"},
    {name: "departments", value:"Digital Library Program"},
    {name: "departments", value:"Arts Library"},
    {name: "departments", value:"Special Collections"},
    {name: "departments", value:"CLICC"},
    {name:"subjectLibrarian.keyword", value:"Subject Librarian"},
    {name:"areas", value:"English"}, 
    {name:"areas", value:"History"}, 
    {name:"areas", value:"Geography"}, 
    {name:"areas", value:"Science"}, 
    {name:"areas", value:"Math"},
]

// Variations of stories below
export function Default () {
  return {
    data() {
        return { mock }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mock"
        />
    `,
  }
}
export function WithMoreFilters() {
  return {
    data() {
        return { mockBigger }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mockBigger"
        />
    `,
  }
}