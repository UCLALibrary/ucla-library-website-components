<template>
    <ul class="section-staff-subject-librarian">
        <block-staff-subject-librarian
            v-for="item in items"
            :key="item.to"
            :subject-area="item.subjectArea"
            :staff-name="item.staffName"
            :to="item.to"
            :alternativeName="item.alternativeName"
            :language="item.language"
            :job-title="item.jobTitle"
            :departments="item.departments"
            :locations="item.locations"
            :email="item.email"
            :phone="item.phone"
            :consultation="item.consultation"
            class="block-staff-subject-librarian"
        />
        <divider-general class="divider-general" />
    </ul>
</template>

<script>
import BlockStaffSubjectLibrarian from "@/lib-components/BlockStaffSubjectLibrarian.vue"

export default {
    name: "SectionStaffList",
    components: {
        BlockStaffSubjectLibrarian,
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
.section-staff-subject-librarian {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);

    max-width: $container-l-main + px;
    margin: 0 auto var(--space-3xl);
}
</style>
