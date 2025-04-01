import { computed } from 'vue'
import AlphabeticalBrowseBy from '../lib-components/AlphabeticalBrowseBy'

export default {
  title: 'SEARCH / AlphabeticalBrowseBy',
  component: AlphabeticalBrowseBy,
}

export function Default() {
  return {
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by/>',
  }
}

export function CIsSelected() {
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

export function NoAll() {
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

export function FTVA() {
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


