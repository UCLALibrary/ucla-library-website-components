<script setup>
// Imports
import { defineEmits, defineProps } from 'vue'

// Props
const props = defineProps({
  pageView: {
    type: String,
    default: 'list',
    validator: value => ['grid', 'list'].includes(value),
  },
})

// Emits
const emit = defineEmits(['update:pageView'])

// Methods
function setView(view) {
  if (view !== props.pageView)
    emit('update:pageView', view)
}
</script>

<template>
  <div class="button-page-view-toggle">
    <button
      class="button-page-view"
      :class="{ active: pageView === 'grid' }"
      type="button"
      :aria-pressed="pageView === 'grid'"
      aria-label="Grid view"
      @click="setView('grid')"
    >
      <!-- Slots for while we figure out how to import svgs into the ucla-library-design-tokens -->
      <slot name="grid">
        <div
          class="placeholder-square"
          v-text="'Grid'"
        />
      </slot>
    </button>
    <button
      class="button-page-view"
      :class="{ active: pageView === 'list' }"
      type="button"
      :aria-pressed="pageView === 'list'"
      aria-label="List view"
      @click="setView('list')"
    >
      <slot name="list">
        <div
          class="placeholder-square"
          v-text="'List'"
        />
      </slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button-page-view-toggle {
  display: flex;
  gap:2px;

    .button-page-view {
        display: flex;
        align-items: center;
        opacity: 0.5;

        padding:0;

        transition: opacity 0.2s ease-out;

        .placeholder-square {
            color: var(--color-white);
            width: 40px;
            height: 40px;
            background-color: var(--color-primary-blue-05);
        }

        &.active {
            opacity: 1;
        }

        // Hover states
        @media #{$has-hover} {
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>
