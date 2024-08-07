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
  label: 'ghost tag',
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

export function SecondaryFTVANoIcon() {
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
        isSecondary="true"
    />
  `,
  }
}

// TODO
// export function SecondaryFTVASelected() {
//   return {
//     data() {
//       return {
//         ...ftvamockwLinkLabel
//       }
//     },
//     provide() {
//       return {
//         theme: computed(() => 'ftva'),
//       }
//     },
//     components: { BlockTag },
//     template: `
//     <block-tag
//         :label="label"
//         isSecondary="true"
//     />
//   `,
//   }
// }
