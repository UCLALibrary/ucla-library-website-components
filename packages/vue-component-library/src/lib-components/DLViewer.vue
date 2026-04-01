<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'

// Define IIIF Manifest types
interface IIIFManifest {
  '@context'?: string | string[]
  '@type'?: string
  type?: string
  label?: { none?: string[] } | string
  items?: IIIFItem[]
  sequences?: IIIFSequence[]
}

interface IIIFItem {
  items?: IIIFItem[]
  body?: IIIFBody | IIIFBody[]
}

interface IIIFBody {
  id?: string
  type?: string
  format?: string
  height?: number
  width?: number
  service?: unknown
  items?: IIIFBody[]
}

interface IIIFSequence {
  canvases?: IIIFCanvas[]
}

interface IIIFCanvas {
  images?: IIIFImage[]
}

interface IIIFImage {
  resource?: {
    service?: unknown
  }
}

interface ViewerOptions {
  autoplay?: boolean
  controls?: boolean
  fill?: boolean
  sources?: Array<{ src: string; type: string }>
  src?: string
  height?: number
  width?: number
  alt?: string
  iiif_manifest?: IIIFManifest | null
  iiif_manifest_url?: string
  uv_config?: string
  viewerBaseUrl?: string
}

// Async components - using component names as strings to resolve dynamically
type ViewerComponentName =
    | 'ImageTag'
    | 'Mirador'
    | 'MiradorPalimpsest'
    | 'VideoJS'
    | 'UniversalViewer'
    | 'UniversalViewer3'

const props = withDefaults(defineProps<Props>(), {
  site: '',
  viewerBaseUrl: 'https://p-w-dl-viewer01.library.ucla.edu',
})

const viewerComponents: Record<
    ViewerComponentName,
    ReturnType<typeof defineAsyncComponent>
> = {
  ImageTag: defineAsyncComponent(() => import('./DLMediaTypes/ImageTag.vue')),
  Mirador: defineAsyncComponent(() => import('./DLMediaTypes/Mirador.vue')),
  MiradorPalimpsest: defineAsyncComponent(
    () => import('./DLMediaTypes/MiradorPalimpsest.vue')
  ),
  VideoJS: defineAsyncComponent(() => import('./DLMediaTypes/VideoJS.vue')),
  UniversalViewer: defineAsyncComponent(
    () => import('./DLMediaTypes/UniversalViewer.vue')
  ),
  UniversalViewer3: defineAsyncComponent(
    () => import('./DLMediaTypes/UniversalViewer3.vue')
  ),
}

// Props
interface Props {
  iiif_manifest_url: string
  site?: string
  viewerBaseUrl?: string
}

// State
const iiif_manifest = ref<IIIFManifest | null>(null)

// Computed properties
const isV3Manifest = computed(() => {
  const v3_context = 'http://iiif.io/api/presentation/3/context.json'
  const context = iiif_manifest.value?.['@context']
  if (Array.isArray(context))
    return context.includes(v3_context)

  return context === v3_context
})

const firstItemType = computed(() => {
  if (isV3Manifest.value && iiif_manifest.value?.items) {
    // Non-image content currently only uses IIIF v3
    const body = iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
    let firstItem: IIIFBody | undefined
    if (Array.isArray(body))
      firstItem = body[0]
    else if (typeof body === 'object' && body !== null)
      firstItem = body as IIIFBody

    return firstItem?.type
  }
  return 'Image'
})

const isChoice = computed(() => firstItemType.value === 'Choice')

const firstItemTypeFromChoice = computed(() => {
  if (!isChoice.value || !iiif_manifest.value?.items)
    return undefined

  const body = iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
  if (
    Array.isArray(body)
        && body[0]?.items?.[0]
        && typeof body[0].items[0] === 'object'
        && body[0].items[0] !== null
  )
    return (body[0].items[0] as IIIFBody).type

  if (
    typeof body === 'object'
        && body !== null
        && 'items' in body
        && Array.isArray(body.items)
        && body.items[0]
  ) {
    const firstItem = body.items[0]
    return typeof firstItem === 'object' && firstItem !== null
      ? firstItem.type
      : undefined
  }
  return undefined
})

