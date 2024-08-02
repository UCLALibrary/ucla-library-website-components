<script
  setup
  lang="ts"
>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { PropType } from 'vue'
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import { useTheme } from '@/composables/useTheme'

// COMPONENTS
import ResponsiveImage from '@/lib-components/ResponsiveImage.vue'

import type { LocationItemType, MediaItemType } from '@/types/types'

const props = defineProps({
  image: {
    type: Object as PropType<MediaItemType>,
    default: () => { },
  },
  imageAspectRatio: {
    type: Number,
    default: 0,
  },
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  startDate: {
    type: String,
    default: '',
  },
  startTime: {
    type: String,
    default: '',
  },
  locations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  tagLabels: {
    type: Array as PropType<EventFiltersItemType[]>,
    default: () => [],
  },
  color: {
    type: String,
    default: '', // This will be "visit", "about", "help".
  },
  isVertical: {
    type: Boolean,
    default: true,
  },
  cardIsLink: {
    type: Boolean,
    default: false, // If this is true, make entire card clickable instead of just title
  },
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
    theme?.value || ''
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
      />
      <div
        v-else
        class="molecule-no-image"
      >
        <MoleculePlaceholder
          class="molecule"
          aria-hidden="true"
          :aspect-ratio="imageAspectRatio"
        />
      </div>
    </div>
    <h3>{{ title }}</h3>




  </li>
</template>

<style
  lang="scss"
  scoped
>
.block-card-with-image-ftva {
  .card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }

  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
}

@import "@/styles/themes.scss";
</style>
