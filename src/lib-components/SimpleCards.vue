<template>
    <div class="simple-cards">
        <div class="section-header">
            <h2
                v-if="sectionTitle"
                class="section-title"
                v-html="sectionTitle"
            />
            <div
                v-if="sectionSummary"
                class="section-summary"
                v-html="sectionSummary"
            />
        </div>

        <ul class="simple-cards-list">
            <block-simple-card
                v-for="(item, index) in parsedContent"
                :key="`SimpleCardsKey${index}`"
                :class="item.classes"
                :to="item.to"
                :title="item.title"
                :text="item.text"
            />
        </ul>
    </div>
</template>

<script>
import BlockSimpleCard from "@/lib-components/BlockSimpleCard"

export default {
    name: "SimpleCards",
    components: { BlockSimpleCard },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        sectionTitle: {
            type: String,
            default: "",
        },
        sectionSummary: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedContent() {
            let output = ["card", "card-small"]
            switch (this.items.length) {
                case 1:
                    output = ["card"]
                    break
                case 2:
                case 4:
                    output = ["card", "card-large"]
                    break
                case 5:
                    output = ["card", "card-five"]
                    break
            }

            return this.items.map((obj) => {
                return {
                    ...obj,
                    classes: output,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.simple-cards {
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
    .simple-cards-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: stretch;
        gap: 16px;
    }

    .card-large {
        width: calc((100% - 16px) / 2);
    }
    .card-small {
        width: calc((100% / 3) - 11px);
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: calc((100% - 16px) / 2);
        }
        &:nth-last-child(-n + 3) {
            width: calc((100% / 3) - 11px);
        }
    }
    // Breakpoints
    @media #{$medium} {
        .card-small {
            width: calc((100% - 16px) / 2);
        }
        .card-five {
            width: calc((100% - 16px) / 2);
            &:nth-child(-n + 2) {
                width: calc((100% - 16px) / 2);
            }
            &:nth-last-child(-n + 3) {
                width: calc((100% - 16px) / 2);
            }
            &:last-child {
                flex-grow: 1;
                width: 100%;
            }
        }
    }
    @media #{$small} {
        display: flex;
        flex-direction: column;
        .card,
        .card.card-five {
            width: 100%;
        }
    }
}
</style>
