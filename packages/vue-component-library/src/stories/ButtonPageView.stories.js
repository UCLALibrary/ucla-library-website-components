import { computed } from 'vue'
import ButtonPageView from '@/lib-components/ButtonPageView.vue'
import router from '@/router'

export default {
  title: 'Funkhaus / Button Page View',
  component: ButtonPageView,
}

export function Default() {
  return {
    components: { ButtonPageView },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
        theme: computed(() => ''),
      }
    },
    template: `
  <div style="padding: 40px; background: #f5f5f5;">
    <button-page-view />
  </div>
`,
  }
}

export function MockedViewToggle() {
  router.push({ path: '/search', query: { view: 'gallery' } })
  return {
    components: { ButtonPageView },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
      <div style="padding: 40px; background: #f5f5f5;">
        <ButtonPageView/>
      </div>
    `,
  }
}
