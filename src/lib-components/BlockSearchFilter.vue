<template>
    <div class="block-search-filter">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: "BlockSearchFilter",
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        filterType: {
            type: String,
            default: "",
        },
    },
    methods: {},
}
</script>

<style scoped lang="scss">
.block-search-filter {
  padding: 12px,
  margin-right: 10px
}
</style>
