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
    default: '/plan-your-visit',
  },
})

// Array of Ticket Info list
const parsedTicketInfo = computed(() => {
  return ftvaTicketInformation.map(obj => obj.title)
})

// THEME
const theme = useTheme()

const classes = computed(() => {
  return ['block-info', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
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
      :is-secondary="true"
      icon-name="none"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_block-info.scss";
@import "@/styles/ftva/_block-info.scss";
</style>
