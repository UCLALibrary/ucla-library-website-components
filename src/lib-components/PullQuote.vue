<script lang="ts" setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme';
// COMPONENTS
import RichText from './RichText.vue'

const { text, attribution } = defineProps({
  text: {
    type: String,
    default: '',
  },
  attribution: {
    type: String,
    default: '',
  },
})

const theme = useTheme()
const classes = computed(() => {
  return ['pull-quote', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <RichText v-if="text" class="quote" :rich-text-content="text" />
    <div v-if="attribution" class="attribution-block">
      <span class="dash">—</span>
      <span v-if="attribution" class="attribution" v-html="attribution" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_pull-quote.scss";
@import "@/styles/ftva/_pull-quote.scss";
</style>
