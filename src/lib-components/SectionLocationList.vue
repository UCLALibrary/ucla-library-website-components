<template>
    <ul class="section-location-list">
        <block-location-list-item
            v-for="item in items"
            :key="item.to"
            :image="item.image"
            :locationType="item.locationType"
            :title="item.title"
            :to="item.to"
            :affiliateLibraryUrl="item.affiliateLibraryUrl"
            :day="item.day"
            :hour="item.hour"
            :address="item.address"
            :addressLink="item.addressLink"
            :amenities="item.amenities"
            :reserveSeat="item.reserveSeat"
            :isUclaLibrary="item.isUclaLibrary"
            class="block-location-list-item"
        />
    </ul>
</template>

<script>
import BlockLocationListItem from "@/lib-components/BlockLocationListItem.vue"

export default {
    name: "SectionLocationList",
    components: {
        BlockLocationListItem,
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
.section-location-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);

    max-width: $container-l-main + px;
    margin: 0 auto var(--space-3xl);
}
</style>
