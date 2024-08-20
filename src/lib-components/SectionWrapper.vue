<script setup>
import { computed, inject, provide } from 'vue'
import SectionHeader from '@/lib-components/SectionHeader.vue'
import RichText from '@/lib-components/RichText.vue'
import kebabCase from '@/utils/kebabCase'

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
})
// console.log('SectionWrapper code initialized')
const parentLevel = inject('sectionLevel', 1)
const ancestorSetMargins = inject('ancestorSetMargins', false)
// console.log('ancestorSetMargins', ancestorSetMargins)

const levelComputed = computed(() => {
  // console.log('SectionWrapper levelComputed', Number(props.level || parentLevel + 1))
  return Number(props.level || parentLevel + 1)
})
const setMargins = computed(() => {
  // console.log('SectionWrapper setMargins', props.noMargins || ancestorSetMargins)
  return !(props.noMargins || ancestorSetMargins)
})

provide('sectionLevel', levelComputed.value)
provide('ancestorSetMargins', ancestorSetMargins || setMargins.value)

const classes = computed(() => {
  return [
    'section-wrapper',
    `section-wrapper${levelComputed.value}`,
    `theme-${props.theme}`,
    { 'top-level': setMargins.value },
  ]
})

const getId = computed(() => {
  // console.log('SectionWrapper getId', kebabCase(props.sectionTitle))
  return kebabCase(props.sectionTitle)
})
</script>

<template>
  <section :class="classes">
    <a
      v-if="sectionTitle"
      :id="getId"
    />
    <div
      v-if="sectionTitle"
      class="section-header"
    >
      <SectionHeader
        v-if="sectionTitle"
        class="section-title"
        v-text="sectionTitle"
      />

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
@import "@/styles/default/_section-wrapper.scss";
@import "@/styles/ftva/_section-wrapper.scss";
</style>
