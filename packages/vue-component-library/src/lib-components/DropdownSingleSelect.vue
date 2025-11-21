<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useWindowSize } from '@vueuse/core'
import SvgCheck from 'ucla-library-design-tokens/assets/svgs/icon-ftva-dropdown_check.svg'
import IconDropDownIndicator from 'ucla-library-design-tokens/assets/svgs/icon-dropdown-indicator.svg'
import IconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
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
  isSearch: {
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
  return ['dropdown-single-select', theme?.value || '', { 'is-search': props.isSearch }]
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
  if (dlcTheme.value)
    return match ? match.label : '(none selected)'

  return match ? `: ${match.label}` : '(none selected)'
})

// FILTER OPTIONS - exclude selected filter from the filter list when it's DLC themed and is not a search filter
const parsedOptions = computed(() => {
  if (dlcTheme.value && !props.isSearch)
    return props.options.filter(option => option.value !== selectedFilters.value[props.fieldName])

  return props.options
})
</script>

<template>
  <div :class="parsedClasses">
    <MobileDrawer>
      <template #toggleIcon>
        <IconDropDownIndicator v-if="dlcTheme && isSearch" />
        <IconCaretDown v-if="dlcTheme && !isSearch" />
      </template>
      <template #buttonLabel>
        <span
          v-if="dlcTheme"
          class="filter-summary"
        >
          {{ selectedLabel }}
        </span>
        <span
          v-else
          class="filter-summary"
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
            v-for="option in parsedOptions"
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
@import "@/styles/dlc/_dropdown-single-select.scss";
@import "@/styles/default/_dropdown-single-select.scss";
</style>
