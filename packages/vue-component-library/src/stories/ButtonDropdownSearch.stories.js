import { computed, ref } from 'vue'
import ButtonDropdownSearch from '@/lib-components/ButtonDropdownSearch.vue'

export default {
  title: 'Funkhaus / ButtonDropdownSearch',
  component: ButtonDropdownSearch,
  argTypes: {
    modelValue: { control: 'text' },
    options: { control: 'array' },
  },
}

function Template(args) {
  return {
    components: { ButtonDropdownSearch },
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
    <ButtonDropdownSearch
      v-bind="args"
      v-model="selected"
    />
    <div style="margin-top: 1em;">Selected: {{ selected }}</div>
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  options: ['All Fields', 'Title', 'Subject'],
  modelValue: 'All Fields',
}

export const ManyOptions = Template.bind({})
ManyOptions.args = {
  options: [
    'All Fields',
    'Title',
    'Subject',
    'Author',
    'ISBN',
    'Publisher',
    'Year',
    'Language',
    'Format',
  ],
  modelValue: 'All Fields',
}

export const SubjectDefault = Template.bind({})
SubjectDefault.args = {
  options: ['All Fields', 'Title', 'Subject'],
  modelValue: 'Subject',
}
