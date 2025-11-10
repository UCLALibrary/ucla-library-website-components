<script
  lang="ts"
  setup
>
import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'

import SvgIconCaretDown from 'ucla-library-design-tokens/assets/svgs/icon-caret-down.svg'
import SingleCheckbox from '@/lib-components/SingleCheckbox.vue'

interface Item {
  inputType: string
  esFieldName: string
  label: string
  class?: string
  isVisible: boolean
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [],
  },

  singleCheckboxState: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['toggle', 'update:single-checkbox-state', 'single-checkbox-checked'])

const theSingleCheckboxState = ref(props.singleCheckboxState)

watch(() => props.singleCheckboxState, (newValue) => {
  theSingleCheckboxState.value = newValue
})

const getSingleCheckboxLabel = computed(() => {
  const item = props.items.find(item => item.inputType === 'single-checkbox')
  return item ? item.label : ''
})
const getSingleCheckboxESFieldName = computed(() => {
  const item = props.items.find(item => item.inputType === 'single-checkbox')
  return item ? item.esFieldName : ''
})

const isSingleCheckBox = computed(() => {
  return props.items?.some(item => item.inputType === 'single-checkbox')
})

function updateSingleCheckboxState() {
  emit('update:single-checkbox-state', theSingleCheckboxState.value)
  emit('single-checkbox-checked', getSingleCheckboxESFieldName.value)
}

const parsedItems = computed(() => {
  return props.items.map((item) => {
    if (item.inputType !== 'single-checkbox') {
      const btnClass = `button${item.isVisible ? ' is-active' : ''}`
      // console.log("btnClass", btnClass)
      return {
        ...item,
        class: btnClass,
      }
    }
    else {
      return null
    }
  }).filter(item => item != null) // Filter out undefined or null items (single-checkbox case)
})

function toggleOpen(index: number) {
  // console.log("toggleOpen index ", index)

  emit('toggle', index)
}
</script>

<template>
  <div class="search-generic-filter-buttons">
    <button
      v-for="(filter, index) in parsedItems"
      :key="filter?.label"
      :class="filter?.class"
      type="button"
      @click.prevent="toggleOpen(index)"
    >
      <span class="title">
        {{ filter?.label }}
      </span>

      <div class="chevron">
        <SvgIconCaretDown class="caret-down-svg" />
      </div>
    </button>
    <SingleCheckbox
      v-if="isSingleCheckBox"
      v-model:selected="theSingleCheckboxState"
      :label="getSingleCheckboxLabel"
      @input-selected="updateSingleCheckboxState"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
.search-generic-filter-buttons {
  width: 100%;
  font-family: var(--font-secondary);
  font-size: 18px;

  display: flex;
  flex-direction: row;

  .button {
    flex: 1 1 auto;

    height: 60px;
    font-size: 18px;
    font-family: var(--font-secondary);
    color: var(--color-white);
    background-color: var(--color-primary-blue-03);
    margin-right: 8px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1.5px solid transparent;

    transition-property: border, border-radius;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    &:last-child {
      margin-right: 0;
    }
  }

  .title {
    display: block;
    height: 100%;
    width: 100%;
    padding: 0 50px 0 16px;
    transition: background-color 400ms ease-in-out;

    display: flex;
    align-items: center;
    align-content: center;
  }

  .chevron {
    font-size: 16px;
    color: var(--color-white);
    position: absolute;
    width: 56px;
    right: 0;
    top: 0;
    height: 100%;
    transition: background-color 400ms ease-in-out;
    background-color: var(--color-blue-03);

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }

    // chevron up & down
  }

  .svg__icon-radio-button {
    .svg__fill--default-cyan-03 {
      fill: transparent;
    }

    .svg__stroke--primary-blue-03 {
      stroke: white;
    }
  }

  // Open state
  .is-active {
    .caret-down-svg {
      transform: rotate(180deg);
    }

    .title,
    .chevron {
      background-color: var(--color-primary-blue-04);
    }
  }

  //Breakpoints
  @media #{$small} {

    .button,
    .single-checkbox {
      margin-right: 0;
    }
  }

  // Hovers
  @media #{$has-hover} {}
}
</style>
