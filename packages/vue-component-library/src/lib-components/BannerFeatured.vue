<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import format from 'date-fns/format'
import { useTheme } from '@/composables/useTheme'

// SVGs
import SvgMoleculeHalfFaceted from 'ucla-library-design-tokens/assets/svgs/molecule-half-overlay.svg'
import SvgHatchRight from 'ucla-library-design-tokens/assets/svgs/graphic-hatch-lines.svg'
import SvgHeadingVector from 'ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg'

// Components
import ButtonLink from '@/lib-components/ButtonLink.vue'
import IconWithLink from '@/lib-components/IconWithLink.vue'
import RichText from '@/lib-components/RichText.vue'
import SmartLink from '@/lib-components/SmartLink.vue'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import ResponsiveVideo from '@/lib-components/ResponsiveVideo.vue'
import BlockForm from '@/lib-components/BlockForm.vue'

import type { LocationItemType, MediaItemType, } from '@/types/types'

// Utility functions
import formatEventTimes from '@/utils/formatEventTimes'
import formatEventDates from '@/utils/formatEventDates'
import getSectionName from '@/utils/getSectionName'
import fixURI from '@/utils/fixURI'

const theme = useTheme()

const props = defineProps({
  media: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  dateCreated: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '',
  },
  endDate: {
    type: String,
    default: '',
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  byline: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  to: {
    // URL to link to, if blank won't link
    type: String,
    default: '',
  },
  breadcrumb: {
    type: String,
    default: '',
  },
  prompt: {
    // text that displays on blue button, e.g. "View exhibit". Links to `props.to`
    type: String,
    default: '',
  },
  alignRight: {
    type: Boolean,
    default: true,
  },
  ratio: {
    type: Number,
    default: 56.25,
  },
  registerEvent: {
    type: Boolean,
    default: false,
  },
  titleLink: {
    type: String,
    default: '',
  },
  sectionHandle: {
    type: String,
    default: '',
  },
  secondaryButtons: {
    type: Array as PropType<Array<{ label: string, to: string }>>,
    default: () => [],
  },
})

// Video & Image
const isVideo = computed(() => {
  if (props.media && props.media.src) {
    const fileName = props.media.src.toLowerCase()
    const extension = fileName.split('.').pop()
    if (
      extension === 'mp4'
      || extension === 'm4a'
      || extension === 'f4v'
      || extension === 'm4b'
      || extension === 'mov'
    )
      return true

    else
      return false
  }
  else {
    return false
  }
})

const parsedMediaComponent = computed(() => {
  return isVideo.value ? ResponsiveVideo : ResponsiveImage
})

const parseImage = computed(() => {
  if (isVideo.value)
    return null
  const imageObj = props.media

  // console.log(`image obj: ${JSON.stringify(imageObj)}`)
  return imageObj
})

const parseVideo = computed(() => {
  if (!isVideo.value)
    return null

  const mainVideo = props.media

  const videoObj: MediaItemType = {
    src: mainVideo.src,
    focalPoint: mainVideo.focalPoint,
    sizes: mainVideo.sizes,
    height: mainVideo.height,
    width: mainVideo.width,
    alt: mainVideo.alt,
    caption: mainVideo.caption,
    poster: mainVideo.poster,
  }
  return videoObj
})

const parsedMediaProp = computed(() => {
  return isVideo.value ? parseVideo.value : parseImage.value
})

const parsedRatio = computed(() => {
  // If on mobile, change ratio of image
  const output = props.ratio
  return output
})

// Location
const parsedLocations = computed(() => {
  return props.locations.map((obj) => {
    return {
      ...obj,
      svg:
        obj.title === 'Online'
          ? 'svg-icon-virtual'
          : 'svg-icon-location',
      class:
        obj.title === 'Online'
          ? 'location-online'
          : 'location-link',
      to: obj.to != null ? fixURI(obj.to) : '',
    }
  })
})

// Dates
const parsedDate = computed(() => {
  return formatEventDates(props.startDate, props.endDate)
})

const parsedDateCreated = computed(() => {
  return format(new Date(props.dateCreated), 'MMMM d, Y')
})

const parsedTime = computed(() => {
  if (props.startDate && props.sectionHandle === 'event')
    return formatEventTimes(props.startDate, props.endDate)

  return ''
})

const sectionName = computed(() => {
  return getSectionName(props.to)
})

const classes = computed(() => {
  return [
    'banner-featured',
    { 'hatch-left': !props.alignRight },
    `color-${sectionName.value}`,
    theme?.value || '',
  ]
})
</script>

<template>
  <div :class="classes">
    <div class="slot">
      <slot>
        <div
          v-if="breadcrumb"
          class="breadcrumb"
        >
          <SvgHeadingVector
            class="heading-line"
            aria-hidden="true"
          />
          <h2 class="text">
            {{ breadcrumb }}
          </h2>
        </div>
      </slot>
    </div>

    <component
      :is="parsedMediaComponent"
      class="media"
      :media="parsedMediaProp!"
      :aspect-ratio="parsedRatio"
    >
      <div
        v-if="!isVideo"
        class="gradient"
      />

      <SvgMoleculeHalfFaceted
        class="molecule"
        aria-hidden="true"
      />
    </component>

    <div class="hatch-box">
      <div class="clipped-box">
        <h2
          v-if="category"
          class="category category-mobile"
          v-html="category"
        />
      </div>
      <div class="hatch">
        <SvgHatchRight
          class="svg"
          aria-hidden="true"
        />
      </div>
    </div>

    <div class="meta">
      <div
        v-if="category"
        class="category category-desktop"
        v-html="category"
      />

      <div v-if="titleLink.length > 0">
        <SmartLink
          id="banner-featured"
          :to="titleLink"
          class="title title-linked"
        >
          {{ title }}
        </SmartLink>
      </div>

      <div v-else>
        <h3
          id="banner-featured"
          class="title"
          v-html="title"
        />
      </div>

      <div class="meta-text">
        <div
          v-if="dateCreated"
          class="date-created"
        >
          <time
            v-if="dateCreated"
            class="date-created"
            v-html="parsedDateCreated"
          />
        </div>

        <div
          v-if="byline.length
          "
          class="byline"
        >
          <div
            v-for="(item, index) in byline"
            :key="`external-${index}`"
            class="byline-item"
            v-html="item"
          />
        </div>

        <RichText
          v-if="description"
          class="description"
          :rich-text-content="description"
        />

        <div
          v-if="startDate || endDate"
          class="schedule"
        >
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
        </div>

        <div
          v-if="locations.length
          "
          class="location-group"
        >
          <IconWithLink
            v-for="location in parsedLocations"
            :key="`location-${location.id}`"
            :text="location.title"
            :icon-name="location.svg"
            :to="location.to"
            :class="location.class"
          />
        </div>
      </div>

      <ButtonLink
        v-if="to"
        id="banner-featured-button"
        :label="prompt"
        :to="to"
        aria-labelledby="banner-featured-button banner-featured"
        class="button"
      />

      <div
        v-if="secondaryButtons.length > 0"
        class="secondary-buttons"
      >
        <SmartLink
          v-for="(button, index) in secondaryButtons"
          :key="`secondary-button-${index}`"
          :to="button.to"
          class="secondary-button"
        >
          {{ button.label }}
        </SmartLink>
      </div>
    </div>

    <div
      v-if="!to && registerEvent"
      class="block-form-container"
    >
      <BlockForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_banner-featured.scss";
@import "@/styles/dlc/_banner-featured.scss";
</style>
