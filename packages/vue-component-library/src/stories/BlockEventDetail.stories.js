import { computed } from 'vue'
import BlockEventDetail from '@/lib-components/BlockEventDetail.vue'

// THIS COMPONENT IS NOT USED AS DEFAULT RIGHT NOW

// Storybook default settings
export default {
  title: 'BLOCK / Event Detail',
  component: BlockEventDetail
}

const mockEventDetailData = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  location: [
    {
      id: '195746',
      title: 'LA Opera',
      url: 'https://www.laopera.org',
    },
    {
      id: '195746',
      title: 'Pasadena Symphony',
      url: 'https://pasadenasymphony-pops.org',
    }
  ]
}

const mockFtvaEventDetailData = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  location: [
    {
      title: 'Billy Wilder Theater',
      publicUrl: 'https://cinema.ucla.edu/billy-wilder-theater',
    },
    {
      title: 'Vidiots',
      publicUrl: 'https://vidiotsfoundation.org/',
    }
  ]
}

const mockEventSeriesData = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  endDate: '2024-03-09',
  ongoing: false, // true is also valid for event series
  location: [
    {
      id: '195746',
      title: 'Billy Wilder Theater',
      publicUrl: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater'
    },
    {
      id: '195746',
      title: 'Other Location',
      publicUrl: 'https://test-craft.library.ucla.edu/locations/other-locations'
    }
  ]
}

const mockFtvaSeriesDetailDataRange = {
  id: '2847944',
  typeHandle: 'eventSeries',
  title: 'The Films of Michael Snow',
  startDate: '2027-03-06T00:00',
  endDate: '2027-09-17T00:00',
  ongoing: false,
  location: [
    {
      title: 'Billy Wilder Theater',
      publicUrl: 'https://www.cinema.ucla.edu/billy-wilder-theater',
    }
  ]
}

// STORIES
const DefaultTemplate = (args) => {
  return {
    data() {
      return {
        data: mockEventDetailData,
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :time="data.startDateWithTime"
      :locations="[data.location[0]]"
    />
    `,
  }
}

export const Default = DefaultTemplate.bind({})
Default.args = {}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}

const MoreThanOneLocationTemplate = (args) => {
  return {
    data() {
      return {
        data: mockEventDetailData,
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :time="data.startDateWithTime"
      :locations="data.location"
    />
    `,
  }
}

export const MoreThanOneLocation = MoreThanOneLocationTemplate.bind({})
MoreThanOneLocation.args = {}

const FtvaOneLocationTemplate = (args) => {
  return {
    data() {
      return {
        data: mockFtvaEventDetailData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :time="data.startDateWithTime"
      :locations="[data.location[0]]"
    />
    `,
  }
}

export const FtvaOneLocation = FtvaOneLocationTemplate.bind({})
FtvaOneLocation.args = {}

const FtvaMultipleLocationsTemplate = (args) => {
  return {
    data() {
      return {
        data: mockFtvaEventDetailData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :time="data.startDateWithTime"
      :locations="data.location"
    />
    `,
  }
}

export const FtvaMultipleLocations = FtvaMultipleLocationsTemplate.bind({})
FtvaMultipleLocations.args = {}

const FtvaNoLocationTemplate = (args) => {
  return {
    data() {
      return {
        data: mockFtvaEventDetailData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :time="data.startDateWithTime"
      :locations=[]
    />
    `,
  }
}

export const FtvaNoLocation = FtvaNoLocationTemplate.bind({})
FtvaNoLocation.args = {}

const FtvaDateRangeTemplate = (args) => {
  return {
    data() {
      return {
        data: mockFtvaSeriesDetailDataRange,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockEventDetail },
    template: `
      <BlockEventDetail
        :start-date="data.startDate"
        :end-date="data.endDate"
        :ongoing="data.ongoing"
        :locations="data.location"
      />
    `,
  }
}

export const FtvaDateRange = FtvaDateRangeTemplate.bind({})
FtvaDateRange.args = {}

const FtvaOngoingTemplate = (args) => {
  return {
    data() {
      return {
        data: mockFtvaEventDetailData,
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockEventDetail },
    template: `
    <block-event-detail
      :startDate="data.startDateWithTime"
      :endDate="data.endDate"
      :ongoing="true"
      :locations="[data.location[0]]"
    />
    `,
  }
}

export const FtvaOngoing = FtvaOngoingTemplate.bind({})
FtvaOngoing.args = {}
