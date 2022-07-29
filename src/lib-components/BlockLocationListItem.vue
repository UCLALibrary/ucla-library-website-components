<template>
    <div :class="classes">
        <div class="card-container">
            <router-link class="image-container" :to="to">
                <responsive-image v-if="image" class="image" :image="image" />
                <div v-else class="placeholder-container">
                    <div class="image" />
                    <div class="affiliate" />
                </div>
            </router-link>

            <div class="library">
                <smart-link v-if="to" :to="to" class="title">
                    {{ title }}
                </smart-link>
                <div class="text">
                    <div v-if="day || hour" class="time">
                        <SvgIconClock />
                        <span>{{ day }}</span>
                        <div class="hour">
                            <span>{{ hour }}</span>
                        </div>
                    </div>
                    <icon-with-link
                        v-if="reserveSeat"
                        text="Reserve a Seat"
                        icon-name="svg-icon-calendar"
                        :to="reserveSeat"
                        class="reserve"
                    />
                    <icon-with-link
                        :text="address"
                        icon-name="svg-icon-location"
                        :to="addressLink"
                        class="location"
                    />

                    <div v-if="amenities" class="amenities">
                        <div
                            v-for="amenity in amenities"
                            :key="`amenity-${amenity}`"
                        >
                            <component :is="amenity" class="svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIconClock from "ucla-library-design-tokens/assets/svgs/icon-clock.svg"
import SvgIconCalendar from "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
import SvgIconLocation from "ucla-library-design-tokens/assets/svgs/icon-location.svg"

// AMENITIES
import SvgIconLight from "ucla-library-design-tokens/assets/svgs/icon-light.svg"

// 24 Hour Study Space - icon-clock
// import SvgIconClock from "ucla-library-design-tokens/assets/svgs/icon-clock.svg"

// ADA Stations - icon-accessible
import SvgIconAccessible from "ucla-library-design-tokens/assets/svgs/icon-accessible.svg"

// Cafe - icon-chair
import SvgIconChair from "ucla-library-design-tokens/assets/svgs/icon-chair.svg"

// Computer/Laptop Access - icon-virtual
import SvgIconVirtual from "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"

// Laptop Lending - icon-laptop
import SvgIconLaptop from "ucla-library-design-tokens/assets/svgs/icon-laptop.svg"

// Lockers - icon-locker
import SvgIconLocker from "ucla-library-design-tokens/assets/svgs/icon-locker.svg"

// Printing, Scanning, and Copying - icon-share-printer
// use svg class names to get rid of the circle background
import SvgIconSharePrinter from "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"

// Research Help -  icon-book
import SvgIconBook from "ucla-library-design-tokens/assets/svgs/icon-book.svg"

import SvgMoleculePlaceholder from "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"

// Other Imports
import IconWithLink from "@/lib-components/IconWithLink"
import SmartLink from "@/lib-components/SmartLink"
import ResponsiveImage from "@/lib-components/ResponsiveImage"

export default {
    name: "BlockLocationListItem",
    components: {
        SvgIconClock,
        SvgIconCalendar,
        SvgIconLocation,
        SvgIconLight,
        SvgIconAccessible,
        SvgIconChair,
        SvgIconVirtual,
        SvgIconLaptop,
        SvgIconLocker,
        SvgIconSharePrinter,
        SvgIconBook,
        SvgMoleculePlaceholder,
        IconWithLink,
        SmartLink,
        ResponsiveImage,
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        day: {
            type: String,
            default: "",
        },
        hour: {
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
        amenities: {
            type: Array,
            default: () => [],
        },
        reserveSeat: {
            type: String,
            default: "",
        },
        isUclaLibrary: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classes() {
            return ["block-location-list-item", `color-${this.cardTheme}`]
        },
        cardTheme() {
            return this.isUclaLibrary ? "ucla" : "affiliate"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-location-list-item {
    overflow: hidden;
    border: 2px solid var(--color-theme);
    border-radius: var(--rounded-slightly-all);

    width: 100%;
    max-width: 928px;
    padding: 48px 64px;

    transition-property: box-shadow;
    @include animate-normal;

    // Themes
    &.color-ucla {
        --color-theme: var(--color-visit-fushia-02);
    }
    &.color-affiliate {
        --color-theme: var(--color-primary-blue-02);
    }

    $large-width: 352px;
    $large-height: 352px;

    .card-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        max-width: 800px;

        .image-container {
            width: $large-width;
            height: $large-height;
            margin-right: var(--space-xl);
        }

        .placeholder-container {
            position: relative;
            width: $large-width;
            height: $large-height;
        }

        .image {
            width: 100%;
            height: 100%;
            background: var(--gradient-01);
        }

        .affiliate {
            // background: url("node_modules/ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg");
            background-size: 900px;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .library {
            display: flex;
            flex-direction: column;
        }

        .title {
            @include step-2;
            color: var(--color-primary-blue-03);
            margin: 0px 0 12px 0;
            line-height: $line-height--1;

            &:hover {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
                @include link-hover;
                color: var(--color-primary-blue-03);
            }
        }

        .text {
            max-width: 392px;
            @include step--1;
            font-family: var(--font-secondary);
            color: var(--color-primary-blue-03);
        }

        .time,
        .amenities,
        .location,
        .reserve {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px 0;

            & > span:first-of-type {
                margin-left: 13px;
            }
        }

        .time {
            color: var(--color-primary-blue-05);
        }

        .time > span:first-of-type {
            padding-right: 10px;
            border-right: 2px solid var(--color-secondary-grey-02);
        }

        .hour {
            padding: 0 10px;
        }

        .amenities {
            display: flex;
            flex-wrap: wrap;
        }

        .svg {
            max-width: 25px;
            margin-right: 20px;
        }

        // Adjusts: Svg shareprinter to white bg and blue stroke
        .svg__fill--secondary-grey-01 {
            fill: var(--color-white);
        }
        .svg__stroke--black {
            stroke: var(--color-primary-blue-03);
        }
        .svg__fill--black {
            fill: var(--color-primary-blue-03);
        }
    }

    // BREAKPOINTS
    @media #{$medium} {
        $medium-width: 256px;
        $medium-height: 256px;
        max-width: 640px;
        padding: 24px;
        .card-container {
            width: 100%;
            max-width: 592px;

            .image-container {
                width: $medium-width;
                height: $medium-height;
                margin-right: var(--space-xl);
            }

            .placeholder-container {
                position: relative;
                max-width: $medium-width;
                height: $medium-height;
            }

            .image {
                width: $medium-width;
                height: $medium-height;
            }

            .affiliate {
                background-size: 650px;
                width: $medium-width;
                height: $medium-height;
                position: absolute;
                top: 0;
                left: 0;
            }

            .text {
                padding: 8px 0;
            }
        }
    }

    @media #{$small} {
        max-width: 320px;
        padding: 24px;
        .card-container {
            width: 100%;
            max-width: 320px;
        }
        .image-container {
            display: none;
        }
        .text {
            width: 100%;
            max-width: 272px;
            padding: 12px 0;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            @include card-horizontal-hover;
        }
    }
}
</style>
