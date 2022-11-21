<template>
    <section class="section-block-generic-list">
        <div class="container">
            <ul class="block-generic-list">
                <block-generic-list
                    v-for="(item, index) in items"
                    sectionTitle="Academic Librarian Jobs"
                    :key="index"
                    :title="item.title"
                    :text="item.text"
                    :jobType="item.jobType[0].title"
                    :jobRequisitionNumber="jobRequisitionNumber"
                    :jobPostingURL="jobPostingURL"
                    :department="department"
                    :associatedLocations="associatedLocations"
                />
            </ul>
        </div>
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
}
</style>