const hasIiifService = computed(() => {
  if (!iiif_manifest.value)
    return false

  if (isV3Manifest.value) {
    return !!(
      iiif_manifest.value.items?.[0]?.items?.[0]?.items?.[0]?.body
            && (Array.isArray(
              iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
            )
              ? iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]
                ?.body?.[0]?.service
              : typeof iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]
                ?.body === 'object'
                  && iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
                    ?.service)
    )
  }
  return !!iiif_manifest.value.sequences?.[0]?.canvases?.[0]?.images?.[0]
    ?.resource?.service
})

const isCollection = computed(() => {
  const manifestType
        = iiif_manifest.value?.['@type'] || iiif_manifest.value?.type || ''
  return String(manifestType).includes('Collection')
})

const isImage = computed(() => firstItemType.value === 'Image')

const isSinai = computed(() => props.site === 'sinai')

const isSinaiPalimpsest = computed(
  () =>
    props.iiif_manifest_url?.includes('sinai-images.library.ucla.edu')
        ?? false
)

const isSound = computed(
  () =>
    firstItemType.value === 'Sound'
        || firstItemTypeFromChoice.value === 'Sound'
)

const isVideo = computed(
  () =>
    firstItemType.value === 'Video'
        || firstItemTypeFromChoice.value === 'Video'
)

const isAppleOrIOS = computed(() => /(Apple|iOS)/.test(navigator.userAgent))

const videoSources = computed(() => {
  if (!isVideo.value || !iiif_manifest.value?.items)
    return null

  if (isChoice.value) {
    const body = iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
    if (Array.isArray(body))
      return body

    if (
      typeof body === 'object'
            && body !== null
            && 'items' in body
            && Array.isArray(body.items)
    )
      return body.items

    return null
  }
  return iiif_manifest.value.items[0]?.items?.[0]?.items?.[0]?.body
})

const viewer = computed((): ViewerComponentName => {
  if (isSinaiPalimpsest.value)
    return 'MiradorPalimpsest'

  if (isSinai.value)
    return 'Mirador'

  if (isCollection.value)
    return 'UniversalViewer'

  if (isVideo.value)
    return 'VideoJS'

  if (isSound.value)
    return 'UniversalViewer3'

  if (isImage.value && hasIiifService.value)
    return 'UniversalViewer'

  if (isImage.value && !hasIiifService.value)
    return 'ImageTag'

  return 'UniversalViewer'
})

const options = computed((): ViewerOptions => {
  if (!iiif_manifest.value)
    return {}

  if (isVideo.value && videoSources.value) {
    const filteredSources = Array.isArray(videoSources.value)
      ? videoSources.value.filter(
        source =>
          (isAppleOrIOS.value
                          && source.format === 'application/vnd.apple.mpegurl')
                      || (!isAppleOrIOS.value
                          && source.format === 'application/dash+xml')
      )
      : []
    return {
      autoplay: false,
      controls: true,
      fill: true,
      sources: filteredSources.map(source => ({
        src: source.id || '',
        type: source.format || '',
      })),
    }
  }
  if (viewer.value === 'ImageTag') {
    const firstItem
            = iiif_manifest.value.items?.[0]?.items?.[0]?.items?.[0]?.body
    const body = Array.isArray(firstItem) ? firstItem[0] : firstItem
    const label = iiif_manifest.value.label
    const labelText
            = typeof label === 'object'
            && label !== null
            && 'none' in label
            && Array.isArray(label.none)
              ? label.none[0]
              : ''
    return {
      src: body?.id || '',
      height: body?.height,
      width: body?.width,
      alt: labelText || '',
    }
  }
  return {
    iiif_manifest: iiif_manifest.value,
    iiif_manifest_url: props.iiif_manifest_url,
    uv_config: isSound.value
      ? 'no-download-uv-config.json'
      : 'uv-config.json',
    viewerBaseUrl: props.viewerBaseUrl,
  }
})

// Lifecycle
onMounted(async () => {
  try {
    const response = await fetch(props.iiif_manifest_url)
    if (!response.ok)
      throw new Error(`Failed to fetch manifest: ${response.statusText}`)

    iiif_manifest.value = await response.json()
  }
  catch (error) {
    console.warn('Error fetching IIIF manifest:', error)
  }
})
</script>

<template>
  <div class="dl-viewer">
    <component :is="viewerComponents[viewer]" :options="options" />
  </div>
</template>

<style scoped>
.dl-viewer {
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;
}
</style>
