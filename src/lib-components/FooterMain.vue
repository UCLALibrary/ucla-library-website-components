<script lang="ts" setup>
// UTILS
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS
import FooterSponsor from '@/lib-components/FooterSponsor.vue'
import FooterPrimary from '@/lib-components/FooterPrimary.vue'
import FooterSock from '@/lib-components/FooterSock.vue'
import FooterLinks from '@/lib-components/FooterLinks.vue'

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['footer-main', theme?.value || '']
})
const showSponsor = computed(() => {
  if (theme?.value === undefined) {
    // if no theme, show sponsors as default behavior
    return true
  }
  return false
})
const showLinks = computed(() => {
  if (theme?.value === undefined) {
    // if no theme, DO NOT show links as default behavior
    return false
  }
  return true
})
const showForm = computed(() => {
  if (theme?.value === 'ftva') {
    // if ftva theme, show newletter subscribe form
    return true
  }
  return false
})
</script>

<template>
  <footer :class="classes">
    <FooterSponsor v-if="showSponsor" class="sponsor" />
    <!-- todo either pass theme based props like or make all props in primary computed -->
    <FooterPrimary :form="showForm" class="primary" :is-microsite="true" />
    <FooterLinks v-if="showLinks" class="links" />
    <FooterSock class="sock" />
  </footer>
</template>

<style lang="scss" scoped>
.footer-main {
  @media #{$small} {
  .links { display: none;}
  }
}
</style>
