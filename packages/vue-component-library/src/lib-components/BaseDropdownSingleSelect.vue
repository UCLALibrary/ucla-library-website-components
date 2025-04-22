<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import { useWindowSize } from '@vueuse/core'
import MobileDrawer from './MobileDrawer.vue'
import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  options: {
    // Dropdown Array
    // options: [
    // { label: 'Option Animal',
    //   value: 'Squirrel' }, ...
    // ]
    type: Array as PropType<{ label: string; value: string | number }[]>,
    default: () => []
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: 'Filter by topic'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'selectionChanged', value: string | number): void
}>()

const isMobile = ref(false)
const theme = useTheme()

const parsedClasses = computed(() => {
  return ['single-select-dropdown', theme?.value || '']
})

const selected = computed({
  get: () => props.modelValue,
  set: (value: string | number) => {
    emit('update:modelValue', value)
    emit('selectionChanged', value)
  }
})

const selectedLabel = computed(() => {
  const found = props.options.find(opt => opt.value === selected.value)
  return found?.label || '(none selected)'
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
    <MobileDrawer>
      <template #buttonLabel>
        <div class="filter-summary">
          <span v-if="!isMobile">
            {{ label }}<span v-if="selectedLabel">: {{ selectedLabel }}</span>
          </span>
          <span v-else>
            {{ label }}
          </span>
        </div>
      </template>

      <template #dropdownItems="{ removeOverlay }">
        <label
          v-if="label"
          :for="label"
          class="select-label"
        >{{ label }}</label>
        <select
          :id="label"
          class="select-input"
          v-model="selected"
          :disabled="disabled"
          @change="removeOverlay"
        >
          <option
            disabled
            value=""
          >-- Select an option --</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </template>
    </MobileDrawer>
  </div>
</template>

<style scoped lang="scss">
.single-select-dropdown {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .select-label {
    font-weight: 600;
    font-size: 1rem;
  }

  .select-input {
    padding: 0.5rem;
    border: 1px solid var(--color-border, #ccc);
    border-radius: 4px;
    font-size: 1rem;
    background-color: white;
    appearance: none;
  }

  .select-input:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }

  .filter-summary {
    @include ftva-button;
    color: var(--gray-dark, #555);
  }
}
</style>
