<script lang="ts" setup>
import type { PropType } from 'vue'
import BlockGenericList from "@/lib-components/BlockGenericList.vue"
import type { SectionGenericListItemType } from '@/types/types'

const { items } = defineProps({
    items: {
        type: Array as PropType<SectionGenericListItemType[]>,
        default: () => [],
    },
})
</script>
<template>
    <section class="section-block-generic-list">
        <ul class="block-generic-list">
            <BlockGenericList v-for="(item, index) in items" sectionTitle="Academic Librarian Jobs"
                :key="`${item.title}-${index}`" :title="item.title" :alternativeFullName="item.alternativeFullName"
                :language="item.language" :text="item.summary" :jobRequisitionNumber="item.jobRequisitionNumber"
                :jobPostingURL="item.jobPostingURL" :departments="item.department" :payRate="item.payRate"
                :associatedLocations="item.associatedLocations" />
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.section-block-generic-list {
    .block-generic-list {
        border-bottom: 2px dotted var(--color-secondary-grey-02);
        padding: var(--space-xl) 0;

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