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

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Data
const theme = useTheme()

// Props
type GlobalHamburgerProps = {
  isOpened: boolean
}

const props = defineProps<GlobalHamburgerProps>()

// Emits
const emit = defineEmits(['toggle-menu'])

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
const onClick = () => {
  emit('toggle-menu')
}

</script>

<style scoped lang="scss">
@import "@/styles/dlc/_global-hamburger.scss";
</style>
