<template>
    <section :class="classes" :data-cy="cypressSelector">
        <div v-if="sectionTitle || sectionSummary" class="section-header">
            <h2
                v-if="sectionTitle"
                id="cards-with-illustration-title"
                class="section-title"
                v-html="sectionTitle"
            />
            <div
                v-if="sectionSummary"
                class="section-summary"
                v-html="sectionSummary"
            />
        </div>

        <ul class="cards">
            <block-card-with-illustration
                v-for="item in items"
                :key="item.to"
                class="card"
                :icon-name="item.iconName"
                :to="item.to"
                :title="item.title"
                :text="item.text"
                :category="item.category"
                :is-horizontal="isHorizontal"
            />

            <smart-link v-if="to" class="card card-more" :to="to">
                <button-more
                    id="card-more-button"
                    class="button"
                    :text="buttonText"
                    aria-labelledby="card-more-button cards-with-illustration-title"
                />
            </smart-link>
        </ul>
    </section>
</template>

<script>
import _kebabCase from "lodash/kebabCase"
import BlockCardWithIllustration from "@/lib-components/BlockCardWithIllustration.vue"
import ButtonMore from "@/lib-components/ButtonMore.vue"

export default {
    name: "SectionCardsWithIllustrations",
    components: {
        BlockCardWithIllustration,
        ButtonMore,
    },
    props: {
        sectionTitle: {
            type: String,
            default: "",
        },
        sectionSummary: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "section-cards-with-illustrations",
                { "is-horizontal": this.isHorizontal },
            ]
        },
        cypressSelector() {
            return `section-cards-with-illustrations-${
                _kebabCase(this.title) || "untitled"
            }`
        },
    },
}
</script>

<style lang="scss" scoped>
.section-cards-with-illustrations {
    max-width: $container-l-main + px;

    .section-header {
        margin-bottom: var(--space-xl);

        .section-title {
            @include step-3;
            color: var(--color-primary-blue-03);
            margin-bottom: var(--space-m);
        }
        .section-summary {
            @include step-0;
            color: var(--color-black);
        }
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 32px;
    }

    // Variations
    // Vertical
    &:not(&.is-horizontal) {
        .cards {
            flex-direction: row;
        }

        .card-more {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;

            border: 2px solid var(--color-primary-blue-01);
            width: calc((100% / 3) - 22px);
            border-radius: var(--rounded-slightly-all);

            transition-property: box-shadow, transform;
            @include animate-normal;
        }

        // Hovers
        .card-more {
            @media #{$has-hover} {
                &:hover {
                    @include card-vertical-hover;
                    cursor: pointer;
                }
            }
        }

        // Breakpoints
        @media #{$medium} {
            .cards {
                gap: var(--space-m);
                overflow-x: auto;
                overflow-y: visible;
                flex-wrap: nowrap;
                .card,
                .card-more {
                    width: 280px;
                    flex-shrink: 0;
                }
            }
        }
    }

    // Horizontal
    &.is-horizontal {
        .cards {
            flex-direction: column;
            gap: var(--space-m);
        }
    }
}
</style>
