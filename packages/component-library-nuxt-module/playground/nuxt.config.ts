export default defineNuxtConfig({
  modules: [
    '@radya/nuxt-dompurify',
    '../src/module',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-02-07',
  uclaLibraryWebsiteComponents: {},
})
