<template>
    <section class="section-block-generic-list">
        <ul class="block-generic-list">
            <block-generic-list
                v-for="(item, index) in items"
                sectionTitle="Academic Librarian Jobs"
                :key="index"
                :title="item.title"
                :text="item.summary"
                :jobType="item.jobType"
                :jobRequisitionNumber="item.jobRequisitionNumber"
                :jobPostingURL="item.jobPostingURL"
                :department="item.department"
                :associatedLocations="item.associatedLocations"
            />
        </ul>
    </section>
</template>

<script>
import BlockGenericList from "@/lib-components/BlockGenericList"

export default {
    name: "SectionGenericList",
    components: { BlockGenericList },
    props: {
        items: {
            // Array of BlockGenericList objects
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-block-generic-list {
    .block-generic-list {
        border-bottom: 2px dotted var(--color-secondary-grey-02);
        padding: var(--space-2xl) 0;
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }
    }
}
</style>
