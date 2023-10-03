<template>
    <div class="alphabetical-browse-by">
        <h2 class="title">Browse by Last Name</h2>
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

<script>
export default {
    name: "AlphabeticalBrowseBy",
    props: {
        selectedLetterProp: {
            type: String,
            default: "All",
        },
    },
    data() {
        return {
            alphabet: [
                {
                    letter: "All",
                },
                {
                    letter: "A",
                },
                {
                    letter: "B",
                },
                {
                    letter: "C",
                },
                {
                    letter: "D",
                },
                {
                    letter: "E",
                },
                {
                    letter: "F",
                },
                {
                    letter: "G",
                },
                {
                    letter: "H",
                },
                {
                    letter: "I",
                },
                {
                    letter: "J",
                },
                {
                    letter: "K",
                },
                {
                    letter: "L",
                },
                {
                    letter: "M",
                },
                {
                    letter: "N",
                },
                {
                    letter: "O",
                },
                {
                    letter: "P",
                },
                {
                    letter: "Q",
                },
                {
                    letter: "R",
                },
                {
                    letter: "S",
                },
                {
                    letter: "T",
                },
                {
                    letter: "U",
                },
                {
                    letter: "V",
                },
                {
                    letter: "W",
                },
                {
                    letter: "X",
                },
                {
                    letter: "Y",
                },
                {
                    letter: "Z",
                },
            ],
            selectedLetter: "",
        }
    },
    computed: {
        parsedAlphabet: {
            get() {
                return this.alphabet.map((item) => {
                    let letterClass = "letter"
                    // Set the class for the letter when initially loaded
                    if (
                        item.letter === this.selectedLetterProp &&
                        this.selectedLetter === ""
                    ) {
                        letterClass = letterClass + " is-selected"
                    }
                    // Set the class for the letter when clicked
                    if (item.letter === this.selectedLetter) {
                        letterClass = letterClass + " is-selected"
                    }

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
                let letterClass = "letter"
                if (this.selectedLetter === item.letter) {
                    letterClass = letterClass + " is-selected"
                }
                return {
                    ...item,
                    class: letterClass,
                }
            })
        },
        handleSelectedLetter(letter) {
            this.selectedLetter = letter.letter
            this.checkIfLetterIsSelected()
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit("selectedLetter", this.selectedLetter)
        },
    },
}
</script>

<style lang="scss" scoped>
.alphabetical-browse-by {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        @include step-3;
        margin-bottom: 24px;
        font-family: var(--font-primary);
        color: var(--color-primary-blue-03);
    }

    .is-selected {
        @include link-hover;
        font-weight: $font-weight-semibold;
        color: var(--color-primary-blue-03);
    }

    .alphabet-list {
        @include step-1;
        max-width: 928px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        list-style: none;
        list-style-type: none;
        padding: 0;
        color: var(--color-primary-blue-03);

        .letter {
            padding: 0 10px;
            margin-bottom: 24px;
            width: 44px;
            text-align: center;

            &:hover {
                @include link-hover;
                cursor: pointer;
                font-weight: $font-weight-semibold;
                color: var(--color-primary-blue-03);
            }
        }
        @media #{$medium} {
            // max-height: 140px;
            justify-content: start;
            flex-wrap: wrap;
            margin-top: 0;
            margin-right: 0px;
            .letter {
                width: 44px;
            }
        }
        @media #{$small} {
            // max-height: 180px;
        }
    }
}
</style>
