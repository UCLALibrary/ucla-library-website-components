import ButtonIiif from '../lib-components/ButtonIiif.vue'

export default {
  title: 'Funkhaus / ButtonIiif',
  component: ButtonIiif,
}

export const Default = () => ({
  components: { ButtonIiif },
  template: '<ButtonIiif to="https://iiif.io/" />',
})
