<script>
export default {
  // TO DO import all amenitites svgs
  name: 'BlockAmenities',
  components: {
    // 24 Hour Study Space - icon-clock
    IconClock: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-clock.svg'
      ).then(d => d.default),

    // ADA Stations - icon-accessible
    IconAccessible: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-accessible.svg'
      ).then(d => d.default),
    // Cafe - icon-chair
    IconChair: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-chair.svg'
      ).then(d => d.default),
    // Computer/Laptop Access - icon-virtual
    IconVirtual: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-virtual.svg'
      ).then(d => d.default),
    // Laptop Lending - icon-laptop
    IconLaptop: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-laptop.svg'
      ).then(d => d.default),
    // Lockers - icon-locker
    IconLocker: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-locker.svg'
      ).then(d => d.default),
    // Makerspace - icon-light
    IconLight: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-light.svg'
      ).then(d => d.default),
    // Printing, Scanning, and Copying - icon-share-printer
    IconSharePrinter: () =>
      import(
        'ucla-library-design-tokens/assets/svgs/icon-share-printer.svg'
      ).then(d => d.default),
    // Research Help -  icon-book
    IconBook: () =>
      import('ucla-library-design-tokens/assets/svgs/icon-book.svg').then(
        d => d.default
      ),
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
        'icon-clock': '24 Hour Study Space',
        'icon-accessible': 'ADA Stations',
        'icon-chair': 'Cafe',
        'icon-virtual': 'Computer/Laptop Access',
        'icon-laptop': 'Laptop Lending',
        'icon-locker': 'Lockers',
        'icon-light': 'Makerspace',
        'icon-share-printer': 'Print, Copy and Scan',
        'icon-book': 'Research Help',
      },
    }
  },
  computed: {
    parsedAmenities() {
      return this.amenities.map((obj) => {
        const label = this.amenitiesMapping[obj]
        // console.log(obj)
        // console.log(label)
        return {
          svgLabel: label,
          svgIcon: obj,
        }
      })
    },
  },
}
</script>

<template>
  <div class="block-amenities">
    <h3 class="amenities-title">
      At This Location
    </h3>
    <div class="amenity-column">
      <ul class="amenities-list">
        <li
          v-for="(item, index) in parsedAmenities"
          :key="index"
          class="amenitiy-row"
        >
          <component :is="item.svgIcon" v-if="item.svgIcon" />

          <span class="amenity-name">{{ item.svgLabel }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

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
  ::v-deep .svg__fill--secondary-grey-01 {
      fill: var(--color-white);
  }
  ::v-deep .svg__stroke--black {
      stroke: var(--color-primary-blue-03);
  }
  ::v-deep .svg__fill--black {
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
