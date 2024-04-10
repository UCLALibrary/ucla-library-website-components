<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: 'white',
  },
  level: {
    type: Number,
    default: 0,
  },
})
console.log('Section Header component initialized')
const levelInjected = inject('sectionLevel', 1)

const levelComputed = computed(() => {
  return Number(props.level || levelInjected)
})

const classes = computed(() => {
  return ['section-header', `section-header${levelComputed.value}`]
})

const titleTag = computed(() => {
  return levelComputed.value >= 1 && levelComputed.value <= 6
    ? `h${levelComputed.value}`
    : 'h6'
})
</script>

<template>
  <component
    :is="titleTag"
    :class="classes"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.section-header {
  color: var(--color-primary-blue-03);
}

h1 {
  font-family: var(--font-primary);
  font-size: var(--step-5);
  font-weight: 400;
}

h2 {
  font-family: var(--font-primary);
  font-size: var(--step-4);
  font-weight: 400;
}

h3 {
  font-family: var(--font-primary);
  font-size: var(--step-3);
  font-weight: 400;
}

h4 {
  font-family: var(--font-primary);
  font-size: var(--step-3);
  font-weight: 400;
}

h5 {
  font-family: var(--font-primary);
  font-size: var(--step-3);
  font-weight: 400;
}

h6 {
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 500;
}
</style>
