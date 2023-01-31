<template>
    <div class="banner-text">
        <div :class="classes">
            <div class="banner-text-content-container">
                <div v-if="category" class="category">
                    <svg-heading-vector
                        class="heading-line"
                        aria-hidden="true"
                    />
                    <div :class="categoryClasses" v-html="category" />
                </div>

                <div class="content">
                    <h1 class="title">
                        {{ title }}
                        <span
                            v-if="alternativeFullName"
                            :lang="language"
                            v-html="alternativeFullName"
                            class="translation"
                        />
                    </h1>

                    <rich-text
                        v-if="text"
                        class="text"
                        :rich-text-content="text"
                    />

                    <div
                        class="meta-block"
                        v-if="
                            byline ||
                            subjectAreas ||
                            startDate ||
                            phone ||
                            email ||
                            addressLink ||
                            staffDirectoryLink
                        "
                    >
                        <div v-if="byline" class="byline-item">
                            <div v-for="(item, index) in byline" :key="index">
                                {{ item }}
                            </div>
                        </div>

                        <div v-if="subjectAreas" class="subject-areas">
                            <div
                                v-for="(item, index) in subjectAreas"
                                :key="index"
                            >
                                {{ item.title }}
                            </div>
                        </div>

                        <div v-if="email" class="contact-info">
                            <icon-with-link
                                :text="email"
                                icon-name="svg-icon-email"
                                :to="`mailto:${email}`"
                            />
                        </div>

                        <div v-if="phone" class="contact-info">
                            <icon-with-link
                                :text="phone"
                                icon-name="svg-icon-phone"
                                :to="`tel:${phone}`"
                            />
                        </div>

                        <div v-if="staffDirectoryLink" class="contact-info">
                            <icon-with-link
                                :text="`View staff directory`"
                                icon-name="svg-icon-person"
                                :to="staffDirectoryLink"
                            />
                        </div>

                        <div v-if="addressLink" class="contact-info">
                            <icon-with-link
                                :text="address"
                                icon-name="svg-icon-location"
                                :to="addressLink"
                            />
                        </div>

                        <div v-if="startDate || dateCreated" class="schedule">
                            <time
                                v-if="dateCreated"
                                class="date-created"
                                v-html="parsedDateCreated"
                            />
                            <time
                                v-if="startDate"
                                class="schedule-item"
                                v-html="parsedDate"
                            />
                            <time
                                v-if="parsedTime"
                                class="schedule-item"
                                v-html="parsedTime"
                            />
                            <div v-if="isOnline" class="schedule-item">
                                Online
                            </div>
                        </div>
                    </div>

                    <div v-if="locations.length" class="location-group">
                        <icon-with-link
                            v-for="location in locations"
                            :key="`location-${location.id}`"
                            :text="location.title"
                            icon-name="svg-icon-location"
                            :to="`/${location.to}`"
                        />
                    </div>

                    <button-link
                        v-if="to && !isDarkBlue"
                        :label="buttonText"
                        :to="to"
                        :is-secondary="true"
                    />

                    <button-link
                        v-if="to && isDarkBlue"
                        :label="buttonText"
                        :to="to"
                        :is-tertiary="true"
                    />
                </div>
            </div>
        </div>

        <div v-if="!to && registerEvent" class="block-form-container">
            <block-form />
        </div>
    </div>
</template>

<script>
import format from "date-fns/format"
// Utility functions
import formatEventTimes from "@/mixins/formatEventTimes"
import formatEventDates from "@/mixins/formatEventDates"
import getSectionName from "@/mixins/getSectionName"

