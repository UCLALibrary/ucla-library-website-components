<template lang="html">
    <div class="alphabetical-browse-by">
        <h2 class="title">Browse by Last Name</h2>
        <ul class="alphabet" v-if="!isTablet">
            <li
                v-for="letter in alphabet"
                :key="`${letter.letter}`"
                :class="['letter', { 'is-selected': letter.isSelected }]"
                @click="handleSelectedLetter(letter)"
            >
                {{ letter.letter }}
            </li>
        </ul>
        <div v-else>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetFirstHalf"
                    :key="`${letter.letter}`"
                    :class="['letter', { 'is-selected': letter.isSelected }]"
                    @click="handleSelectedLetter(letter)"
                >
                    {{ letter.letter }}
                </li>
            </ul>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetSecondHalf"
                    :key="`${letter.letter}`"
                    :class="['letter', { 'is-selected': letter.isSelected }]"
                    @click="handleSelectedLetter(letter)"
                >
                    {{ letter.letter }}
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
                },
                {
                    letter: "A",
                    isSelected: false,
                },
                {
                    letter: "B",
                    isSelected: false,
                },
                {
                    letter: "C",
                    isSelected: false,
                },
                {
                    letter: "D",
                    isSelected: false,
                },
                {
                    letter: "E",
                    isSelected: false,
                },
                {
                    letter: "F",
                    isSelected: false,
                },
                {
                    letter: "G",
                    isSelected: false,
                },
                {
                    letter: "H",
                    isSelected: false,
                },
                {
                    letter: "I",
                    isSelected: false,
                },
                {
                    letter: "J",
                    isSelected: false,
                },
                {
                    letter: "K",
                    isSelected: false,
                },
                {
                    letter: "L",
                    isSelected: false,
                },
            ],
            alphabetSecondHalf: [
                {
                    letter: "M",
                    isSelected: false,
                },
                {
                    letter: "N",
                    isSelected: false,
                },
                {
                    letter: "O",
                    isSelected: false,
                },
                {
                    letter: "P",
                    isSelected: false,
                },
                {
                    letter: "Q",
                    isSelected: false,
                },
                {
                    letter: "R",
                    isSelected: false,
                },
                {
                    letter: "S",
                    isSelected: false,
                },
                {
                    letter: "T",
                    isSelected: false,
                },
                {
                    letter: "U",
                    isSelected: false,
                },
                {
                    letter: "V",
                    isSelected: false,
                },
                {
                    letter: "W",
                    isSelected: false,
                },
                {
                    letter: "X",
                    isSelected: false,
                },
                {
                    letter: "Z",
                    isSelected: false,
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
    computed: {
        letterClass(letter) {
            return ["letter"]
        },
    },
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
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
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
                    }
                }
                return {
                    letter: item.letter,
                    isSelected: false,
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
