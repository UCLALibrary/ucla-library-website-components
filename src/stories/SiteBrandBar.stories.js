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
