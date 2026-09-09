<script setup lang="ts">
import SvgAlertCircle from 'ucla-library-design-tokens/assets/svgs/icon-alert.svg'
import RichText from './RichText.vue'

defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section
    v-if="text"
    class="site-notification-banner"
    role="alert"
  >
    <div class="notification-inner">
      <SvgAlertCircle
        class="notification-icon"
        aria-hidden="true"
      />

      <RichText
        class="notification-text"
        :rich-text-content="text"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_site-notification-banner.scss" as *;
</style>
