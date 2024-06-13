<script setup>
// Helpers
import { defineAsyncComponent } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import BlockTag from './BlockTag.vue'
import getSectionName from '@/utils/getSectionName'

const { title, iconName, removeIconName, theme } = defineProps({
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
  theme: {
    type: String,
    required: false
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
  return ['block-remove-search-filter', theme || '', `color-${sectionName.value}`]
})

function closeBlockFilter() {
  emit('removeBlockFilter')
}
</script>

<template>
  <button type="button" :class="classes" @click="closeBlockFilter">
    <BlockTag :label="title" :icon-name="iconName" :theme="theme" :is-secondary="true">
      <span class="button-close">
        <!-- if no remove icon, show 'x' character -->
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
/* // Need imports to access ftva tokens
// can be removed once this file is included here by UX team
// https://github.com/UCLALibrary/design-tokens/blob/main/scss/app.scss */
@import "ucla-library-design-tokens/scss/_tokens-ftva";

.block-remove-search-filter {
  padding: 0px;
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

/* FTVA theme */
.ftva.block-remove-search-filter {
  align-items: center;

  :deep(.block-tag) {
    background: #fff;
    padding: inherit 18px;
    border-color: $subtitle-grey;
    border-radius: 25px;
    font-size: 18px;
    height: 40px;
  }

  .button-close {
    font-size: 10px;
    font-weight: bold;
    line-height: 100%;
  }

  &:hover {
    :deep(.block-tag) {
      border-color: $accent-blue;
      background-color: $accent-blue;

      .label {
        color: #fff;
      }
    }

    .button-close {
      color: #fff;
    }
  }
}
</style>
