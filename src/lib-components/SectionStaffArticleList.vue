<template>
    <section class="section-staff-article-list">
        <div class="container">
            <div
                v-if="sectionTitle"
                class="section-title"
                v-html="sectionTitle"
            />
            <ul class="block-staff-article-list">
                <block-staff-article-list
                    v-for="(item, index) in items"
                    :key="index"
                    :image="item.image"
                    :to="item.to"
                    :category="item.category"
                    :title="item.title"
                    :date="item.date"
                    :authors="item.authors"
                    :description="item.description"
                />
            </ul>
        </div>
    </section>
</template>

<script>
import BlockStaffArticleList from "@/lib-components/BlockStaffArticleList"

export default {
    name: "SectionStaffArticleList",
    components: { BlockStaffArticleList },
    props: {
        items: {
            //Array of BlockStaffArticleList objects [{image: image, to: to, category: category, title: title, date: date, authors: authors
            //description: description},...]
            type: Array,
            default: () => [],
        },
        sectionTitle: {
            type: String,
            default: "",
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.section-staff-article-list {
    --divider-color: var(--color-secondary-grey-02);
    max-width: 100%;
    margin: auto;

    .container {
        max-width: $container-l-main + px;
        margin: auto;
    }

    .section-title {
        @include step-3;
        line-height: $line-height--1;
        text-transform: capitalize;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-xl);
    }
    .block-staff-article-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        .block-staff-article-item {
            border-bottom: 2px dotted var(--divider-color);

            &:last-child {
                border-bottom: 0;
                padding: 0;
                margin: 0;
            }
        }

        @for $i from 1 through 30 {
            ::v-deep .block-staff-article-item:nth-child(#{$i}) .molecule {
                left: calc(random(500) * -1) + px;
            }
        }
    }

    @media (min-width: 1025px) and (max-width: 1300px) {
        padding: 0 var(--unit-gutter);
    }

    @media #{$medium} {
        margin-left: var(--unit-gutter);
        margin-right: var(--unit-gutter);
    }
}
</style>
