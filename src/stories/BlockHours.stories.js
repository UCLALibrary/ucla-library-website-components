import BlockHours from '@/lib-components/BlockHours'

export default {
  title: 'BLOCK / Hours',
  component: BlockHours,
}

export function Default() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="4690"/>
    `,
  }
}

export function NoInternalLocations() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="4693"/>
    `,
  }
}

export function MoreInternalLocations() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="2081"/>
    `,
  }
}

export function Powell() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="2572"/>
    `,
  }
}

export function SEL() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours lid="4702"/>
    `,
  }
}

export function WithZeroLid() {
  return {
    data() {
      return {}
    },
    components: { BlockHours },
    template: `
        <block-hours
            lid="0"
            :is-clicc="true"
        />
    `,
  }
}
