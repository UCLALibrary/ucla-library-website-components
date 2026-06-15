import { computed } from 'vue'
import ButtonIiif from '../lib-components/ButtonIiif.vue'
import { normalizeStoryTheme, STORY_THEME_OPTIONS } from './helpers/themeControls'

export default {
  title: 'Funkhaus / ButtonIiif',
  component: ButtonIiif,
  argTypes: {
    to: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
  },
}

function Template(args) {
  return {
    components: { ButtonIiif },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    setup() {
      return { args }
    },
    template: '<ButtonIiif :to="args.to" />',
  }
}

export const Default = Template.bind({})
Default.args = {
  to: 'https://iiif.io/',
  theme: 'dlc',
}
Default.parameters = {
  chromatic: { disableSnapshot: false },
}
