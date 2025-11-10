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
      const baseUrl = this.options?.viewerBaseUrl || ''
      const manifestUrl = this.options?.iiif_manifest_url

      if (manifestUrl) {
        // Construct viewer URL with manifest parameter
        return `${baseUrl}/uv3.html#?manifest=${encodeURIComponent(manifestUrl)}`
      }

      // Fallback: try to get manifest from current page URL
      const fixed_url = new URL(window.location.toString().replace('#?', '?'))
      const manifestParam = fixed_url.searchParams.get('manifest')

      if (manifestParam)
        return `${baseUrl}/uv3.html#?manifest=${encodeURIComponent(manifestParam)}`

      return `${baseUrl}/uv3.html${fixed_url.search}`
    },
  },
}
</script>

<template>
  <iframe
    id="universalviewer-iframe"
    class="universalviewer"
    :src="iframe_target_url"
    allowfullscreen
    frameborder="0"
  />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.universalviewer {
  width: 100%;
  height: 100%;
}
</style>
