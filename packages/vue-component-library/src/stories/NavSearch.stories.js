import { computed } from 'vue'
import NavSearch from '@/lib-components/NavSearch'
import * as API from '@/stories/mock-api.json'

export default {
  title: 'NAV / Search',
  component: NavSearch,
}

const mockData = {
  placeholder: 'Search the Library',
}

// Variations of stories below
export function DefaultWithPlaceholderProp() {
  return {
    data() {
      return {
        ...mockData,
      }
    },
    components: { NavSearch },
    template: '<nav-search :placeholder="placeholder"/>',
  }
}

DefaultWithPlaceholderProp.parameters = {
  chromatic: { disableSnapshot: false },
}

export function FTVA() {
  return {
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { NavSearch },
    template: '<nav-search />',
  }
}

export function DLC() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { NavSearch },
    template: '<nav-search bottom-text=\'\' :bottom-link=\'null\' />',
  }
}

export function DLCWithDropdown() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        dropdownOptions: [
          { label: 'All Content', value: 'all-content' },
          {
            label: 'Digital Collections',
            value: 'digital-collections',
          },
          { label: 'Archives', value: 'archives' },
          { label: 'Research Guides', value: 'research-guides' },
          { label: 'Databases', value: 'databases' },
        ],
        placeholder: 'Search Digital Library Collections',
      }
    },
    components: { NavSearch },
    template: `
            <nav-search 
                :placeholder="placeholder"
                :dropdown-options="dropdownOptions"
                bottom-text=""
                :bottom-link="null"
            />
        `,
  }
}

export function DLCWithDivider() {
  return {
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { NavSearch },
    template:
            '<nav-search :show-divider="true" bottom-text="" :bottom-link="null" />',
  }
}

export function DLCWithDividerAndDropdown() {
  return {
    data() {
      return {
        dropdownOptions: [
          { label: 'All Collections', value: 'all-collections' },
          { label: 'Books & Articles', value: 'books-articles' },
          {
            label: 'Digital Collections',
            value: 'digital-collections',
          },
          {
            label: 'Archives & Manuscripts',
            value: 'archives-manuscripts',
          },
          { label: 'Images & Media', value: 'images-media' },
          { label: 'Databases', value: 'databases' },
        ],
        dropdownDefaultValue: 'all-collections',
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { NavSearch },
    template: `
            <nav-search 
                :show-divider="true" 
                :dropdown-options="dropdownOptions" 
                :dropdown-default-value="dropdownDefaultValue"
                bottom-text=""
                :bottom-link="null"
            />
        `,
  }
}

export function DLCWithBackgroundImage() {
  return {
    data() {
      return {
        backgroundImage: API.image,
        bottomText: '',
        bottomLink: {
          label: `Poster celebrating the 100 years of the legal abolition of three centuries of slavery in Brazil (1888-1988)
                    Collections: Soweto Black Organization, Modern Endangered Archives Program`,
          to: 'https://library.ucla.edu',
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { NavSearch },
    template: `
            <nav-search 
                :show-divider="true" 
                :background-image="backgroundImage"
                :bottom-text="bottomText"
                :bottom-link="bottomLink"
            />
        `,
  }
}

export function DLCWithBackgroundImageAndDropdown() {
  return {
    data() {
      return {
        dropdownOptions: [
          { label: 'All Collections', value: 'all-collections' },
          { label: 'Books & Articles', value: 'books-articles' },
          {
            label: 'Digital Collections',
            value: 'digital-collections',
          },
          {
            label: 'Archives & Manuscripts',
            value: 'archives-manuscripts',
          },
          { label: 'Images & Media', value: 'images-media' },
          { label: 'Databases', value: 'databases' },
        ],
        dropdownDefaultValue: 'all-collections',
        backgroundImage: API.image,
        bottomText: '',
        bottomLink: {
          label: `Poster celebrating the 100 years of the legal abolition of three centuries of slavery in Brazil (1888-1988)
                    Collections: Soweto Black Organization, Modern Endangered Archives Program`,
          to: 'https://library.ucla.edu',
        },
      }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    components: { NavSearch },
    template: `
            <nav-search 
                :show-divider="true" 
                :dropdown-options="dropdownOptions" 
                :dropdown-default-value="dropdownDefaultValue"
                :background-image="backgroundImage"
                :bottom-text="bottomText"
                :bottom-link="bottomLink"
            />
        `,
  }
}
