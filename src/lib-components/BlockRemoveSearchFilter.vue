<script setup>
// Helpers
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import BlockTag from './BlockTag.vue'
import getSectionName from '@/utils/getSectionName'

const props = defineProps({
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
  removeIcon: {
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

const sectionName = computed(() => {
  return (
    route !== undefined && route.path
      ? getSectionName(route.path)
      : 'default'
  )
})

const classes = computed(() => {
  return ['block-remove-search-filter', `color-${sectionName.value}`]
})

function closeBlockFilter() {
  emit('removeBlockFilter')
}
</script>

<template>
  <button type="button" :class="classes" @click="closeBlockFilter">
    <BlockTag :label="title" :icon-name="iconName">
      <span class="button-close">
        <!-- if no remove icon, show 'x' character -->
        <span v-if="removeIcon === ''">&#x2715;</span>
        <component :is="removeIcons[removeIcon]" v-else />
      </span>
    </BlockTag>
  </button>
</template>

<style
  lang="scss"
  scoped
>
.block-remove-search-filter {
  padding: 0px;
  /* old styles
  padding: 12px;
  display: flex;
  flex-direction: row;
  border: 1.5px var(--color-border) solid;
  background-color: #ffffff;
  border-radius: 4px;
  align-items: center;
  width: fit-content;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%; */

  .button-close {
    margin-left: 8px;
  }

  &.color-default {
    :deep(.block-tag) {
      border: 1.5px var(--color-default-cyan-03) solid;
    }
    &:hover {
      background-color: transparentize(($default-cyan-03), 0.9);
    }
  }

  &.color-help {
    :deep(.block-tag) {
      border: 1.5px var(--color-help-green-03) solid;
    }
    &:hover {
      background-color: transparentize(($help-green-03), 0.9);
    }
  }

  &.color-visit {
    :deep(.block-tag) {
        border: 1.5px var(--color-visit-fushia-03) solid;
      }
    &:hover {
      background-color: transparentize(($visit-fushia-03), 0.9);
    }
  }

  &.color-about {
    :deep(.block-tag) {
        border: 1.5px var(--color-about-purple-03) solid;
      }
    &:hover {
      background-color: transparentize(($about-purple-03), 0.9);
    }
  }
}
</style>
