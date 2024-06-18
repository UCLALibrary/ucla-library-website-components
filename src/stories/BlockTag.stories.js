import BlockTag from '@/lib-components/BlockTag'
import { computed } from 'vue'

export default {
  title: 'BLOCK / Tag',
  component: BlockTag
}

// MOCKS
// default library site
const defaultmock = {
  label: 'label text',
}
// ftva site
const ftvamock = {
  label: 'ftva label text',
  iconName: 'SvgIconList',
}

export function Default() {
  return {
    data() {
      return {
        ...defaultmock,
      }
    },
    provide() {
      return {
        theme: computed(() => ''),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
    />
  `,
  }
}

export function PrimaryFTVA() {
  return {
    data() {
      return {
        ...ftvamock
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        :iconName="iconName"
    />
  `,
  }
}

export function SecondaryFTVA() {
  return {
    data() {
      return {
        ...ftvamock
      }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockTag },
    template: `
    <block-tag
        :label="label"
        :iconName="iconName"
    />
  `,
  }
}
