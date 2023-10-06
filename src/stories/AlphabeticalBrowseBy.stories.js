import AlphabeticalBrowseBy from '../lib-components/AlphabeticalBrowseBy'

export default {
  title: 'SEARCH / AlphabeticalBrowseBy',
  component: AlphabeticalBrowseBy,
}

export function Default() {
  return {
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by/>',
  }
}

export function CIsSelected() {
  return {
    components: { AlphabeticalBrowseBy },
    template: '<alphabetical-browse-by selectedLetterProp="C"/>',
  }
}
