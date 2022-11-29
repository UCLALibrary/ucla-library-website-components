<template>
    <li class="block-staff-article-item">
        <responsive-image
            v-if="imageExists"
            :image="image"
            :aspect-ratio="imageAspectRatio"
            :object-fit="cover"
            class="image"
        />
        <div v-else class="molecule-no-image">
            <molecule-placeholder class="molecule" aria-hidden="true" />
        </div>
        <div class="meta">
            <div v-if="category" class="category" v-html="category" />

            <smart-link class="title" :to="to" v-html="title" />

            <div class="byline" v-if="authors || date">
                <div
                    v-for="author in authors"
                    :key="author.id"
                    class="author"
                    v-html="author.title"
                />
                <div v-if="date" class="date" v-html="parsedDate" />
            </div>

            <!-- TODO strip html tags coming out of WYSIWYG -->
            <div v-if="description" class="description" v-html="description" />
        </div>
    </li>
</template>

<script>
import format from "date-fns/format"
import ResponsiveImage from "@/lib-components/ResponsiveImage"
import MoleculePlaceholder from "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"

export default {
    name: "BlockStaffArticleList",
    components: {
        ResponsiveImage,
        MoleculePlaceholder,
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        authors: {
            type: Array,
            default: () => [],
        },
        date: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        imageAspectRatio: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        parsedDate() {
            return format(new Date(this.date), "MMMM d, Y")
        },
        imageExists() {
            return this.image && Object.keys(this.image) != 0 ? true : false
        },
    },
}
</script>

<style lang="scss" scoped>
.block-staff-article-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    width: 100%;

    margin-bottom: var(--space-xl);
    padding-bottom: var(--space-xl);

    .image {
        width: 50%;
        margin-right: var(--space-xl);
    }

    .molecule-no-image {
        width: 50%;
        height: 272px;
        margin-right: var(--space-xl);
        background: var(--gradient-01);
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;

        .molecule {
            flex-shrink: 0;
            position: absolute;
        }
    }

    .meta {
        width: calc(50% - var(--space-xl));
        height: 272px;
    }

    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-bottom: var(--space-s);
    }
    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-s);
        @include truncate(3);
    }

    .byline {
        @include step-0;
        margin: var(--space-s) 0;
        color: var(--color-secondary-grey-04);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    // .author {
    //     &:after {
    //         content: ",";
    //         padding-right: 5px;
    //     }
    //     &:nth-last-child(2):after {
    //         content: "";
    //     }
    // }
    // .date:not(:only-child) {
    //     padding-left: 20px;
    // }
    .description {
        @include step-0;
        color: var(--color-black);
        @include truncate(4);
    }
    ::v-deep .image {
        height: 272px;
        .media {
            object-fit: cover;
        }
    }
    // Hovers
    @media #{$has-hover} {
        .title:hover {
            @include link-hover;
        }
    }
}

// Breakpoints
@media #{$small} {
    .block-staff-article-item {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .image,
        .molecule-no-image {
            width: 100%;
            margin-right: 0;
            margin-bottom: var(--space-l);
        }

        .meta {
            width: 100%;
            height: 100%;

            > *:last-child {
                padding-bottom: 0;
            }
        }
    }
}
</style>
