import ButtonPageView from '@/lib-components/ButtonPageView'
import SvgDiscord from './assets/discord.svg'
import SvgYoutube from './assets/youtube.svg'

export default {
  title: 'BUTTON / PageView',
  component: ButtonPageView,
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        pageView: 'list',
      }
    },
    components: { ButtonPageView },
    template: '<button-page-view :page-view="pageView" @update:page-view="onUpdate" />',
    methods: {
      onUpdate(value) {
        this.pageView = value
      },
    },
  }
}

export function PlaceholderIconInSlot() {
  return {
    components: { ButtonPageView, SvgDiscord, SvgYoutube },
    data() {
      return {
        pageView: 'list',
      }
    },
    template: `
    <button-page-view :page-view="pageView" @update:page-view="onUpdate">
      <template #grid>
        <SvgYoutube />
      </template>
      <template #list>
        <SvgDiscord />
      </template>
    </button-page-view>
    `,
    methods: {
      onUpdate(value) {
        this.pageView = value
      },
    },
  }
}