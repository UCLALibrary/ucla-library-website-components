import { computed } from 'vue'
import ButtonIiif from '../lib-components/ButtonIiif.vue'

export default {
  title: 'Funkhaus / ButtonIiif',
  component: ButtonIiif,
}

export function Default() {
  return {
    components: { ButtonIiif },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: '<ButtonIiif to="https://iiif.io/" />',
  }
}
