<template>
    <div class="block-generic-list">
        <div class="meta">
            <div v-if="jobRequisitionNumber" class="category">
                JOB #{{ jobRequisitionNumber }}
            </div>
            <smart-link v-if="jobPostingURL" :to="jobPostingURL" class="title">
                {{ title }}
            </smart-link>
            <h3 v-else class="title-no-link">
                {{ title }}
            </h3>

            <div
                class="byline-group"
                v-if="department || associatedLocations || payRate"
            >
                <div v-if="department" class="schedule-item">
                    <div
                        v-for="(item, index) in department"
                        :key="index"
                        class="schedule-item"
                    >
                        {{ item.title }}
                    </div>
                    <div v-if="payRate" class="schedule-item">
                        {{ payRate }}
                    </div>
                </div>
            </div>

            <div v-if="associatedLocations" class="location-group">
                <div
                    class="location-link"
                    v-for="(location, index) in parsedLocations"
                    :key="`location-${index}`"
                >
                    <smart-link
                        v-if="location.uri"
                        :to="location.uri"
                        class="location-link"
                    >
                        <component :is="location.svg" class="location-svg" />
                        <span class="location">{{ location.title }}</span>
                    </smart-link>
                </div>
            </div>

            <rich-text v-if="text" :rich-text-content="text" />
        </div>
    </div>
</template>

<script>
import SmartLink from "@/lib-components/SmartLink.vue"
import RichText from "@/lib-components/RichText.vue"
import DividerGeneral from "@/lib-components/DividerGeneral.vue"

export default {
    name: "BlockGenericList",
    components: {
        SmartLink,
        RichText,
        DividerGeneral,
        SvgIconLocation: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location.svg"
            ).then((d) => d.default),
    },
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        jobType: {
            type: Array,
            default: () => [],
        },
        jobRequisitionNumber: {
            type: String,
            default: "",
        },
        jobPostingURL: {
            type: String,
            default: "",
        },
        department: {
            type: Array,
            default: () => [],
        },
        associatedLocations: {
            type: Array,
            default: () => [],
        },
        payRate: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedLocations() {
            return this.associatedLocations.map((obj) => {
                let svg = "svg-icon-location"
                return {
                    ...obj,
                    svg: svg,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.block-generic-list {
    background-color: var(--color-theme, var(--color-white));
    font-family: var(--font-primary);
    position: relative;
    display: flex;
    flex-direction: column;

    .section-title {
        margin-bottom: var(--space-m);
        @include step-3;
        color: var(--color-primary-blue-03);
    }

    .meta {
        z-index: 10;
        width: 100%;
    }
    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-bottom: var(--space-s);
    }
    .title {
        @include card-clickable-area;
        display: block;
    }
    .title,
    .title-no-link {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin: var(--space-s) 0;
        line-height: $line-height--1;
    }

    .byline-group {
        display: flex;
        flex-direction: column;
        @include step-0;
        color: var(--color-secondary-grey-05);
        margin: var(--space-s) 0;
    }

    .text {
        @include step-0;
        color: var(--color-black);
        @include truncate(4);
        margin-top: var(--space-s);
    }
    .location-group {
        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
        margin-bottom: var(--space-s);
    }
    .location-link,
    .location-text {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        margin-bottom: 8px;
    }
    .location-link {
        z-index: 20;
    }
    &:not(&.is-vertical) {
        max-width: 990px;
        .meta {
            max-width: 900px;
            padding-bottom: 16px;
            overflow: hidden;
        }
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: 123px;
            top: 191px;
            left: 6px;
            height: 90px;
            background-color: var(--floating-highlight-color-theme);
            clip-path: polygon(
                0 0,
                calc(100% - 37px) 0,
                100% 75px,
                calc(100% - 1.5px) 75px,
                calc(100% - 38px) 1.5px,
                0 1.5px
            );
        }
    }
    // Breakpoints
    @media #{$medium} {
        .text {
            margin-top: 0;
        }
        &:not(&.is-vertical) {
            padding-left: 5px;
            padding-right: 5px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            .floating-highlight {
                display: none;
            }
            .clipped-date {
                display: none;
            }
        }
        .schedule {
            flex-direction: column;
        }

        .schedule-item:after {
            display: none;
        }
    }
    @media #{$small} {
        &:not(&.is-vertical) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            max-height: 550px;
            padding-left: 5px;
            padding-right: 5px;
            .image {
                max-width: 100%;
            }
        }
    }
    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                @include link-hover;
            }
        }
    }
}
</style>
