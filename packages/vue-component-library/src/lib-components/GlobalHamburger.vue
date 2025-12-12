<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const props = defineProps<GlobalHamburgerProps>()

// Emits
const emit = defineEmits(['toggle-menu'])

// Data
const theme = useTheme()

// Props
interface GlobalHamburgerProps {
  isOpened: boolean
}

// Computed
const classes = computed(() => {
  return [
    'global-hamburger',
    theme?.value || '',
    {
      'is-opened': props.isOpened
    }
  ]
})

// Methods
function onClick() {
  emit('toggle-menu')
}
</script>

<template>
  <div
    :class="classes"
    @click="onClick"
  >
    <div class="hamburger-lines">
      <span class="line line-1" />
      <span class="line line-2" />
      <span class="line line-3" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/dlc/_global-hamburger.scss";
</style>
