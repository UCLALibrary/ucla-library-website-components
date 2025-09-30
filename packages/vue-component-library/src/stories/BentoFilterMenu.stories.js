import { computed } from 'vue'
import BentoFilterMenu from '@/lib-components/BentoFilterMenu.vue'

export default {
  title: 'Funkhaus / Bento Filter Menu',
  component: BentoFilterMenu,
}

export function Default() {
  return {
    components: { BentoFilterMenu },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
  <div style="padding: 40px; background: #f5f5f5;">
    <bento-filter-menu :items="items" />
  </div>
`,
    data() {
      return {
        items: [
          { label: 'Everything', to: '/search' },
          { label: 'Images', to: '/search?type=images' },
          { label: 'Videos', to: '/search?type=videos' },
          { label: 'Manuscripts', to: '/search?type=manuscripts' },
          { label: 'Books', to: '/search?type=books' },
          { label: 'Audio', to: '/search?type=audio' },
          { label: '3D Art', to: '/search?type=3d-art' },
        ]
      }
    }
  }
}

export function NoTheme() {
  return {
    components: { BentoFilterMenu },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    template: `
  <div style="padding: 40px; background: #f5f5f5;">
    <bento-filter-menu :items="items" />
  </div>
`,
    data() {
      return {
        items: [
          { label: 'Everything', to: '/search' },
          { label: 'Images', to: '/search?type=images' },
          { label: 'Videos', to: '/search?type=videos' },
          { label: 'Manuscripts', to: '/search?type=manuscripts' },
          { label: 'Books', to: '/search?type=books' },
          { label: 'Audio', to: '/search?type=audio' },
          { label: '3D Art', to: '/search?type=3d-art' },
        ]
      }
    }
  }
}
