import { computed, ref } from 'vue'
import SearchInput from '@/lib-components/SearchInput'

export default {
  title: 'Funkhaus / Search Input',
  component: SearchInput,
}

// Variations of stories below
const DefaultTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search Library',
      }
    },

    template: '<search-input v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const WithoutClearIconTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search Archives',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' :clear-icon=\'false\' />',
  }
}

export const WithoutClearIcon = WithoutClearIconTemplate.bind({})
WithoutClearIcon.args = {}


const WithoutClearOnEscTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search Catalog',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' :clear-on-esc=\'false\' />',
  }
}

export const WithoutClearOnEsc = WithoutClearOnEscTemplate.bind({})
WithoutClearOnEsc.args = {}


const WithValueTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('Initial search text')

      return {
        value,
        placeholder: 'Search Collections',
      }
    },

    template: '<search-input v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export const WithValue = WithValueTemplate.bind({})
WithValue.args = {}


const DisabledTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search (disabled)',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' disabled />',
  }
}

export const Disabled = DisabledTemplate.bind({})
Disabled.args = {}


const WithoutBlurOnEscTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search with focus retained on Esc',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' :blur-on-esc=\'false\' />',
  }
}

export const WithoutBlurOnEsc = WithoutBlurOnEscTemplate.bind({})
WithoutBlurOnEsc.args = {}


const WithoutSelectOnFocusTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search without auto-select on focus',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' :select-on-focus=\'false\' />',
  }
}

export const WithoutSelectOnFocus = WithoutSelectOnFocusTemplate.bind({})
WithoutSelectOnFocus.args = {}


const WithCustomShortcutKeyTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Press \'s\' to focus',
      }
    },

    template:
            '<search-input v-model=\'value\' :placeholder=\'placeholder\' shortcut-key=\'s\' />',
  }
}

export const WithCustomShortcutKey = WithCustomShortcutKeyTemplate.bind({})
WithCustomShortcutKey.args = {}


const DLCThemeTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search Library',
      }
    },

    template: '<search-input v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export const DLCTheme = DLCThemeTemplate.bind({})
DLCTheme.args = {}


const FTVAThemeTemplate = (args) => {
  void args
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    data() {
      const value = ref('')

      return {
        value,
        placeholder: 'Search Library',
      }
    },

    template: '<search-input v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export const FTVATheme = FTVAThemeTemplate.bind({})
FTVATheme.args = {}

