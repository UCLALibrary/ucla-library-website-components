<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'

// PROPS & DATA
const { label, iconName, isSecondary, isHighlighted } = defineProps({
  label: {
    type: [String, Array],
    default: '', // Text displayed on the tag or pill.
  },
  iconName: {
    type: String,
    required: false,
  },
  isSecondary: {
    type: Boolean,
    default: false,
  },
  isHighlighted: {
    type: Boolean,
    default: false,
  },
})

//  THEME
const theme = useTheme()

// Async import all FTVA icons that can appear here
const SvgIconGuest = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-ftva-guest.svg')
)
const SvgIconFilm = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-ftva-film.svg')
)
const SvgIconTV = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-ftva-tv.svg')
)
const SvgIconFilmreel = defineAsyncComponent(
  () =>
    import('ucla-library-design-tokens/assets/svgs/icon-ftva-filmreel.svg')
)
const SvgIconDigital = defineAsyncComponent(
  () =>
    import(
      'ucla-library-design-tokens/assets/svgs/icon-ftva-digitalformat.svg'
    )
)
const SvgIconOnline = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-ftva-online.svg')
)
const SvgIconFamilyFriendly = defineAsyncComponent(
  () =>
    import(
      'ucla-library-design-tokens/assets/svgs/icon-ftva-familyfriendly.svg'
    )
)

const SvgArrowRight = defineAsyncComponent(
  () => import('ucla-library-design-tokens/assets/svgs/icon-right-carat.svg')
)
// TODO make enum to go along with this?
const BlockTagIcons: any = {
  SvgIconGuest,
  SvgIconFilm,
  SvgIconTV,
  SvgIconFilmreel,
  SvgIconDigital,
  SvgIconOnline,
  SvgIconFamilyFriendly,
}

const classes = computed(() => {
  return [
    'block-tag',
    theme?.value || '',
    isSecondary ? '' : 'primary',
    isHighlighted ? 'highlighted' : '',
  ]
})

const parsedLabel = computed(() => {
  if (Array.isArray(label))
    return label

  return [label]
})
</script>

<template>
  <span :class="classes">
    <component
      :is="BlockTagIcons[iconName]"
      v-if="iconName"
      class="svg"
      aria-hidden="true"
    />
    <template v-for="(item, index) in parsedLabel" :key="`label-${index}`">
      <div class="label" v-html="item" />
      <component
        :is="SvgArrowRight"
        v-if="index !== parsedLabel.length - 1"
        class="icon-arrow"
        aria-hidden="true"
      />
    </template>
    <!-- slot for 'x' button or any additional content parent needs to display in tag -->
    <slot />
  </span>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-tag.scss";
@import "@/styles/ftva/_block-tag.scss";
@import "@/styles/dlc/_block-tag.scss";
</style>
