import ButtonPageView from "@/lib-components/ButtonPageView.vue"
import { computed } from "vue"

export default {
  title: "Funkhaus / Button Page View",
  component: ButtonPageView,
  decorators: [
    (story) => ({
      components: { story },
      template: '<story />',
    }),
  ],
}

export function Default() {
  return {
    components: { ButtonPageView },
    provide() {
      return {
        theme: computed(() => "dlc"),
      }
    },
    template: `
  <div style="padding: 40px; background: #f5f5f5;">
    <button-page-view />
  </div>
`,
  }
}

export function NoTheme() {
  return {
    components: { ButtonPageView },
    provide() {
      return {
        theme: computed(() => ""),
      }
    },
    template: `
  <div style="padding: 40px; background: #f5f5f5;">
    <button-page-view />
  </div>
`,
  }
}
