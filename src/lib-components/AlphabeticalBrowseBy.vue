<template lang="html">
    <div class="alphabetical-browse-by">
        <h2 class="title">Browse by Last Name</h2>
        <ul class="alphabet" v-if="!isTablet">
            <li v-for="letter in alphabet" :key="letter" class="letter">
                {{ letter }}
            </li>
        </ul>
        <div v-else>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetFirstHalf"
                    :key="letter"
                    class="letter"
                >
                    {{ letter }}
                </li>
            </ul>
            <ul class="alphabet">
                <li
                    v-for="letter in alphabetSecondHalf"
                    :key="letter"
                    class="letter"
                >
                    {{ letter }}
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
                "All",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
            ],
            alphabetSecondHalf: [
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
            ],
            isTablet: false,
            vw: window.innerWidth,
            vh: window.innerHeight,
        }
    },
    props: {},
    computed: {
        alphabet() {
            return this.alphabetFirstHalf.concat(this.alphabetSecondHalf)
        },
    },
    created() {
        window.addEventListener("resize", this.getSize)
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
