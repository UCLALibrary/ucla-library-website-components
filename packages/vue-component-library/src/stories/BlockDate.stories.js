import BlockDate from '@/lib-components/BlockDate'

// Storybook default settings
export default {
  title: 'BLOCK / Date',
  components: BlockDate,
}

const DefaultTemplate = (args) => {
  return {
    components: { BlockDate },
    template: '<block-date date="10" day="Digniss" />',
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const BigDateTemplate = (args) => {
  return {
    components: { BlockDate },
    template: '<block-date date="30" day="Sodales" />',
  }
}

export const BigDate = BigDateTemplate.bind({})
BigDate.args = {}

const LongDayNameTemplate = (args) => {
  return {
    components: { BlockDate },
    template: '<block-date date="30" day="Suspendise" />',
  }
}

export const LongDayName = LongDayNameTemplate.bind({})
LongDayName.args = {}
