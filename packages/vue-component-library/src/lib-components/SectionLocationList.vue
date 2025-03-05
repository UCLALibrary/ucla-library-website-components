<script lang="ts" setup>
import type { PropType } from 'vue'
import type { AmenitiesType, MediaItemType } from '@/types/types'
import BlockLocationListItem from '@/lib-components/BlockLocationListItem.vue'

// TYPES
interface LocationItemType {
  image: MediaItemType
  locationType: string
  title: string
  to: string
  affiliateLibraryUrl: string
  address: string
  addressLink: string
  amenities: AmenitiesType[]
  reserveSeat: string
  isUclaLibrary: boolean
  libcalLocationIdForHours: string
}

const { items } = defineProps({
  items: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
})
</script>

<template>
  <ul class="section-location-list">
    <BlockLocationListItem
      v-for="item in items" :key="item.to" :image="item.image" :location-type="item.locationType"
      :title="item.title" :to="item.to" :affiliate-library-url="item.affiliateLibraryUrl" :address="item.address"
      :address-link="item.addressLink" :amenities="item.amenities" :reserve-seat="item.reserveSeat"
      :is-ucla-library="item.isUclaLibrary" :libcal-location-id-for-hours="item.libcalLocationIdForHours"
      class="block-location-list-item"
    />
  </ul>
</template>

<style lang="scss" scoped>
.section-location-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  max-width: $container-l-main + px;
  margin: 0 auto var(--space-2xl);
}
</style>
