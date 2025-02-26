import BlockDate from '@/lib-components/BlockDate'

// Storybook default settings
export default {
  title: 'BLOCK / Date',
  components: BlockDate,
}

export function Default() {
  return {
    components: { BlockDate },
    template: '<block-date date="10" day="Digniss" />',
  }
}

export function BigDate() {
  return {
    components: { BlockDate },
    template: '<block-date date="30" day="Sodales" />',
  }
}

export function LongDayName() {
  return {
    components: { BlockDate },
    template: '<block-date date="30" day="Suspendise" />',
  }
}
