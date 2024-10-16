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
      campusMapId: null,
      publicUrl: "https://www.cinema.ucla.edu/billy-wilder-theater",
      address: [
        {
          addressLine1: "1234 This Way",
          addressLine2: null,
          addressCity: "LA",
          addressState: "CA",
          addressZipCode: "90210",
          addressCountry: null
        }
      ]
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

export function MultipleLocations() {
  return {
    data() {
      return {
        data: mockFtvaEventDetailData,
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

export function FtvaOneLocation() {
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
