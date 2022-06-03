<template lang="html">
    <div class="alphabetical-browse-by">
        <h2 class="title">Browse by Last Name</h2>
        <ul class="alphabet">
            <li
                v-for="letter in alphabet"
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
    data() {
        return {
            letterClass: "letter ",
            alphabet: [
                {
                    letter: "All",
                    class: this.letterClass,
                },
                {
                    letter: "A",
                    class: this.letterClass,
                },
                {
                    letter: "B",
                    class: this.letterClass,
                },
                {
                    letter: "C",
                    class: this.letterClass,
                },
                {
                    letter: "D",
                    class: this.letterClass,
                },
                {
                    letter: "E",
                    class: this.letterClass,
                },
                {
                    letter: "F",
                    class: this.letterClass,
                },
                {
                    letter: "G",
                    class: this.letterClass,
                },
                {
                    letter: "H",
                    class: this.letterClass,
                },
                {
                    letter: "I",
                    class: this.letterClass,
                },
                {
                    letter: "J",
                    class: this.letterClass,
                },
                {
                    letter: "K",
                    class: this.letterClass,
                },
                {
                    letter: "L",
                    class: this.letterClass,
                },
                {
                    letter: "M",
                    class: this.letterClass,
                },
                {
                    letter: "N",
                    class: this.letterClass,
                },
                {
                    letter: "O",
                    class: this.letterClass,
                },
                {
                    letter: "P",
                    class: this.letterClass,
                },
                {
                    letter: "Q",
                    class: this.letterClass,
                },
                {
                    letter: "R",
                    class: this.letterClass,
                },
                {
                    letter: "S",
                    class: this.letterClass,
                },
                {
                    letter: "T",
                    class: this.letterClass,
                },
                {
                    letter: "U",
                    class: this.letterClass,
                },
                {
                    letter: "V",
                    class: this.letterClass,
                },
                {
                    letter: "W",
                    class: this.letterClass,
                },
                {
                    letter: "X",
                    class: this.letterClass,
                },
                {
                    letter: "Z",
                    class: this.letterClass,
                },
            ],
            vw: window.innerWidth,
            vh: window.innerHeight,
        }
    },
    props: {
        selectedLetter: {
            type: String,
            default: "All",
        },
    },
    computed: {},
    created() {
        window.addEventListener("resize", this.getSize)
        this.handleSelectedLetter({ letter: this.selectedLetter })
    },
    destroyed() {
        window.removeEventListener("resize", this.getSize)
    },
    watch: {
        vw(newValue, oldValue) {
            if (newValue < 1024 && newValue >= 750) {
                this.isTablet = true
            } else {
                this.isTablet = false
            }
        },
    },
    methods: {
        getSize() {
            this.vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            )
            this.vh = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0
            )
        },
        checkIfLetterIsSelected(letter) {
            this.alphabet = this.alphabet.map((item) => {
                if (letter.letter === item.letter) {
                    return {
                        letter: item.letter,
                        class: this.letterClass + "is-selected",
                    }
                }
                return {
                    letter: item.letter,
                    class: this.letterClass,
                }
            })
        },
        handleSelectedLetter(letter) {
            this.checkIfLetterIsSelected(letter)
            this.$emit("selectedLetter", letter)
        },
        alphabetConcat() {
            this.alphabet = this.alphabetFirstHalf.concat(
                this.alphabetSecondHalf
            )
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
        @include step-2;
        margin-bottom: 24px;
        font-family: var(--font-primary);
        color: var(--color-primary-blue-03);
    }

    .is-selected {
        @include link-hover;
        font-weight: $font-weight-semibold;
        color: var(--color-primary-blue-03);
    }

    .alphabet {
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
            width: 24px;
            text-align: center;

            &:hover {
                @include link-hover;
                cursor: pointer;
                font-weight: $font-weight-semibold;
                color: var(--color-primary-blue-03);
            }
        }
        @media #{$medium} {
            max-height: 140px;
            justify-content: start;
            flex-wrap: wrap;
            margin-top: 0;
            margin-right: 0px;
            .letter {
                width: 24px;
            }
        }
        @media #{$small} {
            max-height: 180px;
            .letter {
            }
        }
    }
}
</style>
