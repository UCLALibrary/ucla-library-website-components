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
      title: 'Billy Wilder Theater',
      url: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
      uri: 'locations/billy-wilder-theater'
    },
    {
      id: '195746',
      title: 'Other Location',
      url: 'https://test-craft.library.ucla.edu/locations/other-locations',
      uri: 'locations/somelocation'
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
      url: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
      uri: 'locations/billy-wilder-theater'
    },
    {
      id: '195746',
      title: 'Other Location',
      url: 'https://test-craft.library.ucla.edu/locations/other-locations',
      uri: 'locations/somelocation'
    }
  ]
}

export function Default() {
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

export function FTVAMultipleLocations() {
  return {
    data() {
      return {
        data: mockEventDetailData,
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

export function FTVAOneLocation() {
  return {
    data() {
      return {
        data: mockEventDetailData,
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

export function FtvaNoLocation() {
  return {
    data() {
      return {
        data: mockEventDetailData,
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

export function EventSeries() {
  return {
    data() {
      return {
        data: mockEventSeriesData,
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
      :ongoing="data.ongoing"
      :locations="data.location"
    />
    `,
  }
}

export function EventSeriesOngoing() {
  return {
    data() {
      return {
        data: mockEventSeriesData,
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
