<template>
    <div class="section-search-filter">
        <block-search-filter
            v-for="(filter, index) in filters"
            :title="filter.title"
            filterType="filter.filterType"
            :key="`filter-${index}`"
        />
    </div>
</template>

<script>
import BlockSearchFilter from "ucla-library-website-components/src/lib-components/BlockSearchFilter"
export default {
    name: "SectionSearchFilter",
    data() {
        return {}
    },
    components: {
        BlockSearchFilter,
    },
    props: {
        filters: {
            type: String,
            default: "",
        },
    },
    methods: {},
}
</script>

<style scoped lang="scss">
.section-search-filter {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>
