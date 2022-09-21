<template>
    <div class="impact-number-cards">
        <h2 class="visually-hidden">Resources</h2>
        <div class="section-header">
            <h3
                v-if="block.sectionTitle"
                class="section-title"
                v-html="block.sectionTitle"
            />
            <div
                v-if="block.sectionSummary"
                class="section-summary"
                v-html="block.sectionSummary"
            />
        </div>
        <ul class="impact-number-cards-list">
            <impact-number-card
                v-for="(item, index) in block.impactNumberCards"
                :key="`impactNumberCards${index}`"
                :title="item.title"
                :text="item.text"
                :impact-number="item.impactNumber"
                class="flexible-impact-number-card"
            />
        </ul>
    </div>
</template>

<script>
import ImpactNumberCard from "@/lib-components/ImpactNumberCard.vue"

export default {
    name: "FlexibleImpactNumberCards",
    components: { ImpactNumberCard },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
}
</script>

<style lang="scss" scoped>
.impact-number-cards {
    max-width: $container-l-main + px;

    .section-header {
        margin-bottom: var(--space-xl);
    }
    .section-title {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
    .section-summary {
        @include step-0;
        color: var(--color-black);

        ::v-deep p {
            margin: 0;
        }
    }
    .impact-number-cards-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: stretch;
        gap: 16px;
    }

    @media #{$small} {
        .impact-number-cards-list {
            display: flex;
            flex-direction: column;
            .flexible-impact-number-card {
                width: 100%;
            }
        }
    }
}
</style>
