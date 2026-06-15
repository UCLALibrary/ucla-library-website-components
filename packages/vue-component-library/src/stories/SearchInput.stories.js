import { computed, ref, watch } from 'vue'
import { STORY_THEME_OPTIONS, normalizeStoryTheme } from './helpers/themeControls'
import SearchInput from '@/lib-components/SearchInput'

export default {
  title: 'Funkhaus / Search Input',
  component: SearchInput,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: STORY_THEME_OPTIONS,
    },
    placeholder: { control: 'text' },
    modelValue: { control: 'text' },
    clearIcon: { control: 'boolean' },
    clearOnEsc: { control: 'boolean' },
    blurOnEsc: { control: 'boolean' },
    selectOnFocus: { control: 'boolean' },
    shortcutKey: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

function Template(args) {
  return {
    components: { SearchInput },
    provide() {
      return {
        theme: computed(() => normalizeStoryTheme(args.theme)),
      }
    },
    setup() {
      const value = ref(args.modelValue || '')
      watch(
        () => args.modelValue,
        (newValue) => {
          value.value = newValue || ''
        }
      )
      return { args, value }
    },
    template: `
      <search-input
        v-model="value"
        :placeholder="args.placeholder"
        :clear-icon="args.clearIcon"
        :clear-on-esc="args.clearOnEsc"
        :blur-on-esc="args.blurOnEsc"
        :select-on-focus="args.selectOnFocus"
        :shortcut-key="args.shortcutKey"
        :disabled="args.disabled"
      />
    `,
  }
}

// Variations of stories below
export const Default = Template.bind({})
Default.args = {
  theme: 'default',
  placeholder: 'Search Library',
  modelValue: '',
  clearIcon: true,
  clearOnEsc: true,
  blurOnEsc: true,
  selectOnFocus: true,
  shortcutKey: '/',
  disabled: false,
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

export const WithoutClearIcon = Template.bind({})
WithoutClearIcon.args = {
  ...Default.args,
  placeholder: 'Search Archives',
  clearIcon: false,
}

export const WithoutClearOnEsc = Template.bind({})
WithoutClearOnEsc.args = {
  ...Default.args,
  placeholder: 'Search Catalog',
  clearOnEsc: false,
}

export const WithValue = Template.bind({})
WithValue.args = {
  ...Default.args,
  placeholder: 'Search Collections',
  modelValue: 'Initial search text',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  placeholder: 'Search (disabled)',
  disabled: true,
}

export const WithoutBlurOnEsc = Template.bind({})
WithoutBlurOnEsc.args = {
  ...Default.args,
  placeholder: 'Search with focus retained on Esc',
  blurOnEsc: false,
}

export const WithoutSelectOnFocus = Template.bind({})
WithoutSelectOnFocus.args = {
  ...Default.args,
  placeholder: 'Search without auto-select on focus',
  selectOnFocus: false,
}

export const WithCustomShortcutKey = Template.bind({})
WithCustomShortcutKey.args = {
  ...Default.args,
  placeholder: 'Press \'s\' to focus',
  shortcutKey: 's',
}

export const DLCTheme = Template.bind({})
DLCTheme.args = {
  ...Default.args,
  theme: 'dlc',
}

export const FTVATheme = Template.bind({})
FTVATheme.args = {
  ...Default.args,
  theme: 'ftva',
}
