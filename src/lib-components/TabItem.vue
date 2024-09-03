<script setup>
import { computed, inject } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { title, iconName } = defineProps({
  title: {
    type: String,
    default: '',
  },

  iconName: { 
    type: String,
    default: ''
  }
})

const selectedTitle = inject('selectedTitle')

const theme = useTheme()

const classes = computed(() => {
  return ['tab-item', theme?.value || '']
})
</script>

<template>
  <div v-show="title === selectedTitle" :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-item.scss";
@import "@/styles/ftva/_tab-item.scss";
</style>
