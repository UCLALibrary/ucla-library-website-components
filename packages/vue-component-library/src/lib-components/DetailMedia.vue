<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTheme } from '@/composables/useTheme'

const props = withDefaults(defineProps<DetailMediaProps>(), {
  height: '500px',
  title: 'IIIF Viewer',
  description: '',
  customClass: '',
})
const theme = useTheme()
// Props
interface DetailMediaProps {
  manifestUrl: string
  height?: string
  title?: string
  description?: string
  customClass?: string
}

// Reactive state
const isLoading = ref(true)
const hasError = ref(false)
const errorMessage = ref('')

// Computed
const isValidUrl = computed(() => {
  if (!props.manifestUrl)
    return false

  try {
    // eslint-disable-next-line no-new
    new URL(props.manifestUrl)
    return true
  }
  catch {
    return false
  }
})

const viewerUrl = computed(() => {
  if (!isValidUrl.value)
    return ''

  const baseUrl = 'https://universalviewer.io/uv.html'
  const params = new URLSearchParams({
    manifest: props.manifestUrl,
  })
  return `${baseUrl}?${params.toString()}`
})

const containerClasses = computed(() => {
  return [
    'detail-media',
    theme?.value || '',
    props.customClass,
    isLoading.value ? 'loading' : '',
    hasError.value ? 'error' : '',
  ].filter(Boolean)
})

// Watch for URL validation changes and update error state
watch(isValidUrl, (isValid) => {
  if (!isValid) {
    hasError.value = true
    if (!props.manifestUrl)
      errorMessage.value = 'No manifest URL provided'
    else
      errorMessage.value = 'Invalid manifest URL format'
  }
  else {
    hasError.value = false
    errorMessage.value = ''
  }
}, { immediate: true })

// Methods
function handleIframeLoad() {
  isLoading.value = false
}

function handleIframeError() {
  isLoading.value = false
  hasError.value = true
  errorMessage.value = 'Failed to load IIIF manifest'
}
</script>

<template>
  <div
    :class="containerClasses"
    :style="{ height }"
  >
    <!-- Error State -->
    <div
      v-if="hasError"
      class="viewer-error"
    >
      <div class="error-icon">
        ⚠️
      </div>
      <h3>Unable to load media</h3>
      <p>{{ errorMessage }}</p>
      <details v-if="props.manifestUrl">
        <summary>Technical details</summary>
        <code>{{ props.manifestUrl }}</code>
      </details>
    </div>

    <!-- IIIF Viewer with Loading Overlay -->
    <div
      v-else
      class="viewer-container"
    >
      <!-- Loading State Overlay -->
      <div
        v-if="isLoading"
        class="viewer-loading"
      >
        <div class="loading-spinner" />
        <p>Loading IIIF viewer...</p>
      </div>

      <!-- IIIF Viewer -->
      <iframe
        :src="viewerUrl"
        :title="title"
        :aria-label="description || title"
        class="viewer-iframe"
        allowfullscreen
        @load="handleIframeLoad"
        @error="handleIframeError"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/dlc/_detail-media.scss';
</style>
