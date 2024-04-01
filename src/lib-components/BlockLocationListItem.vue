<script lang="ts" setup>
import { computed, defineAsyncComponent, onBeforeMount, ref } from 'vue'
import type { PropType } from 'vue'
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import type { AmenitiesType, MediaItemType } from '@/types/types'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

// TYPES
interface libcalHoursType {
  status: string
  day: string
  hours: {
    from: string
    to: string
  }[]
  text: string
}
// PROPS & DATA
const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  title: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  addressLink: {
    type: String,
    default: '',
  },
  amenities: {
    type: Array as PropType<AmenitiesType[]>,
    default: () => [],
  },
  reserveSeat: {
    type: String,
    default: '',
  },
  isUclaLibrary: {
    type: Boolean,
    default: true,
  },
  affiliateLibraryUrl: {
    type: String,
    default: '',
  },
  locationType: {
    type: String,
    default: '',
  },
  campusMapId: {
    type: String,
    default: '',
  },
  libcalSpacesUrl: {
    type: String,
    default: '',
  },
  libcalLocationIdForHours: {
    type: String,
    default: '',
  },
})
// Async Components
const SvgIconPhone = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-phone.svg')
)
const SvgIconCalendar = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-calendar.svg')
)
const SvgIconLocation = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-location.svg')
)
const IconClock = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-clock.svg')
)
const IconAccessible = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-accessible.svg')
)
const IconChair = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-chair.svg')
)
const IconVirtual = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-virtual.svg')
)
const IconLaptop = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-laptop.svg')
)
const IconLocker = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-locker.svg')
)
const IconLight = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-light.svg')
)
const IconShare = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-share-printer.svg')
)
const IconBook = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-book.svg')
)
// METHODS
let libcalHoursData: libcalHoursType | null = null
const reRenderCounter = ref(0) // Used to re-render the component when the data is fetched
async function fetchLibcalHours() {
  const url = `https://calendar.library.ucla.edu/api_hours_today.php?iid=3244&lid=${props.libcalLocationIdForHours}&format=json&systemTime=0`
  await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      libcalHoursData = {
        ...data.locations[0],
        ...data.locations[0].times,
      }
      reRenderCounter.value += 1
    })
    .catch((err) => {
      console.error(err)
    })
}

// COMPUTED
const cardTheme = computed(() => {
  return props.isUclaLibrary ? 'ucla' : 'affiliate'
})
const classes = computed(() => {
  return ['block-location-list-item', `color-${cardTheme.value}`]
})
const parseLibCalHours = computed(() => {
  if (libcalHoursData?.status === 'open')
    return `${libcalHoursData.hours[0].from} -  ${libcalHoursData.hours[0].to}`
  else if (libcalHoursData?.status === 'text')
    return libcalHoursData.text
  else
    return libcalHoursData?.status
})
const imageExists = computed(() => {
  return !!(props.image && Object.keys(props.image).length !== 0)
})

// Fetch data
onBeforeMount(() => {
  fetchLibcalHours()
})
</script>

<template>
  <div :class="classes">
    <div class="card-container">
      <div class="image-container">
        <ResponsiveImage v-if="imageExists" class="image" :media="props.image" />
        <div v-else class="molecule-no-image">
          <MoleculePlaceholder class="molecule" aria-hidden="true" />
        </div>
      </div>
      <div class="library">
        <div>
          <SmartLink v-if="props.to" :to="props.to" class="title">
            {{ props.title }}
          </SmartLink>
          <SmartLink v-else :to="props.affiliateLibraryUrl" class="title">
            {{ props.title }}
          </SmartLink>
        </div>
        <div :key="reRenderCounter" class="text">
          <div v-if="libcalHoursData && props.isUclaLibrary" class="time">
            <IconClock />
            <span v-if="libcalHoursData.day">{{ "Today" }}</span>
            <div v-if="libcalHoursData.status !== 'not-set'" class="hour">
              <span> {{ parseLibCalHours }} </span>
            </div>
          </div>
          <IconWithLink
            v-if="props.reserveSeat" text="Reserve a Seat" icon-name="svg-icon-calendar"
            :to="props.reserveSeat" class="reserve"
          />
          <IconWithLink :text="props.address" icon-name="svg-icon-location" :to="props.addressLink" class="location" />

          <div v-if="props.amenities" class="amenities">
            <div v-for="(amenity, index) in amenities" :key="`amenity-${index}`" class="tooltip">
              <span class="tooltiptext">{{ amenity.title }}</span>
              <component :is="amenity.icon" class="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-location-list-item {
  overflow: hidden;
  border: 2px solid var(--color-theme);
  border-radius: var(--rounded-slightly-all);
  width: 100%;
  max-width: $container-l-main + px;
  padding: var(--space-xl);
  position: relative;
  @include animate-normal;

  // Themes
  &.color-ucla {
    --color-theme: var(--color-primary-blue-01);
    @include animate-normal;
  }

  &.color-affiliate {
    --color-theme: var(--color-primary-blue-01);
    @include animate-normal;
  }

  $large-width: 272px;
  $large-height: 272px;

  .card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

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
      width: $large-width;
      height: $large-height;
      background: var(--gradient-01);
    }

    .affiliate {
      background-size: 900px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .molecule-no-image {
      height: 272px;
      background: var(--gradient-01);
      overflow: hidden;
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
      @include card-clickable-area;

      &:hover {
        text-decoration: underline;
        text-decoration-color: var(--color-primary-blue-03);
        text-decoration-thickness: 1.5px;
        @include link-hover;
        cursor: pointer;
      }
    }

    .text {
      @include step--1;
      font-family: var(--font-secondary);
      color: var(--color-primary-blue-03);
      z-index: 10;
    }

    .time,
    .amenities,
    .location,
    .reserve {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px 0;

      &>span:first-of-type {
        margin-left: 13px;
      }
    }

    .time {
      color: var(--color-primary-blue-05);
    }

    .time>span:last-of-type {
      padding-right: 10px;
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
    :deep(.svg__fill--secondary-grey-01) {
      fill: var(--color-white);
    }

    :deep(.svg__stroke--black) {
      stroke: var(--color-primary-blue-03);
    }

    :deep(.svg__fill--black) {
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
    border-radius: var(--rounded-slightly-all);

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;

    width: 150px;
    bottom: 100%;
    left: 28%;
    margin-left: -75px;
    /* Use half of the width (120/2 = 60), to center the tooltip */
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 99%;
    /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-primary-blue-03) transparent transparent transparent;
  }

  // BREAKPOINTS
  @media #{$medium} {
    $medium-width: 256px;
    $medium-height: 256px;
    padding: 24px;

    .card-container {
      .amenities {
        @include visually-hidden;
      }

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
    padding: 24px;

    .image-container {
      display: none;
    }

    .text {
      width: 100%;
      padding: 12px 0;
    }
  }

  // Hovers
  @media #{$has-hover} {
    &:hover {
      @include card-horizontal-hover;
      border-color: var(--color-visit-fushia-02);
    }
  }
}
</style>
