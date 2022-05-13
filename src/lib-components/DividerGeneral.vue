<template lang="html">
    <div :class="classes" />
</template>

<script>
export default {
    name: 'DividerGeneral', // vue component name
    props: {
        isBold: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return ["divider-general", { "is-bold": this.isBold }]
        },
    },
}
</script>

<style lang="scss" scoped>
.divider-general {
    border-bottom: 2px dotted $secondary-grey-02;
    height: 1px;

    &.is-bold {
        border-bottom-color: var(--color-secondary-grey-03);
    }
}
</style>
