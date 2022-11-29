<template>
    <div :class="classes">
        <div class="card-container">
            <smart-link class="image-container" :to="to">
                <responsive-image v-if="image" class="image" :image="image" />
                <div v-else class="placeholder-container">
                    <div class="image" />
                    <div class="affiliate" />
                </div>
            </smart-link>

            <div class="library">
                <div>
                    <smart-link v-if="to" :to="to" class="title">
                        {{ title }}
                    </smart-link>
                    <smart-link v-else :to="affiliateLibraryUrl" class="title">
                        {{ title }}
                    </smart-link>
                </div>
                <div class="text">
                    <div v-if="libcalHoursData" class="time">
                        <SvgIconClock />
                        <span v-if="libcalHoursData.day">{{
                            libcalHoursData.day
                        }}</span>
                        <div
                            class="hour"
                            v-if="libcalHoursData.status !== 'not-set'"
                        >
                            <span v-html="parseLibCalHours" />
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
                            v-for="(amenity, index) in amenities"
                            :key="`amenity-${index}`"
                            class="tooltip"
                        >
                            <span class="tooltiptext">{{ amenity.title }}</span>
                            <component :is="amenity.icon" class="svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Components
import IconWithLink from "@/lib-components/IconWithLink"
import SmartLink from "@/lib-components/SmartLink"
import ResponsiveImage from "@/lib-components/ResponsiveImage"

export default {
    name: "BlockLocationListItem",
    components: {
        IconWithLink,
        SmartLink,
        ResponsiveImage,
        SvgIconClock: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-clock.svg"
            ).then((d) => d.default),
        SvgIconAccessible: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-accessible.svg"
            ).then((d) => d.default),
        SvgIconChair: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-chair.svg"
            ).then((d) => d.default),
        SvgIconEmail: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-email.svg"
            ).then((d) => d.default),
        SvgIconPhone: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-phone.svg"
            ).then((d) => d.default),
        SvgIconVirtual: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"
            ).then((d) => d.default),
        SvgIconCalendar: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-calendar.svg"
            ).then((d) => d.default),
        SvgIconLocation: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-location.svg"
            ).then((d) => d.default),
        SvgIconLight: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-light.svg"
            ).then((d) => d.default),
        SvgIconLaptop: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-laptop.svg"
            ).then((d) => d.default),
        SvgIconLocker: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-locker.svg"
            ).then((d) => d.default),
        SvgIconSharePrinter: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"
            ).then((d) => d.default),
        SvgIconBook: () =>
            import("ucla-library-design-tokens/assets/svgs/icon-book.svg").then(
                (d) => d.default
            ),
        SvgMoleculePlaceholder: () =>
            import(
                "ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg"
            ).then((d) => d.default),
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
        affiliateLibraryUrl: {
            type: String,
            default: "",
        },
        locationType: {
            type: String,
            default: "",
        },
        campusMapId: {
            type: String,
            default: "",
        },
        libcalSpacesUrl: {
            type: String,
            default: "",
        },
        libcalLocationIdForHours: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            libcalHoursData: null,
        }
    },
    mounted() {
        this.fetchLibcalHours()
    },
    computed: {
        classes() {
            return ["block-location-list-item", `color-${this.cardTheme}`]
        },
        cardTheme() {
            return this.isUclaLibrary ? "ucla" : "affiliate"
        },
        parseLibCalHours() {
            if (this.libcalHoursData.status === "open") {
                return `${this.libcalHoursData.hours[0].from} -  ${this.libcalHoursData.hours[0].to}`
            } else if (this.libcalHoursData.status === "text") {
                return this.libcalHoursData.text
            } else {
                return this.libcalHoursData.status
            }
        },
    },
    methods: {
        fetchLibcalHours() {
            let url = `https://calendar.library.ucla.edu/api_hours_today.php?iid=3244&lid=${this.libcalLocationIdForHours}&format=json&systemTime=0`
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.libcalHoursData = {
                        ...data.locations[0],
                        ...data.locations[0].times,
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
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

        .time > span:last-of-type {
            padding-right: 10px;
            // border-right: 2px solid var(--color-secondary-grey-02);
        }

        .hour {
            padding: 0 10px;
            border-left: 2px solid var(--color-secondary-grey-02);
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

    /* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        background: var(--color-primary-blue-03);
        color: #fff;
        text-align: center;
        padding: 5px 10px;

        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;

        width: 150px;
        bottom: 100%;
        left: 28%;
        margin-left: -75px; /* Use half of the width (120/2 = 60), to center the tooltip */
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 99%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: var(--color-primary-blue-03) transparent transparent
            transparent;
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
