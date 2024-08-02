<script lang="ts" setup>
// UTILS
import { computed } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import { useTheme } from '@/composables/useTheme'

// CHILD COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// GLOBALSTORE DATA
const globalStore = useGlobalStore()
const parsedFooterLinks = computed(() => {
  if (Object.keys(globalStore.footerLinks).length !== 0) {
    return globalStore.footerLinks.nodes
  }
  else {
    // eslint-disable-next-line no-console
    console.log(
      'Pinia state data for footer links not present'
    )
  }
  return []
})

// THEME
const theme = useTheme()
const classes = computed(() => {
  return ['footer-links', theme?.value || '']
})
</script>

<template>
  <div :class="classes">
    <div class="link-wrapper">
      <div v-for="item, index in parsedFooterLinks" :key="item.id" class="link-list">
        <h4 class="link-list-label">
          {{ item.category }}
        </h4>
        <ul>
          <li v-for="listlink in parsedFooterLinks[index].children" :key="listlink.name" class="link-item">
            <SmartLink
              id="banner-featured"
              :to="listlink.to"
              class="title title-linked"
            >
              {{ listlink.name }}
            </SmartLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "ucla-library-design-tokens/scss/_tokens-ftva";
@import "@/styles/default/_footer-links.scss";
@import "@/styles/ftva/_footer-links.scss";
</style>
