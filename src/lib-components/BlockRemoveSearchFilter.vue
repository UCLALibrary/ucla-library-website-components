<script setup>
// Helpers
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BlockTag from './BlockTag.vue'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'

const { title, iconName, removeIconName } = defineProps({
  title: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    required: false,
  }
})

const emit = defineEmits(['removeBlockFilter'])

const SvgGlyphClose = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-close.svg')
)
const SvgGlyphX = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-ftva-xtag.svg')
)
const removeIcons = {
  SvgGlyphClose,
  SvgGlyphX,
}
const route = useRoute()
const theme = useTheme()

const sectionName = computed(() => {
  return (
    route !== undefined && route.path
      ? getSectionName(route.path)
      : 'default'
  )
})

const classes = computed(() => {
  return ['block-remove-search-filter', theme?.value || '', `color-${sectionName.value}`]
})
// compute remove icon based on theme
const removeIcon = computed(() => {
  switch (theme?.value) {
    case 'ftva':
      return 'SvgGlyphX'
    default:
      return 'SvgGlyphClose'
  }
})

function closeBlockFilter() {
  emit('removeBlockFilter')
}
</script>

<template>
  <button type="button" :class="classes" @click="closeBlockFilter">
    <BlockTag :label="title" :icon-name="iconName" :theme="theme" :is-secondary="true">
      <span class="button-close">
        <component :is="removeIcons[removeIcon]" />
      </span>
    </BlockTag>
  </button>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-remove-search-filter.scss";
@import "@/styles/ftva/_block-remove-search-filter.scss";
</style>
