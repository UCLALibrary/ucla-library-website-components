import { computed } from 'vue'
import AlphabeticalBrowseBy from '../lib-components/AlphabeticalBrowseBy'

export default {
  title: 'SEARCH / AlphabeticalBrowseBy',
  component: AlphabeticalBrowseBy,
}

const DefaultTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const CIsSelectedTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by selectedLetterProp="C"/>',
  }
}

export const CIsSelected = CIsSelectedTemplate.bind({})
CIsSelected.args = {}

const NoAllTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by :display-all="false"/>',
  }
}

export const NoAll = NoAllTemplate.bind({})
NoAll.args = {}

const FTVATemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by />',
  }
}

export const FTVA = FTVATemplate.bind({})
FTVA.args = {}

const FTVAAisSelectedTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by selectedLetterProp="A"/>',
  }
}

export const FTVAAisSelected = FTVAAisSelectedTemplate.bind({})
FTVAAisSelected.args = {}

const DLCTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by />',
  }
}

export const DLC = DLCTemplate.bind({})
DLC.args = {}

const DLCAisSelectedTemplate = (args) => {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by selectedLetterProp="A"/>',
  }
}

export const DLCAisSelected = DLCAisSelectedTemplate.bind({})
DLCAisSelected.args = {}
