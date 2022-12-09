<template>
    <block-show-hide :disable="items.length <= nShown">
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
    </block-show-hide>
</template>

<script>
import BlockShowHide from "@/lib-components/BlockShowHide.vue"
import BlockLocationListItem from "@/lib-components/BlockLocationListItem.vue"

export default {
    name: "SectionLocationList",
    components: {
        //BlockShowHide,
        BlockLocationListItem,
    },
    data() {
        return {
            collapsed: true,
        }
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        // nShown: {
        //     type: Number,
        //     default: 10,
        // },
    },
}
</script>

<style lang="scss" scoped>
.section-location-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    max-width: $container-l-main + px;
    margin: 0 auto var(--space-3xl);
}
</style>
