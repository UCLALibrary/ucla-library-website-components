<template>
    <!-- TODO write this component ? -->
    <!-- TODO write story for this -->
    <transition name="slide-toggle" mode="out-in">
        <fieldset class="base-calendar-group"></fieldset>
    </transition>
</template>

<script>
// export default {
//     name: "BaseCalendarGroup",
//     components: {},
//     props: {
//         items: {
//             type: Array,
//             default: () => [],
//         },
//         selected: {
//             type: String,
//             default: "",
//         },
//     },
//     data() {
//         return {
//             parsedSelected: "",
//         }
//     },
//     watch: {
//         selected: {
//             handler(newVal) {
//                 this.parsedSelected = newVal
//             },
//             immediate: true,
//         },
//     },
//     methods: {
//         onChange(value) {
//             this.$emit("update:selected", value)
//         },
//     },
// }
</script>

<style lang="scss" scoped>
.base-calendar-group {
}
</style>
