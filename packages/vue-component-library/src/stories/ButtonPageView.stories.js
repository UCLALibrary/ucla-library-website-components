import ButtonPageView from "@/lib-components/ButtonPageView.vue"
import { computed } from "vue"

export default {
    title: "Funkhaus / Button Page View",
    component: ButtonPageView,
}

export const Default = () => ({
    components: { ButtonPageView },
    provide() {
        return {
            theme: computed(() => "dlc"),
        }
    },
    data() {
        return {
            pageView: "list",
        }
    },
    template: `
    <div style="padding: 40px; background: #f5f5f5;">
      <button-page-view :page-view="pageView" @update:pageView="pageView = $event" />
      <div style="margin-top: 20px;">
        <strong>Current view:</strong> {{ pageView }}
      </div>
    </div>
  `,
})
export const NoTheme = () => ({
    components: { ButtonPageView },
    provide() {
        return {
            theme: computed(() => ""),
        }
    },
    data() {
        return {
            pageView: "list",
        }
    },
    template: `
    <div style="padding: 40px; background: #f5f5f5;">
      <button-page-view :page-view="pageView" @update:pageView="pageView = $event" />
      <div style="margin-top: 20px;">
        <strong>Current view:</strong> {{ pageView }}
      </div>
    </div>
  `,
})

export const GridActive = () => ({
    components: { ButtonPageView },
    provide() {
        return {
            theme: computed(() => "dlc"),
        }
    },
    data() {
        return {
            pageView: "grid",
        }
    },
    template: `
    <div style="padding: 40px; background: #f5f5f5;">
      <button-page-view :page-view="pageView" @update:pageView="pageView = $event" />
      <div style="margin-top: 20px;">
        <strong>Current view:</strong> {{ pageView }}
      </div>
    </div>
  `,
})
