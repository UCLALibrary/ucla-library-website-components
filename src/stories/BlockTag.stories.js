import { computed } from 'vue'
import BlockTag from '@/lib-components/BlockTag'

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
  iconName: 'SvgIconGuest',
}

// ftva site
const ftvamockwLinkLabel = {
  label: '<a href="/">label with html link tags</a>',
  iconName: 'SvgIconGuest',
}

export function Default() {
  return {
    data() {
      return {
        ...defaultmock,
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
        isSecondary="true"
    />
  `,
  }
}

export function HTMLLinkFTVA() {
  return {
    data() {
      return {
        ...ftvamockwLinkLabel
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
        isSecondary="true"
    />
  `,
  }
}
