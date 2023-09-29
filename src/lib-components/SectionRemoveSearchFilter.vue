<template>
    <div class="section-remove-search-filter" v-show="hasFilters">
        <div
            v-for="(filter, index) in parsedFilters"
            :key="`filter-${Object.keys(filter)[0]}-${index}`"
        >
            <block-remove-search-filter
                :title="filter[Object.keys(filter)[0]]"
                :filterType="Object.keys(filter)[0]"
                @removeBlockFilter="
                    closeBlockFilter(
                        Object.keys(filter)[0],
                        filter[Object.keys(filter)[0]],
                        index
                    )
                "
            />
        </div>
    </div>
</template>

<script>
import BlockRemoveSearchFilter from "@/lib-components/BlockRemoveSearchFilter"
export default {
    name: "SectionRemoveSearchFilter",
    data() {
        return {
            filteredFilters: {},
        }
    },
    components: {
        BlockRemoveSearchFilter,
    },
    props: {
        filters: {
            type: Object,
            default: () => {},
        },
    },
    watch: {
        filters: {
            handler(newValue) {
                console.log("deep watch activated:" + JSON.stringify(newValue))
                this.filteredFilters = { ...newValue }
            },
            deep: true,
            immediate: true,
        },
    },

    computed: {
        hasFilters() {
            for (let property in this.filteredFilters) {
                if (
                    typeof this.filteredFilters[property] === "string" &&
                    this.filteredFilters[property] !== ""
                ) {
                    return true
                } else if (
                    Array.isArray(this.filteredFilters[property]) &&
                    this.filteredFilters[property].length > 0
                ) {
                    return true
                }
            }

            return false
        },
        parsedFilters() {
            let parseFilters = []
            for (let property in this.filteredFilters) {
                let obj = {}
                console.log("type of :" + typeof this.filteredFilters[property])
                if (
                    typeof this.filteredFilters[property] === "string" &&
                    this.filteredFilters[property] !== ""
                ) {
                    obj[property] =
                        {
                            past: "Include Past Events",
                            "subjectLibrarian.keyword": "Subject Librarian",
                        }[property] || this.filteredFilters[property]
                    console.log("what is in obj:" + obj[property])
                    parseFilters.push(obj)
                } else if (
                    Array.isArray(this.filteredFilters[property]) &&
                    this.filteredFilters[property].length > 0
                ) {
                    this.filteredFilters[property].forEach((item) => {
                        let obj = {}
                        obj[property] = item
                        parseFilters.push(obj)
                    })
                }
            }

            return parseFilters
        },
    },
    methods: {
        closeBlockFilter(esfieldName, label, indexVal) {
            if (
                typeof this.filteredFilters[esfieldName] === "string" &&
                this.filteredFilters[esfieldName] !== ""
            ) {
                this.filteredFilters[esfieldName] = ""
            } else if (
                Array.isArray(this.filteredFilters[esfieldName]) &&
                this.filteredFilters[esfieldName].length > 0
            ) {
                this.filteredFilters[esfieldName] = this.filteredFilters[
                    esfieldName
                ].filter((el, index) => {
                    return el !== label
                })
            }
            this.$emit("update:selected", this.filteredFilters)
            this.$emit("remove-selected")
        },
    },
}
</script>

<style scoped lang="scss">
.section-remove-search-filter {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
}
</style>
