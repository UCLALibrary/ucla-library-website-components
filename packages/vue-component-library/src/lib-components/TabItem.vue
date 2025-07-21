<script setup>
import { computed, inject } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { content, icon, title } = defineProps({
  title: {
    type: String,
    default: '',
  },

  icon: {
    type: String,
    default: ''
  },

  content: {
    type: String,
    default: '',
  },
})

const activeTabTitle = inject('activeTabTitle')

const theme = useTheme()

const classes = computed(() => {
  return ['tab-item', theme?.value || '']
})
</script>

<template>
  <div v-show="title === activeTabTitle" :class="classes">
    <div
      v-text="content"
    />
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/default/_tab-item.scss";
@use "@/styles/ftva/_tab-item.scss";
</style>
