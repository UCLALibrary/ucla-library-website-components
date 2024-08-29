<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { title } = defineProps({
  title: {
    type: String,
    default: 'TabName',
  },
})
const isActive = ref(true)

const theme = useTheme()

const classes = computed(() => {
  return ['tab-item', theme?.value || '']
})
</script>

<template>
  <div v-show="isActive" :class="classes">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/default/_tab-item.scss";
@import "@/styles/ftva/_tab-item.scss";
</style>
