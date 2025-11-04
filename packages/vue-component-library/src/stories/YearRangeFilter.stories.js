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
      // reactively read the router query
      const currentQuery = computed(() => router.currentRoute.value.query)

      // make a canonical querystring to display (sorted for stability)
      const queryString = computed(() => {
        const params = new URLSearchParams()
        // sort keys for consistent output
        const entries = Object.entries(currentQuery.value).sort(([a], [b]) => a.localeCompare(b))
        for (const [key, val] of entries) {
          if (Array.isArray(val))
            for (const v of val) params.append(key, String(v))
          else if (val != null)
            params.set(key, String(val))
        }
        const s = params.toString()
        return s ? `?${s}` : ''
      })

      return { args, currentQuery, queryString }
    },
    template: `
    <div style="width: 280px;">
      <YearRangeFilter v-bind="args" />
      <!-- Debug panel that updates the moment the Limit button pushes to router -->
      <div style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; border: 1px solid #eee; border-radius: 8px; padding: 8px; margin-top: 1rem;">
        <div style="margin-bottom: 6px;"><strong>Router querystring</strong></div>
        <div style="padding: 6px 8px; background: #fafafa; border-radius: 6px; overflow:auto;">
          {{ queryString }}
        </div>

        <div style="margin: 8px 0 6px;"><strong>Router query (JSON)</strong></div>
        <pre style="margin: 0; white-space: pre-wrap;">{{ currentQuery }}</pre>
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
