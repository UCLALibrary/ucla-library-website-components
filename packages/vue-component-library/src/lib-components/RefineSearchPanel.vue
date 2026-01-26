<script setup lang="ts">
import { computed } from 'vue'
import SvgFilterIcon from 'ucla-library-design-tokens/assets/svgs/icon-down-carat.svg'
import EffectSlideToggle from './EffectSlideToggle.vue'
import FilterSelections from './FilterSelections.vue'
import { useTheme } from '@/composables/useTheme'

interface FilterProps {
  title: string
  filters: Array<{
    name: string
    slotName: string
    facetField?: string
    options?: Array<{
      label: string
      value: string
      count: number
    }>
    showAll?: boolean
  }>
  opened?: boolean
  preventClose?: boolean
}

withDefaults(defineProps<FilterProps>(), {
  opened: true,
  preventClose: false,
})

// Emit events
defineEmits<{
  'opening': []
  'opened': []
  'closing': []
  'closed': []
  'selection-change': [selectedOptions: Record<string, string[]>]
  'option-selected': [filterName: string, option: { label: string; value: string; count: number }]
  'option-deselected': [filterName: string, option: { label: string; value: string; count: number }]
}>()
// THEME
const theme = useTheme()
const classes = computed(() => ['refine-search-panel', theme?.value || ''])
</script>

<template>
  <EffectSlideToggle
    :class="classes"
    :opened="opened"
    :prevent-close="preventClose"
    @opening="$emit('opening')"
    @opened="$emit('opened')"
    @closing="$emit('closing')"
    @closed="$emit('closed')"
  >
    <!-- SUMMARY -->
    <template #summary>
      <div class="filter-reveal-summary">
        <h2 class="filter-title">
          {{ title }}
        </h2>
        <span class="filter-chevron">
          <SvgFilterIcon aria-hidden="true" />
        </span>
      </div>
    </template>

    <!-- CONTENT -->
    <FilterSelections
      title=""
      :filters="filters"
      @selection-change="$emit('selection-change', $event)"
      @option-selected="(filterName, option) => $emit('option-selected', filterName, option)"
      @option-deselected="(filterName, option) => $emit('option-deselected', filterName, option)"
    >
      <!-- Pass through all slots to FilterSelections -->
      <template
        v-for="(_, slotName) in $slots"
        :key="slotName"
        #[slotName]="slotProps"
      >
        <slot
          :name="slotName"
          v-bind="slotProps"
        />
      </template>
    </FilterSelections>
  </EffectSlideToggle>
</template>

<style scoped>
@import "@/styles/dlc/_refine-search-panel.scss";
</style>
