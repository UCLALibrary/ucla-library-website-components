<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useTheme } from "@/composables/useTheme"
import "add-to-calendar-button"

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

    <div v-if="eventDetail">
        <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="World Wide Web"
            startDate="2024-07-19"
            endDate="2024-07-19"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
        ></add-to-calendar-button>
    </div>
    <div v-else>
        {{ title }}
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
