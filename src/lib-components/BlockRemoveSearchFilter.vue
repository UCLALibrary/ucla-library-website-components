<script setup>
// Helpers
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BlockTag from './BlockTag.vue'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'

const { title, iconName, removeIconName } = defineProps({
  // todo refactor to label here and in parent component that uses blockremovesearchfilter
  title: {
    type: String,
    default: '',
  },
  // new
  iconName: {
    type: String,
    required: false,
  },
  removeIconName: {
    type: String,
    default: 'SvgGlyphClose', // this is the default icon for library-website-nuxt
  },
})

const emit = defineEmits(['removeBlockFilter'])

const SvgGlyphClose = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-close.svg')
)
const removeIcons = {
  SvgGlyphClose
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

function closeBlockFilter() {
  emit('removeBlockFilter')
}
</script>

<template>
  <button type="button" :class="classes" @click="closeBlockFilter">
    <BlockTag :label="title" :icon-name="iconName" :theme="theme" :is-secondary="true">
      <span class="button-close">
        <!-- if blank remove icon, show 'x' character -->
        <span v-if="removeIconName === ''">&#x2715;</span>
        <component :is="removeIcons[removeIconName]" v-else />
      </span>
    </BlockTag>
  </button>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/themes.scss";
</style>
