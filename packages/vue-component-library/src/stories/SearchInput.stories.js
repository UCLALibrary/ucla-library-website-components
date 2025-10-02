import { computed, ref } from 'vue'
import SearchInput from '@/lib-components/SearchInput'

export default {
  title: 'Funkhaus / Search Input',
  component: SearchInput,
}

// Variations of stories below
export function Default() {
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

export function WithoutClearIcon() {
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

export function WithoutClearOnEsc() {
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

export function WithValue() {
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

export function Disabled() {
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

export function WithoutBlurOnEsc() {
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

export function WithoutSelectOnFocus() {
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

export function WithCustomShortcutKey() {
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

export function DLCTheme() {
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

export function FTVATheme() {
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
