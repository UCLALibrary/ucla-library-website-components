export default {
    data() {
        return {
            windowHeight: window.innerHeight,
        }
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize)
        })
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.onResize)
    },

    methods: {
        onResize() {
            this.windowHeight = window.innerHeight
        },
    },
}
