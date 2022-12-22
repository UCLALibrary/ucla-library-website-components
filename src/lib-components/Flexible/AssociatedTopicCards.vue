<template>
    <section-cards-with-illustrations
        v-if="block && block.associatedTopicsFlexiblePageBlock"
        :items="parseditems"
        :sectionTitle="block.sectionTitle"
        :sectionSummary="block.sectionSummary"
        :is-horizontal="false"
        class="associated-topic-cards"
    />
</template>

<script>
import SectionCardsWithIllustrations from "@/lib-components/SectionCardsWithIllustrations.vue"
import stripMeapFromURI from "@/mixins/stripMeapFromURI"

export default {
    name: "FlexibleAssociatedTopicCards",
    components: {
        SectionCardsWithIllustrations,
    },
    mixins: [stripMeapFromURI],
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parseditems() {
            return this.block.associatedTopicsFlexiblePageBlock[0].topics.map(
                (obj) => {
                    return {
                        ...obj,
                        to: obj.externalResourceUrl
                            ? obj.externalResourceUrl
                            : `/${this.stripMeapFromURI(obj.uri)}`,
                    }
                }
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.associated-topic-cards {
}
</style>
