<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import type { PropType } from 'vue'
import _uniq from 'lodash/uniq'
import SvgIconCheckbox from 'ucla-library-design-tokens/assets/svgs/icon-checkbox.svg'

interface Item {
  name: string
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [],
  },
  selected: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const emit = defineEmits(['update:selected', 'input-selected'])
const parsedSelected = ref<string[]>(_uniq([...props.selected]))

watch(() => props.selected, (newSelected) => {
  // console.log('BaseCheckboxGroup selected', newSelected)
  parsedSelected.value = _uniq([...newSelected])
  // console.log('BaseCheckboxGroup parsedSelected', parsedSelected.value)
}, { immediate: true })

onMounted(() => {
  console.log('BaseCheckboxGroup mounted')
  parsedSelected.value = _uniq([...props.selected])
  console.log('BaseCheckboxGroup parsedSelected', parsedSelected.value)
})

function onChange(itemName: string) {
  const index = parsedSelected.value.indexOf(itemName)
  if (index > -1)
    parsedSelected.value.splice(index, 1)
  else
    parsedSelected.value.push(itemName)

  emit('update:selected', parsedSelected.value)
  emit('input-selected')
}
</script>

<template>
  <fieldset class="base-checkbox-group">
    <ul class="list">
      <li
        v-for="(item, index) in items"
        :key="`BaseCheckboxGroup${index}`"
        class="list-item"
      >
        <label class="label">
          <input
            type="checkbox"
            :value="item.name"
            :checked="parsedSelected.includes(item.name)"
            class="input"
            @change="onChange(item.name)"
          >
          <SvgIconCheckbox class="svg" />
          {{ item.name }}
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<style lang="scss" scoped>
.base-checkbox-group {
  font-size: 18px;
  color: var(--color-white);
  background-color: var(--color-primary-blue-04);
  border: 1.5px solid var(--color-default-cyan-03);
  margin: 0;
  padding: 22px 16px;

  .list {
    column-count: 3;
    list-style: none;
  }

  .label {
    font-family: var(--font-secondary);
    display: inline-block;
    width: 100%;
    margin: 4px 0;
    padding: 8px 14px 8px 48px;
    cursor: pointer;
    position: relative;
    border-radius: var(--rounded-slightly-all);
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 400ms ease-in-out;
  }

  .input {
    height: 20px;
    width: 20px;
    opacity: 0;
    position: absolute;
    z-index: -1;
    margin: 0;
    padding: 0;
  }

  .svg {
    position: absolute;
    left: 8px;
    top: 5px;

    .filler {
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }
  }

  .svg__icon-checkbox {
    :deep(.svg__stroke--default-cyan-03) {
      stroke: transparent;
    }

    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }
  }

  // Selected state
  .input:checked+.svg__icon-checkbox :deep(.svg__stroke--default-cyan-03) {
    stroke: white;
  }

  //Breakpoints
  @media #{$medium} {
    .list {
      column-count: 2;
    }
  }

  @media #{$small} {
    .list {
      column-count: 1;
    }
  }

  // Hovers
  @media #{$has-hover} {
    .label:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
