<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import ButtonLink from '@/lib-components/ButtonLink.vue'

// Props
const props = defineProps({
  lid: {
    type: String,
    default: '',
  },
  isClicc: {
    type: Boolean,
    default: false,
  },
})
const iframeRef = ref<HTMLIFrameElement | null>(null)
// Computed
const parsedSrc = computed(() => {
  if (!props.isClicc)
    return `https://www.library.ucla.edu/blockHours.html?lid=${props.lid}`
  else
    return 'https://www.library.ucla.edu/blockCliccHours.html?lid=0'
})
// Mounted
onMounted(() => {
  window.addEventListener(
    'message',
    (e) => {
      const eventName = e.data[0]
      const data = e.data[1]
      // Previously we used JS DOM manipulation to set the height of the iframe via getElementsById / getElementsByTagName
      // HOWEVER, this was failing when a race condition occured between the iframe loading and the JS DOM manipulation (APPS-2852)
      // THEREFORE, we are now using vue refs to set the height of the iframe, which should be sturdier
      if (eventName === 'setHeight' && iframeRef.value)
        iframeRef.value!.style.height = `${data + 20}px`
    },
    false
  )
})
</script>

<template>
  <div class="block-hours">
    <h3 class="title">
      Hours
    </h3>
    <div class="content">
      <iframe
        id="the-iframe" ref="iframeRef" title="Hours for location" class="iframe" :src="parsedSrc" frameBorder="0" width="100%"
        height="100%"
      />
      <ButtonLink
        label="All Library Hours" :is-secondary="true" to="https://calendar.library.ucla.edu/hours"
        class="btn-lnk"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-hours {
  max-width: 930px;
  width: 100%;

  .title {
    color: var(--color-primary-blue-03);
    @include step-2;
    margin-bottom: var(--space-m);
  }

  .content {
    border-radius: var(--rounded-slightly-all);
    border: 2px solid var(--color-primary-blue-01);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-between;

    .btn-lnk {
      max-width: 300px;
      margin-left: 10px;
      margin-top: 8px;
      margin-bottom: 20px;
    }

    .iframe {
      max-width: 928px;
      padding: 12px;
    }

    table {
      height: 100%;
    }
  }
}
</style>
