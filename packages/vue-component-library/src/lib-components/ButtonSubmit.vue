<script setup>
import { computed, defineAsyncComponent, useSlots } from 'vue'
// Components
import IconSearch from 'ucla-library-design-tokens/assets/svgs/icon-search.svg'

const slots = useSlots()
const emit = defineEmits(['click'])

// Computeds
const hasSlot = computed(() => {
  return !!slots.default
})

// Methods
function handleClick() {
  emit('click')
}
</script>

<template>
    <button
      class="button-submit"
      type="submit"
      @click="handleClick"
    >
      <slot v-if="hasSlot" />
      <IconSearch v-else  />
    </button>
</template>

<style lang="scss" scoped>
.button-submit {
  padding: 0;

  // Target SVGs
  :deep(svg path){
    fill: var(--color-primary-blue-03);
    transition: fill 0.3s ease-in-out;
  }
  
  // Hovers
  @media #{$has-hover} {
    &:hover {
      :deep(svg path) {
        fill: var(--color-primary-blue-02);
      }
    }
  }
}
</style>
