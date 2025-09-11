import { computed, ref } from 'vue'
import EntryField from '@/lib-components/EntryField'

export default {
  title: 'Funkhaus / Entry Field',
  component: EntryField,
}

// Variations of stories below
export function Default() {
  return {
    components: { EntryField },
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

    template: '<entry-field v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export function WithoutClearIcon() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' :clear-icon=\'false\' />',
  }
}

export function WithoutClearOnEsc() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' :clear-on-esc=\'false\' />',
  }
}

export function WithValue() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      const value = ref('Initial search text')

      return {
        value,
        placeholder: 'Search Collections',
      }
    },

    template: '<entry-field v-model=\'value\' :placeholder=\'placeholder\' />',
  }
}

export function Disabled() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' disabled />',
  }
}

export function WithoutBlurOnEsc() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' :blur-on-esc=\'false\' />',
  }
}

export function WithoutSelectOnFocus() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' :select-on-focus=\'false\' />',
  }
}

export function WithCustomShortcutKey() {
  return {
    components: { EntryField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
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
            '<entry-field v-model=\'value\' :placeholder=\'placeholder\' shortcut-key=\'s\' />',
  }
}