export default {
    name: "BannerText",
    mixins: [getSectionName, formatEventTimes, formatEventDates],
    components: {
        ButtonLink: () =>
            import("@/lib-components/ButtonLink.vue").then((d) => d.default),
        IconWithLink: () =>
            import("@/lib-components/IconWithLink.vue").then((d) => d.default),
        RichText: () =>
            import("@/lib-components/RichText.vue").then((d) => d.default),
        SvgHeadingVector: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg"
            ).then((d) => d.default),
        BlockForm: () =>
            import("@/lib-components/BlockForm.vue").then((d) => d.default),
    },
    props: {
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true,
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
        dateCreated: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDarkBlue: {
            type: Boolean,
            default: false,
        },
        //contact info for Location Detail Page
        email: {
            type: String,
            default: "",
        },
        phone: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        addressLink: {
            type: String,
            default: "",
        },
        staffDirectoryLink: {
            type: String,
            default: "",
        },
        articleType: {
            type: String,
            default: "",
        },
        byline: {
            type: Array,
            default: () => [],
        },
        subjectAreas: {
            type: Array,
            default: () => [],
        },
        registerEvent: {
            type: Boolean,
            default: false,
        },
        sectionHandle: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            let output = ["banner-text-container", "theme-light"]
            if (this.isDarkBlue) {
                output = ["banner-text-container", "theme-dark"]
            }
            return output
        },
        parseDarkBackground() {
            let output = true
            if (this.isDarkBlue) {
                output = false
            }
            return output
        },
        sectionName() {
            return this.getSectionName(this.to)
        },
        categoryClasses() {
            return ["text", `color-${this.sectionName}`]
        },
        parsedDateCreated() {
            return format(new Date(this.dateCreated), "MMMM d, Y")
        },
        parsedDate() {
            return this.formatDates(this.startDate, this.endDate)
        },
        parsedTime() {
            if (this.startDate && this.sectionHandle == "event") {
                return this.formatTimes(this.startDate, this.endDate)
            }
            return ""
        },
    },
}
</script>

<style lang="scss" scoped>
// Variations for dark blue and white backgrounds
.theme-light {
    --background-color: var(--color-white);
    --category-title-color: var(--color-primary-blue-05);
    --title-color: var(--color-primary-blue-03);
    --text-color: var(--color-black);
    --schedule-item-color: var(--color-secondary-grey-04);
    --schedule-item-border: var(--color-secondary-grey-02);
    --button-border-color: var(--color-primary-blue-03);
    --facet-inside-color: var(--color-primary-blue-02);
    --facet-outside-color: var(--color-primary-blue-03);

    --meta-block-color: var(--color-secondary-grey-04);

    --location-color: var(--color-primary-blue-03);
    --location-icon-color: var(--color-primary-blue-03);
    --hover-border-color: var(--color-primary-blue-02);
    --hover-background-color: var(--color-white);
    background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-faceted-light.svg");
    //background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-faceted-light.svg");
}

