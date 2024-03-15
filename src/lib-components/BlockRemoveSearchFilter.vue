<script setup>
// Helpers
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import getSectionName from '@/utils/getSectionName'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  filterType: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },

},)

const emit = defineEmits(['removeBlockFilter'])

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
  emit('removeBlockFilter', props.index)
}
</script>

<template>
  <button
    type="button"
    :class="classes"
    @click="closeBlockFilter"
  >
    <span class="title">{{ title }}</span>

    <span class="button-close">
      <SvgGlyphClose class="svg-glyph-close" />
    </span>
  </button>
</template>

<style
  lang="scss"
  scoped
>
.block-remove-search-filter {
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
  line-height: 100%;

  .title {
    margin-right: 8px;
    color: #032d5b;
  }

  &.color-default {
    --color-border: var(--color-default-cyan-03);

    &:hover {
      background-color: transparentize(($default-cyan-03), 0.9);
    }
  }

  &.color-help {
    --color-border: var(--color-help-green-03);

    &:hover {
      background-color: transparentize(($help-green-03), 0.9);
    }
  }

  &.color-visit {
    --color-border: var(--color-visit-fushia-03);

    &:hover {
      background-color: transparentize(($visit-fushia-03), 0.9);
    }
  }

  &.color-about {
    --color-border: var(--color-about-purple-03);

    &:hover {
      background-color: transparentize(($about-purple-03), 0.9);
    }
  }
}
</style>
