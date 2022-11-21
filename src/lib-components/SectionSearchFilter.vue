<template>
    <div class="section-search-filter">
        <block-search-filter
            v-for="(filter, index) in filteredFilters"
            :title="filter.title"
            :filterType="filter.filterType"
            :key="`filter-${index}`"
            @removeBlockFilter="closeBlockFilter(index)"
        />
    </div>
</template>

<script>
import BlockSearchFilter from "ucla-library-website-components/src/lib-components/BlockSearchFilter"
export default {
    name: "SectionSearchFilter",
    data() {
        return {
            filteredFilters: this.filters,
        }
    },
    components: {
        BlockSearchFilter,
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
.section-search-filter {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
}
</style>
