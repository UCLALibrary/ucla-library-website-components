import { computed, ref } from 'vue'
import DropdownSingleSelectFunkhaus from '@/lib-components/DropdownSingleSelectFunkhaus.vue'

export default {
  title: 'Funkhaus / DropdownSingleSelectFunkhaus',
  component: DropdownSingleSelectFunkhaus,
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'array' },
  },
}

function Template(args) {
  return {
    components: { DropdownSingleSelectFunkhaus },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template: `
    <DropdownSingleSelectFunkhaus
      v-bind="args"
      v-model="selected"
    />
    <div style="margin-top: 1em;">Selected: {{ selected }}</div>
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  options: ['Apple', 'Banana', 'Cherry'],
  modelValue: 'Banana',
}

// Story without a theme provided
function TemplateNoTheme(args) {
  return {
    components: { DropdownSingleSelectFunkhaus },
    setup() {
      const selected = ref(args.modelValue)
      return { args, selected }
    },
    template: `
      <DropdownSingleSelectFunkhaus
        v-bind="args"
        v-model="selected"
      />
      <div style="margin-top: 1em;">Selected: {{ selected }}</div>
    `,
  }
}

export const NoTheme = TemplateNoTheme.bind({})
NoTheme.args = {
  options: ['Dog', 'Cat', 'Bird'],
  modelValue: 'Cat',
}

export const EmptyOptions = Template.bind({})
EmptyOptions.args = {
  options: [],
  modelValue: '',
}

export const SingleOption = Template.bind({})
SingleOption.args = {
  options: ['Only Option'],
  modelValue: 'Only Option',
}

export const LongOptions = Template.bind({})
LongOptions.args = {
  options: [
    'Short',
    'A much longer option that should wrap or truncate',
    'Another option',
    'Yet another option with a really, really, really long label',
  ],
  modelValue: 'Short',
}
