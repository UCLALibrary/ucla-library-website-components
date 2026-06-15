import BlockHours from '@/lib-components/BlockHours'

export default {
  title: 'BLOCK / Hours',
  component: BlockHours,
}

const DefaultTemplate = (args) => {
  void args
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

export const Default = DefaultTemplate.bind({})
Default.args = {}


Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const NoInternalLocationsTemplate = (args) => {
  void args
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

export const NoInternalLocations = NoInternalLocationsTemplate.bind({})
NoInternalLocations.args = {}


const MoreInternalLocationsTemplate = (args) => {
  void args
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

export const MoreInternalLocations = MoreInternalLocationsTemplate.bind({})
MoreInternalLocations.args = {}


const WithZeroLidTemplate = (args) => {
  void args
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

export const WithZeroLid = WithZeroLidTemplate.bind({})
WithZeroLid.args = {}

