<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SvgCheck from 'ucla-library-design-tokens/assets/svgs/icon-ftva-dropdown_check.svg'
import IconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-dropdown-indicator.svg'
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
  showViewAll: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update-display'])
// V-MODEL DATA
interface SelectedFiltersTypes {
  [key: string]: string
}
const selectedFilters = defineModel('selectedFilters', { type: Object as PropType<SelectedFiltersTypes>, required: true, default: {} })

function onSelect() {
  emit('update-display', selectedFilters.value)
}

// THEME
const theme = useTheme()
const dlcTheme = computed(() => {
  return theme.value === 'dlc'
})
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
  if (dlcTheme.value) {
    return match ? match.label : '(none selected)'
  }
  return match ? `: ${match.label}` : '(none selected)'
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template
        #toggleIcon
        v-if="dlcTheme"
      >
        <IconCaretDown />
      </template>
      <template #buttonLabel>
        <span
          class="filter-summary"
          v-if="dlcTheme"
        >
          {{ selectedLabel }}
        </span>
        <span
          class="filter-summary"
          v-else
        >
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
              @change="() => { onSelect(); removeOverlay() }"
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
          <label
            v-if="props.showViewAll && !dlcTheme"
            class="pill-label view-all-option"
          >
            <input
              v-model="selectedFilters[props.fieldName]"
              type="radio"
              class="pill-radio"
              value=""
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
  // width: 380px;

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

  // DLC Theme Style Overrides
  &.dlc {
    width: 200px;
    border-radius: 0;

    &:deep() {
      .mobile-drawer .mobile-button {

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 0;
        padding: 30px 15px;

        background-color: var(--color-secondary-blue-02);
      }

      .toggle-triangle-icon {
        margin-right: 0;
        max-height: max-content;

        path {
          fill: var(--color-white);
        }
      }

      .button-dropdown-modal {
        position: absolute;
        top: 5px;
        left: 5px;
        width: calc(100% - 10px);
      }

      .button-dropdown-modal-wrapper {
        padding: 8px 5px 8px 30px;

        min-width: 100%;

        background-color: var(--color-primary-blue-01);
        border-radius: 8px;
        border: none;

        .pills {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pill-option {
          padding: 0;

          position: relative;
          cursor: pointer;

          .pill-content {
            padding: 8px 15px;
            border-radius: 4px;
            background-color: var(--color-secondary-blue-02);

            font-family: var(--font-secondary);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
            /* 24px */
            color: var(--color-white);

            transition: background-color 0.2s;
          }

          .check-icon {
            position: absolute;
            left: -24px;
            top: 50%;
            transform: translateY(-50%);
          }

          // DLC Theme Hover Styles
          @media #{$has-hover} {
            &:hover {
              background-color: var(--color-primary-blue-01);

              .pill-content {
                background-color: var(--color-secondary-blue-01);
              }
            }
          }
        }
      }
    }

    .filter-summary {
      padding: 0;

      font-family: var(--font-secondary);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      color: var(--color-white);
    }

    // States
    &.is-long {
      width: 345px;

      :deep(.mobile-drawer .mobile-button) {
        height: 45px;
        padding: 15px;
      }
    }
  }

  @media (min-width: 1024px) {
    &:not(.dlc) {
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
  }

  @media #{$small} {
    &:not(.dlc) {
      :deep(.mobile-button) {
        width: 166px;
        min-width: unset;
        padding: 6px;

        .button-inner-wrapper {
          flex-direction: row-reverse;
          justify-content: center;
        }
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
