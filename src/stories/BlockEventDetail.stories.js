import BlockEventDetail from "@/lib-components/BlockEventDetail.vue";

// Storybook default settings
export default {
  title: 'BLOCK / Event Detail',
  component: BlockEventDetail
}

const mockEventDetailData = {
      id: "2847944",
      typeHandle: "ftvaEvent",
      title: "La Région Centrale 03-08-24",
      startDateWithTime: "2024-03-09T03:30:00+00:00",
      location: [
        {
          id: "195746",
          title: "Billy Wilder Theater",
          url: "https://test-craft.library.ucla.edu/locations/billy-wilder-theater",
          uri: "locations/billy-wilder-theater"
        },
        {
          id: "770077",
          title: "Music Library",
          url: "https://test-craft.library.ucla.edu/locations/music-library",
          uri: "locations/music-library"
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
      startDate="2024-03-09T03:30:00+00:00"
      time="2024-03-09T03:30:00+00:00"
      :locations="data.location"
    />
    `,
  }
}

export function FTVA() {
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
      startDate="2024-03-09T03:30:00+00:00"
      time="2024-03-09T03:30:00+00:00"
      :locations="data.location"
    />
    `,
  }
}