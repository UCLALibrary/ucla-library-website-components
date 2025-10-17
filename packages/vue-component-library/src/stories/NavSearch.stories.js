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
          'All Content',
          'Digital Collections',
          'Archives',
          'Research Guides',
          'Databases',
        ],
        dropdownValue: 'All Content',
        placeholder: 'Search Digital Library Collections',
      }
    },
    components: { NavSearch },
    template: `
            <nav-search 
                :placeholder="placeholder"
                :dropdown-options="dropdownOptions"
                v-model:dropdown-model-value="dropdownValue"
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
          'All Collections',
          'Books & Articles',
          'Digital Collections',
          'Archives & Manuscripts',
          'Images & Media',
          'Databases',
        ],
        dropdownValue: 'All Collections',
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
                v-model:dropdown-model-value="dropdownValue"
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
          'All Collections',
          'Books & Articles',
          'Digital Collections',
          'Archives & Manuscripts',
          'Images & Media',
          'Databases',
        ],
        dropdownValue: 'All Collections',
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
                v-model:dropdown-model-value="dropdownValue" 
                :background-image="backgroundImage"
                :bottom-text="bottomText"
                :bottom-link="bottomLink"
            />
        `,
  }
}
