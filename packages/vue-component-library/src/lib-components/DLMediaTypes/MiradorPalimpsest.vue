<script>
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  computed: {
    iframe_target_url() {
      const baseUrl = this.options?.viewerBaseUrl || 'https://p-w-dl-viewer01.library.ucla.edu'
      const manifestUrl = this.options?.iiif_manifest_url

      if (manifestUrl) {
        // Construct viewer URL with manifest parameter
        return `${baseUrl}/palimpsest/viewer.html?manifest=${encodeURIComponent(manifestUrl)}`
      }

      // Fallback: try to get manifest from current page URL
      const fixed_url = new URL(window.location.toString().replace('#?', '?'))
      const manifestParam = fixed_url.searchParams.get('manifest')

      if (manifestParam)
        return `${baseUrl}/palimpsest/viewer.html?manifest=${encodeURIComponent(manifestParam)}`

      return `${baseUrl}/palimpsest/viewer.html${fixed_url.search}`
    },
  },
}
</script>

<template>
  <iframe
    id="mirador-iframe"
    class="mirador"
    :src="iframe_target_url"
    allowfullscreen
    frameborder="0"
  />
</template>

<style scoped>
.mirador {
  width: 100%;
  height: 100%;
}
</style>
