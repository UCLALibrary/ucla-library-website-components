<template>
    <div class="block-amenities">
        <h3>{{ parsedAmenities }}</h3>
        <h3 class="amenities-title">At This Location</h3>
        <div class="amenity-column">
            <ul class="amenities-list">
                <li
                    v-for="(item, index) in parsedAmenities"
                    :key="index"
                    class="amenitiy-row"
                >
                    <component :is="item.svgIcon" v-if="item.svgIcon" />

                    <span class="amenity-name" v-html="item.svgLabel" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// SVGs

// 24 Hour Study Space - icon-clock
import IconClock from "ucla-library-design-tokens/assets/svgs/icon-clock.svg"

// ADA Stations - icon-accessible
import IconAccessible from "ucla-library-design-tokens/assets/svgs/icon-accessible.svg"

// Cafe - icon-chair
import IconChair from "ucla-library-design-tokens/assets/svgs/icon-chair.svg"

// Computer/Laptop Access - icon-virtual
import IconVirtual from "ucla-library-design-tokens/assets/svgs/icon-virtual.svg"

// Laptop Lending - icon-laptop
import IconLaptop from "ucla-library-design-tokens/assets/svgs/icon-laptop.svg"

// Lockers - icon-locker
import IconLocker from "ucla-library-design-tokens/assets/svgs/icon-locker.svg"

// Makerspace - icon-light
import IconLight from "ucla-library-design-tokens/assets/svgs/icon-light.svg"

// Printing, Scanning, and Copying - icon-share-printer
// use svg class names to get rid of the circle background
import IconSharePrinter from "ucla-library-design-tokens/assets/svgs/icon-share-printer.svg"

// Research Help -  icon-book
import IconBook from "ucla-library-design-tokens/assets/svgs/icon-book.svg"

export default {
    // TO DO import all amenitites svgs
    name: "BlockAmenities",
    components: {
        IconClock,
        IconAccessible,
        IconChair,
        IconVirtual,
        IconLaptop,
        IconLocker,
        IconLight,
        IconSharePrinter,
        IconBook,
    },
    props: {
        amenities: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            amenitiesMapping: {
                "icon-clock": "24 Hour Study Space",
                "icon-accessible": "ADA Stations",
                "icon-chair": "Cafe",
                "icon-virtual": "Computer/Laptop Access",
                "icon-laptop": "Laptop Lending",
                "icon-locker": "Lockers",
                "icon-light": "Makerspace",
                "icon-share-printer": "Printing, Scanning, and Copying",
                "icon-book": "Research Help",
            },
        }
    },
    computed: {
        parsedAmenities() {
            return this.amenities.map((obj) => {
                let label = this.amenitiesMapping[obj]
                console.log(obj)
                console.log(label)
                return {
                    svgLabel: label,
                    svgIcon: obj,
                }
            })
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
        margin-bottom: 16px;
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
