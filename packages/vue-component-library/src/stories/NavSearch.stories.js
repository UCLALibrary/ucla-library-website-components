import { computed } from 'vue'
import { STORY_THEME_OPTIONS, normalizeStoryTheme } from './helpers/themeControls'
import NavSearch from '@/lib-components/NavSearch'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'NAV / Search',
  component: NavSearch,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
    placeholder: { control: 'text' },
    showDivider: { control: 'boolean' },
    dropdownOptions: { control: 'object' },
    dropdownDefaultValue: { control: 'text' },
    bottomText: { control: 'text' },
    bottomLink: { control: 'object' },
    backgroundImage: { control: 'object' },
  },
}

const dlcDropdownOptions = [
  { label: 'All Collections', value: 'all-collections' },
  { label: 'Books & Articles', value: 'books-articles' },
  { label: 'Digital Collections', value: 'digital-collections' },
  { label: 'Archives & Manuscripts', value: 'archives-manuscripts' },
  { label: 'Images & Media', value: 'images-media' },
  { label: 'Databases', value: 'databases' },
]

// Variations of stories below
function Template(args) {
  return {
    setup() {
      return { args }
    },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    components: { NavSearch },
    template: `
      <nav-search
        :placeholder="args.placeholder"
        :show-divider="args.showDivider"
        :dropdown-options="args.dropdownOptions"
        :dropdown-default-value="args.dropdownDefaultValue"
        :bottom-text="args.bottomText"
        :bottom-link="args.bottomLink"
        :background-image="args.backgroundImage"
      />
    `,
  }
}

export const DefaultWithPlaceholderProp = Template.bind({})
DefaultWithPlaceholderProp.args = {
  theme: 'default',
  placeholder: 'Search the Library',
  showDivider: false,
  dropdownOptions: [],
  dropdownDefaultValue: '',
  bottomText: undefined,
  bottomLink: undefined,
  backgroundImage: undefined,
}

DefaultWithPlaceholderProp.parameters = {
  chromatic: { disableSnapshot: false },
}

export const FTVA = Template.bind({})
FTVA.args = {
  ...DefaultWithPlaceholderProp.args,
  theme: 'ftva',
}

export const DLC = Template.bind({})
DLC.args = {
  ...DefaultWithPlaceholderProp.args,
  theme: 'dlc',
  bottomText: '',
  bottomLink: null,
}

export const DLCWithDropdown = Template.bind({})
DLCWithDropdown.args = {
  ...DLC.args,
  placeholder: 'Search Digital Library Collections',
  dropdownOptions: [
    { label: 'All Content', value: 'all-content' },
    { label: 'Digital Collections', value: 'digital-collections' },
    { label: 'Archives', value: 'archives' },
    { label: 'Research Guides', value: 'research-guides' },
    { label: 'Databases', value: 'databases' },
  ],
}

export const DLCWithDivider = Template.bind({})
DLCWithDivider.args = {
  ...DLC.args,
  showDivider: true,
}

export const DLCWithDividerAndDropdown = Template.bind({})
DLCWithDividerAndDropdown.args = {
  ...DLCWithDivider.args,
  dropdownOptions: dlcDropdownOptions,
  dropdownDefaultValue: 'all-collections',
}

export const DLCWithBackgroundImage = Template.bind({})
DLCWithBackgroundImage.args = {
  ...DLCWithDivider.args,
  backgroundImage: API.image,
  bottomText: '',
  bottomLink: {
    label: `Poster celebrating the 100 years of the legal abolition of three centuries of slavery in Brazil (1888-1988)
                    Collections: Soweto Black Organization, Modern Endangered Archives Program`,
    to: 'https://library.ucla.edu',
  },
}

export const DLCWithBackgroundImageAndDropdown = Template.bind({})
DLCWithBackgroundImageAndDropdown.args = {
  ...DLCWithBackgroundImage.args,
  dropdownOptions: dlcDropdownOptions,
  dropdownDefaultValue: 'all-collections',
}
