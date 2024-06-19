<script setup>
// Helpers
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getSectionName from '@/utils/getSectionName'
import { useTheme } from '@/composables/useTheme'
import 'ftva-theme'

const { color, isHalfWidth } = defineProps({
  color: {
    type: String,
    default: '', // "VISIT", "ABOUT", "HELP", "FTVA"
  },
  isHalfWidth: {
    type: Boolean,
    default: false,
  }
})

const route = useRoute()
// console.log('does this route exist?', route)

const sectionName = computed(() => color || (route !== undefined && route.path
  ? getSectionName(route.path)
  : 'default'))

const classes = computed(() => [
  'divider-way-finder',
  `color-${sectionName.value}`, { 'is-half-width': isHalfWidth },
])

/* console.log("section name computed", sectionName.value)
console.log("color prop", color) */
</script>

<template>
  <div :class="classes">
    <div class="solid" />
    <div class="dotted" />
  </div>
</template>

<style
  lang="scss"
  scoped
>
.divider-way-finder {
  &.color-help {
    --color-border: $help-green-03;
  }

  &.color-visit {
    --color-border: $visit-fushia-03;
  }

  &.color-about {
    --color-border: $about-purple-03;
  }

  &.color-ftva {
    --color-border: $accent-blue
  }

  &.color-default {
    --color-border: $default-cyan-03;
  }

  &.search-margin {
    margin: var(--space-2xl) auto;
  }

  &.is-half-width {
    max-width: calc((100% - 16px) / 2);
  }

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: space-between;
  align-items: center;

  max-width: $container-l-main (+ px);
  margin: var(--space-2xl) auto;

  .solid {
    height: 1px;
    width: 96px;
    margin-right: 17px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: var(--color-border, var(--color-default-cyan-03));
  }

  .dotted {
    border-bottom: 2px dotted $secondary-grey-02;
    height: 1px;

    flex: 1 1 auto;
  }
}
</style>
