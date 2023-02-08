<template>
    <table class="section-staff-subject-librarian">
        <caption>
            Subject Librarians
        </caption>
        <thead>
            <tr>
                <th v-for="(header, index) in tableHeaders" :key="index">
                    {{ header }}
                </th>
            </tr>
        </thead>

        <tbody>
            <block-staff-subject-librarian
                v-for="(item, index) in items"
                :key="`${index}-${item.subjectArea}`"
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
        tableHeaders: {
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

    caption {
        @include step-1;
        font-weight: 500;
        text-align: left;
        width: 100%;
        color: var(--color-primary-blue-05);
    }

    thead tr {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: var(--space-xl);

        width: 100%;
        color: var(--color-primary-blue-05);
        @include step-0;
        font-weight: normal;
        border-bottom: 2px dotted var(--color-secondary-grey-02);
        padding-bottom: 10px;
        th {
            display: flex;
            flex: 1 1 0px;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;

            font-weight: 500;
        }
    }

    .subject-librarian-item {
        border-bottom: 2px dotted var(--color-secondary-grey-02);
    }

    @media #{$small} {
        thead {
            height: 1px;
            width: 1px;
            position: absolute;
            overflow: hidden;
            top: -10px;
        }
    }
}
</style>
