import BlockInfo from '@/lib-components/BlockInfo'

// Storybook default settings
export default {
  title: 'BLOCK / Info',
  components: BlockInfo,
}

const mockBlockInfo = {
  ftvaTicketInformation: [
    {
      title: 'Admission is free',
    },
    {
      title: 'Seats are assigned on a first come, first served basis',
    },
    {
      title: 'The box office opens one hour before the event',
    },
  ],
}

export function Default() {
  return {
    data() {
      return { ...mockBlockInfo }
    },
    components: { BlockInfo },
    template:
            '<block-info :ftvaTicketInformation=\'ftvaTicketInformation\'/>',
  }
}
