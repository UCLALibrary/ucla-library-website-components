<script
  lang="ts"
  setup
>
import { ref } from 'vue'
import type { PropType } from 'vue'
import SvgIconRadioButton from 'ucla-library-design-tokens/assets/svgs/icon-radio-button.svg'

interface Item {
  name: string
}
const { items, selected } = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    default: () => [],
  },
  selected: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})
// TODO Watch for changes in `selected` prop and update `parsedSelected`
/* watch(selected, (newVal, oldVal) => {
  console.log("Old value", oldVal)
  console.log("New value", newVal)
  parsedSelected.value = newVal
},
  { immediate: true }
) */

// Emitting events
const emit = defineEmits(['update:selected', 'input-selected'])

console.log('selected', selected)

const parsedSelected = ref<string[]>(selected)
console.log('parseselected radio button', parsedSelected.value)

function onChange(value: string) {
  console.log('what is slected', value)
  emit('update:selected', [value])
  emit('input-selected')
}
</script>

<template>
  <fieldset class="base-radio-group">
    <ul class="list">
      <li class="list-item">
        <label
          v-for="(item, index) in items"
          :key="`BaseRadioGroup${index}`"
          class="label"
        >
          <input
            v-model="parsedSelected"
            type="radio"
            :value="item.name"
            class="input"
            @change="onChange(item.name)"
          >

          <SvgIconRadioButton class="svg" />

          {{ item.name }}
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<style
  lang="scss"
  scoped
>
.base-radio-group {
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
    left: 14px;
    top: 5px;

    .filler {
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }
  }

  .svg__icon-radio-button {
    :deep(.svg__fill--default-cyan-03) {
      fill: transparent;
    }

    :deep(.svg__stroke--primary-blue-03) {
      stroke: white;
    }
  }

  // Selected state
  .input:checked+.svg__icon-radio-button :deep(.svg__fill--default-cyan-03) {
    fill: white;
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
