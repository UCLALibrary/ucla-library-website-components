<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { PropType } from 'vue'

// THEME
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import { useTheme } from '@/composables/useTheme'

// SVGs

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'
import CardMeta from '@/lib-components/CardMeta.vue'

// TYPESCRIPT
import type { LocationItemType, MediaItemType } from '@/types/types'

// PROPS & DATA
const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  to: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
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
  date: {
    type: String,
    default: '',
  },
  ongoing: {
    type: Boolean,
    default: false,
  },
  isVertical: {
    type: Boolean,
    default: true,
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  text: {
    type: String,
    default: '',
  },
  bylineOne: {
    type: String,
    default: '',
  },
  bylineTwo: {
    type: String,
    default: '',
  },
  color: {
    type: String as PropType<'visit' | 'about' | 'help' | 'horizontalScroll' | 'blueBackground' | 'whiteBackground' | 'noBackground' | ''>,
    default: '',
  },
  sectionHandle: {
    type: String,
    default: '',
  },
  cardIsLink: {
    type: Boolean,
    default: false, // If this is true, make entire card clickable instead of just title
  },
  dateCreated: {
    type: String,
    default: ''
  }
})

// TOGGLE CLICKABLE BEHAVIOR
const router = useRouter()
function handleClick() {
  if (props.cardIsLink && props.to) {
    router.push({
      path: props.to
    })
  }
  // if card is not a link, do nothing on click
}

// THEME
const theme = useTheme()
const classes = computed(() => {
  return [
    'block-highlight', // legacy name already used in library-website-nuxt and MEAP styles, do not change
    { 'is-vertical': props.isVertical },
    theme?.value || '',
    props.color
  ]
})
// dates are formatted in the short format for ftva only
const parsedDateFormat = computed(() => {
  return theme?.value === 'ftva' ? 'short' : 'long'
})
</script>

<template>
  <li
    :class="classes"
    @click="handleClick"
  >
    <div class="image-container">
      <ResponsiveImage
        v-if="image"
        :media="image"
        :aspect-ratio="imageAspectRatio"
        class="image"
      >
        <template
          v-if="$slots.toptext"
          #toptext
        >
          <slot name="toptext" />
        </template>
      </ResponsiveImage>
      <div
        v-else
        class="molecule-no-image"
      >
        <MoleculePlaceholder
          class="molecule"
          aria-hidden="true"
        />
      </div>
    </div>
    <CardMeta
      class="card-meta-items"
      :to="to"
      :category="category"
      :title="title"
      :start-date="startDate"
      :end-date="endDate"
      :date-format="parsedDateFormat"
      :ongoing="ongoing"
      :text="text"
      :byline-one="bylineOne"
      :byline-two="bylineTwo"
      :locations="locations"
      :alternative-full-name="alternativeFullName"
      :language="language"
      :section-handle="sectionHandle"
      :date-created="dateCreated"
      :date="date"
    >
      <template
        v-if="$slots.customTitle"
        #customTitle
      >
        <slot name="customTitle" />
      </template>

      <template
        v-if="$slots.customDescription"
        #customDescription
      >
        <slot name="customDescription" />
      </template>
    </CardMeta>
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-card-with-image.scss";
@import "@/styles/ftva/_block-card-with-image.scss";
</style>
