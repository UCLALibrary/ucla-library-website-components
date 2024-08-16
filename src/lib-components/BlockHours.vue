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
const trackHeight = ref(0)
// Computed
const parsedSrc = computed(() => {
  if (!props.isClicc)
    return `https://www.library.ucla.edu/blockHours.html?lid=${props.lid}`
  else
    return 'https://www.library.ucla.edu/blockCliccHours.html?lid=0'
})
// Function to adjust iframe height
function adjustIframeHeight(data: number) {
  if (iframeRef.value) {
    console.log('iframe calculated height:', data)
    iframeRef.value.style.height = `${data + 20}px`
  }
}
// Polling mechanism to adjust height
function startPolling() {
  setInterval(() => {
    if (iframeRef.value) {
      const height = iframeRef.value.contentWindow?.document.body.scrollHeight
      if (height) {
        if (height !== trackHeight.value) {
          adjustIframeHeight(height)
          trackHeight.value = height
        }
      }
    }
  }, 1000) // Adjust every second, can be tuned as needed
}
// Mounted
onMounted(() => {
  window.addEventListener(
    'message',
    (e) => {
      console.log('Message received:', e)
      const eventName = e.data[0]
      const data = e.data[1]
      // Previously we used JS DOM manipulation to set the height of the iframe via getElementsById / getElementsByTagName
      // HOWEVER, this was failing when a race condition occured between the iframe loading and the JS DOM manipulation (APPS-2852)
      // THEREFORE, we are now using vue refs to set the height of the iframe, which should be sturdier

      if (eventName === 'setHeight' && iframeRef.value)
        adjustIframeHeight(data)
    },
    false
  )
  // Force height adjustment on load and resize
  /*
    Force Height Request on Load/Resize: The window.onload and window.onresize
    events are used to send a message to the iframe asking
    it to send back its height. This ensures that even if the parent page is
    opened in a new window, the height adjustment is triggered.
  */
  window.onload = () => {
    if (iframeRef.value)
      iframeRef.value.contentWindow?.postMessage('requestHeight', '*')
  }

  window.onresize = () => {
    if (iframeRef.value)
      iframeRef.value.contentWindow?.postMessage('requestHeight', '*')
  }
  startPolling()
})
</script>

<template>
  <div class="block-hours">
    <h3 class="title">
      Hours
    </h3>
    <div class="content">
      <iframe
        id="the-iframe"
        ref="iframeRef"
        title="Hours for location"
        class="iframe"
        :src="parsedSrc"
        frameBorder="0"
        width="100%"
        height="100%"
      />
      <ButtonLink
        label="All Library Hours"
        :is-secondary="true"
        to="https://calendar.library.ucla.edu/hours"
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
