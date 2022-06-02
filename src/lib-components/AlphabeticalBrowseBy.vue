<template lang="html">
    <div class="alphabetical-browse-by">
        <h2 class="title">Browse by Last Name</h2>
        <ul class="alphabet" v-if="!isTablet">
            <li
                v-for="letter in alphabet"
                :key="`${letter.letter}`"
                :class="letter.class"
            >
                <a @click="handleSelectedLetter(letter)">{{ letter.letter }}</a>
            </li>
        </ul>
        <div v-else>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetFirstHalf"
                    :key="`${letter.letter}`"
                    :class="letter.class"
                >
                    <a @click="handleSelectedLetter(letter)">{{
                        letter.letter
                    }}</a>
                </li>
            </ul>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetSecondHalf"
                    :key="`${letter.letter}`"
                    :class="letter.class"
                >
                    <a @click="handleSelectedLetter(letter)">{{
                        letter.letter
                    }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AlphabeticalBrowseBy",
    data() {
        return {
            alphabetFirstHalf: [
                {
                    letter: "All",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "A",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "B",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "C",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "D",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "E",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "F",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "G",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "H",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "I",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "J",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "K",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "L",
                    isSelected: false,
                    class: "letter",
                },
            ],
            alphabetSecondHalf: [
                {
                    letter: "M",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "N",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "O",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "P",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "Q",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "R",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "S",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "T",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "U",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "V",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "W",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "X",
                    isSelected: false,
                    class: "letter",
                },
                {
                    letter: "Z",
                    isSelected: false,
                    class: "letter",
                },
            ],
            isTablet: false,
            vw: window.innerWidth,
            vh: window.innerHeight,
            alphabet: [],
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
        this.alphabetConcat()
        this.setSelectedLetter()
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
        handleSelectedLetter(letter) {
            this.alphabet = this.alphabet.map((item) => {
                if (letter.letter === item.letter) {
                    return {
                        letter: item.letter,
                        isSelected: !item.isSelected,
                        class: !item.isSelected
                            ? "letter is-selected"
                            : "letter",
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
                    class: "letter",
                }
            })
            this.alphabetFirstHalf = this.alphabetFirstHalf.map((item) => {
                if (letter.letter === item.letter) {
                    return {
                        letter: item.letter,
                        isSelected: !item.isSelected,
                        class: !item.isSelected
                            ? "letter is-selected"
                            : "letter",
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
                    class: "letter",
                }
            })
            this.alphabetSecondHalf = this.alphabetSecondHalf.map((item) => {
                if (letter.letter === item.letter) {
                    return {
                        letter: item.letter,
                        isSelected: !item.isSelected,
                        class: !item.isSelected
                            ? "letter is-selected"
                            : "letter",
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
                    class: "letter",
                }
            })
            letter.isSelected = true
            this.$emit("selectedLetter", letter)
        },
        alphabetConcat() {
            this.alphabet = this.alphabetFirstHalf.concat(
                this.alphabetSecondHalf
            )
        },
        setSelectedLetter() {
            this.alphabet = this.alphabet.map((item) => {
                if (this.selectedLetter === item.letter) {
                    return {
                        letter: item.letter,
                        isSelected: !item.isSelected,
                        class: item.isSelected
                            ? "letter is-selected"
                            : "letter",
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
                    class: "letter",
                }
            })
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
        flex-wrap: wrap;
        list-style: none;
        list-style-type: none;
        padding: 0;
        color: var(--color-primary-blue-03);

        .letter {
            margin-right: 19.5px;
            margin-bottom: 24px;

            &:hover {
                @include link-hover;
                cursor: pointer;
                font-weight: $font-weight-semibold;
                color: var(--color-primary-blue-03);
            }
        }
        @media #{$medium} {
            max-height: 140px;
            max-width: 640px;
            justify-content: space-between;
            margin-top: 0;
            margin-right: 0px;
            .letter {
                margin-right: 0px;
                margin-bottom: 0;
            }
        }
        @media #{$small} {
            max-height: 180px;
            max-width: 327px;
            justify-content: space-between;
            margin-left: -19.5px;
            .letter {
                margin-left: 19.5px;
                margin-right: 0px;
                margin-bottom: 24px;
            }
        }
    }
}
</style>