.theme-dark {
    --background-color: var(--color-primary-blue-03);
    --category-title-color: var(--color-white);
    --title-color: var(--color-white);
    --text-color: var(--color-white);
    --schedule-item-color: var(--color-white);
    --schedule-item-border: var(--color-primary-yellow-01);
    --button-border-color: var(--color-default-cyan-02);
    --facet-inside-color: var(--color-default-cyan-02);
    --facet-outside-color: var(--color-default-cyan-03);

    --meta-block-color: var(--color-white);

    --location-color: var(--color-white);
    --location-icon-color: var(--color-white);
    --hover-border-color: var(--color-white);
    --hover-background-color: var(--color-primary-blue-03);
    background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-half-faceted-dark.svg");
    //background-image: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-faceted-dark.svg");

    ::v-deep .icon-with-link {
        .link {
            --link-color: var(--color-white);

            &:hover,
            &:focus {
                color: var(--link-color);
                text-decoration-color: var(--color-default-cyan-02);
            }
        }

        .icon {
            --icon-color: var(--color-white);
            --icon-color-highlight: var(--color-white);
        }
    }

    .text {
        color: var(--color-white);
    }
}
.banner-text-container {
    margin: 0 auto;
    background-color: var(--background-color);
    position: relative;
    z-index: 0;
    background-position: 100% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    .category {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: -52px;
        .heading-line {
            flex-shrink: 0;
            padding-right: 0;
        }
        .text {
            border: 1px solid var(--color-theme);
            padding: 14px 24px;
            margin-left: -10px;
            clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
            line-height: 1;
            font-weight: #{$font-weight-regular};
            font-size: 26px;

            color: var(--category-title-color);
            text-transform: capitalize;
        }
    }
    // Themes for category outline
    --color-theme: var(--color-primary-blue-03);
    .color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    .color-help {
        --color-theme: var(--color-help-green-03);
    }
    .color-about {
        --color-theme: var(--color-about-purple-03);
    }

    .banner-text-content-container {
        padding: 40px 0 0;
        max-width: $container-l-main + px;
        margin: auto;

        .category {
            margin-bottom: var(--space-m);
        }

        .content {
            max-width: calc(100% - 144px);

            > *:last-child {
                margin-bottom: 0;
            }
        }
    }
    .title {
        @include step-5;
        color: var(--title-color);
        margin-bottom: var(--space-m);

        .translation {
            @include step-4;
            display: block;
        }
    }
    .contact-info {
        color: var(--color-primary-blue-03);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
        margin-bottom: 4px;
    }
    .content .text {
        @include step-0;
        margin-bottom: var(--space-m);
    }
    .schedule {
        @include step-0;
        text-align: left;
        color: var(--schedule-item-color);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .meta-block {
        display: flex;
        flex-direction: row;

        margin-bottom: var(--space-m);
    }

    .byline-item,
    .schedule-item,
    .subject-areas,
    .date-created {
        @include step-0;
        color: var(--meta-block-color);
    }

    .location-group {
        color: var(--location-color);
        margin-bottom: var(--space-m);

        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .location-svg {
        .location-icon {
            fill: var(--location-icon-color);
        }
        .location-icon-line {
            stroke: var(--location-icon-color);
        }
    }
    .meta-block {
        flex-direction: column;
        align-items: flex-start;
    }
    .byline-item {
        @include step-0;
        color: var(--color-secondary-grey-04);
    }
    .byline-item,
    .schedule-item {
        &:after {
            display: none;
        }
    }
    .schedule {
        flex-direction: column;
    }

    // Hovers
    @media #{$has-hover} {
        &.theme-dark {
            .button-link:hover {
                background-color: var(--hover-background-color);
                color: var(--text-color);
            }
        }
    }
}

.block-form-container {
    padding: 40px 0 0;
    max-width: 928px;
    margin: auto;
}

// Breakpoints
@media #{$extra-large} {
    .banner-text-container {
        .text {
            max-width: 788px;
        }
    }
}
@media #{$medium} {
    .banner-text-container {
        background-size: contain;
        .category .text {
            font-size: 20px;
        }
        .category .heading-line {
            height: 80px;
        }
        .category {
            margin-left: 0;
        }
        .banner-text-content-container {
            padding-left: var(--unit-gutter);
            padding-top: 40px;
        }
        .text {
            padding-right: 120px;
        }
    }

    .block-form-container {
        padding-left: var(--unit-gutter);
        padding-top: 40px;
    }
}

@media #{$medium} and (min-width: 928px) {
    .banner-text-container .banner-text-content-container {
        max-width: 100%;
    }

    .block-form-container {
        max-width: 100%;
    }
}
@media #{$small} {
    .banner-text-container {
        background-image: none;

        .category {
            margin-left: 0;
            .text {
                padding: 12px 16px;
            }
        }
        .banner-text-content-container {
            padding: 32px;
        }
        .banner-text-content-container .content {
            max-width: 100%;
        }

        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
        }

        .location-group {
            padding-left: 0;
        }
        .text {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
        }
    }

    .block-form-container {
        max-width: 100%;
        padding: 32px;
    }
}
</style>
