<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { title, text, impactNumber } = defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  impactNumber: {
    type: String,
    default: '',
  },
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['impact-number-card', theme?.value || '']
})
</script>

<template>
  <li :class="classes">
    <div class="card">
      <div
        v-if="impactNumber"
        class="impact-number"
        v-html="impactNumber"
      />
      <div v-if="title" class="title" v-html="title" />
    </div>
    <div v-if="text" class="text" v-html="text" />
  </li>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_impact-number-card.scss";
@use "@/styles/ftva/_impact-number-card.scss";
</style>
