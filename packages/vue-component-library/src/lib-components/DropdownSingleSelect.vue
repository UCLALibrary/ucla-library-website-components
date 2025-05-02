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
  fieldName: { // name of field which will be used to sort or search on
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
// const emit = defineEmits(['update:modelValue', 'selectionChanged']) as (event: 'update:modelValue' | 'selectionChanged', value: string) => void
const emit = defineEmits(['update-display'])
// V-MODEL DATA
interface SelectedFiltersTypes {
  [key: string]: string
}
const selectedFilters = defineModel('selectedFilters', { type: Object as PropType<SelectedFiltersTypes>, required: true, default: {} })

function onSelect(/* string: value */) {
  // emit('update:modelValue', value)
  // selectedFilters.value[props.fieldName] = value
  emit('update-display', selectedFilters.value)
}

// THEME
const theme = useTheme()
const parsedClasses = computed(() => {
  return ['dropdown-single-select', theme?.value || '']
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
  const match = props.options.find((opt: Option) => opt.value === selectedFilters.value[props.fieldName])
  return match ? `: ${match.label}` : '(none selected)'
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template #buttonLabel>
        <span class="filter-summary">
          {{ label }}
          <template v-if="!isMobile">
            {{ selectedLabel }}
          </template>
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
              v-model="selectedFilters[props.fieldName]"
              type="radio"
              class="pill-radio"
              :value="option.value"
              :disabled="props.disabled"
              @change="() => { onSelect(/*option.value*/); removeOverlay() }"
            >
            <div class="pill-option">
              <span class="pill-content">
                {{ option.label }}
              </span>
              <SvgCheck
                v-if="selectedFilters[props.fieldName] === option.value"
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
              :checked="selectedFilters[props.fieldName] === ''"
              :disabled="props.disabled"
              @change="() => { onSelect(); removeOverlay() }"
            >
            <div class="pill-option">
              <span class="pill-content">View All</span>
              <SvgCheck
                v-if="selectedFilters[props.fieldName] === ''"
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
.dropdown-single-select {
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

    &:hover {
      background-color: #f1f1f1;
    }
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

  @media (min-width: 1024px) {
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
  }

  @media #{$small} {
    :deep(.mobile-button) {
      width: 166px;
      min-width: unset;
      padding: 6px;

      .button-inner-wrapper {
        flex-direction: row-reverse;
        justify-content: center;
      }
    }

    .filter-summary {
      color: $accent-blue;
    }

    :deep(.mobile-drawer .mobile-button) {
      border-color: $accent-blue;
    }

    :deep(.svg__icon-close.svg-glyph-close) {
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 1;
    }
  }
}
</style>
