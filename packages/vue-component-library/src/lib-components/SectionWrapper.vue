<script lang="ts" setup>
import { computed, inject, provide } from 'vue'
import SectionHeader from '@/lib-components/SectionHeader.vue'
import RichText from '@/lib-components/RichText.vue'
import kebabCase from '@/utils/kebabCase'
import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  sectionTitle: {
    type: String,
    default: '',
  },
  sectionSummary: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'white',
  },
  level: {
    type: Number,
    default: 0,
  },
  noMargins: {
    type: Boolean,
    default: false,
  },
  noConstraints: {
    type: Boolean,
    default: false,
  },
})
const parentLevel = inject('sectionLevel', 1)
const ancestorSetMargins = inject('ancestorSetMargins', false)

// THEME
const theme = useTheme()

const levelComputed = computed(() => {
  return Number(props.level || parentLevel + 1)
})
const setMargins = computed(() => {
  return !(props.noMargins || ancestorSetMargins)
})

// DYNAMIC HEADING LEVELS
// sectionLevel: heading depth for this section's own title (SectionHeader).
provide('sectionLevel', levelComputed.value)
// contentHeadingLevel: heading depth for child content (e.g. card titles).
// Only bumped when sectionTitle is set — if this wrapper has no title, children
// use the same level so the outline doesn't skip a heading level.
provide(
  'contentHeadingLevel',
  props.sectionTitle ? levelComputed.value + 1 : levelComputed.value,
)
provide('ancestorSetMargins', ancestorSetMargins || setMargins.value)

const classes = computed(() => {
  return [
    'section-wrapper',
        `section-wrapper${levelComputed.value}`,
        `theme-${props.theme}`,
        { 'top-level': setMargins.value },
        { 'no-constraints': props.noConstraints },
        theme?.value || '',
  ]
})

const getId = computed(() => {
  return kebabCase(props.sectionTitle)
})
</script>

<template>
  <section :class="classes">
    <a v-if="sectionTitle" :id="getId" />
    <div v-if="sectionTitle" class="section-header">
      <SectionHeader
        v-if="sectionTitle"
        class="section-title"
        v-text="sectionTitle"
      />

      <!-- section-link will not display if slot does not have content -->
      <div v-if="$slots['top-right']" class="section-link">
        <slot name="top-right" class="" />
      </div>

      <RichText
        v-if="sectionSummary"
        class="section-summary"
        v-html="sectionSummary"
      />
    </div>

    <slot />
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_section-wrapper.scss" as *;
@use "@/styles/ftva/_section-wrapper.scss" as *;
@use "@/styles/dlc/_section-wrapper.scss" as *;
</style>
