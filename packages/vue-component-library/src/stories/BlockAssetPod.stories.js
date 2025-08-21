// Import mock api data
import { computed } from 'vue'
import * as API from '@/stories/mock-api.json'
import BlockAssetPod from '@/lib-components/BlockAssetPod.vue'

export default {
  title: 'Funkhaus / Block Asset Pod',
  component: BlockAssetPod,
}

const mock = {
  media: API.image,
  to: 'https://www.google.com',
  title: '1/2 length portrait of comedian Danny Thomas with pills he takes for his voice, 1963',
  metadata: [
    {
      key: 'Description',
      value: 'PAIN PILLS-These pills Danny Thomas takes for his voice cause pain in one place, his purse.',
    },
    {
      key: 'Date',
      value: 'November 1, 1963',
    },
    {
      key: 'Resource type',
      value: 'Still Image',
    },
    {
      key: 'Collection',
      value: 'Los Angeles Times Photographic Collection OpenUCLA Collections',
      to: 'https://www.facebook.com',
    },
  ],
}

const template = `
    <block-asset-pod
        v-bind="props"
    />
`

export const Default = {
  render: () => ({
    data() {
      return {
        props: {
          ...mock,
        },
      }
    },
    components: { BlockAssetPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template,
  }),
}

export const WithoutDate = {
  render: () => ({
    data() {
      return {
        props: {
          ...mock,
          metadata: mock.metadata.filter(
            item => item.key !== 'Date'
          ),
        },
      }
    },
    components: { BlockAssetPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template,
  }),
}

export const WithoutTitle = {
  render: () => ({
    data() {
      return {
        props: {
          ...mock,
          title: '',
        },
      }
    },
    components: { BlockAssetPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template,
  }),
}

export const WithoutImage = {
  render: () => ({
    data() {
      return {
        props: {
          ...mock,
          media: null,
        },
      }
    },
    components: { BlockAssetPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template,
  }),
}

export const WithoutMeta = {
  render: () => ({
    data() {
      return {
        props: {
          media: API.image,
          to: 'https://www.google.com',
        },
      }
    },
    components: { BlockAssetPod },
    provide() {
      return {
        theme: computed(() => 'dlc'),
      }
    },
    template,
  }),
}
