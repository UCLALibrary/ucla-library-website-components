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

// Helper function to validate URL without side effects
function isValidUrl(url: string): boolean {
  try {
    // eslint-disable-next-line no-new
    new URL(url)
    return true
  }
  catch {
    return false
  }
}

// Computed
const viewerUrl = computed(() => {
  if (!props.manifestUrl)
    return ''

  // Basic URL validation
  if (!isValidUrl(props.manifestUrl))
    return ''

  const baseUrl = 'https://universalviewer.io/uv.html'
  const params = new URLSearchParams({
    manifest: props.manifestUrl,
  })
  return `${baseUrl}?${params.toString()}`
})

// Watch for manifest URL changes to validate and set error state
watch(
  () => props.manifestUrl,
  (newUrl) => {
    if (!newUrl) {
      hasError.value = true
      errorMessage.value = 'No manifest URL provided'
      return
    }

    // Basic URL validation
    if (isValidUrl(newUrl)) {
      hasError.value = false
      errorMessage.value = ''
    }
    else {
      hasError.value = true
      errorMessage.value = 'Invalid manifest URL format'
    }
  },
  { immediate: true }
)

const containerClasses = computed(() => {
  return [
    'detail-media',
    theme?.value || '',
    props.customClass,
    isLoading.value ? 'loading' : '',
    hasError.value ? 'error' : '',
  ].filter(Boolean)
})

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
  <div :class="containerClasses" :style="{ height }">
    <!-- Error State -->
    <div v-if="hasError" class="viewer-error">
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
    <div v-else class="viewer-container">
      <!-- Loading State Overlay -->
      <div v-if="isLoading" class="viewer-loading">
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
@import "@/styles/dlc/_detail-media.scss";
</style>
