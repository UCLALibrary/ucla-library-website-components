<script
  setup
  lang="ts"
>
import type { PropType } from 'vue'

// TYPESCRIPT
import type { BlockStaffListItemType } from '@/types/types'

// COMPONENTS
import BlockStaffList from '@/lib-components/BlockStaffList.vue'

const { items } = defineProps({
  items: {
    type: Array as PropType<BlockStaffListItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <div>
    <ul class="section-staff-list">
      <BlockStaffList
        v-for="item in items"
        :key="`ucla-staff-${item.to}`"
        :image="item.image"
        :to="item.to"
        :staff-name="item.staffName"
        :alternative-full-name="item.alternativeName"
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
  </div>
</template>

<style
  lang="scss"
  scoped
>
.section-staff-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  max-width: $container-l-main + px;
  margin: 0 auto var(--space-2xl);
}
</style>
