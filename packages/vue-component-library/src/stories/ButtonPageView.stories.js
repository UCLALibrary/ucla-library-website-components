import { computed } from 'vue'
import ButtonPageView from '@/lib-components/ButtonPageView.vue'
import router from '@/router'

export default {
  title: 'Funkhaus / Button Page View',
  component: ButtonPageView,
}

const DefaultTemplate = (args) => {
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

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const NoThemeTemplate = (args) => {
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

export const NoTheme = NoThemeTemplate.bind({})
NoTheme.args = {}

const MockedViewToggleTemplate = (args) => {
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

export const MockedViewToggle = MockedViewToggleTemplate.bind({})
MockedViewToggle.args = {}
