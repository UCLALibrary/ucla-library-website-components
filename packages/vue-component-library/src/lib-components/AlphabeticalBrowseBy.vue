<script>
export default {
  name: 'AlphabeticalBrowseBy',
  inject: ['theme'],
  props: {
    selectedLetterProp: {
      type: String,
      default: 'All',
    },
    displayAll: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['selectedLetter'],
  data() {
    return {
      alphabet: [
        {
          letter: 'All',
        },
        {
          letter: 'A',
        },
        {
          letter: 'B',
        },
        {
          letter: 'C',
        },
        {
          letter: 'D',
        },
        {
          letter: 'E',
        },
        {
          letter: 'F',
        },
        {
          letter: 'G',
        },
        {
          letter: 'H',
        },
        {
          letter: 'I',
        },
        {
          letter: 'J',
        },
        {
          letter: 'K',
        },
        {
          letter: 'L',
        },
        {
          letter: 'M',
        },
        {
          letter: 'N',
        },
        {
          letter: 'O',
        },
        {
          letter: 'P',
        },
        {
          letter: 'Q',
        },
        {
          letter: 'R',
        },
        {
          letter: 'S',
        },
        {
          letter: 'T',
        },
        {
          letter: 'U',
        },
        {
          letter: 'V',
        },
        {
          letter: 'W',
        },
        {
          letter: 'X',
        },
        {
          letter: 'Y',
        },
        {
          letter: 'Z',
        },
      ],
      selectedLetter: '',
    }
  },
  computed: {
    parsedAlphabet: {
      get() {
        return this.alphabet.filter(item => (item.letter !== 'All') || (item.letter === 'All' && this.displayAll)).map((item) => {
          let letterClass = 'letter'
          // Set the class for the letter when initially loaded

          if (this.selectedLetterProp === '')
            this.selectedLetter = ''

          if (
            item.letter === this.selectedLetterProp
            && this.selectedLetter === ''
          )
            letterClass = `${letterClass} is-selected`

          // Set the class for the letter when clicked
          if (item.letter === this.selectedLetter)
            letterClass = `${letterClass} is-selected`

          // Set the class for the letter when not clicked
          return {
            ...item,
            class: letterClass,
          }
        })
      },
      set(alphabet) {
        this.alphabet = alphabet
      },
    },
  },
  methods: {
    checkIfLetterIsSelected() {
      this.parsedAlphabet = this.alphabet.map((item) => {
        let letterClass = 'letter'
        if (this.selectedLetter === item.letter)
          letterClass = `${letterClass} is-selected`

        return {
          ...item,
          class: letterClass,
        }
      })
    },
    handleSelectedLetter(letter) {
      this.selectedLetter = letter.letter
      this.checkIfLetterIsSelected()
      this.$emit('selectedLetter', this.selectedLetter)
    },
  },
}
</script>

<template>
  <div :class="theme === '' ? `alphabetical-browse-by` : `alphabetical-browse-by ${theme}`">
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
