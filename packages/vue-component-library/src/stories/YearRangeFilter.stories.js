import { computed } from 'vue'
import YearRangeFilter from '../lib-components/YearRangeFilter.vue'

export default {
  title: 'Funkhaus / YearRangeFilter',
  component: YearRangeFilter,
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum value for the range',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value for the range',
    },
    minValue: {
      control: { type: 'number' },
      description: 'Current minimum value',
    },
    maxValue: {
      control: { type: 'number' },
      description: 'Current maximum value',
    },
    step: {
      control: { type: 'number' },
      description: 'Step size for the range',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the component is disabled',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A range selector component with dual input fields and a range slider. Perfect for filtering or selecting numeric ranges.',
      },
    },
  },
}

function Template(args) {
  return {
    components: { YearRangeFilter },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      return { args }
    },
    template: `
    <div style="width: 280px;">
      <YearRangeFilter v-bind="args" @change="onChange" />
    </div>
  `,
    methods: {
      onChange(value) {
        console.log('Range changed:', value)
      },
    },
  }
}

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 100,
  minValue: 20,
  maxValue: 80,
  step: 1,
  disabled: false,
}

export const YearRange = Template.bind({})
YearRange.args = {
  min: 1900,
  max: 2024,
  minValue: 1950,
  maxValue: 2000,
  step: 1,
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  min: 0,
  max: 100,
  minValue: 30,
  maxValue: 70,
  step: 1,
  disabled: true,
}

export const SmallRange = Template.bind({})
SmallRange.args = {
  min: 1,
  max: 10,
  minValue: 3,
  maxValue: 7,
  step: 0.5,
  disabled: false,
}
