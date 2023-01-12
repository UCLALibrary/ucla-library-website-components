<template>
        <table>
            <thead  class="testy">
                <tr>
                    <th style="background-color: green" class="column-headers">Academic Department</th>
                    <th>Name</th>
                    <th>Contact Information</th>
                </tr>

                <!-- <tr v-for="header in tableHeaders"
                    :key="item.to">
                    <th>{{ header}}</th>
                </tr> -->
            </thead>

            <tbody>
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

    border-bottom: 2px dotted var(--color-secondary-grey-02);

    .testy {
        background-color: powderblue;
    }
    table {
        background-color: reset;
        }
    th {
        background-color: #d7d9f2;
    }
    tr {
        th
        .column-header {
            background-color: pink;
        }
    }
    th {
        border: 1px solid green;
        padding: 10px;
    }
    tr {
        background-color: blueviolet;
        .subject-librarian-item {
            border: 4px solid red;
            background-color: yellow;
            border-bottom: 2px dotted var(--color-secondary-grey-02);
        }
    }
}
</style>
