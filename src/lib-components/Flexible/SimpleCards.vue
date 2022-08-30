<template>
    <div class="flexible-simple-cards">
        <simple-cards
            :section-title="block.sectionTitle"
            :section-summary="block.sectionSummary"
            :items="parsedContent"
        />
    </div>
</template>

<script>
import SimpleCards from "@/lib-components/SimpleCards.vue"

export default {
    name: "FlexibleSimpleCards",
    components: { SimpleCards },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            return this.block.cards.map((card) => {
                console.log(card)
                if (card.typeHandle === "internalResource") {
                    return {
                        title: card.contentLink[0].title,
                        text: card.contentLink[0].summary,
                        to: card.contentLink[0].externalResourceUrl
                            ? card.contentLink[0].externalResourceUrl
                            : `/${card.contentLink[0].uri}`,
                    }
                } else if (card.typeHandle === "externalResource") {
                    return {
                        title: card.title,
                        text: card.summary,
                        to: card.externalLink,
                    }
                } else {
                    return {
                        ...card,
                    }
                }
            })
        },
    },
}
</script>
