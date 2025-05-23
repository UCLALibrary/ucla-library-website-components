<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
import SvgIconFtvaDropTriangle from 'ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg'
import SvgGlyphClose from 'ucla-library-design-tokens/assets/svgs/icon-close.svg'
import { useTheme } from '@/composables/useTheme'

// DATA
const isDropdownExpanded = ref(false)
const isMobile = ref(false)

// FUNCTIONS
// Computed Methods
const isDropdownExpandedClass = computed(() => [
  { 'is-expanded': isDropdownExpanded.value },
])
// Regular Methods
function handleDropdownExpansion() {
  return (isDropdownExpanded.value = !isDropdownExpanded.value)
}

function closeDropdownOnClickOutside() {
  isDropdownExpanded.value = false
}

function removeOverlay() {
  isDropdownExpanded.value = false
}

// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['mobile-drawer', theme?.value || '', { 'is-expanded': isDropdownExpanded.value }]
})

onMounted(() => {
  const { width } = useWindowSize()
  watch(width, (newWidth) => {
    isMobile.value = newWidth <= 750
  }, { immediate: true })
})
</script>

<template>
  <div :class="parsedClasses">
    <div v-on-click-outside="closeDropdownOnClickOutside" class="dropdown-wrapper">
      <div class="dropdown-overlay" :class="isDropdownExpandedClass" />
      <button
        class="mobile-button"
        :class="isDropdownExpandedClass"
        @click="handleDropdownExpansion"
      >
        <!-- Drawer Button Label Here
          Note: icons can be included, clicking button will open drawer -->
        <span class="button-inner-wrapper">
          <slot name="buttonLabel" />
        </span>

        <span
          :class="isDropdownExpandedClass"
          class="toggle-triangle-icon"
        >
          <SvgIconFtvaDropTriangle />
        </span>
      </button>

      <div v-if="isDropdownExpanded" class="button-dropdown-modal">
        <SvgGlyphClose
          v-if="isMobile"
          class="svg-glyph-close"
          @click="removeOverlay"
        />
        <div
          class="button-dropdown-modal-wrapper"
          :class="isDropdownExpandedClass"
        >
          <!-- Dropdown Items slot in here -->
          <slot name="dropdownItems" :remove-overlay="removeOverlay" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_mobile-drawer.scss";
@import "@/styles/ftva/_mobile-drawer.scss";
</style>
