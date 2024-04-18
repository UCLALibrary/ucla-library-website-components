<script setup>
import { computed, onBeforeUnmount, onMounted, ref, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: true
})

const props = defineProps({
  type: {
    type: String,
    default: 'search',
  },
  modelValue: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: 'search-input-wrapper',
  },
  clearIcon: {
    type: Boolean,
    default: true
  },
  clearOnEsc: {
    type: Boolean,
    default: true
  },
  blurOnEsc: {
    type: Boolean,
    default: true
  },
  selectOnFocus: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['update:modelValue'])
console.log('modelValue', props.modelValue)
const attrs = useAttrs()

const hasFocus = ref(false)
const inputRef = ref(null)
const searchInputModelValue = ref(props.modelValue)

function filterObject(obj, properties, remove = true) {
  const res = {}

  if (properties && properties.length > 0) {
    Object.keys(obj).forEach((objAttr) => {
      const condition = remove
        ? !properties.includes(objAttr)
        : properties.includes(objAttr)

      if (condition)
        res[objAttr] = obj[objAttr]
    })
  }
  return res
}

const attrsWithoutStyles = computed(() => {
  const res = filterObject(attrs, ['class', 'style'])
  return res
})

const attrsStyles = computed(() => {
  const res = filterObject(attrs, ['class', 'style'])

  if (!res.class)
    res.class = props.wrapperClass

  return res
})

const showClearIcon = computed(() => {
  // console.log(
  //   'in show clear icon',
  //   props.clearIcon,
  //   searchInputModelValue.value.length
  // )
  return props.clearIcon && searchInputModelValue.value.length > 0
})

onMounted(() => {
  window.document.addEventListener('keydown', onDocumentKeydown)
})

onBeforeUnmount(() => {
  window.document.removeEventListener('keydown', onDocumentKeydown)
})

function clear() {
  // console.log('in clear')
  searchInputModelValue.value = ''
  emit('update:modelValue', '')
}

function onInput(e) {
  searchInputModelValue.value = e.target.value
  emit('update:modelValue', e.target.value)
}

function onKeydown(e) {
  if (e.key === 'Escape') {
    if (props.clearOnEsc)
      clear()
    if (props.blurOnEsc) {
      const el = inputRef.value
      if (el)
        el.blur()
    }
  }
}

function onDocumentKeydown(e) {
  if (
    e.target !== inputRef.value
    && window.document.activeElement !== inputRef.value
    && !(e.target instanceof HTMLInputElement)
    && !(e.target instanceof HTMLSelectElement)
    && !(e.target instanceof HTMLTextAreaElement)
  ) {
    e.preventDefault()
    const allVisibleSearchInputs = [].slice
      .call(
        document.querySelectorAll(
          '[data-search-input="true"]:not([data-shortcut-enabled="false"])'
        )
      )
      .filter((el) => {
        return !!(
          el.offsetWidth
          || el.offsetHeight
          || el.getClientRects().length
        )
      })
    const elToFocus
      = allVisibleSearchInputs.length > 1
        ? allVisibleSearchInputs[0]
        : inputRef.value

    if (elToFocus) {
      elToFocus.focus()
      if (props.selectOnFocus)
        elToFocus.select()
    }
  }
}
</script>

<template>
  <div v-bind="attrsStyles">
    <input
      ref="inputRef"
      v-model="searchInputModelValue"
      type="search"
      data-search-input="true"
      v-bind="attrsWithoutStyles"
      @input="onInput"
      @focus="hasFocus = true"
      @blur="hasFocus = false"
      @keydown="onKeydown"
    >
    <button
      v-show="showClearIcon"
      class="clear-icon clear"
      aria-label="Clear"
      @mousedown="clear"
      @keydown.space.enter="clear"
    />
  </div>
</template>

<style lang="scss" scoped>
$input-color: #333;
$input-background: #f6f9fc;
$icon-color: darken($input-background, 30%);
$active-color: #1ea7fd;

.search-input-wrapper {
  position: relative;

  input[data-search-input="true"] {
    display: block;
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.01em;
    background-color: var(--color-primary-blue-01);
    border-color: transparent;
    padding: 24px 24px 24px 16px;
    width: 100%;

    &::placeholder {
      text-transform: uppercase;
      font-family: var(--font-primary);
      text-overflow: ellipsis;
    }

    /*
      &:focus {
          background-color: var(--color-primary-blue-01);
          border-color: $active-color;
          outline: 0;
          box-shadow: none;
      }*/
  }

  .clear-icon {
    color: $icon-color;
    position: absolute;

    &.clear {
      right: 15px;
      bottom: 22px;
      cursor: pointer;
      z-index: 10;
      box-sizing: border-box;
      display: block;
      width: 24px;
      height: 24px;
      border: 2px solid transparent;
      border-radius: 40px;
      background: none;
      padding: 0px;
      outline: none;

      &:focus {
        background: darken($input-background, 4%);
      }
    }

    &.clear::after,
    &.clear::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 16px;
      height: 2px;
      background: $icon-color;
      transform: rotate(45deg);
      border-radius: 5px;
      top: 9px;
      left: 2px;
    }

    &.clear::after {
      transform: rotate(-45deg);
    }
  }
}

/* Fix the X appearing in search field on Chrome and IE */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
