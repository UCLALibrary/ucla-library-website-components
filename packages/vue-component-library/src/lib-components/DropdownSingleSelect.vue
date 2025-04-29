<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SvgCheck from 'ucla-library-design-tokens/assets/svgs/icon-ftva-dropdown_check.svg'
import type { PropType } from 'vue'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

interface Option { label: string; value: string }

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

// Set up the emit function with two supported events:
// 1. 'update:modelValue' — used for v-model binding
// 2. 'selectionChanged' — custom event for additional tracking
// The `as` cast ensures TypeScript enforces correct usage:
// - Only these two events can be emitted
// - The payload must always be a string
const emit = defineEmits(['update:modelValue', 'selectionChanged']) as (event: 'update:modelValue' | 'selectionChanged', value: string) => void

function onSelect(value: string) {
  emit('update:modelValue', value)
  emit('selectionChanged', value)
}

// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['single-select-dropdown', theme?.value || '']
})

const isMobile = ref(false)

onMounted(() => {
  const { width } = useWindowSize()
  watch(
    width,
    (newWidth) => {
      isMobile.value = newWidth <= 750
    },
    { immediate: true }
  )
})

// SELECTED LABEL DISPLAY
const selectedLabel = computed(() => {
  const match = props.options.find((opt: Option) => opt.value === props.modelValue)
  return match ? `: ${match.label}` : '(none selected)'
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template #buttonLabel>
        <span class="filter-summary">
          {{ label }} {{ selectedLabel }}
        </span>
      </template>

      <template #dropdownItems="{ removeOverlay }">
        <div class="pills">
          <label
            v-for="option in options"
            :key="option.value"
            class="pill-label"
          >
            <input
              type="radio"
              class="pill-radio"
              :value="option.value"
              :checked="modelValue === option.value"
              :disabled="disabled"
              @change="() => { onSelect(option.value); removeOverlay() }"
            >
            <div class="pill-option">
              <span class="pill-content">
                {{ option.label }}
              </span>
              <SvgCheck
                v-if="modelValue === option.value"
                class="check-icon"
              />
            </div>
          </label>

          <!-- View All option -->
          <label class="pill-label view-all-option">
            <input
              type="radio"
              class="pill-radio"
              value=""
              :checked="modelValue === ''"
              :disabled="disabled"
              @change="() => { onSelect(''); removeOverlay() }"
            >
            <div class="pill-option">
              <span class="pill-content">View All</span>
              <SvgCheck
                v-if="modelValue === ''"
                class="check-icon"
              />
            </div>
          </label>
        </div>
      </template>
    </MobileDrawer>
  </div>
</template>

<style scoped lang="scss">
.single-select-dropdown {
  width: 380px;

  :deep(.dropdown-wrapper) {
    width: 100%;
  }

  .filter-summary {
    @include ftva-button;
    color: $medium-grey;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .pills {
    display: flex;
    flex-direction: column;
    padding: 1px;
  }

  .pill-radio {
    display: none;
  }

  .pill-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
  }

  .pill-content {
    @include ftva-button;
    line-height: 1.5;
    color: $medium-grey;
    gap: 0.5rem;
    padding: 2px 10px;
  }

  .check-icon {
    width: 1rem;
    height: 1rem;
  }

  .view-all-option {
    border-top: 1px solid #e0e0e0;
    margin-top: 10px;
    padding-top: 10px;

    &:hover {
      background-color: white;
    }

    .pill-option:hover {
      background-color: #f1f1f1;
    }
  }

  :deep(.mobile-drawer .mobile-button) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include ftva-button;
    color: $medium-grey;
    padding: 10px;
    border: 1px solid $medium-grey;
    width: 100%;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  :deep(.toggle-triangle-icon) {
    margin-right: 28px;
  }

  :deep(.mobile-drawer .button-dropdown-modal-wrapper) {
    width: 100%;
    border-top: 1px solid #f1f1f1;
    padding: 25px 30px;
    margin: 0;
  }

  @media #{$small} {
    width: 100%;

    :deep(.svg__icon-close.svg-glyph-close) {
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 1;
    }

    .filter-summary {
      background-color: #fff;
      border: 2px solid $accent-blue;
    }
  }
}
</style>
