<template>
    <div class="grid-gallery">
        <h4 class="section-summary" v-html="sectionSummary" />
        <ul class="cards">
            <li
                v-for="card in parsedItems"
                :key="card.to"
                :class="card.classes"
            >
                <responsive-image
                    :image="card.image"
                    :aspect-ratio="parsedAspectRatio"
                    :class="card.imgclasses"
                    object-fit="cover"
                />
                <h5
                    v-if="
                        card.headlineText &&
                        ((card.featured && !card.snippet) || !card.featured)
                    "
                    class="title"
                >
                    <smart-link
                        :to="card.to"
                        linkTarget="_blank"
                        class="link"
                        v-html="card.headlineText"
                    >
                        {{ card.headlineText }}
                    </smart-link>
                </h5>
                <div
                    v-if="!card.featured && card.snippet"
                    class="snippet"
                    v-html="card.snippet"
                />
                <div v-if="card.featured && card.snippet" class="section-text">
                    <div class="text">
                        <h5 v-if="card.headlineText" class="title">
                            <smart-link
                                :to="card.to"
                                linkTarget="_blank"
                                class="link"
                            >
                                {{ card.headlineText }}
                            </smart-link>
                        </h5>
                        <div class="snippet" v-html="card.snippet" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ResponsiveImage from "@/lib-components/ResponsiveImage.vue"
import SmartLink from "@/lib-components/SmartLink.vue"

export default {
    name: "GridGallery",
    components: {
        ResponsiveImage,
        SmartLink,
    },
    props: {
        //  [{ image : Object, date: String, headlineText: String, to: URL,  featured: boolean, snippet:String }]
        sectionSummary: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedItems() {
            return this.items.map((obj) => {
                let objClass = "card "
                if (obj.featured && obj.snippet) {
                    objClass = objClass + "card-featured"
                } else if (obj.featured && !obj.snippet) {
                    objClass = objClass + "card-4up"
                } else {
                    objClass = objClass + "card-small"
                }
                return {
                    ...obj,
                    classes: objClass,
                }
            })
        },
        parsedAspectRatio() {
            return this.featured ? 100 : 60
        },
    },
}
</script>

<style lang="scss" scoped>
.grid-gallery {
    max-width: $container-l-main + px;
    padding: 0;
    margin: 0;
    background-color: var(--color-white);
    position: relative;

    .section-summary {
        @include step-1;
        color: var(--color-black);
        position: sticky;
        top: 48px;
        background-color: var(--color-white);
        z-index: 20;
        padding-bottom: 16px;
        padding-top: 10px;
        // margin-top: var(--space-xl);
    }
    .cards {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-flow: dense;
        margin-top: var(--space-m);
    }
    .card {
        margin-bottom: var(--space-l);
        list-style: none;
        padding: 0;
        position: relative;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .card-small {
        grid-column: span 2;
    }

    .card-featured {
        grid-column: span 6;
        position: relative;

        display: grid;
        grid-template-columns: 1fr;
        gap: 0;
        grid-column: span 6;

        .two-librarians {
            ::v-deep {
                .media {
                    object-position: 50% top;
                }
            }
        }
    }

    .card-4up {
        grid-column: span 4;
    }

    .title {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin: 16px 0 0 0;
        line-height: $line-height--1;
    }
    .link::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .snippet {
        @include step-0;
    }

    // Hovers
    @media #{$has-hover} {
        .title a:hover {
            @include link-hover;
        }
    }

    @media #{$medium} {
        padding: 0 64px;
        .card {
            grid-column: span 3;
        }
        .card-featured {
            grid-template-columns: 1fr;
            gap: 0;
            grid-column: span 6;

            .text {
                margin: 16px 0 0;
            }
        }
        .card-4up {
            grid-column: span 6;
        }
        .section-summary {
            padding-top: 20px;
        }
        .section-text {
            margin-left: 0;
        }
    }

    @media #{$small} {
        padding: 0 $whitespace-s-sides + px;

        .section-summary {
            top: 74px;
        }
        .card {
            grid-column: span 6;
        }
    }

    @media (min-width: 400px) {
        .section-summary {
            top: 60px;
            padding-top: 16px;
        }
    }

    @media (min-width: 860px) {
        .section-summary {
            top: 40px;
        }
    }
}
</style>
