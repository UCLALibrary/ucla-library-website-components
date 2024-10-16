import { computed } from 'vue'
import BlockEventDetail from '@/lib-components/BlockEventDetail.vue'

// THIS COMPONENT IS NOT USED AS DEFAULT RIGHT NOW

// Storybook default settings
export default {
  title: 'BLOCK / Event Detail',
  component: BlockEventDetail
}

const mockEventDetailDataSingle = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  location: [
    {
      id: '195746',
      title: 'Billy Wilder Theater',
      publicUrl: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
    }
  ]
}

const mockEventDetailDataMultiple = {
  id: '2847944',
  typeHandle: 'ftvaEvent',
  title: 'La Région Centrale 03-08-24',
  startDateWithTime: '2024-03-09T03:30:00+00:00',
  location: [
    {
      id: '195746',
      title: 'Billy Wilder Theater',
      publicUrl: 'https://test-craft.library.ucla.edu/locations/billy-wilder-theater',
    },
    {
      id: '195746',
      title: 'Other Location',
      publicUrl: 'https://test-craft.library.ucla.edu/locations/other-locations',
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

const mockFtvaSeriesDetailData = {
  id: '2847944',
  typeHandle: 'eventSeries',
  title: 'The Films of Michael Snow',
  startDate: "2027-03-06T00:00",
  endDate: "2027-09-17T00:00",
  ongoing: false,
  location: [
    {
      title: "Billy Wilder Theater",
      publicUrl: "https://www.cinema.ucla.edu/billy-wilder-theater",
    }
  ]
}

export function Default() {
  return {
    data() {
      return {
        data: mockEventDetailDataSingle,
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

export function MoreThanOneLocation() {
  return {
    data() {
      return {
        data: mockEventDetailDataMultiple,
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

export function FtvaOneLocation() {
  return {
    data() {
      return {
        data: mockEventDetailDataSingle,
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

export function FtvaMultipleLocations() {
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

export function FtvaNoLocation() {
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

export function FtvaDateRange() {
  return {
    data() {
      return {
        data: mockFtvaSeriesDetailData,
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

export function FtvaOngoing() {
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
