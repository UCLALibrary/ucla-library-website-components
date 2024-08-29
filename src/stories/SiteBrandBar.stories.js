import { computed } from 'vue'
import SiteBrandBar from '@/lib-components/SiteBrandBar'

export default {
  title: 'GLOBAL / Site Brand Bar',
  component: SiteBrandBar,
}

export function Default() {
  return {
    template: '<site-brand-bar/>',
    components: { SiteBrandBar },
  }
}

export function FTVAVersion() {
  return {
    template: '<site-brand-bar/>',
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SiteBrandBar },
  }
}
