import ButtonPageView from "@/lib-components/ButtonPageView.vue"

export default {
    title: "Funkhaus / Button Page View",
    component: ButtonPageView,
    decorators: [
        (story) => ({
            components: { story },
            template: "<story />",
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

// Story: MockedViewToggle
import { ref, computed } from "vue"
export function MockedViewToggle() {
    return {
        components: { ButtonPageView },
        setup() {
            const view = ref("list")
            const currentView = computed(() => view.value)
            const isListView = computed(() => view.value === "list")
            const isGalleryView = computed(() => view.value === "gallery")
            function handleViewChange(newView) {
                view.value = newView
            }
            return {
                currentView,
                isListView,
                isGalleryView,
                handleViewChange,
            }
        },
        provide() {
            return {
                theme: computed(() => "dlc"),
            }
        },
        template: `
      <div style="padding: 40px; background: #f5f5f5;">
        <ButtonPageView
          :storybookMock='true'
          :isListView="isListView"
          :isGalleryView="isGalleryView"
          @view-change="handleViewChange"
        />
        <div style="margin-top: 16px;">Current view: <strong>{{ currentView }}</strong></div>
      </div>
    `,
    }
}
