import { computed } from 'vue'
import router from '@/router'
import DividerWayFinder from '@/lib-components/DividerWayFinder'

export default {
  title: 'DIVIDER / Way Finder',
  component: DividerWayFinder,
}

// STORIES
const DefaultTemplate = (args) => {
  void args
  router.push('/default')
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const VisitTemplate = (args) => {
  void args
  router.push('/visit/eee')
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export const Visit = VisitTemplate.bind({})
Visit.args = {}


const AboutTemplate = (args) => {
  void args
  router.push('/about/fff')
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export const About = AboutTemplate.bind({})
About.args = {}


const HelpTemplate = (args) => {
  void args
  router.push('/help/ddd')
  return {
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export const Help = HelpTemplate.bind({})
Help.args = {}


const FTVATemplate = (args) => {
  void args
  router.push('/default')
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { DividerWayFinder },
    template: '<divider-way-finder />',
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {}

