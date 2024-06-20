<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'

// PROPS & DATA
const { label, iconName, isSecondary } = defineProps({
  label: {
    type: String,
    default: '' // Text displayed on the tag or pill.
  },
  iconName: {
    type: String,
    required: false
  },
  isSecondary: {
    type: Boolean,
    default: false
  }
})

// THEME
const theme = useTheme()

// TODO replace with real FTVA icons from Serena when available
const IconCollapse = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-collapse.svg')
)
const SvgIconList = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-list.svg')
)
const SvgIconVideo = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-video.svg')
)
// TODO make enum to go along with this?
const BlockTagIcons: any = {
  IconCollapse,
  SvgIconList,
  SvgIconVideo
}

// if we want to use theme pattern based on passing classes prop to each component
const parsedClasses = computed(() => {
  // (maybe classes.join() if need an array)
  return ['block-tag', theme?.value || '', isSecondary ? '' : 'primary']
})
</script>

<template>
  <span :class="parsedClasses">
    <component :is="BlockTagIcons[iconName]" v-if="iconName" class="svg" aria-hidden="true" />
    <div class="label">
      {{ label }}
    </div>
    <!-- slot for 'x' button or any additional content parent needs to display in tag -->
    <slot />
  </span>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
