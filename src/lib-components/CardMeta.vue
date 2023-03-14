<template>
    <div class="card-meta">
        <div v-if="category" class="category" v-html="category" />
        <smart-link v-if="to" :linkTarget="parsedTarget" :to="to" class="title">
            {{ title }}
            <span
                v-if="alternativeFullName"
                :lang="language"
                v-html="alternativeFullName"
                class="translation"
            />
        </smart-link>
        <h3 v-else class="title-no-link" v-html="title" />

        <div class="byline-group" v-if="bylineOne || bylineTwo">
            <div v-if="bylineOne" class="schedule-item" v-html="bylineOne" />
            <div v-if="bylineTwo" class="schedule-item" v-html="bylineTwo" />
        </div>

        <div class="date-time" v-if="startDate || ongoing">
            <div v-if="ongoing">Ongoing</div>
            <time v-if="startDate" class="schedule-item" v-html="parsedDate" />
            <time v-if="startDate" class="schedule-item" v-html="parsedTime" />
        </div>

        <div v-if="locations.length" class="location-group">
            <icon-with-link
                v-for="(location, index) in parsedLocations"
                :key="`location-${index}`"
                :text="location.title"
                :icon-name="location.svg"
                :to="location.to"
            />
        </div>
        <div v-if="text" class="text">{{ parsedText }}</div>
    </div>
</template>

<script>
// COMPONENTS
import SmartLink from "@/lib-components/SmartLink.vue"
import IconWithLink from "@/lib-components/IconWithLink.vue"

// UTILITY FUNCTIONS
import formatTimes from "@/mixins/formatEventTimes"
import formatDates from "@/mixins/formatEventDates"
import removeHtmlTruncate from "@/mixins/removeHtmlTruncate"

export default {
    name: "BlockHighlight",
    components: {
        SmartLink,
        IconWithLink,
    },
    mixins: [formatTimes, formatDates, removeHtmlTruncate],
    props: {
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
        alternativeFullName: {
            type: String,
            default: "",
        },
        language: {
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        ongoing: {
            type: Boolean,
            default: false,
        },
        locations: {
            type: Array,
            default: () => [],
        },
        text: {
            type: String,
            default: "",
        },
        bylineOne: {
            type: String,
            default: "",
        },
        bylineTwo: {
            type: String,
            default: "",
        },
        sectionHandle: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedTarget() {
            return this.isImpactReport ? "_blank" : ""
        },
        parsedDate() {
            if (this.startDate) {
                return this.formatDates(this.startDate, this.endDate)
            }
            return ""
        },

        parsedTime() {
            if (this.startDate && this.sectionHandle == "event") {
                return this.formatTimes(this.startDate, this.endDate)
            }
            return ""
        },
        parsedLocations() {
            return this.locations.map((obj) => {
                let input = "svg-icon-location"
                if (obj.title == "Online") input = "svg-icon-virtual"
                return {
                    ...obj,
                    svg: input,
                    to: obj.to != null ? `/${obj.to}` : "",
                }
            })
        },
        parsedText() {
            return this.text ? this.removeHtmlTruncate(this.text, 250) : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.card-meta {
    .meta {
        z-index: 10;
        width: 100%;
    }
    .category {
        @include overline;
        color: var(--color-primary-blue-05);
        margin-top: var(--space-xs);
        margin-bottom: var(--space-s);
    }
    .title {
        @include card-clickable-area;
        display: block;

        .translation {
            display: block;
        }
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
        margin: $component-02 + px 0 var(--space-s);
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
        color: var(--color-secondary-grey-04);
        margin: var(--space-s) 0;
    }
    .text {
        @include step-0;
        color: var(--color-black);
        @include truncate(4);
        margin-top: var(--space-s);

        ::v-deep strong {
            font-weight: normal;
        }
    }
    .location-group {
        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary);
        line-height: 1;
        margin-bottom: var(--space-s);
        display: flex;
        flex-direction: column;
    }
    .icon-with-link {
        position: relative;
        z-index: 20;
    }

    // Breakpoints
    @media #{$medium} {
        .text {
            margin-top: 0;
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
