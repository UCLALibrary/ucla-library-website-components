<template>
    <div>
        <!-- <block-staff-subject-librarian
                v-for="item in items"
                :key="item.to"
                :subject-area="item.subjectArea"
                :staff-name="item.staffName"
                :to="item.to"
                :alternativeFullName="item.alternativeFullName"
                :language="item.language"
                :job-title="item.jobTitle"
                :departments="item.departments"
                :locations="item.locations"
                :email="item.email"
                :phone="item.phone"
                :consultation="item.consultation"
                class="section-staff-subject-librarian"
            /> -->
        <table>
        <tbody>
            <tr>
                <th>Academic Department</th>
                <th>Name</th>
                <th>Contact Information</th>
            </tr>

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
                class="subject-librarian-item"
            />
        </tbody>
    </table>
    </div>
</template>

<script>
import BlockStaffSubjectLibrarian from "@/lib-components/BlockStaffSubjectLibrarian.vue"

export default {
    name: "SectionStaffSubjectLibrarian",
    components: {
        BlockStaffSubjectLibrarian,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        columnTitles: {
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

    border-bottom: 2px dotted var(--color-secondary-grey-02);

    .subject-librarian-item {
        background-color: pink;
        border-bottom: 2px dotted var(--color-secondary-grey-02);
    }
}
</style>
