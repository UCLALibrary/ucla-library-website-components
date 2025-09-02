import { computed } from 'vue'
import SearchField from '@/lib-components/SearchField'

export default {
  title: 'Funkhaus / Search Field',
  component: SearchField,
}

const template = `
<div>
    <search-field
        v-bind="props"
        @submit="handleSubmit" 
    />
 
    <i>This string is not part of the component, but is used to demonstrate the functionality of the <strong>SearchField</strong> component.</i>
    <br>You submitted: {{ searchValue }}
</div>
`

const methods = {
  handleSubmit(value) {
    this.searchValue = value
  },
}

// Variations of stories below
export function Default() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: { placeholder: 'Search Library' },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithoutClearIcon() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: { placeholder: 'Search Archives', clearIcon: false },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithoutClearOnEsc() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: { placeholder: 'Search Catalog', clearOnEsc: false },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithValue() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: {
          placeholder: 'Search Collections',
          initialValue: 'Initial search text',
        },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function Disabled() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: { placeholder: 'Search (disabled)', disabled: true },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithoutBlurOnEsc() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: {
          placeholder: 'Search with focus retained on Esc',
          blurOnEsc: false,
        },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithoutSelectOnFocus() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: {
          placeholder: 'Search without auto-select on focus',
          selectOnFocus: false,
        },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}

export function WithCustomShortcutKey() {
  return {
    components: { SearchField },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    data() {
      return {
        props: { placeholder: 'Press \'f\' to focus', shortcutKey: 'f' },
        searchValue: '',
      }
    },
    methods,
    template,
  }
}
