<template>
    <div class="block-amenities">
        <h3 class="amenities-title">At This Location</h3>
        <div class="amenity-column">
            <ul class="amenities-list">
                <li
                    v-for="(item, index) in parsedAmenities"
                    :key="index"
                    class="amenitiy-row"
                >
                    <component :is="item" v-if="item" />

                    <span class="amenity-name" v-html="item" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// SVGs
// 3D Printing, Etching, etc. - icon-light
import SvgIconLight from "ucla-library-design-tokens/assets/svgs/icon-light.svg"

// 24 Hour Study Space - icon-clock
import SvgIconClock from "ucla-library-design-tokens/assets/svgs/icon-clock.svg"

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

export default {
    // TO DO import all amenitites svgs
    name: "BlockAmenities",
    components: {
        SvgIconLight,
        SvgIconClock,
        SvgIconAccessible,
        SvgIconChair,
        SvgIconVirtual,
        SvgIconLaptop,
        SvgIconLocker,
        SvgIconSharePrinter,
        SvgIconBook,
    },
    props: {
        amenities: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedAmenities() {
            return this.amenities
        },
    },
}
</script>

<style lang="scss" scoped>
.block-amenities {
    //max-height: 200px;
    max-width: $container-l-main + px;
    width: 100%;

    .amenities-title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: 16px;
        margin-left: 2px;
    }

    .amenity-column ul {
        display: flex;
        flex-wrap: wrap;
    }

    .amenity-column ul li {
        list-style: none;
        flex-basis: 32%;
    }

    .amenitiy-row {
        margin: 3px 0;
        display: flex;
        align-content: center;
    }
    .amenity-name {
        color: var(--color-black);
        @include step-0;
        padding-left: 5px;
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

    // Breakpoints

    @media #{$medium} {
        .amenity-column ul {
            display: flex;
            flex-wrap: wrap;
        }

        .amenity-column ul li {
            list-style: none;
            flex-basis: 50%;
        }
    }

    @media #{$small} {
        .amenity-column ul {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }

        .amenity-column ul li {
            list-style: none;
            flex-basis: 20%;
        }
    }
}
</style>
