<script lang="ts" setup>
import { computed, onMounted } from 'vue'
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
      const source = e.source
      // previously we were using the getElementsById to set the iframe height
      // HOWEVER, this was failing when multiple iframes with the same ID were present
      // THEREFORE, we are now looping through all iframes and setting the height based on matching source
      const iframes = document.getElementsByTagName('iframe')
      switch (eventName) {
        case 'setHeight':
          for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === source) {
              iframes[i].style.height = `${data + 20}px`
              break
            }
          }
          break
      }
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
      <iframe id="the-iframe" title="Hours for location" class="iframe" :src="parsedSrc" frameBorder="0" width="100%"
        height="100%" />
      <ButtonLink label="All Library Hours" :is-secondary="true" to="https://calendar.library.ucla.edu/hours"
        class="btn-lnk" />
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
