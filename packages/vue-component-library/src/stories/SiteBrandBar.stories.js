import { computed } from 'vue'
import SiteBrandBar from '@/lib-components/SiteBrandBar'

export default {
  title: 'GLOBAL / Site Brand Bar',
  component: SiteBrandBar,
}

const DefaultTemplate = (args) => {
  return {
    template: '<site-brand-bar/>',
    components: { SiteBrandBar },
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const FTVAVersionTemplate = (args) => {
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

export const FTVAVersion = FTVAVersionTemplate.bind({})
FTVAVersion.args = {}
