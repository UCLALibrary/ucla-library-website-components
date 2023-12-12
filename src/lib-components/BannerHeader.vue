<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'
import format from 'date-fns/format'

// Components
import SvgMoleculeHalfFaceted from 'ucla-library-design-tokens/assets/svgs/molecule-half-overlay.svg'
import SvgHatchRight from 'ucla-library-design-tokens/assets/svgs/graphic-hatch-lines.svg'
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

// TODO:
// Enable ResponsiveVideo component: https://uclalibrary.atlassian.net/browse/APPS-2507
// Update parsedMediaComponent method
// import ResponsiveVideo from '@/lib-components/ResponsiveVideo.vue'

// Enable BlockForm component: https://uclalibrary.atlassian.net/browse/APPS-2518
// import BlockForm from '@/lib-components/BlockForm.vue'

import type { BylineItemType, ImageItemType, LocationItemType, SubjectAreaItemType } from '@/types/types'

// Utility functions
import formatEventTimes from '@/utils/formatEventTimes'
import formatEventDates from '@/utils/formatEventDates'
import getSectionName from '@/utils/getSectionName'

const props = defineProps({
  image: {
    type: Object as PropType<ImageItemType>,
    default: () => { },
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  byline: {
    type: Array as PropType<BylineItemType>,
    default: () => [],
  },
  contributors: {
    type: Array,
    default: () => [],
  },
  subjectAreas: {
    type: Array as PropType<SubjectAreaItemType[]>,
    default: () => [],
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
    type: Array as PropType<LocationItemType[] >,
    default: () => [],
  },
  to: {
    // URL to link to, if blank won't link
    type: String,
    default: '',
  },
  category: {
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
  // contact info for Location Detail Page
  email: {
    type: String,
    default: '',
  },
  phone: {
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
  staffDirectoryLink: {
    type: String,
    default: '',
  },
  isEvent: {
    type: Boolean,
    default: false,
  },
  registerEvent: {
    type: Boolean,
    default: false,
  },
  sectionHandle: {
    type: String,
    default: '',
  }
})
// Async Components
const ButtonLink = defineAsyncComponent(() => import('@/lib-components/ButtonLink.vue'))
const RichText = defineAsyncComponent(() => import('@/lib-components/RichText.vue'))
const IconWithLink = defineAsyncComponent(() => import('@/lib-components/IconWithLink.vue'))
const SvgHeadingVector = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/graphic-category-slash.svg'
  ))

// Computed
const sectionName = computed(() => {
  return getSectionName(props.to)
})

const classes = computed(() => {
  return [
    'banner-header',
    { 'hatch-left': !props.alignRight },
              `color-${sectionName.value}`,
  ]
})

const isVideo = computed(() => {
  if (props.image && props.image.src) {
    const fileName = props.image.src.toLowerCase()
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
  else { return false }
})

const parseImage = computed(() => {
  if (isVideo.value)
    return null
  const imageObj = props.image
  // console.log(`image obj: ${JSON.stringify(imageObj)}`)
  return imageObj
})

const parseVideo = computed(() => {
  if (!isVideo.value)
    return null
  let videoObj = {}
  const mainVideo = props.image
  videoObj = {
    videoUrl: mainVideo.src,
    sizes: mainVideo.sizes,
    height: mainVideo.height,
    width: mainVideo.width,
    altText: mainVideo.alt,
    caption: mainVideo.caption,
    poster: mainVideo.poster,
  }

  return videoObj
})

// TODO: Use imported ResponsiveVideo component
const parsedMediaComponent = computed(() => {
  return isVideo.value ? 'responsive-video' : ResponsiveImage
})

const parsedMediaProp = computed(() => {
  return isVideo.value ? parseVideo.value : parseImage.value
})

const parsedDateCreated = computed(() => {
  return format(new Date(props.dateCreated), 'MMMM d, Y')
})

const parsedDate = computed(() => {
  return formatEventDates(props.startDate, props.endDate)
})

const parsedTime = computed(() => {
  if (props.startDate && props.sectionHandle === 'event')
    return formatEventTimes(props.startDate, props.endDate)

  return ''
})

const parsedRatio = computed(() => {
  // If on mobile, change ratio of image
  const output = props.ratio

  return output
})

const gradientClasses = computed(() => {
  return props.category ? 'gradient' : 'gradient-no-category'
})

const parsedLocations = computed(() => {
  return props.locations.map((obj) => {
    let input = 'svg-icon-location'
    if (obj.title === 'Online')
      input = 'svg-icon-virtual'
    return {
      ...obj,
      svg: input,
      to: obj.to != null ? obj.to : '',
    }
  })
})
</script>

<template>
  <div :class="classes">
    <div v-if="category" class="category">
      <SvgHeadingVector class="heading-line" aria-hidden="true" />
      <div class="text" v-html="category" />
    </div>

    <component
      :is="parsedMediaComponent"
      class="media"
      :image="parsedMediaProp"
      :aspect-ratio="parsedRatio"
    >
      <div v-if="!isVideo" :class="gradientClasses" />

      <SvgMoleculeHalfFaceted class="molecule" aria-hidden="true" />
    </component>

    <div class="hatch-box">
      <div class="clipped-box" />
      <div class="hatch">
        <SvgHatchRight class="svg" aria-hidden="true" />
      </div>
    </div>

    <div class="meta">
      <h1 class="title" v-html="title" />

      <RichText v-if="text" class="snippet" :rich-text-content="text" />

      <div
        v-show="
          byline.length
            || subjectAreas.length
            || dateCreated
            || startDate
            || email
            || phone
            || staffDirectoryLink
            || addressLink
        "
        class="meta-text"
      >
        <div
          v-show="
            byline.length
              || subjectAreas.length
              || dateCreated
              || startDate
          "
          class="meta-block"
        >
          <div v-if="byline.length" class="byline-item">
            <div
              v-for="(item, index) in byline"
              :key="index"
              class="byline-item"
            >
              {{ item }}
            </div>
          </div>

          <div v-if="subjectAreas.length" class="subject-areas">
            <div v-for="(item, index) in subjectAreas" :key="index">
              {{ item.title }}
            </div>
          </div>

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
        </div>

        <div
          v-if="email || phone || staffDirectoryLink || addressLink"
          class="contact-info-group"
        >
          <IconWithLink
            v-if="email"
            :text="email"
            icon-name="svg-icon-email"
            :to="`mailto:${email}`"
          />
          <IconWithLink
            v-if="phone"
            :text="phone"
            icon-name="svg-icon-phone"
            :to="`tel:${phone}`"
          />
          <IconWithLink
            v-if="staffDirectoryLink"
            text="View staff directory"
            icon-name="svg-icon-person"
            :to="staffDirectoryLink"
          />
          <IconWithLink
            v-if="addressLink"
            :text="address"
            icon-name="svg-icon-location"
            :to="addressLink"
          />
        </div>

        <div v-if="locations.length" class="location-group">
          <IconWithLink
            v-for="location in parsedLocations"
            :key="`location-${location.id}`"
            :text="location.title"
            :icon-name="location.svg"
            :to="location.to"
          />
        </div>
      </div>

      <ButtonLink
        v-if="to"
        :label="prompt"
        :is-secondary="true"
        class="button"
        :to="to"
      />
    </div>

    <!-- TODO: Enable BlockForm component: https://uclalibrary.atlassian.net/browse/APPS-2518 -->
    <!-- <div v-if="!to && registerEvent" class="block-form-container">
      <BlockForm />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.banner-header {
  z-index: 0;
  position: relative;
  overflow: hidden;
  background-color: var(--color-white);
  max-width: $container-xl-banner + px;

  // Themes
  --color-theme: var(--color-default-cyan-03);
  &.color-visit {
      --color-theme: var(--color-visit-fushia-03);
  }
  &.color-help {
      --color-theme: var(--color-help-green-03);
  }
  &.color-about {
      --color-theme: var(--color-about-purple-03);
  }
  .hatch {
      :deep(.svg__stroke--wayfinder) {
          stroke: var(--color-theme);
      }
  }

  .category {
      color: var(--color-white);
      font-size: 26px;
      text-transform: capitalize;

      position: absolute;
      z-index: 20;
      padding-left: 64px;
      margin-top: 64px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      .heading-line {
          flex-shrink: 0;
          padding-right: 0;
          height: 96px;
      }
      .text {
          border: 1px solid var(--color-white);
          padding: 14px 24px;
          margin-left: -10px;
          clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
          line-height: 1;
          font-weight: #{$font-weight-regular};
          font-size: 26px;
      }
  }
  :deep(.responsive-image),
  .responsive-video {
      max-height: 576px;
      .media {
          object-fit: cover;
      }
  }
  .gradient {
      background: $overlays-overlay-01;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
  .gradient-no-category {
      background: linear-gradient(
          120deg,
          rgba(15, 15, 15, 0) 0,
          rgba(15, 15, 15, 0.2509803922) 67.57%,
          #0f0f0f 120%
      );
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
  .molecule {
      right: 0;
      top: 0;
      bottom: 96px;
      margin: auto;
      position: absolute;
      z-index: 20;
      opacity: 0.3;
      mix-blend-mode: screen;

      height: 70%;
      width: auto;
  }

  --hatch-height: 96px;
  --hatch-width: 28%;
  --hatch-density: 818px;
  .hatch-box {
      width: 100%;
      position: relative;
      z-index: 30;
      overflow: hidden;

      margin-top: calc(-1 * var(--hatch-height));
  }
  .clipped-box {
      max-width: calc(100% - var(--hatch-width));
      background-color: var(--color-white);
      position: relative;
      z-index: 20;
      height: calc(var(--hatch-height) + 2px);

      clip-path: polygon(
          0 0,
          calc(100% - 39px) 0,
          100% 95px,
          100% 102%,
          0 102%
      );
  }
  .hatch {
      height: var(--hatch-height);
      overflow: hidden;
      z-index: 10;
      position: absolute;
      top: 0;
      left: calc(72% - 68px);

      .svg {
          position: relative;
          bottom: 8px;
          width: var(--hatch-density);
          height: auto;
      }
  }

  // Variant
  &.hatch-left {
      .clipped-box {
          margin-left: auto;
          padding-right: 50px;
          padding-left: 100px;
          clip-path: polygon(39px 0, 105% 0, 100% 102%, 0 102%, 0% 95px);
      }
      .hatch {
          right: calc(72% - 68px);
          left: auto;

          .svg {
              transform: scaleX(-1);
          }
      }
      .meta {
          padding-right: 0;
          padding-left: clamp(184px, 35%, 280px);
          margin-left: auto;

          align-content: flex-start;
      }
  }

  .meta {
      padding-right: clamp(184px, 35%, 280px);
      margin-top: -36px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 40;
      max-width: $container-l-main + px;

      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-end;
  }

  .title {
      @include step-4;
      color: var(--color-primary-blue-03);
      margin-bottom: var(--space-m);
  }
  .snippet {
      @include step-0;
      color: var(--color-black);
      margin-bottom: var(--space-m);

      &:last-child,
      :deep(p) {
          margin-bottom: 0;
      }
  }
  .meta-block {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
      margin-bottom: var(--space-m);
      justify-content: space-evenly;
  }

  .schedule-item,
  .date-created {
      display: flex;
      flex-direction: row;

      @include step-0;
      color: var(--color-secondary-grey-04);
  }

  .byline-item,
  .subject-areas {
      display: flex;
      flex-direction: column;

      @include step-0;
      color: var(--color-secondary-grey-04);
  }
  .schedule {
      line-height: 24px;
      text-align: left;
      color: var(--color-primary-blue-03);
      margin-top: var(--space-m);

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }

  .contact-info-group {
      color: var(--color-primary-blue-03);
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: var(--space-m);
  }

  .location-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: var(--space-m);
  }

  .block-form-container {
      padding: 0;
      max-width: 928px;
      margin: auto;
  }

  @media #{$medium} {
      --hatch-height: 74px;
      --hatch-density: 632px;
      .category {
          padding-left: 32px;
          margin-top: 32px;
      }
      .category .text {
          font-size: 20px;
      }
      .category .heading-line {
          height: 80px;
      }
      .hatch {
          left: calc(72% - 84px);
      }
      &.hatch-left .hatch {
          right: calc(72% - 84px);
          left: auto;
      }
      .meta {
          padding-right: clamp(184px, 35%, 300px);
          padding-left: var(--unit-gutter);
          margin-top: -36px;
      }
      &.hatch-left .meta {
          padding-right: var(--unit-gutter);
          margin-top: -36px;
      }
      .title {
          margin-top: var(--space-m);
      }
  }
  @media #{$medium} and (min-width: 928px) {
      .meta {
          max-width: 100%;
      }
  }

  @media #{$small} {
      .media {
          height: 375px;
          max-height: 375px;
      }
      .category {
          padding-left: 16px;
          margin-top: 16px;
          .text {
              padding: 12px 16px;
          }
      }
      .molecule {
          bottom: 10%;
          height: 215px;
          width: auto;
      }
      --hatch-height: 36px;
      --hatch-density: 338px;
      .hatch {
          left: calc(72% - 46px);
      }
      &.hatch-left .hatch {
          right: calc(72% - 46px);
          left: auto;
      }
      .meta {
          width: 100%;
          max-width: 100%;
          margin-top: 0;
          padding-left: 0;
          padding-right: 0;
          position: static;
      }
      &.hatch-left .meta {
          padding-right: 0;
          padding-left: 0;
          width: 100%;
          max-width: 100%;
          margin-top: 0;
      }
  }
}
</style>
