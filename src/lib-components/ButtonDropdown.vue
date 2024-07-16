<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "@/composables/useTheme"

// Components

const { eventDetail, socialList, title, hasIcon } = defineProps({
    eventDetail: {
        type: Object,
        default: () => {},
    },
    socialList: {
        type: Array, // social objects?
        default: () => [],
    },
    title: {
        type: String,
        default: () => "",
    },
    hasIcon: {
        type: Boolean,
        default: () => "",
    },
})

const route = useRoute()

// Computed
</script>

<template>
    <h2>Dropdown</h2>
    {{ title }}
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
