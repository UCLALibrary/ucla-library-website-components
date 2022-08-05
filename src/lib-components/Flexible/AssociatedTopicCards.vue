<template>
    <section-cards-with-illustrations
        v-if="block && block.associatedTopicsFlexiblePageBlock"
        :items="block.associatedTopicsFlexiblePageBlock[0].topics"
        :title="block.sectionTitle"
        :text="block.sectionText"
        :is-horizontal="false"
        class="associated-topic-cards"
    />
</template>

<script>
import SectionCardsWithIllustrations from "@/lib-components/SectionCardsWithIllustrations.vue"

export default {
    name: "FlexibleAssociatedTopicCards",
    components: {
        SectionCardsWithIllustrations,
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.associated-topic-cards {
}
</style>
