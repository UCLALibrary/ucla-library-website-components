<script setup>
import { computed, ref, watch } from 'vue'
import SvgIconCheckbox from 'ucla-library-design-tokens/assets/svgs/icon-checkbox.svg'

// Define props
const props = defineProps({
  label: String,
  selected: Boolean,
})

// Define emits
const emit = defineEmits(['update:selected', 'input-selected'])

// Reactive state
const theSelection = ref(props.selected)

// console.log(theSelection.value)

// Watch for external changes to the `selected` prop
watch(() => props.selected, (newVal) => {
  console.log('Selected prop changed in SingleCheckbox:', newVal)
  theSelection.value = newVal
})

// Computed class
const labelClass = computed(() => ['label', theSelection.value ? 'checked' : ''])

// Method to handle change events
function onChange() {
  // Assuming there was a mistake in your original method, correcting it here
  emit('update:selected', theSelection.value)
  emit('input-selected')
}

// Watch to log selection changes, could be removed in production
watch(theSelection, (newVal) => {
  console.log('Checkbox selection changed to:', newVal)
})
</script>

<template>
  <div class="single-checkbox">
    <label :class="labelClass">
      {{ label }}
      <input
        v-model="theSelection"
        type="checkbox"
        class="input"
        @change="onChange"
      >
      <SvgIconCheckbox class="svg" />
    </label>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.single-checkbox {
  min-width: 300px;
  // padding: 18px 16px 18px 16px;
  background: var(--color-primary-blue-03);
  color: white;
  font-family: var(--font-secondary);

  .label {
    font-family: var(--font-secondary);
    display: inline-block;
    width: 100%;
    padding: 15px 16px 15px 16px;
    // margin: 4px 0;
    // padding: 6px 14px 8px 45px;
    cursor: pointer;
    position: relative;
    border: 1.5px solid var(--color-primary-blue-03);
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
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
    right: 20px;
    top: 15px;

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

  .checked {
    border: 1.5px solid var(--color-default-cyan-03);
  }

  // Selected state
  .input:checked+.svg__icon-checkbox :deep(.svg__stroke--default-cyan-03) {
    stroke: white;
  }

  // Hovers
  @media #{$has-hover} {
    .label:hover {
      //background-color: rgba(255, 255, 255, 0.1);
      background-color: var(--color-primary-blue-04);
    }
  }

  //Breakpoints
  @media #{$small} {
    min-width: unset;
  }
}
</style>
