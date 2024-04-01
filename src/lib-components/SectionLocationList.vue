<script lang="ts" setup>
import { ref, defineProps } from "vue"
import BlockLocationListItem from "@/lib-components/BlockLocationListItem.vue"

const { items } = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
})
const collapsed = ref(true)

// export default {
//     name: "SectionLocationList",
//     components: {
//         BlockLocationListItem,
//     },
//     data() {
//         return {
//             collapsed: true,
//         }
//     },
//     props: {
//         items: {
//             type: Array,
//             default: () => [],
//         },
//     },
// }
</script>

<template>
    <!-- <block-show-hide :disable="items.length <= nShown"> -->
    <ul class="section-location-list">
        <block-location-list-item v-for="item in items" :key="item.to" :image="item.image"
            :locationType="item.locationType" :title="item.title" :to="item.to"
            :affiliateLibraryUrl="item.affiliateLibraryUrl" :address="item.address" :addressLink="item.addressLink"
            :amenities="item.amenities" :reserveSeat="item.reserveSeat" :isUclaLibrary="item.isUclaLibrary"
            :libcal-location-id-for-hours="item.libcalLocationIdForHours" class="block-location-list-item" />
    </ul>
    <!-- </block-show-hide> -->
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