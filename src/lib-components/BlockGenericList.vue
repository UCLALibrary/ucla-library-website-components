<template>
    <div>
        <h2 class="section-title">{{ sectionTitle }}</h2>
        <div class="meta">
            <div v-if="jobRequisitionNumber" class="category">
                {{ jobRequisitionNumber }}
            </div>
            <!-- 
                do I need to use :linkTarget="parsedTarget" ?
            -->
            <smart-link v-if="jobPostingURL" :to="jobPostingURL" class="title">
                {{ title }}
            </smart-link>
            <h3 v-else class="title-no-link">
                {{ title }}
            </h3>

            <div class="byline-group" v-if="department || associatedLocations">
                <div v-if="department" class="schedule-item">
                    <div
                        v-for="(item, index) in department"
                        :key="index"
                        class="schedule-item"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </div>

            <div v-if="associatedLocations" class="location-group">
                <div
                    class="location-link"
                    v-for="(location, index) in associatedLocations"
                    :key="`location-${index}`"
                >
                    <smart-link
                        v-if="location.uri"
                        :to="location.uri"
                        class="location-link"
                    >
                        <!-- <component :is="location.svg" class="location-svg" /> -->
                        <span class="location">{{ location.title }}</span>
                    </smart-link>
                </div>
            </div>
            <!-- changing p tag to div fixes nodemismatch errors -->
            <div v-if="text" class="text">{{ text }}</div>
        </div>
    </div>
</template>

<script>
import IconWithLink from "@/lib-components/IconWithLink.vue"
import SmartLink from "@/lib-components/SmartLink.vue"

export default {
    name: "BlockGenericList",
    components: { SmartLink },
    data() {
        return {}
    },
    props: {
        sectionTitle: {
            type: String,
            default: "",
        },
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
    },
}
</script>

<style lang="scss" scoped>
.block-highlight {
    background-color: var(--color-theme, var(--color-white));
    font-family: var(--font-primary);
    position: relative;
    display: flex;
    flex-direction: row;
    // Themes for floating highlight/ triangle
    --floating-highlight-color-theme: var(--color-default-cyan-03);
    &.color-visit {
        --floating-highlight-color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --floating-highlight-color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --floating-highlight-color-theme: var(--color-about-purple-03);
    }
    .clipped {
        width: 100%;
        height: 47px;
        margin-top: -54px;
        position: relative;
        z-index: 0;
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: calc(100% - 55px);
            top: 0;
            left: 5px;
            height: 47px;
            background-color: var(--floating-highlight-color-theme);
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                calc(100% - 21px) 1.5px,
                0 1.5px
            );
        }
        .clipped-box {
            position: absolute;
            z-index: 30;
            top: 8px;
            left: -1px;
            width: calc(100% - 57px);
            height: 47px;
            background-color: var(--color-theme, var(--color-white));
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                0 47px,
                0 1.5px
            );
        }
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
    .date-time {
        @include step-0;
        color: var(--color-secondary-grey-05);
        margin: var(--space-s) 0;
        display: flex;
        flex-direction: column;
        .svg-online {
            margin-bottom: -5px;
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid var(--color-secondary-grey-02);
        }
    }
    .byline-group {
        display: flex;
        flex-direction: column;
        @include step-0;
        color: var(--color-secondary-grey-05);
        margin: var(--space-s) 0;
    }
    .molecule-no-image {
        width: 50%;
        height: 272px;
        margin-right: var(--space-xl);
        background: var(--gradient-01);
        overflow: hidden;
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
    // Variations
    &.is-vertical {
        flex-direction: column;
        .molecule-no-image {
            width: 100%;
        }
        &:not(.has-triangle) {
            .meta {
                margin-top: 16px;
            }
            ::v-deep .image {
                width: 100%;
                .media {
                    object-fit: cover;
                }
            }
        }
        // for clipped version
        &.has-triangle {
            .meta {
                margin-top: -24px;
                padding: 0 72px 0 16px;
            }
            ::v-deep .image {
                height: 272px;
                .media {
                    object-fit: cover;
                }
            }
        }
    }
    &:not(&.is-vertical) {
        max-width: 990px;
        .meta {
            max-width: 412px;
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
        .clipped-date {
            margin-top: 54px;
            z-index: 30;
            position: absolute;
            top: 145px;
            left: 0px;
            width: 125px;
            height: 84px;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 84px,
                calc(100% - 1.5px) 84px,
                0 84px,
                0 1.5px
            );
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 32px;
            color: var(--color-primary-blue-03);
            .month {
                font-weight: 400;
                font-family: var(--font-secondary);
                font-size: 16px;
                letter-spacing: 1.5%;
            }
            .day {
                font-weight: 500;
                font-family: var(--font-primary);
                font-size: 36px;
                letter-spacing: 0.25%;
            }
        }
        ::v-deep .image {
            width: 456px;
            max-height: 272px;
            margin-right: 56px;
            .clipped-date {
                margin-top: 54px;
                z-index: 30;
                position: absolute;
                top: 145px;
                left: 0px;
                width: 125px;
                height: 84px;
                background-color: var(--color-white);
                clip-path: polygon(
                    0 0,
                    calc(100% - 39px) 0,
                    100% 84px,
                    calc(100% - 1.5px) 84px,
                    0 84px,
                    0 1.5px
                );
            }
        }
    }
    // Breakpoints
    @media #{$medium} {
        .text {
            margin-top: 0;
        }
        &.is-vertical {
            &.has-triangle {
                ::v-deep .image {
                    height: 200px;
                }
            }
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

        &.is-vertical.has-triangle .meta {
            padding-left: 0;
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
