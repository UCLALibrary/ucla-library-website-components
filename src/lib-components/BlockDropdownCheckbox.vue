<template>
    <div class="block-dropdown-checkbox">
        <span>{{ label }}</span>
        <input type="checkbox" name="checkbox" />
    </div>
</template>

<script>
export default {
    name: "BlockDropdownCheckbox",
    data() {
        return {}
    },
    components: {},
    props: {
        label: {
            type: String,
            default: "[LABEL]",
        },
    },
}
</script>

<style lang="scss" scope>
.block-dropdown-checkbox {
    width: 294px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 16px 18px 16px;
    background: var(--color-primary-blue-03);
    color: white;
    line-height: 20px;
    font-size: 20px;
    font-weight: 400px;
}
</style>
