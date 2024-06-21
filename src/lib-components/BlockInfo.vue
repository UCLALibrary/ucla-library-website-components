<script setup>
import { computed } from 'vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

import { useTheme } from '@/composables/useTheme'

const { ftvaTicketInformation, ftvaEventRegistration, to } = defineProps({
  ftvaTicketInformation: {
    type: Array,
    default: () => [],
  },

  // Note / ToDo:
  /* This prop is for the potential edge case that an event page will require
    a registration link.

    Although this field exists in Craft, the design spec is pending.

    See: https://github.com/UCLALibrary/ucla-library-website-components/issues/521#issuecomment-2168437199
    */
  ftvaEventRegistration: {
    type: Array,
    default: () => [],
  },

  // Note / ToDo:
  /* Default url is the internal 'Plan Your Visit' page; pending. */
  to: {
    type: String,
    default: '',
  },
})

// Array of Ticket Info list
const parsedTicketInfo = computed(() => {
  return ftvaTicketInformation.map(obj => obj.title)
})

// THEME
const theme = useTheme()

const themeClass = computed(() => {
  return ['block-info']
})
</script>

<template>
  <div :class="themeClass">
    <!-- ToDo: Potential to make this field dynamic; See: https://uclalibrary.atlassian.net/browse/APPS-2785 -->

    <h1 class="block-info-header">
      Ticket Info
    </h1>
    <ul class="block-info-list">
      <li
        v-for="(item, index) in parsedTicketInfo"
        :key="`${item}-${index}`"
      >
        {{ item }}
      </li>
    </ul>
    <ButtonLink
      label="Plan Your Visit"
      :to="to"
      class="button"
      icon-name="none"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/themes.scss";
@import "ucla-library-design-tokens/scss/_tokens-ftva";
</style>
