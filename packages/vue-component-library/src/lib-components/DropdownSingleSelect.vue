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
const isMobile = ref(false)
const parsedClasses = computed(() => {
  return ['single-select-dropdown', theme?.value || '']
})

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
        <div class="filter-summary">
          {{ label }} {{ selectedLabel }}
        </div>
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
// @import "@/styles/default/_filters-dropdown.scss";
// @import "@/styles/ftva/_filters-dropdown.scss";

.dropdown-single-select {
  width: 380px;

  :deep(.dropdown-wrapper) {
    width: 100%;
  }

  .filter-summary {
    @include ftva-button;
    color: $medium-grey;
  }

  .pills {
    display: flex;
    flex-direction: column;
    padding: 1px
  }

  .pill-radio {
    display: none;
  }

  :deep(.mobile-drawer) {
    @include ftva-button;

    .mobile-button {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      padding: 5px;
      border: none;

      &:hover {
        background-color: #f1f1f1; //off-white
        cursor: pointer;
      }

      // text
      .button-inner-wrapper {
        margin: 16px 0 16px 28px;
      }
    }
  }

  :deep(.toggle-triangle-icon) {
    margin-right: 28px;
  }

  // dropdown
  :deep(.mobile-drawer .button-dropdown-modal-wrapper) {
    width: 100%;
    border: none;
    border-top: 1px solid #f1f1f1; //off-white
    margin: 0;
    padding: 25px 30px;
  }

  // dropdown text
  label {

    &:hover {
      background-color: #f1f1f1; //off-white
      cursor: pointer;
    }
  }

  .pill-content {
    @include ftva-button;
    line-height: 1.5;
    color: $medium-grey;
    gap: 0.5rem;
    padding: 2px 10px;
  }

  .pill-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
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

  @media #{$small} {
    width: 100%;

    :deep(.svg__icon-close.svg-glyph-close) {
      position: absolute;
      right: 5px;
      top: 5px;

      z-index: 1;
    }
  }
}
</style>
