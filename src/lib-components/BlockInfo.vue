<script setup>
import { computed } from "vue"
import ButtonLink from "@/lib-components/ButtonLink.vue"

import { useTheme } from "@/composables/useTheme"

const { ftvaTicketInformation, ftvaEventRegistration, to } = defineProps({
    ftvaTicketInformation: {
        type: Array,
        default: () => [],
    },

    // Note:
    /* This prop is for the potential edge case that an event page will require
    a registration link.
    
    Although this field exists in Craft, the design spec is pending. 
    
    See: https://github.com/UCLALibrary/ucla-library-website-components/issues/521#issuecomment-2168437199
    */
    ftvaEventRegistration: {
        type: Array,
        default: () => [],
    },

    // Note:
    /* Default url will be the internal 'Plan Your Visit' page */
    to: {
        type: String,
        default: "",
    },
})

// Array of Ticket Info list
const parsedTicketInfo = computed(() => {
    return ftvaTicketInformation.map((obj) => obj.title)
})

// THEME
const theme = useTheme()

const themeClass = computed(() => {
    return ["block-info"]
})
</script>

<template>
    <div :class="themeClass">
        <div class="block-info-wrapper">
            <h1 class="block-info-header">Ticket Info</h1>
            <ul class="block-info-list">
                <li v-for="(item, index) in parsedTicketInfo" :key="`${index}`">
                    {{ item }}
                </li>
            </ul>
            <ButtonLink
                id="block-info-button"
                label="Plan Your Visit"
                :to="to"
                class="button"
                iconName="none"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
</style>
