<template>
    <ul class="section-staff-list">
        <block-staff-list
            v-for="item in items"
            :key="item.to"
            :image="item.image"
            :to="item.to"
            :staff-name="item.staffName"
            :alternativeFullName="item.alternativeFullName"
            :language="item.language"
            :job-title="item.jobTitle"
            :locations="item.locations"
            :email="item.email"
            :phone="item.phone"
            :departments="item.departments"
            :consultation="item.consultation"
            class="block-staff-list-item"
        />
    </ul>
</template>

<script>
import BlockStaffList from "@/lib-components/BlockStaffList.vue"

export default {
    name: "SectionStaffList",
    components: {
        BlockStaffList,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-staff-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);

    max-width: $container-l-main + px;
    margin: 0 auto var(--space-2xl);
}
</style>
