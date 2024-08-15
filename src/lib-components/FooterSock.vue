<script setup>
// UTILS
import { computed } from 'vue'

import SmartLink from './SmartLink.vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS

// GLOBALSTORE DATA
const globalStore = useGlobalStore()
const parsedSockItems = computed(() => {
  if (Object.keys(globalStore.footerSock).length !== 0) {
    return globalStore.footerSock.nodes
  }
  else {
    // eslint-disable-next-line no-console
    console.log(
      `Pinia state data for footer sock not present if navigation is not setup for the website: is it client side:${process.client}`
    )
  }
  return []
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['footer-sock', theme?.value || '']
})

// OTHER COMPUTED METHODS
const year = computed(() => {
  const current_year = new Date().getFullYear()
  return current_year
})
</script>

<template>
  <div :class="classes">
    <div class="container">
      <div class="regents">
        &#169; {{ year }} Regents of the University of California
      </div>

      <ul class="links">
        <li v-for="item in parsedSockItems" :key="item.id" class="item">
          <SmartLink class="link" :to="item.to" :link-target="item.target">
            {{ item.name }}
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_footer-sock.scss";
@import "@/styles/ftva/_footer-sock.scss";
</style>
