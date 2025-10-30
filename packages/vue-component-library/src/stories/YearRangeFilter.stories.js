import { computed } from 'vue'
import YearRangeFilter from '../lib-components/YearRangeFilter.vue'
import router from '@/router'

export default {
  title: 'Funkhaus / YearRangeFilter',
  component: YearRangeFilter,
  argTypes: {
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
    minParam: {
      control: { type: 'text' },
      description: 'Query parameter name for minimum value (default: year_gte)',
    },
    maxParam: {
      control: { type: 'text' },
      description: 'Query parameter name for maximum value (default: year_lte)',
    },
    clearPagination: {
      control: { type: 'boolean' },
      description: 'Whether to clear pagination (page) parameter when filters change',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A range selector component with dual input fields and a range slider.',
      },
    },
  },
}

function Template(args) {
  router.push({ query: { page: '2' } })
  return {
    components: { YearRangeFilter },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    setup() {
      // Mock router for Storybook demonstration
      return { args }
    },
    template: `
    <div style="width: 280px;">
      <YearRangeFilter v-bind="args" />
      <div style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
        <h4 style="margin: 0 0 10px 0;">Mock Query Parameters:</h4>
        <pre style="margin: 0; font-size: 12px;">{{ JSON.stringify(mockQuery, null, 2) }}</pre>
        <p style="margin: 10px 0 0 0; font-size: 12px; color: #666;">
          Click "Limit" to see how the component would update these parameters.
        </p>
      </div>
    </div>
  `,
  }
}

export const Default = Template.bind({})
Default.args = {
  minValue: 20,
  maxValue: 80,
  step: 1,
  disabled: false,
}

export const YearRange = Template.bind({})
YearRange.args = {
  minValue: 1950,
  maxValue: 2000,
  step: 1,
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  minValue: 30,
  maxValue: 70,
  step: 1,
  disabled: true,
}

export const RouterIntegration = Template.bind({})
RouterIntegration.args = {
  minValue: 1900,
  maxValue: 2024,
  step: 1,
  disabled: false,
  minParam: 'year_gte',
  maxParam: 'year_lte',
  clearPagination: true,
}
RouterIntegration.parameters = {
  docs: {
    description: {
      story: 'Demonstrates router integration with custom parameter names and pagination clearing.',
    },
  },
}

export const CustomParameters = Template.bind({})
CustomParameters.args = {
  minValue: 1900,
  maxValue: 2024,
  step: 1,
  disabled: false,
  minParam: 'year_gte',
  maxParam: 'year_lte',
  clearPagination: false,
}
CustomParameters.parameters = {
  docs: {
    description: {
      story: 'Example with custom parameter names and pagination preservation enabled.',
    },
  },
}
