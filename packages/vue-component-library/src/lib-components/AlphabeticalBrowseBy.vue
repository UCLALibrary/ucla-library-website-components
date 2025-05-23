<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  selectedLetterProp: {
    type: String,
    default: 'All',
  },
  displayAll: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['selectedLetter'])

// Injected theme (from app-level provide)
const theme = useTheme()

// Alphabet list
const alphabet = ref([
  { letter: 'All' },
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => ({ letter }))
])

// Selected letter (local state but resets when prop changes)
const selectedLetter = ref('')

// ADDED
onMounted(() => {
  selectedLetter.value = props.selectedLetterProp
})

// Computed list with `is-selected` class applied
const parsedAlphabet = computed(() => {
  // Filter out the 'All' option if displayAll is false:
  // - If props.displayAll === true → include all letters including 'All'
  // - If props.displayAll === false → exclude 'All', show only A–Z
  return alphabet.value
    .filter(item => props.displayAll || item.letter !== 'All')
    .map((item) => {
      // Determine if the current letter should be marked as selected:
      // - If the user has clicked a letter (selectedLetter is set), use it.
      const isSelected = item.letter === selectedLetter.value

      // Return the item with a class based on whether it's selected
      return {
        letter: item.letter,
        class: `letter${isSelected ? ' is-selected' : ''}`,
      }
    })
})

// Dynamic classes from theme
const classes = computed(() =>
  theme?.value === '' ? 'alphabetical-browse-by' : `alphabetical-browse-by ${theme?.value}`
)

// Handle letter click
function handleSelectedLetter(letter: { letter: string }) {
  selectedLetter.value = letter.letter
  emit('selectedLetter', selectedLetter.value)
}
</script>

<template>
  <div :class="classes">
    <h2
      v-if="theme === ''"
      class="title"
    >
      Browse by Last Name
    </h2>
    <ul class="alphabet-list">
      <li
        v-for="letter in parsedAlphabet"
        :key="letter.letter"
        :class="letter.class"
        @click="handleSelectedLetter(letter)"
      >
        <a>{{ letter.letter }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_alphabetical-browse-by.scss";
@import "@/styles/ftva/_alphabetical-browse-by.scss";
</style>
