<template>
    <div class="section-remove-search-filter">
        <block-remove-search-filter
            v-for="(filter, index) in filteredFilters"
            :title="filter.title"
            :filterType="filter.filterType"
            :key="`filter-${index}`"
            @removeBlockFilter="closeBlockFilter(index)"
        />
    </div>
</template>

<script>
import BlockRemoveSearchFilter from "@/lib-components/BlockRemoveSearchFilter"
export default {
    name: "SectionRemoveSearchFilter",
    data() {
        return {
            filteredFilters: this.filters,
        }
    },
    components: {
        BlockRemoveSearchFilter,
    },
    props: {
        filters: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        closeBlockFilter(indexVal) {
            this.filteredFilters = this.filteredFilters.filter((el, index) => {
                return index != indexVal
            })
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
