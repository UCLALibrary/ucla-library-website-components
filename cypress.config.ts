import { defineConfig } from "cypress"

export default defineConfig({
    defaultCommandTimeout: 60000,
    video: false,
    viewportWidth: 1440,
    viewportHeight: 1024,
    retries: 1,
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
    e2e: {
        baseUrl: "http://localhost:6006",
        specPattern: "src/stories/**/*.spec.js",
    },
})
